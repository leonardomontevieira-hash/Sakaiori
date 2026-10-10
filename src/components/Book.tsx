import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book as BookType } from '../types';
import { 
  BookOpen, Users, Sparkles, Flame, Compass, ChevronLeft, ChevronRight, 
  X, Bookmark, BookmarkCheck, CornerDownRight, Copy, Check, CheckSquare, 
  Square, ListChecks, ChevronDown, CheckCheck, Search 
} from 'lucide-react';

interface BookProps {
  book: BookType;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  initialChapterIndex?: number;
  highlightQuery?: string;
}

export interface BookPage {
  pageNumber: number; // 1-indexed overall
  chapterIndex: number;
  chapterTitle: string;
  isChapterStart: boolean;
  paragraphs: string[];
}

interface BookmarkData {
  bookId: string;
  pageIndex: number;
  pageNumber: number;
  chapterIndex: number;
  chapterTitle: string;
  savedAt: string;
}

// Estimates how many visual lines a complete paragraph consumes in the book column
function estimateParagraphLines(paragraph: string, isMobile: boolean): number {
  const rawLines = paragraph.split('\n');
  let lines = 0;
  const charsPerLine = isMobile ? 52 : 74;
  for (const line of rawLines) {
    lines += Math.max(1, Math.ceil(line.length / charsPerLine));
  }
  // Margin between paragraphs is equivalent to ~0.45 line height
  return lines + 0.45;
}

// Helper to render matching cover icon
const renderCoverIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};

export const Book: React.FC<BookProps> = ({ 
  book, 
  isOpen, 
  onOpen, 
  onClose, 
  initialChapterIndex = 0, 
  highlightQuery = '' 
}) => {
  // Mobile responsiveness detection
  const [isMobile, setIsMobile] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // 0-indexed page pointer
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');

  // Bookmark / Progress State
  const [bookmark, setBookmark] = useState<BookmarkData | null>(null);
  const [bookmarkToast, setBookmarkToast] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute pages by packing as many WHOLE paragraphs as possible without EVER cutting words, sentences, or paragraphs
  const pages: BookPage[] = useMemo(() => {
    const result: BookPage[] = [];
    let pageNum = 1;

    book.chapters.forEach((chapter, chIdx) => {
      let currentParagraphs: string[] = [];
      let currentLines = 0;
      let isStart = true;

      // Line budgets:
      // Chapter start page has header title + drop cap -> max capacity
      // Continuation page has thin running header -> max capacity
      const maxLinesForPage = (isStartPage: boolean) => {
        if (isMobile) {
          return isStartPage ? 16 : 19.5;
        }
        return isStartPage ? 17.5 : 21.5;
      };

      for (let i = 0; i < chapter.content.length; i++) {
        const paragraph = chapter.content[i];
        const pLines = estimateParagraphLines(paragraph, isMobile);
        const limit = maxLinesForPage(isStart);

        // If adding this paragraph exceeds page capacity and we already have at least 1 paragraph on this page,
        // finish the page and start a new page with this ENTIRE paragraph (never cut in the middle!)
        if (currentParagraphs.length > 0 && (currentLines + pLines > limit)) {
          result.push({
            pageNumber: pageNum++,
            chapterIndex: chIdx,
            chapterTitle: chapter.title,
            isChapterStart: isStart,
            paragraphs: currentParagraphs,
          });
          currentParagraphs = [];
          currentLines = 0;
          isStart = false;
        }

        currentParagraphs.push(paragraph);
        currentLines += pLines;
      }

      if (currentParagraphs.length > 0) {
        result.push({
          pageNumber: pageNum++,
          chapterIndex: chIdx,
          chapterTitle: chapter.title,
          isChapterStart: isStart,
          paragraphs: currentParagraphs,
        });
      }
    });

    return result;
  }, [book, isMobile]);

  const totalPages = pages.length;

  // Load bookmark from localStorage
  useEffect(() => {
    const raw = localStorage.getItem(`sakaiori_bookmark_${book.id}`);
    if (raw) {
      try {
        setBookmark(JSON.parse(raw));
      } catch {
        setBookmark(null);
      }
    } else {
      setBookmark(null);
    }
  }, [book.id, isOpen]);

  // Jump to appropriate page when opened or when initialChapterIndex changes, resuming from bookmark if available
  useEffect(() => {
    if (isOpen && pages.length > 0) {
      const raw = localStorage.getItem(`sakaiori_bookmark_${book.id}`);
      let saved: BookmarkData | null = null;
      if (raw) {
        try {
          saved = JSON.parse(raw);
        } catch {
          saved = null;
        }
      }

      // If user opened book normally (initialChapterIndex is 0) and a bookmark exists, resume from bookmark!
      if (initialChapterIndex === 0 && saved && saved.pageIndex < pages.length) {
        const alignedIdx = isMobile ? saved.pageIndex : Math.floor(saved.pageIndex / 2) * 2;
        setCurrentPageIndex(alignedIdx);
        setBookmarkToast(`Continuando do marcador: Página ${saved.pageNumber}`);
        const timer = setTimeout(() => setBookmarkToast(null), 3000);
        return () => clearTimeout(timer);
      } else {
        const targetIdx = pages.findIndex(p => p.chapterIndex === initialChapterIndex);
        if (targetIdx >= 0) {
          const alignedIdx = isMobile ? targetIdx : Math.floor(targetIdx / 2) * 2;
          setCurrentPageIndex(alignedIdx);
        } else {
          setCurrentPageIndex(0);
        }
      }
    }
  }, [isOpen, initialChapterIndex, pages, isMobile, book.id]);

  // Step sizes: Desktop flips 2 pages per spread, Mobile flips 1 page
  const stepSize = isMobile ? 1 : 2;

  const canGoPrev = currentPageIndex > 0;
  const canGoNext = isMobile 
    ? currentPageIndex < totalPages - 1 
    : currentPageIndex + 2 < totalPages;

  const handleNextPage = useCallback(() => {
    if (!canGoNext) return;
    setFlipDirection('forward');
    setCurrentPageIndex(prev => Math.min(prev + stepSize, totalPages - (isMobile ? 1 : 2 > totalPages ? 1 : 2)));
  }, [canGoNext, stepSize, totalPages, isMobile]);

  const handlePrevPage = useCallback(() => {
    if (!canGoPrev) return;
    setFlipDirection('backward');
    setCurrentPageIndex(prev => Math.max(prev - stepSize, 0));
  }, [canGoPrev, stepSize]);

  // Chapter checklist & copy states
  const [isChapterMenuOpen, setIsChapterMenuOpen] = useState(false);
  const [selectedChapterIndices, setSelectedChapterIndices] = useState<number[]>([]);
  const [chapterSearchFilter, setChapterSearchFilter] = useState('');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // Filtered chapters for chapter checklist modal
  const filteredChapters = useMemo(() => {
    if (!chapterSearchFilter.trim()) return book.chapters;
    const q = chapterSearchFilter.toLowerCase();
    return book.chapters.filter(ch => ch.title.toLowerCase().includes(q));
  }, [book.chapters, chapterSearchFilter]);

  const copyTextToClipboard = useCallback((text: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }, []);

  const handleCopySelectedChapters = useCallback((overrideIndices?: number[]) => {
    const indices = overrideIndices ?? (
      selectedChapterIndices.length > 0 
        ? selectedChapterIndices 
        : book.chapters.map((_, i) => i)
    );

    if (indices.length === 0) return;

    const formattedContent = indices.map(idx => {
      const ch = book.chapters[idx];
      if (!ch) return '';
      return `## ${ch.title}\n\n${ch.content.join('\n\n')}`;
    }).filter(Boolean).join('\n\n---\n\n');

    const fullText = `# ${book.title.toUpperCase()}\n*${book.subtitle}*\n\n${formattedContent}`;
    copyTextToClipboard(fullText);

    setCopiedSuccess(true);
    const count = indices.length;
    const msg = count === book.chapters.length
      ? `Texto de todas as páginas (${count} capítulos) copiado!`
      : `Texto de ${count} ${count === 1 ? 'capítulo selecionado' : 'capítulos selecionados'} copiado!`;
    setBookmarkToast(msg);
    setTimeout(() => {
      setCopiedSuccess(false);
      setBookmarkToast(null);
    }, 3000);
  }, [book, selectedChapterIndices, copyTextToClipboard]);

  const toggleChapterSelection = useCallback((idx: number) => {
    setSelectedChapterIndices(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx].sort((a, b) => a - b)
    );
  }, []);

  const toggleSelectAllChapters = useCallback(() => {
    if (selectedChapterIndices.length === book.chapters.length) {
      setSelectedChapterIndices([]);
    } else {
      setSelectedChapterIndices(book.chapters.map((_, idx) => idx));
    }
  }, [book.chapters.length, selectedChapterIndices.length]);

  // Jump to chapter directly from table of contents
  const handleJumpToChapter = (chIdx: number) => {
    const targetIdx = pages.findIndex(p => p.chapterIndex === chIdx);
    if (targetIdx >= 0) {
      setFlipDirection(targetIdx > currentPageIndex ? 'forward' : 'backward');
      const alignedIdx = isMobile ? targetIdx : Math.floor(targetIdx / 2) * 2;
      setCurrentPageIndex(alignedIdx);
    }
  };

  // Keyboard navigation: ArrowLeft/Right to turn pages, Escape to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevPage();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNextPage, handlePrevPage, onClose]);

  // Active pages
  const leftPage: BookPage | undefined = pages[currentPageIndex];
  const rightPage: BookPage | undefined = !isMobile ? pages[currentPageIndex + 1] : undefined;

  // Is the current view bookmarked?
  const isCurrentSpreadBookmarked = Boolean(
    bookmark && (
      bookmark.pageNumber === leftPage?.pageNumber ||
      (rightPage && bookmark.pageNumber === rightPage.pageNumber)
    )
  );

  // Bookmark actions: Toggle or Jump
  const toggleBookmark = () => {
    if (!leftPage) return;

    if (isCurrentSpreadBookmarked) {
      localStorage.removeItem(`sakaiori_bookmark_${book.id}`);
      setBookmark(null);
      setBookmarkToast('Marcador removido');
    } else {
      const data: BookmarkData = {
        bookId: book.id,
        pageIndex: currentPageIndex,
        pageNumber: leftPage.pageNumber,
        chapterIndex: leftPage.chapterIndex,
        chapterTitle: leftPage.chapterTitle,
        savedAt: new Date().toLocaleDateString('pt-BR')
      };
      localStorage.setItem(`sakaiori_bookmark_${book.id}`, JSON.stringify(data));
      setBookmark(data);
      setBookmarkToast(`Marcador salvo na Página ${leftPage.pageNumber}!`);
    }

    const timer = setTimeout(() => setBookmarkToast(null), 2500);
    return () => clearTimeout(timer);
  };

  const goToBookmark = () => {
    if (!bookmark || bookmark.pageIndex >= pages.length) return;
    setFlipDirection(bookmark.pageIndex > currentPageIndex ? 'forward' : 'backward');
    const alignedIdx = isMobile ? bookmark.pageIndex : Math.floor(bookmark.pageIndex / 2) * 2;
    setCurrentPageIndex(alignedIdx);
    setBookmarkToast(`Retornou ao marcador (Página ${bookmark.pageNumber})`);
    const timer = setTimeout(() => setBookmarkToast(null), 2500);
    return () => clearTimeout(timer);
  };

  // Support bold markdown (**text**) and search highlighting simultaneously
  const formatAndHighlight = (text: string, query: string) => {
    if (!text) return null;
    const boldParts = text.split('**');

    const highlightSegment = (segment: string, keyPrefix: string) => {
      if (!query || !query.trim()) {
        return <span key={keyPrefix}>{segment}</span>;
      }

      const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`(${escapedQuery})`, 'gi');
      const matchParts = segment.split(regex);

      return (
        <span key={keyPrefix}>
          {matchParts.map((part, index) => {
            if (part.toLowerCase() === query.toLowerCase()) {
              return (
                <mark
                  key={`${keyPrefix}-${index}`}
                  className="bg-yellow-300 text-amber-950 font-bold px-1 rounded shadow-sm border-b border-amber-500/50"
                >
                  {part}
                </mark>
              );
            }
            return part;
          })}
        </span>
      );
    };

    return (
      <>
        {boldParts.map((part, index) => {
          const isBold = index % 2 === 1;
          if (isBold) {
            return (
              <strong key={index} className="font-bold text-amber-950">
                {highlightSegment(part, `bold-${index}`)}
              </strong>
            );
          } else {
            return highlightSegment(part, `normal-${index}`);
          }
        })}
      </>
    );
  };

  // Render content of a single page cleanly without scroll
  const renderPageContent = (page: BookPage | undefined, isLeft: boolean) => {
    if (!page) {
      // Empty end-of-volume page
      return (
        <div className="h-full flex flex-col justify-between p-6 md:p-8 select-none text-center">
          <div className="text-amber-900/10 text-xl self-end">🙿</div>
          <div className="flex flex-col items-center justify-center my-auto">
            <Compass className="w-12 h-12 text-amber-900/30 mb-3" />
            <h4 className="font-serif font-bold text-lg text-amber-900/70">Fim do Tomo</h4>
            <p className="font-serif italic text-xs text-amber-800/50 mt-1 max-w-xs">
              Todas as páginas deste registro foram lidas. Selecione outro tomo na mesa para continuar seus estudos.
            </p>
          </div>
          <div className="border-t border-amber-900/15 pt-3 flex justify-between text-[10px] font-mono text-amber-900/50">
            <span>Sakaiori</span>
            <span>Registros Concluídos</span>
          </div>
        </div>
      );
    }

    return (
      <div className="h-full flex flex-col justify-between p-4 sm:p-5 md:py-5 md:px-7 select-text overflow-hidden relative">
        {/* Decorative corner glyphs */}
        <div className={`text-amber-900/15 text-lg absolute top-2.5 ${isLeft ? 'left-2.5' : 'right-2.5'} select-none`}>
          {isLeft ? '🙾' : '🙿'}
        </div>
        <div className={`text-amber-900/15 text-lg absolute bottom-2.5 ${isLeft ? 'left-2.5' : 'right-2.5'} select-none`}>
          {isLeft ? '🙼' : '🙽'}
        </div>

        {/* TOP: Header and Chapter Information */}
        <div className="flex-shrink-0 z-10 mb-2">
          {page.isChapterStart ? (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800/80 font-bold flex items-center gap-1.5">
                <BookmarkCheck className="w-3.5 h-3.5 text-amber-700" />
                Capítulo {page.chapterIndex + 1} de {book.chapters.length}
              </span>
              <h2 className="text-base md:text-lg font-serif font-bold text-amber-950 mt-0.5 border-b border-amber-900/15 pb-1 tracking-wide leading-tight line-clamp-2">
                {page.chapterTitle}
              </h2>
            </div>
          ) : (
            <div className="flex justify-between items-center border-b border-amber-900/10 pb-1 text-[10px] font-mono text-amber-900/60">
              <span className="truncate max-w-[220px] font-serif italic text-amber-900/80">
                {page.chapterTitle.split(' (')[0]}
              </span>
              <span className="uppercase tracking-wider text-[9px]">continuação</span>
            </div>
          )}
        </div>

        {/* CENTER: Fixed Paragraphs Area (NO SCROLL, maximized reading space, entire paragraphs only) */}
        <div className="flex-1 overflow-hidden flex flex-col justify-start space-y-1.5 md:space-y-2 z-10">
          {page.paragraphs.map((p, pIdx) => {
            // Drop cap on first letter of chapter opening page
            if (page.isChapterStart && pIdx === 0) {
              const firstLetter = p.charAt(0);
              const remainingText = p.slice(1);
              return (
                <p 
                  key={pIdx} 
                  className="font-serif text-[12px] md:text-[13px] text-amber-950 leading-[1.5] md:leading-[1.55] text-justify tracking-normal"
                >
                  <span className="float-left text-2xl md:text-3xl font-serif font-bold text-amber-900 mr-2 mt-0.5 leading-[0.8] border border-amber-900/30 p-1 bg-[#fcfaf2] rounded shadow-xs select-none">
                    {firstLetter}
                  </span>
                  {formatAndHighlight(remainingText, highlightQuery)}
                </p>
              );
            }

            return (
              <p 
                key={pIdx} 
                className="font-serif text-[12px] md:text-[13px] text-amber-950 leading-[1.5] md:leading-[1.55] text-justify tracking-normal"
              >
                {formatAndHighlight(p, highlightQuery)}
              </p>
            );
          })}
        </div>

        {/* BOTTOM: Footer with Page Number & Clickable Arrow Button */}
        <div className="flex-shrink-0 pt-2 border-t border-amber-900/15 flex items-center justify-between text-xs z-20 select-none">
          {isLeft ? (
            <>
              {/* Previous Page Clickable Arrow Button */}
              <button
                onClick={handlePrevPage}
                disabled={!canGoPrev}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif font-bold transition-all cursor-pointer shadow-xs ${
                  canGoPrev 
                    ? 'bg-[#ded6be] hover:bg-[#d4c8ad] text-amber-950 border border-amber-900/20 active:scale-95 group' 
                    : 'text-stone-400 opacity-40 cursor-not-allowed border border-transparent'
                }`}
                title="Página Anterior (ou pressione a Seta Esquerda ← no teclado)"
              >
                <ChevronLeft className="w-4 h-4 text-amber-900 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline">Página Anterior</span>
                <span className="sm:hidden">Anterior</span>
                <kbd className="hidden md:inline-block text-[9px] font-mono bg-amber-900/10 px-1 py-0.5 rounded text-amber-800">←</kbd>
              </button>

              <div className="text-[10px] font-mono text-amber-900/60">
                Pág. {page.pageNumber} <span className="text-amber-900/30">/ {totalPages}</span>
              </div>
            </>
          ) : (
            <>
              <div className="text-[10px] font-mono text-amber-900/60">
                Pág. {page.pageNumber} <span className="text-amber-900/30">/ {totalPages}</span>
              </div>

              {/* Next Page Clickable Arrow Button */}
              <button
                onClick={handleNextPage}
                disabled={!canGoNext}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif font-bold transition-all cursor-pointer shadow-xs ${
                  canGoNext 
                    ? 'bg-[#ded6be] hover:bg-[#d4c8ad] text-amber-950 border border-amber-900/20 active:scale-95 group' 
                    : 'text-stone-400 opacity-40 cursor-not-allowed border border-transparent'
                }`}
                title="Próxima Página (ou pressione a Seta Direita → no teclado)"
              >
                <span className="hidden sm:inline">Próxima Página</span>
                <span className="sm:hidden">Próxima</span>
                <kbd className="hidden md:inline-block text-[9px] font-mono bg-amber-900/10 px-1 py-0.5 rounded text-amber-800">→</kbd>
                <ChevronRight className="w-4 h-4 text-amber-900 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* 1. BOOK COVER IN 3D TABLE LAYOUT */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            layoutId={`book-container-${book.id}`}
            whileHover={{ y: -12, scale: 1.03, rotate: -1, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.4)' }}
            onClick={onOpen}
            className={`cursor-pointer select-none rounded-r-lg shadow-xl border-y border-r flex flex-col justify-between p-4 h-80 w-60 relative overflow-hidden transition-all duration-300 bg-gradient-to-br ${book.coverColor} flex-shrink-0`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)`,
              backgroundAttachment: 'scroll',
            }}
          >
            {/* Spine Highlight Shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-black/40 border-r border-white/10" />
            <div className="absolute left-3.5 top-0 bottom-0 w-1 bg-white/10" />

            {/* Embossed Corner Ornaments */}
            <div className={`absolute top-2 right-2 border-t-2 border-r-2 p-1.5 rounded-tr-md ${book.coverPattern}`}>🙾</div>
            <div className={`absolute bottom-2 right-2 border-b-2 border-r-2 p-1.5 rounded-br-md ${book.coverPattern}`}>🙽</div>

            {/* Bookmark ribbon peeking out on closed book if bookmark exists */}
            {bookmark && (
              <div 
                className="absolute -top-1 right-6 bg-gradient-to-b from-red-700 to-red-900 text-amber-200 border-x border-b border-red-950 px-2 py-1 rounded-b text-[9px] font-mono font-bold flex items-center gap-1 shadow-md z-20"
                title={`Progresso salvo na Página ${bookmark.pageNumber}`}
              >
                <Bookmark className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
                <span>Pág. {bookmark.pageNumber}</span>
              </div>
            )}

            {/* Header / Subtitle */}
            <div className="pl-4 mt-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400/80 font-bold block">
                {book.category}
              </span>
              <h3 className={`font-serif font-bold text-lg leading-snug tracking-wide ${book.textColor} mt-1 pr-2`}>
                {book.title}
              </h3>
            </div>

            {/* Emblem icon centered */}
            <div className="flex justify-center items-center my-6">
              <div className="p-4 bg-black/20 rounded-full border border-white/5 shadow-inner">
                {renderCoverIcon(book.iconName, `w-10 h-10 ${book.textColor} opacity-80`)}
              </div>
            </div>

            {/* Spine/Base labels */}
            <div className="pl-4 pb-2 flex justify-between items-center z-10">
              <div className="text-[10px] font-serif text-amber-200/70 italic max-w-[140px] truncate">
                {book.subtitle}
              </div>
              <div className="text-[9px] font-mono uppercase text-amber-400/90 font-bold flex items-center gap-1">
                {book.chapters.length} Cap.
              </div>
            </div>

            {/* Aged paper pages peek on the right edge */}
            <div className="absolute right-0 top-1 bottom-1 w-1.5 bg-amber-100 rounded-l-[1px] border-l border-amber-900/10 flex flex-col justify-between py-2 opacity-95">
              <div className="h-[1px] w-full bg-amber-900/20" />
              <div className="h-[1px] w-full bg-amber-900/20" />
              <div className="h-[1px] w-full bg-amber-900/20" />
              <div className="h-[1px] w-full bg-amber-900/20" />
              <div className="h-[1px] w-full bg-amber-900/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. OPEN BOOK MODAL WITH TRUE PAGE-FLIP NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-2 md:p-6 select-text">
            {/* Background cancel action on backdrop */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

            <motion.div
              layoutId={`book-container-${book.id}`}
              className="w-full max-w-6xl h-[94vh] md:h-[88vh] bg-[#eae3cd] rounded-md shadow-2xl relative flex flex-col overflow-hidden border-x-[10px] md:border-x-[14px] border-y-[8px] md:border-y-[12px] border-[#29170a] z-10"
              style={{
                boxShadow: '0 25px 60px -10px rgba(0,0,0,0.9), inset 0 0 60px rgba(0,0,0,0.15)'
              }}
            >
              {/* Central book spine gutter shadow */}
              {!isMobile && (
                <div className="absolute left-[50%] -translate-x-[50%] top-0 bottom-0 w-10 bg-gradient-to-r from-[#cfc5aa] via-[#a89d81]/75 to-[#cfc5aa] z-30 border-x border-[#968b6f]/30 pointer-events-none" />
              )}

              {/* Floating Bookmark Toast Notification */}
              <AnimatePresence>
                {bookmarkToast && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute top-14 left-1/2 -translate-x-1/2 z-50 bg-[#1f1006]/95 text-amber-100 border border-amber-600/60 px-4 py-1.5 rounded-full shadow-2xl text-xs font-serif flex items-center gap-2 backdrop-blur-sm pointer-events-none"
                  >
                    <BookmarkCheck className="w-4 h-4 text-yellow-400" />
                    <span>{bookmarkToast}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Interactive Bookmark Ribbon hanging on top-right */}
              <button
                onClick={toggleBookmark}
                className={`absolute right-10 -top-1 w-7 md:w-8 h-16 shadow-lg border-x border-b transition-all duration-300 z-30 rounded-b flex flex-col items-center justify-end pb-2 cursor-pointer group active:scale-95 ${
                  isCurrentSpreadBookmarked
                    ? 'bg-gradient-to-b from-amber-600 to-amber-700 border-amber-300 ring-2 ring-amber-400/50 shadow-amber-950/60'
                    : 'bg-gradient-to-b from-red-800 to-red-950 border-red-950 hover:from-red-700 hover:to-red-900'
                }`}
                title={isCurrentSpreadBookmarked ? "Página marcada! Clique para remover marcador" : "Clique nesta fita para marcar a página atual"}
              >
                {isCurrentSpreadBookmarked ? (
                  <BookmarkCheck className="w-4 h-4 text-amber-200 animate-pulse" />
                ) : (
                  <Bookmark className="w-4 h-4 text-amber-300/80 group-hover:text-amber-100 group-hover:scale-110 transition-transform" />
                )}
                <span className="text-[7px] font-mono text-amber-200 uppercase tracking-tighter mt-0.5 leading-none">
                  {isCurrentSpreadBookmarked ? 'Salvo' : 'Marcar'}
                </span>
              </button>

              {/* HEADER BAR: Book title, Quick Chapter Jumper, Bookmark button, and Close Button */}
              <div className="bg-[#29170a] py-2 px-3 md:px-5 flex justify-between items-center text-amber-200 z-40 relative flex-shrink-0">
                <div className="flex items-center gap-2 md:gap-3">
                  {renderCoverIcon(book.iconName, 'w-4 h-4 text-amber-400')}
                  <span className="text-xs md:text-sm font-serif font-bold uppercase tracking-wider text-amber-100">
                    {book.title}
                  </span>
                </div>

                {/* Chapter jump selector, Bookmark quick actions, and Close button */}
                <div className="flex items-center gap-2 md:gap-3 pr-10 md:pr-14">
                  {/* Bookmark Button in Top Header */}
                  <button
                    onClick={toggleBookmark}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-serif transition-all cursor-pointer shadow-xs ${
                      isCurrentSpreadBookmarked
                        ? 'bg-amber-500/25 text-amber-200 border border-amber-400/60 hover:bg-amber-500/35 font-bold'
                        : 'bg-amber-950/50 text-amber-200/90 border border-amber-800/50 hover:bg-amber-900/50 hover:text-white'
                    }`}
                    title={isCurrentSpreadBookmarked ? "Remover marcador desta página" : "Salvar esta página no marcador"}
                  >
                    {isCurrentSpreadBookmarked ? (
                      <>
                        <BookmarkCheck className="w-3.5 h-3.5 text-yellow-400" />
                        <span className="hidden sm:inline">Pág. {leftPage?.pageNumber} Marcada</span>
                        <span className="sm:hidden">Marcada</span>
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                        <span className="hidden sm:inline">Marcar Página</span>
                        <span className="sm:hidden">Marcar</span>
                      </>
                    )}
                  </button>

                  {/* If bookmark exists on another page, offer quick jump button */}
                  {bookmark && !isCurrentSpreadBookmarked && (
                    <button
                      onClick={goToBookmark}
                      className="hidden md:flex items-center gap-1 text-[11px] font-mono text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-800/40 px-2 py-1 rounded transition-colors cursor-pointer"
                      title={`Saltar para página marcada: Pág. ${bookmark.pageNumber}`}
                    >
                      <CornerDownRight className="w-3 h-3 text-cyan-400" />
                      <span>Ir p/ Pág. {bookmark.pageNumber}</span>
                    </button>
                  )}

                  {/* Chapter Selector & Checklist / Copy Menu */}
                  <div className="relative">
                    <div className="flex items-center gap-1 bg-amber-950/70 p-0.5 rounded border border-amber-900/60 shadow-xs">
                      {/* Chapter Dropdown Trigger */}
                      <button
                        onClick={() => setIsChapterMenuOpen(prev => !prev)}
                        className="flex items-center gap-1.5 text-[11px] sm:text-xs font-serif font-bold text-amber-200 hover:text-white px-2 py-1 rounded hover:bg-amber-900/60 transition-colors cursor-pointer"
                        title="Abrir índice de capítulos e seleção para copiar"
                      >
                        <ListChecks className="w-3.5 h-3.5 text-amber-400" />
                        <span className="hidden sm:inline">Capítulo:</span>
                        <span className="max-w-[100px] sm:max-w-[140px] md:max-w-[180px] truncate text-amber-100 font-semibold">
                          {(leftPage?.chapterIndex ?? 0) + 1}. {book.chapters[leftPage?.chapterIndex ?? 0]?.title.replace(/^Capítulo\s+[IVXLCDM]+\s*—\s*/, '').split(' (')[0]}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 text-amber-400/80 transition-transform ${isChapterMenuOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Direct Quick Copy Button */}
                      <button
                        onClick={() => setIsChapterMenuOpen(true)}
                        className="flex items-center gap-1 text-[11px] font-mono text-cyan-300 hover:text-cyan-100 bg-cyan-950/80 hover:bg-cyan-900/90 border border-cyan-800/60 px-2 py-1 rounded transition-colors cursor-pointer"
                        title="Copiar texto do livro ou selecionar capítulos"
                      >
                        <Copy className="w-3 h-3 text-cyan-400" />
                        <span className="hidden md:inline">Copiar</span>
                      </button>
                    </div>

                    {/* Floating Chapter Checklist & Copy Dropdown Panel */}
                    <AnimatePresence>
                      {isChapterMenuOpen && (
                        <>
                          {/* Backdrop overlay to close */}
                          <div 
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs cursor-default" 
                            onClick={() => setIsChapterMenuOpen(false)} 
                          />

                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute right-0 top-full mt-2 w-[92vw] sm:w-[460px] bg-[#1a0e05] border-2 border-amber-800 rounded-lg shadow-2xl z-50 flex flex-col max-h-[75vh] text-amber-100 overflow-hidden"
                            style={{
                              boxShadow: '0 20px 40px rgba(0,0,0,0.85), inset 0 0 30px rgba(180,83,9,0.1)'
                            }}
                          >
                            {/* Panel Header */}
                            <div className="p-3 bg-[#261407] border-b border-amber-900/60 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <ListChecks className="w-4 h-4 text-amber-400" />
                                <div>
                                  <h4 className="font-serif font-bold text-xs sm:text-sm text-amber-100 leading-tight">
                                    Índice & Cópia de Capítulos
                                  </h4>
                                  <p className="text-[10px] font-mono text-amber-300/70">
                                    {selectedChapterIndices.length === 0
                                      ? 'Nenhum marcado (copiará o livro todo)'
                                      : `${selectedChapterIndices.length} de ${book.chapters.length} selecionados`}
                                  </p>
                                </div>
                              </div>
                              <button
                                onClick={() => setIsChapterMenuOpen(false)}
                                className="p-1 hover:bg-amber-900/50 rounded text-amber-300/80 hover:text-amber-100 transition-colors cursor-pointer"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Toolbar: Search filter & Select All Toggle */}
                            <div className="p-2.5 bg-[#201006] border-b border-amber-900/40 flex flex-col sm:flex-row gap-2 items-center justify-between">
                              {/* Quick Filter */}
                              <div className="relative w-full sm:w-auto flex-1 flex items-center bg-[#140a04] border border-amber-900/60 rounded px-2 py-1 text-xs">
                                <Search className="w-3.5 h-3.5 text-amber-400/60 mr-1.5 flex-shrink-0" />
                                <input
                                  type="text"
                                  placeholder="Filtrar capítulos..."
                                  value={chapterSearchFilter}
                                  onChange={(e) => setChapterSearchFilter(e.target.value)}
                                  className="bg-transparent font-serif text-xs text-amber-100 placeholder-amber-400/40 focus:outline-none w-full"
                                />
                                {chapterSearchFilter && (
                                  <button onClick={() => setChapterSearchFilter('')} className="text-amber-400/60 hover:text-amber-200 cursor-pointer">
                                    <X className="w-3 h-3" />
                                  </button>
                                )}
                              </div>

                              {/* Select all toggle button */}
                              <button
                                onClick={toggleSelectAllChapters}
                                className="flex items-center gap-1.5 text-[11px] font-mono text-amber-300 hover:text-amber-100 bg-amber-950/80 hover:bg-amber-900/70 border border-amber-800/60 px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer"
                              >
                                {selectedChapterIndices.length === book.chapters.length ? (
                                  <>
                                    <CheckSquare className="w-3.5 h-3.5 text-amber-400" />
                                    <span>Desmarcar Todos</span>
                                  </>
                                ) : (
                                  <>
                                    <Square className="w-3.5 h-3.5 text-amber-400/70" />
                                    <span>Marcar Todos</span>
                                  </>
                                )}
                              </button>
                            </div>

                            {/* Chapter List with Checklist Squares */}
                            <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar max-h-[46vh]">
                              {filteredChapters.map((chap) => {
                                const actualIndex = book.chapters.findIndex(c => c.id === chap.id);
                                const isSelected = selectedChapterIndices.includes(actualIndex);
                                const isCurrent = (leftPage?.chapterIndex ?? 0) === actualIndex;

                                return (
                                  <div
                                    key={chap.id}
                                    className={`flex items-center justify-between p-2 rounded transition-colors border ${
                                      isCurrent 
                                        ? 'bg-amber-900/35 border-amber-700/70' 
                                        : isSelected 
                                          ? 'bg-amber-950/60 border-amber-800/50' 
                                          : 'hover:bg-amber-950/40 border-transparent'
                                    }`}
                                  >
                                    {/* Left: Square Checklist Button + Chapter Name */}
                                    <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                                      {/* Square Checklist Box */}
                                      <button
                                        onClick={() => toggleChapterSelection(actualIndex)}
                                        className={`w-5 h-5 rounded flex items-center justify-center transition-all cursor-pointer flex-shrink-0 border ${
                                          isSelected
                                            ? 'bg-amber-500 border-amber-300 text-amber-950 shadow-xs'
                                            : 'bg-[#140a04] border-amber-800/80 hover:border-amber-600 text-transparent'
                                        }`}
                                        title={isSelected ? "Desmarcar este capítulo" : "Marcar este capítulo para cópia"}
                                      >
                                        <Check className={`w-3.5 h-3.5 font-bold stroke-[3] ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                                      </button>

                                      {/* Title & Jump to Chapter */}
                                      <button
                                        onClick={() => {
                                          handleJumpToChapter(actualIndex);
                                          setIsChapterMenuOpen(false);
                                        }}
                                        className="text-left flex-1 min-w-0 group cursor-pointer"
                                        title="Clique para ir para este capítulo no livro"
                                      >
                                        <div className="flex items-center gap-1.5">
                                          <span className="font-serif text-xs sm:text-[13px] font-semibold text-amber-100 group-hover:text-amber-300 truncate">
                                            {chap.title}
                                          </span>
                                          {isCurrent && (
                                            <span className="text-[9px] font-mono uppercase bg-amber-800/60 text-amber-200 px-1 py-0.5 rounded flex-shrink-0">
                                              Lendo
                                            </span>
                                          )}
                                        </div>
                                      </button>
                                    </div>

                                    {/* Right: Quick copy single chapter icon */}
                                    <button
                                      onClick={() => handleCopySelectedChapters([actualIndex])}
                                      className="p-1 hover:bg-amber-800/40 text-amber-400/60 hover:text-amber-200 rounded transition-colors flex-shrink-0 cursor-pointer"
                                      title="Copiar apenas este capítulo"
                                    >
                                      <Copy className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Footer Actions: Copy All or Copy Selected */}
                            <div className="p-3 bg-[#241206] border-t border-amber-900/60 flex flex-col sm:flex-row items-center justify-between gap-2">
                              <button
                                onClick={() => handleCopySelectedChapters(book.chapters.map((_, i) => i))}
                                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3 py-1.5 bg-amber-950/80 hover:bg-amber-900/80 text-amber-200 border border-amber-800/70 hover:border-amber-700 rounded text-xs font-serif font-bold transition-all cursor-pointer"
                                title="Copiar o texto de todas as páginas e capítulos do livro"
                              >
                                <Copy className="w-3.5 h-3.5 text-amber-400" />
                                <span>Copiar Livro Completo ({book.chapters.length} Cap.)</span>
                              </button>

                              <button
                                onClick={() => handleCopySelectedChapters()}
                                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-amber-950 font-serif font-bold border border-amber-400 rounded text-xs shadow-md transition-all cursor-pointer active:scale-95"
                                title="Copiar capítulos selecionados pela checklist"
                              >
                                {copiedSuccess ? (
                                  <>
                                    <CheckCheck className="w-4 h-4 text-amber-950" />
                                    <span>Copiado com Sucesso!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5 text-amber-950" />
                                    <span>
                                      {selectedChapterIndices.length > 0
                                        ? `Copiar Selecionados (${selectedChapterIndices.length})`
                                        : 'Copiar'}
                                    </span>
                                  </>
                                )}
                              </button>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={onClose}
                    className="text-xs font-sans font-bold text-amber-100 hover:text-white bg-amber-900/50 hover:bg-amber-900/80 px-2.5 py-1 rounded flex items-center gap-1 transition-all cursor-pointer"
                    title="Fechar Livro"
                  >
                    <X className="w-3.5 h-3.5" />
                    Fechar
                  </button>
                </div>
              </div>

              {/* TWO-PAGE SPREAD CONTAINER (No Scrollbar, clean book pages) */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 relative overflow-hidden bg-[#eae3cd]">
                
                {/* LEFT PAGE (or single page on mobile) */}
                <motion.div 
                  key={`left-${currentPageIndex}`}
                  initial={{ opacity: 0.8, x: flipDirection === 'forward' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full border-r border-[#a89d81]/25 relative flex flex-col justify-between overflow-hidden"
                >
                  {renderPageContent(leftPage, true)}
                </motion.div>

                {/* RIGHT PAGE (desktop only) */}
                {!isMobile && (
                  <motion.div 
                    key={`right-${currentPageIndex + 1}`}
                    initial={{ opacity: 0.8, x: flipDirection === 'forward' ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-full relative flex flex-col justify-between overflow-hidden"
                  >
                    {renderPageContent(rightPage, false)}
                  </motion.div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
