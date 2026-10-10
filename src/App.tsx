import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORLD_BOOKS } from './data/worldData';
import { Book } from './components/Book';
import { TravelersJournal } from './components/TravelersJournal';
import { Search, Compass, BookOpen, Sparkles, Scroll, HelpCircle, X, ArrowUpRight, Shield, KeyRound, Loader, RefreshCw, Trash2, Calendar, Clock, AlertTriangle, Activity } from 'lucide-react';
import { db } from './firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export interface EnergyResidualInfo {
  level: 'baixo' | 'estáveis' | 'alarmantes';
  label: string;
  dotColor: string;
  textColor: string;
  badgeBg: string;
  borderColor: string;
  iconType: 'low' | 'stable' | 'alarm';
  timeRange: string;
  description: string;
}

export const getEnergyStatus = (date: Date): EnergyResidualInfo => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  // 00:00 (0m) até as 08:00 (480m): Baixo
  if (totalMinutes <= 480) {
    return {
      level: 'baixo',
      label: 'Resíduos de Energia: Baixo',
      dotColor: 'bg-emerald-400',
      textColor: 'text-emerald-300',
      badgeBg: 'bg-emerald-950/30',
      borderColor: 'border-emerald-800/40',
      iconType: 'low',
      timeRange: '00:00 - 08:00',
      description: 'Atividade mágica em repouso cósmico'
    };
  }
  // 08:01 (481m) até as 16:00 (960m): Estáveis
  else if (totalMinutes <= 960) {
    return {
      level: 'estáveis',
      label: 'Resíduos de Energia: Estáveis',
      dotColor: 'bg-cyan-400',
      textColor: 'text-cyan-300',
      badgeBg: 'bg-blue-950/30',
      borderColor: 'border-blue-900/40',
      iconType: 'stable',
      timeRange: '08:01 - 16:00',
      description: 'Fluxo cósmico em equilíbrio harmônico'
    };
  }
  // 16:01 (961m) até as 23:59 (1439m): Alarmantes
  else {
    return {
      level: 'alarmantes',
      label: 'Resíduos de Energia: Alarmantes',
      dotColor: 'bg-rose-500',
      textColor: 'text-rose-400 font-bold',
      badgeBg: 'bg-rose-950/40',
      borderColor: 'border-rose-700/60 shadow-lg shadow-rose-950/40',
      iconType: 'alarm',
      timeRange: '16:01 - 23:59',
      description: 'Mago de Alto Nivel nas Redondezas, perigo Espiritual'
    };
  }
};

const getAnonymousName = (visitorId: string) => {
  if (!visitorId) return 'Mago Anônimo';
  let hash = 0;
  for (let i = 0; i < visitorId.length; i++) {
    hash = visitorId.charCodeAt(i) + ((hash << 5) - hash);
  }
  const adjectives = ['Infiltrado', 'Especial', 'Exilado', 'Supremo', 'Lendário', 'Vagante', 'Solitário', 'Herético', 'Ancestral', 'Místico'];
  const nouns = ['Ordem Arcana', 'Círculo Estelar', 'Clã Primordial', 'Guardião', 'Erudito', 'Viajante', 'Conjurador', 'Netriun', 'Andarilho', 'Vassalo'];
  const adjIdx = Math.abs(hash) % adjectives.length;
  const nounIdx = Math.abs(hash >> 2) % nouns.length;
  const num = Math.abs(hash >> 4) % 1000;
  return `${adjectives[adjIdx]} da ${nouns[nounIdx]} #${num}`;
};

export default function App() {
  const [activeBookId, setActiveBookId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Real-time energy residual tracking
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [showEnergyTooltip, setShowEnergyTooltip] = useState(false);

  useEffect(() => {
    // Tick every 5 seconds to keep the time and energy status accurately updated
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const energyStatus = useMemo(() => getEnergyStatus(currentDate), [currentDate]);

  // Master Panel states
  const [showMasterModal, setShowMasterModal] = useState(false);
  const [masterCode, setMasterCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [masterEntries, setMasterEntries] = useState<any[]>([]);
  const [isLoadingMaster, setIsLoadingMaster] = useState(false);
  const [masterError, setMasterError] = useState('');

  const fetchAllDiaries = async () => {
    setIsLoadingMaster(true);
    setMasterError('');
    try {
      const querySnapshot = await getDocs(collection(db, 'journal_entries'));
      const fetched: any[] = [];
      querySnapshot.forEach((doc) => {
        fetched.push({ id: doc.id, ...doc.data() });
      });
      // Sort by createdAt descending (client-side)
      fetched.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setMasterEntries(fetched);
    } catch (err) {
      console.error('Erro ao buscar diários para o Mestre:', err);
      setMasterError('Falha de conexão espiritual ao carregar registros.');
    } finally {
      setIsLoadingMaster(false);
    }
  };

  const handleCompassClick = () => {
    setShowMasterModal(true);
    if (isAuthorized) {
      fetchAllDiaries();
    }
  };

  // Background image representing mystical/cursed energy
  const tableBgUrl = "/src/assets/images/cursed_energy_bg_1783811324756.jpg";

  // Search through all books and chapters
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const results: Array<{
      bookId: string;
      bookTitle: string;
      chapterId: string;
      chapterTitle: string;
      snippet: string;
      index: number;
    }> = [];

    WORLD_BOOKS.forEach((book) => {
      book.chapters.forEach((chap, idx) => {
        // Search in title or content
        const matchTitle = chap.title.toLowerCase().includes(query);
        const matchContent = chap.content.some(paragraph => paragraph.toLowerCase().includes(query));

        if (matchTitle || matchContent) {
          // Find matching snippet or default to first paragraph
          const matchedParagraph = chap.content.find(p => p.toLowerCase().includes(query)) || chap.content[0];
          const snippet = matchedParagraph.length > 130 
            ? matchedParagraph.slice(0, 130) + '...' 
            : matchedParagraph;

          results.push({
            bookId: book.id,
            bookTitle: book.title,
            chapterId: chap.id,
            chapterTitle: chap.title,
            snippet,
            index: idx
          });
        }
      });
    });

    return results;
  }, [searchQuery]);

  const handleSelectSearchResult = (bookId: string, chapterIndex: number) => {
    setActiveBookId(bookId);
    setSelectedChapterIndex(chapterIndex);
    setShowSearchResults(false); // Close dropdown but keep query for in-book highlighting
  };

  const highlightSnippet = (text: string, query: string) => {
    if (!query || !query.trim()) return <span>{text}</span>;
    const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} className="bg-amber-500/35 text-amber-200 font-bold px-0.5 rounded shadow-sm">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const activeBook = WORLD_BOOKS.find(b => b.id === activeBookId);

  return (
    <div 
      className="min-h-screen text-[#e0f2fe] flex flex-col relative overflow-x-hidden"
      style={{
        // Immersive mystical cosmic energy background with dark radial vignette overlay
        backgroundImage: `radial-gradient(circle, rgba(4, 18, 45, 0.45) 0%, rgba(2, 6, 18, 0.94) 100%), url(${tableBgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: '#030914' // Deep cosmic blue fallback
      }}
    >
      {/* 1. ATMOSPHERIC HEADER BAR (Hidden when reading inside a book) */}
      <AnimatePresence>
        {!activeBookId && (
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-[#030712]/90 backdrop-blur-md border-b border-blue-950/50 px-4 md:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 z-20"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={handleCompassClick}
                className="p-2 bg-blue-950/60 rounded border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-blue-900/60 transition-all shadow-md shadow-blue-950/50 cursor-pointer group"
                title="Painel do Mestre"
              >
                <Compass className="w-6 h-6 text-cyan-400 animate-spin-slow group-hover:text-cyan-300" />
              </button>
              <div>
                <h1 className="font-serif font-bold text-lg md:text-xl text-sky-100 tracking-wider flex items-center gap-1.5 uppercase">
                  Sakaiori
                  <span className="text-xs font-mono text-cyan-400/60 normal-case tracking-normal">v2.0</span>
                </h1>
                <p className="text-[10px] md:text-xs text-sky-300 font-serif italic">
                  Explore os tipos de Energia e vastidão do Universo
                </p>
              </div>
            </div>

            {/* Dynamic actions & guide button */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setShowIntro(true)}
                className="text-xs font-sans font-bold text-sky-200/90 hover:text-sky-100 bg-blue-950/50 hover:bg-blue-900/75 px-3 py-1.5 rounded-md border border-blue-800/40 flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Mostrar Guia dos Magos"
              >
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                Ajuda
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* 2. CORE WORKSPACE & AMBIENCE */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 flex flex-col gap-6 relative z-10">
        
        {/* ROW 1: SEARCH & ACTIVE STATUS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          
          {/* STATEFUL SEARCH PARCHMENT */}
          <div className="md:col-span-2 relative">
            {/* Backdrop to close search dropdown when clicking outside */}
            {searchQuery && showSearchResults && (
              <div 
                className="fixed inset-0 z-30 cursor-default" 
                onClick={() => setShowSearchResults(false)} 
              />
            )}

            <div className="relative flex items-center bg-[#071329]/90 border-2 border-blue-900/60 rounded-lg shadow-lg px-3 py-2 text-sky-100 z-40">
              <Search className="w-4 h-4 text-cyan-400/70 mr-2.5 flex-shrink-0" />
              <input
                type="text"
                placeholder="Pesquisar nos volumes de Sakaiori..."
                value={searchQuery}
                onFocus={() => setShowSearchResults(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                className="w-full bg-transparent font-serif text-sm md:text-base focus:outline-none placeholder-sky-400/35 text-sky-100"
              />
              {searchQuery && (
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setShowSearchResults(false);
                  }}
                  className="p-1 hover:bg-blue-900/30 rounded-full transition-colors cursor-pointer text-cyan-400"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Floating Search Results */}
            <AnimatePresence>
              {searchQuery && showSearchResults && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 4 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 right-0 top-full mt-1.5 bg-[#091833] border-2 border-blue-900 rounded-md shadow-2xl z-40 max-h-72 overflow-y-auto p-2 text-sky-100"
                >
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold px-2 py-1 border-b border-blue-900/40 mb-1">
                    Registros Encontrados ({filteredResults.length})
                  </div>

                  {filteredResults.length === 0 ? (
                    <div className="p-4 text-center text-xs font-serif text-cyan-400/60 italic">
                      Nenhuma anotação sobre este termo nos registros de Sakaiori...
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1">
                      {filteredResults.map((res, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelectSearchResult(res.bookId, res.index)}
                          className="p-2 hover:bg-blue-900/40 rounded cursor-pointer transition-colors text-left border-b border-blue-900/30 last:border-0"
                        >
                          <div className="flex justify-between items-center gap-2">
                            <span className="font-serif font-bold text-xs text-amber-400">
                              {res.chapterTitle}
                            </span>
                            <span className="text-[9px] font-mono bg-blue-950/70 text-sky-200 border border-sky-800/40 px-1.5 py-0.5 rounded flex-shrink-0">
                              {res.bookTitle}
                            </span>
                          </div>
                          <p className="text-[11px] font-serif text-sky-200/75 line-clamp-1 mt-1">
                            {highlightSnippet(res.snippet, searchQuery)}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ACTIVE COGNITIVE AMBIENT STATUS WITH CUSTOM CELESTIAL TOOLTIP */}
          <div className="relative">
            <div 
              onMouseEnter={() => setShowEnergyTooltip(true)}
              onMouseLeave={() => setShowEnergyTooltip(false)}
              onClick={() => setShowEnergyTooltip(prev => !prev)}
              className={`backdrop-blur-sm border p-2 rounded-lg flex items-center justify-around h-11 transition-all duration-500 shadow-sm cursor-pointer select-none group ${energyStatus.badgeBg} ${energyStatus.borderColor}`}
            >
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${energyStatus.dotColor} ${energyStatus.level === 'alarmantes' ? 'animate-ping' : 'animate-pulse'}`} />
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-200/90 flex items-center gap-1 group-hover:text-white transition-colors">
                  <Clock className="w-3 h-3 text-cyan-400/80 inline" />
                  {currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className="h-4 w-[1px] bg-blue-900/40" />
              <div className="flex items-center gap-1.5">
                {energyStatus.level === 'alarmantes' ? (
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 animate-bounce flex-shrink-0" />
                ) : energyStatus.level === 'baixo' ? (
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse flex-shrink-0" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse flex-shrink-0" />
                )}
                <span className={`text-[10px] font-mono transition-colors ${energyStatus.textColor}`}>
                  {energyStatus.label}
                </span>
              </div>
            </div>

            {/* CUSTOM ATMOSPHERIC TOOLTIP WINDOW */}
            <AnimatePresence>
              {showEnergyTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                  className="absolute right-0 top-full mt-2.5 w-[310px] sm:w-[350px] bg-[#071329]/95 backdrop-blur-md rounded-xl p-3.5 shadow-2xl z-50 text-sky-100 border-2"
                  style={{
                    borderColor: energyStatus.level === 'alarmantes' ? 'rgba(244,63,94,0.6)' : energyStatus.level === 'baixo' ? 'rgba(52,211,153,0.5)' : 'rgba(14,165,233,0.5)',
                    boxShadow: energyStatus.level === 'alarmantes' 
                      ? '0 20px 40px -10px rgba(0,0,0,0.9), 0 0 25px rgba(244,63,94,0.25)' 
                      : energyStatus.level === 'baixo'
                        ? '0 20px 40px -10px rgba(0,0,0,0.9), 0 0 25px rgba(52,211,153,0.2)'
                        : '0 20px 40px -10px rgba(0,0,0,0.9), 0 0 25px rgba(14,165,233,0.2)'
                  }}
                  onMouseEnter={() => setShowEnergyTooltip(true)}
                  onMouseLeave={() => setShowEnergyTooltip(false)}
                >
                  {/* Atmospheric Top Notch Arrow */}
                  <div 
                    className="absolute -top-2 right-12 sm:right-24 w-3.5 h-3.5 bg-[#071329] border-t-2 border-l-2 rotate-45"
                    style={{
                      borderColor: energyStatus.level === 'alarmantes' ? 'rgba(244,63,94,0.6)' : energyStatus.level === 'baixo' ? 'rgba(52,211,153,0.5)' : 'rgba(14,165,233,0.5)',
                    }}
                  />

                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-blue-900/40 pb-2 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      <span className="font-serif font-bold text-xs uppercase tracking-wider text-sky-100">
                        Monitor de Resíduos Espirituais
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 bg-blue-950/80 border border-blue-800/60 px-1.5 py-0.5 rounded">
                      {currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {/* Active Highlight Banner */}
                  <div className={`p-2.5 rounded-lg border mb-2.5 ${energyStatus.badgeBg} ${energyStatus.borderColor}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-sky-300/80 font-bold">
                        Fase Atual:
                      </span>
                      <span className={`text-[10px] font-mono uppercase font-bold px-1.5 py-0.5 rounded ${energyStatus.textColor} bg-black/40 border border-current/25`}>
                        {energyStatus.level.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs font-serif text-sky-200/95 leading-snug">
                      {energyStatus.description}
                    </p>
                  </div>

                  {/* Schedule Cycle Breakdown */}
                  <div className="space-y-1.5 mb-2.5">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-cyan-400/70 font-semibold px-0.5">
                      Ciclos Espirituais Diários
                    </div>

                    {/* Cycle 1: 00:00 - 08:00 */}
                    <div className={`p-1.5 rounded flex items-center justify-between text-xs transition-colors ${energyStatus.level === 'baixo' ? 'bg-emerald-950/50 border border-emerald-500/40' : 'bg-blue-950/20 border border-transparent opacity-65'}`}>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="font-mono text-[11px] text-sky-200">00:00 - 08:00</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif text-[11px] text-emerald-300 font-semibold">Baixo</span>
                        {energyStatus.level === 'baixo' && (
                          <span className="text-[8px] font-mono bg-emerald-500/20 text-emerald-300 px-1 rounded uppercase font-bold">
                            Ativo
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Cycle 2: 08:01 - 16:00 */}
                    <div className={`p-1.5 rounded flex items-center justify-between text-xs transition-colors ${energyStatus.level === 'estáveis' ? 'bg-cyan-950/50 border border-cyan-500/40' : 'bg-blue-950/20 border border-transparent opacity-65'}`}>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="font-mono text-[11px] text-sky-200">08:01 - 16:00</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif text-[11px] text-cyan-300 font-semibold">Estáveis</span>
                        {energyStatus.level === 'estáveis' && (
                          <span className="text-[8px] font-mono bg-cyan-500/20 text-cyan-300 px-1 rounded uppercase font-bold">
                            Ativo
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Cycle 3: 16:01 - 23:59 */}
                    <div className={`p-1.5 rounded flex items-center justify-between text-xs transition-colors ${energyStatus.level === 'alarmantes' ? 'bg-rose-950/50 border border-rose-500/50' : 'bg-blue-950/20 border border-transparent opacity-65'}`}>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span className="font-mono text-[11px] text-sky-200">16:01 - 23:59</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif text-[11px] text-rose-400 font-bold">Alarmantes</span>
                        {energyStatus.level === 'alarmantes' && (
                          <span className="text-[8px] font-mono bg-rose-500/30 text-rose-300 px-1 rounded uppercase font-bold animate-pulse">
                            Ativo
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer Lore note */}
                  <div className="border-t border-blue-900/30 pt-2 flex items-center justify-between text-[9px] font-mono text-cyan-400/60">
                    <span>Universo Sakaiori</span>
                    <span>Oscilação Espiritual</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* ROW 2: ACTIVE DESK GRID */}
        <div className="w-full flex flex-col gap-6 mt-2">
          
          {/* THE SCATTERED INTERACTIVE BOOKS */}
          <div className="w-full flex flex-col gap-6">
            
            {/* BOOKSHELF SHELF DESIGN */}
            <div className="relative p-6 md:p-8 bg-[#061022]/80 border border-blue-900/40 rounded-2xl shadow-2xl shadow-blue-950/40 min-h-[400px] flex flex-col justify-between">
              
              {/* Header inside Shelf */}
              <div className="flex justify-between items-center border-b border-blue-950/40 pb-3 mb-6">
                <span className="text-xs font-serif font-semibold italic text-sky-200 flex items-center gap-1.5">
                  <Scroll className="w-4 h-4 text-cyan-400" />
                  Selecione um tomo para abrir e investigar os segredos
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold bg-blue-950/60 border border-blue-900/40 px-2.5 py-0.5 rounded-full">
                  Registros de Investigação - Sakaiori
                </span>
              </div>

              {/* Grid of Books laying on Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center flex-1">
                {WORLD_BOOKS.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    isOpen={activeBookId === book.id}
                    onOpen={() => {
                      setActiveBookId(book.id);
                      setSelectedChapterIndex(0);
                    }}
                    onClose={() => setActiveBookId(null)}
                    initialChapterIndex={activeBookId === book.id ? selectedChapterIndex : 0}
                    highlightQuery={searchQuery}
                  />
                ))}
              </div>

              {/* Board shadow / Border Line below */}
              <div className="h-2 w-full bg-[#020712] rounded-md mt-6 shadow-md border-t border-blue-950/40 shadow-blue-950/70" />
            </div>

            {/* EXTRA ACTION BAR: JOURNAL ONLY */}
            <div className="w-full">
              {/* Scholar Traveler's Journal */}
              <TravelersJournal />
            </div>

          </div>

        </div>

      </main>

      {/* 3. IMAGES & AUDIO CREDIT FOOTER */}
      <AnimatePresence>
        {!activeBookId && (
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-[#030816]/95 border-t border-blue-950/40 px-4 py-3 text-center text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest mt-auto z-10"
          >
            Sakaiori • Criado para Registro de Informações de RPG • 2026
          </motion.footer>
        )}
      </AnimatePresence>

      {/* 4. RPG LIBRARIAN INTRODUCTION SCROLL MODAL */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              className="bg-[#081329] border-4 border-blue-950 max-w-lg w-full p-6 md:p-8 rounded-lg shadow-2xl relative text-sky-100"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9), inset 0 0 40px rgba(14,165,233,0.12)'
              }}
            >
              {/* Ribbon Header decoration */}
              <div className="absolute -top-3 left-[50%] -translate-x-[50%] bg-blue-950 text-cyan-200 border border-cyan-800/50 px-4 py-1.5 rounded text-[10px] font-mono uppercase tracking-widest font-bold whitespace-nowrap shadow shadow-black">
                📜 Registro dos Magos
              </div>

              <div className="mt-4 text-center">
                <Compass className="w-10 h-10 text-cyan-400 mx-auto animate-pulse" />
                <h3 className="font-serif font-bold text-2xl text-sky-100 mt-2">Biblioteca de Estudos da Humanidade</h3>
                <div className="h-[1.5px] w-24 bg-blue-900/40 mx-auto my-3" />
                
                <p className="font-serif text-sm leading-relaxed text-sky-200/90 italic text-justify px-2">
                  "Aqui se encontra o resultado de centenas de anos de estudos dos magos ao redor de todo mundo"
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setShowIntro(false)}
                  className="bg-blue-900 hover:bg-blue-950 border border-cyan-700 text-sky-100 px-6 py-2 rounded-md font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1 shadow transition-all cursor-pointer"
                >
                  Acessar os Registros <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. MASTER MODAL & PORTAL PANEL */}
      <AnimatePresence>
        {showMasterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-[#07142a] border-4 border-blue-900 max-w-4xl w-full p-6 rounded-lg shadow-2xl relative text-sky-100 max-h-[85vh] flex flex-col"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9), inset 0 0 30px rgba(14,165,233,0.12)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowMasterModal(false);
                  setMasterError('');
                }}
                className="absolute top-3 right-3 p-1.5 text-cyan-400 hover:text-sky-100 hover:bg-blue-950/50 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-xl md:text-2xl font-serif font-bold text-sky-200 border-b border-blue-900/40 pb-3 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-cyan-400 animate-pulse" />
                Painel do Mestre - Sakaiori
              </h2>

              {!isAuthorized ? (
                /* PASSWORD PROTECTION SCREEN */
                <div className="flex flex-col items-center justify-center py-12 px-4 flex-1">
                  <KeyRound className="w-16 h-16 text-cyan-500/80 mb-4 animate-bounce" />
                  <p className="font-serif text-sm text-sky-300 text-center max-w-sm mb-6">
                    Apenas o Mestre possui a autoridade e energia necessárias para ter total controle dos registros.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (masterCode.trim().toUpperCase() === 'JJKGODTHE') {
                        setIsAuthorized(true);
                        setMasterError('');
                        fetchAllDiaries();
                      } else {
                        setMasterError('O selo permanece intacto. Código incorreto.');
                      }
                    }}
                    className="w-full max-w-sm flex flex-col gap-3"
                  >
                    <input
                      type="password"
                      placeholder="Insira a chave secreta..."
                      value={masterCode}
                      onChange={(e) => setMasterCode(e.target.value)}
                      className="w-full bg-[#0a1835] border-2 border-blue-900/80 rounded-md px-4 py-2.5 font-mono text-center text-sky-200 text-sm tracking-widest focus:outline-none focus:border-cyan-500"
                    />
                    {masterError && (
                      <p className="text-xs text-red-400 font-mono text-center">{masterError}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full bg-blue-900 hover:bg-blue-800 text-sky-100 py-2 rounded font-sans font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      Desbloquear Registros
                    </button>
                  </form>
                </div>
              ) : (
                /* MASTER PANEL BODY */
                <div className="flex flex-col flex-1 min-h-0">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-blue-900/20 pb-3 mb-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                        Diários de Investigação Coletivos (Total: {masterEntries.length})
                      </span>
                      <p className="text-xs text-sky-300/60 font-serif">Acesso irrestrito aos relatos anônimos</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={fetchAllDiaries}
                        disabled={isLoadingMaster}
                        className="p-1.5 bg-blue-950/50 hover:bg-blue-900/60 border border-blue-800/40 rounded text-sky-300 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="Atualizar diários"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isLoadingMaster ? 'animate-spin' : ''}`} />
                        Atualizar
                      </button>
                      <button
                        onClick={() => {
                          setIsAuthorized(false);
                          setMasterCode('');
                        }}
                        className="px-2.5 py-1.5 bg-red-950/40 hover:bg-red-900/40 border border-red-900/30 rounded text-red-300 text-xs font-sans font-semibold transition-colors cursor-pointer"
                      >
                        Sair do Painel
                      </button>
                    </div>
                  </div>

                  {isLoadingMaster ? (
                    <div className="flex flex-col items-center justify-center flex-1 py-12">
                      <Loader className="w-8 h-8 text-cyan-400 animate-spin mb-2" />
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Acessando registros espirituais...</span>
                    </div>
                  ) : masterEntries.length === 0 ? (
                    <div className="flex-1 py-12 text-center text-xs text-cyan-400/50 font-serif italic">
                      Nenhum diário foi escrito por visitantes ainda.
                    </div>
                  ) : (
                    <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3">
                      {masterEntries.map((entry) => {
                        const anonName = getAnonymousName(entry.visitorId);
                        return (
                          <div
                            key={entry.id}
                            className="p-4 rounded-lg bg-[#0a1835]/85 border border-blue-900/50 hover:border-cyan-700/60 transition-all flex flex-col sm:flex-row justify-between items-start gap-4"
                          >
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <h4 className="font-serif font-bold text-base text-amber-300">{entry.title}</h4>
                                <span className="text-[10px] font-mono bg-blue-950/80 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-800/40">
                                  👤 {anonName}
                                </span>
                              </div>
                              <p className="text-sm text-sky-100/90 font-serif leading-relaxed whitespace-pre-wrap">
                                {entry.text}
                              </p>
                              <div className="flex items-center gap-1.5 mt-2.5 text-[10px] text-cyan-400/70 font-mono">
                                <Calendar className="w-3 h-3" />
                                {entry.date || 'Data desconhecida'}
                              </div>
                            </div>
                            <button
                              onClick={async () => {
                                if (confirm('Tem certeza de que deseja banir este registro permanente do diário?')) {
                                  try {
                                    await deleteDoc(doc(db, 'journal_entries', entry.id));
                                    setMasterEntries(prev => prev.filter(e => e.id !== entry.id));
                                  } catch (err) {
                                    console.error('Erro ao deletar:', err);
                                  }
                                }
                              }}
                              className="text-cyan-400/50 hover:text-red-400 p-1.5 hover:bg-red-950/20 rounded transition-colors"
                              title="Banir Registro"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
