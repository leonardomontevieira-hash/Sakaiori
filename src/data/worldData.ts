import { Book } from '../types';

export const WORLD_BOOKS: Book[] = [
  {
    id: 'universe_structure',
    title: 'Estrutura Do Universo',
    subtitle: 'Cosmologia, Mundos, Vortex e Dimensões',
    category: 'Cosmologia & Fundamentos',
    coverColor: 'from-[#0b1b36] to-[#030a18] border-[#1d3d6e]',
    coverPattern: 'text-cyan-400/40 border-cyan-500/30',
    textColor: 'text-cyan-300',
    iconName: 'Compass',
    chapters: [
      {
        id: 'the_universe',
        title: 'Capítulo I — O Universo',
        content: [
          'O Universo é o conjunto de todas as estruturas que existem dentro da criação. Sua organização é composta por diferentes níveis de realidade, que se relacionam entre si de acordo com uma hierarquia cosmológica.',
          'A estrutura conhecida é formada pelo Universo, pelos Mundos, pelos Vortex e pelas Dimensões.',
          'Atualmente, existem dois grandes Mundos conhecidos dentro da criação: **Kami-Sekai** e **Ningen-Sekai**.',
          'Além deles, existe o **Vazio**, que não pertence à criação. Também existe o **Vácuo**, que corresponde aos espaços vazios existentes dentro da própria criação.',
          'Embora os termos Vazio e Vácuo sejam semelhantes, eles representam conceitos fundamentalmente diferentes.',
          'O Universo representa toda a estrutura da criação.',
          'Ele engloba os dois grandes Mundos conhecidos e todas as estruturas que existem dentro deles. Cada Mundo possui seus próprios Vortex, e cada Vortex pode conter inúmeras Dimensões.',
          'A relação entre essas estruturas estabelece diferentes níveis de pertencimento. Uma Dimensão pertence a um Vortex; um Vortex pertence a um Mundo; e os Mundos pertencem à estrutura do Universo.',
          'Essa organização não deve ser interpretada exclusivamente como uma relação de distância física. Trata-se principalmente de uma hierarquia cosmológica.',
          'Uma Dimensão pode funcionar praticamente como um pequeno universo independente, enquanto um Vortex pode conter inúmeras Dimensões. Consequentemente, a escala das estruturas existentes no Universo não pode ser determinada apenas por medidas físicas convencionais.'
        ],
        illustration: 'creation_myth'
      },
      {
        id: 'kami_sekai',
        title: 'Capítulo II — Kami-Sekai',
        content: [
          'O **Kami-Sekai** é um dos dois grandes Mundos existentes dentro do Universo.',
          'É o Mundo relacionado principalmente às estruturas divinas, aos Revers e a diferentes elementos da criação superior.',
          'Atualmente, o Kami-Sekai possui cinco Vortex:\n\n1. **Reino dos Revers**;\n2. **Recanto de The God**;\n3. **Submundo**;\n4. **Dimensão das Dimensões**;\n5. **Vortex da Memória**.',
          'Cada um desses Vortex possui uma função, uma organização e características próprias.',
          'O Reino dos Revers, por exemplo, é a principal região de convivência dos Revers. O Recanto de The God corresponde ao local onde The God reside e descansa. O Submundo está relacionado ao destino de determinadas almas. A Dimensão das Dimensões possui uma estrutura gigantesca associada às manifestações dos Kami no Tenkai, enquanto o Vortex da Memória abriga uma entidade responsável por preservar a memória da existência.',
          'Apesar de suas diferenças, todas essas estruturas pertencem ao mesmo Mundo: o Kami-Sekai.'
        ],
        illustration: ''
      },
      {
        id: 'ningen_sekai',
        title: 'Capítulo III — Ningen-Sekai',
        content: [
          'O **Ningen-Sekai** é o segundo grande Mundo da criação.',
          'Seu nome está relacionado à humanidade, mas o Ningen-Sekai não é habitado exclusivamente por humanos. Diferentes espécies possuem suas próprias regiões e estruturas dentro desse Mundo.',
          'Atualmente, o Ningen-Sekai possui seis Vortex:\n\n1. **Vortex dos Void-Golems**;\n2. **Vortex dos Slimes**;\n3. **Vortex dos Fae**;\n4. **VCE — Vácuo da Comunicação de Espécies**;\n5. **Reino dos Humanos**;\n6. **Exílio de Luciferus Asmodeus**.',
          'Assim como ocorre em Kami-Sekai, cada Vortex possui características próprias e pode conter inúmeras Dimensões.',
          'O Reino dos Humanos, o VCE e o Exílio de Luciferus Asmodeus, por exemplo, possuem funções e organizações completamente diferentes, apesar de todos fazerem parte do mesmo Mundo.'
        ],
        illustration: ''
      },
      {
        id: 'vortex',
        title: 'Capítulo IV — Vortex',
        content: [
          'Um **Vortex** é uma grande estrutura cosmológica pertencente a um Mundo.',
          'Sua principal função estrutural é conter e organizar inúmeras Dimensões.',
          'Não existe um tamanho universal determinado para um Vortex. Cada um pode possuir uma escala extremamente diferente dos demais, dependendo das estruturas e realidades existentes em seu interior.',
          'Um Vortex pode alcançar dimensões tão grandes que sua extensão ultrapassa qualquer escala que um ser comum seja capaz de compreender.',
          'Por esse motivo, um Vortex não deve ser considerado simplesmente uma região espacial com uma determinada extensão física. Ele representa uma estrutura cosmológica que organiza diferentes realidades dentro de um Mundo.',
          'Os Vortex também não precisam possuir funções semelhantes. Cada um pode apresentar uma organização própria, conter diferentes espécies ou estruturas e desempenhar uma função específica dentro de seu Mundo.'
        ],
        illustration: ''
      },
      {
        id: 'dimensions',
        title: 'Capítulo V — Dimensões',
        content: [
          'Uma **Dimensão** é uma realidade completa e independente localizada dentro de um Vortex.',
          'Uma Dimensão possui sua própria estrutura interna e pode apresentar ambientes, condições de existência, formas de vida e regras próprias.',
          'Sua escala não é fixa. Uma Dimensão pode possuir uma extensão relativamente pequena ou alcançar proporções extremamente grandes.',
          'Apesar dessa liberdade de escala, uma Dimensão permanece estruturalmente limitada pelo Vortex ao qual pertence.',
          'Ela não pode ultrapassar a estrutura de seu Vortex. Essa propriedade está relacionada à **Lei do Ponto Zero**, que determina o comportamento estrutural dos limites de uma Dimensão.'
        ],
        illustration: ''
      },
      {
        id: 'point_zero_law',
        title: 'Capítulo VI — A Lei do Ponto Zero',
        content: [
          'A **Lei do Ponto Zero** é uma propriedade fundamental da estrutura dimensional.',
          'Toda Dimensão possui um **Ponto Zero**, que funciona como referência para a manutenção de sua própria estrutura.',
          'Por causa dessa lei, os limites de uma Dimensão não funcionam necessariamente como fronteiras físicas convencionais.',
          'Quando uma situação exige que a Dimensão possua uma extensão maior, sua própria estrutura pode se expandir para preservar o Ponto Zero.',
          'Isso pode ocorrer, por exemplo, quando um indivíduo tenta avançar continuamente em direção ao limite estrutural da realidade. Em vez de necessariamente alcançar uma fronteira e sair da Dimensão, a realidade pode continuar se estendendo naquela direção.',
          'Essa propriedade não significa que todas as Dimensões estejam constantemente em expansão. Trata-se de uma característica estrutural que permite que uma Dimensão aumente sua extensão quando necessário, sem ultrapassar a estrutura do Vortex ao qual pertence.',
          'A Lei do Ponto Zero garante, dessa maneira, que uma Dimensão possa possuir uma extensão extremamente grande sem romper sua relação estrutural com o Vortex.'
        ],
        illustration: ''
      },
      {
        id: 'cosmological_relation',
        title: 'Capítulo VII — Relação entre Universo, Mundos, Vortex e Dimensões',
        content: [
          'As estruturas cosmológicas possuem uma relação hierárquica de pertencimento.',
          'O **Universo** contém os grandes Mundos.',
          'Cada **Mundo** possui seus próprios Vortex.',
          'Cada **Vortex** pode conter inúmeras Dimensões.',
          'Cada **Dimensão** constitui uma realidade independente dentro do Vortex ao qual pertence.',
          'Essa hierarquia não representa necessariamente uma escala direta de distância ou tamanho. Um Vortex não precisa estar fisicamente próximo de outro para pertencer ao mesmo Mundo, assim como duas Dimensões não precisam possuir qualquer semelhança estrutural para pertencer ao mesmo Vortex.',
          'A relação entre essas estruturas é principalmente cosmológica.',
          'Assim, a existência de uma Dimensão dentro de um Vortex define sua posição na organização da criação, independentemente de seu tamanho ou de suas características internas.'
        ],
        illustration: ''
      },
      {
        id: 'vacuum',
        title: 'Capítulo VIII — O Vácuo',
        content: [
          'O **Vácuo** corresponde ao espaço vazio existente dentro da criação.',
          'Ele não constitui uma estrutura cosmológica independente. Não é um Mundo, um Vortex ou uma Dimensão.',
          'O Vácuo pode existir entre diferentes estruturas, regiões ou manifestações que pertencem à criação.',
          'Uma das maiores regiões conhecidas de Vácuo encontra-se na **Dimensão das Dimensões**, onde diferentes manifestações dos Kami no Tenkai podem estar separadas por distâncias extremamente grandes.',
          'Essas regiões continuam fazendo parte da criação mesmo quando não apresentam estruturas ou formas de vida perceptíveis.',
          'O Vácuo, portanto, representa a ausência de estruturas dentro da própria criação.',
          'Sua existência não significa que determinada região esteja fora do Universo. Pelo contrário, um espaço pode ser completamente vazio e ainda pertencer normalmente à estrutura universal.'
        ],
        illustration: ''
      },
      {
        id: 'the_void',
        title: 'Capítulo IX — O Vazio',
        content: [
          'O **Vazio** possui uma natureza completamente diferente do Vácuo.',
          'O Vazio existe **fora da criação**.',
          'Ele não pertence ao Universo e não está incluído na estrutura cosmológica formada pelos Mundos, Vortex e Dimensões.',
          'Por esse motivo, o Vazio não deve ser considerado um Mundo, um Vortex, uma Dimensão ou uma região vazia localizada dentro do Universo.',
          'Sua posição é exterior à criação.',
          'É no Vazio que se encontra **Devirai** e onde **Luciferus Asmodeus** permanece exilado.',
          'O Vazio representa, portanto, aquilo que existe além da estrutura criada.'
        ],
        illustration: ''
      },
      {
        id: 'void_vs_vacuum',
        title: 'Capítulo X — Vazio e Vácuo',
        content: [
          'A diferença entre Vazio e Vácuo é fundamental para a compreensão da cosmologia.',
          'O **Vácuo** existe dentro da criação. Ele corresponde a regiões sem estruturas ou matéria significativa, mas continua pertencendo ao Universo.',
          'O **Vazio**, por outro lado, está fora da criação. Ele não constitui uma região desocupada do Universo, pois não pertence ao próprio Universo.',
          'Dessa maneira:\n\n• **Vácuo:** espaço vazio existente dentro da criação.\n• **Vazio:** aquilo que existe fora da criação.',
          'A diferença não está simplesmente na quantidade de matéria ou na ausência dela. Um espaço pode estar completamente vazio e continuar sendo Vácuo. O Vazio, por sua vez, possui uma natureza estrutural diferente por não fazer parte da criação.'
        ],
        illustration: ''
      },
      {
        id: 'cosmological_structure',
        title: 'Capítulo XI — A Estrutura Cosmológica',
        content: [
          'A estrutura conhecida do Universo pode ser organizada da seguinte maneira:',
          '• **Universo:** O Universo contém os dois grandes Mundos conhecidos: **Kami-Sekai** e **Ningen-Sekai**.\n• **Kami-Sekai:** possui cinco Vortex.\n• **Ningen-Sekai:** possui seis Vortex.\n• **Vortex:** cada Vortex pode conter inúmeras Dimensões.\n• **Dimensões:** constituem realidades independentes dentro dos Vortex.\n• **Vácuo:** pode existir dentro das estruturas da criação.\n• **Vazio:** existe fora da criação e não pertence ao Universo.',
          'Essa organização estabelece a estrutura fundamental da realidade conhecida.'
        ],
        illustration: ''
      },
      {
        id: 'final_considerations',
        title: 'Capítulo XII — Considerações Finais',
        content: [
          'O Universo não constitui uma única realidade contínua. Sua estrutura é formada por diferentes níveis cosmológicos, cada um com uma função específica dentro da criação.',
          'Os Mundos organizam grandes conjuntos de estruturas. Os Vortex funcionam como grandes estruturas capazes de conter inúmeras Dimensões. As Dimensões constituem realidades independentes e podem possuir escalas e características extremamente diferentes entre si.',
          'A Lei do Ponto Zero garante que uma Dimensão mantenha sua integridade estrutural em relação ao Vortex ao qual pertence, permitindo que sua extensão aumente quando necessário sem ultrapassar os limites impostos por sua própria estrutura.',
          'Dentro dessa organização também existe o Vácuo, que corresponde aos espaços vazios presentes na criação. O Vazio, por outro lado, encontra-se fora dessa organização e não pertence ao Universo.',
          'A distinção entre esses conceitos é essencial para compreender a cosmologia deste Universo:\n\n**Universo • Mundos • Vortex • Dimensões • Vácuo • Vazio**',
          'Cada um representa uma parte diferente da estrutura da existência, formando a base sobre a qual todas as demais regiões, espécies, sociedades e sistemas presentes no Universo são estabelecidos.'
        ],
        illustration: ''
      }
    ]
  },
  {
    id: 'world_history_creation',
    title: 'A História e Criação do Mundo',
    subtitle: 'A Criação, os Primordiais e a Humanidade',
    category: 'História & Mitologia Primordial',
    coverColor: 'from-[#1e1b4b] to-[#0b0f19] border-[#4338ca]',
    coverPattern: 'text-indigo-400/40 border-indigo-500/30',
    textColor: 'text-indigo-300',
    iconName: 'BookOpen',
    chapters: [
      {
        id: 'hist_creation',
        title: 'Capítulo I — A Criação',
        content: [
          'Antes da existência dos Mundos, existia apenas **The God**.',
          'The God foi responsável pela criação da existência e, posteriormente, pela criação dos **Kami no Tenkai**, entidades associadas a conceitos fundamentais da realidade.',
          'Os Kami no Tenkai não são simplesmente seres extremamente poderosos. Cada um está relacionado a uma determinada estrutura ou conceito da existência.',
          'Para que essas entidades pudessem interagir com a criação de maneira mais direta, surgiram os **Revers**.',
          'Os Revers são manifestações físicas associadas aos Kami no Tenkai. A existência de um Rever está diretamente ligada à entidade que representa.',
          'Um Rever não possui uma vontade completamente independente quando separado de seu respectivo Kami no Tenkai.',
          'A estrutura de sua alma está relacionada à própria dimensão onde seu Kami no Tenkai existe.',
          'Assim, os Revers representam uma ligação entre os conceitos fundamentais da criação e os seres que habitam seus Mundos.'
        ],
        illustration: ''
      },
      {
        id: 'hist_primordials',
        title: 'Capítulo II — Os Quatro Primordiais',
        content: [
          'Entre as primeiras criações de The God estavam quatro seres que posteriormente seriam conhecidos como os **Quatro Primordiais**.',
          'Eles foram:\n\n• **Zakels Lisk**\n• **Luciferus Asmodeus**\n• **Sakai Ban**\n• **Kyoka Uryu**',
          'Os quatro ocupavam uma posição completamente diferente da dos seres que surgiriam posteriormente. Cada um possuía uma função e uma relação própria com os Kami no Tenkai.',
          '**Zakels Lisk**\nZakels tornou-se o Rever associado a **Chrono**, relacionado ao tempo dentro do espaço-tempo. Ele ocupava uma posição de liderança entre os Revers e posteriormente seria considerado seu rei. **Sakai Ban** originalmente atuava como seu braço direito.',
          '**Luciferus Asmodeus**\nLuciferus Asmodeus, também conhecido simplesmente como **A**, tornou-se o Rever associado a **Lux Vitallis**, relacionado à vida e à morte. Asmodeus possuía uma característica excepcional: era capaz de criar vida a partir do zero. Ele também conseguia produzir Fluxo a partir de si próprio. Assim como Zakels, Asmodeus ocupava uma posição de rei entre os Revers.',
          '**Sakai Ban**\nSakai Ban tornou-se o Rever associado a **Koku no Mikoto**, relacionado ao espaço dentro do espaço-tempo. Antes de se tornar rei, Sakai Ban era o braço direito de Zakels.',
          '**Kyoka Uryu**\nKyoka Uryu tornou-se o Rever associado a **Tsukuyomi**, relacionado à definição entre verdade e mentira. Inicialmente, Kyoka era o braço direito de Asmodeus. Posteriormente, após o exílio de Asmodeus, tornou-se o braço direito de Sakai Ban.'
        ],
        illustration: ''
      },
      {
        id: 'hist_mortal_species',
        title: 'Capítulo III — A Criação das Primeiras Espécies Mortais',
        content: [
          'Antes de seu exílio, Luciferus Asmodeus começou a criar espécies para seus companheiros Primordiais.',
          'Ele criou três grandes espécies.',
          'A primeira foi criada para **Zakels Lisk**: **Void-Golems**.',
          'A segunda foi criada para **Sakai Ban**: **Slimes**.',
          'A terceira foi criada para **Kyoka Uryu**: **Fae**.',
          'Asmodeus era, portanto, o criador original das três espécies. Porém, elas foram posteriormente colocadas sob a posse e proteção dos respectivos Primordiais.',
          'Essa divisão estabeleceu a origem das três grandes espécies antigas do Ningen-Sekai.'
        ],
        illustration: ''
      },
      {
        id: 'hist_mortal_worlds',
        title: 'Capítulo IV — O Início dos Mundos Mortais',
        content: [
          'Enquanto a estrutura divina de Kami-Sekai continuava a se desenvolver, as espécies criadas por Asmodeus começaram a existir separadamente.',
          'Cada espécie desenvolveu sua própria sociedade, cultura e forma de utilização da Energia Espiritual.',
          'Os Void-Golems desenvolveram uma existência baseada na divisão.',
          'Os Slimes desenvolveram sua capacidade de absorver e armazenar Magias.',
          'Os Fae desenvolveram sua relação natural com a Energia Espiritual presente no ambiente.',
          'Nesse período, a humanidade ainda não existia.',
          'A criação dos humanos ocorreria posteriormente e estaria diretamente ligada ao destino de Luciferus Asmodeus.'
        ],
        illustration: ''
      },
      {
        id: 'hist_revers_deaths',
        title: 'Capítulo V — As Mortes dos Revers',
        content: [
          'Em determinado momento, Kami-Sekai começou a encontrar **Revers mortos**.',
          'As mortes causaram preocupação entre os seres divinos. A origem dos acontecimentos não era conhecida.',
          'Foi nesse momento que **Sakai Ban**, entediado com a situação, decidiu criar uma mentira.',
          'Ele começou a espalhar a ideia de que **Luciferus Asmodeus era responsável pelas mortes**.',
          'Segundo as histórias criadas por Sakai, Asmodeus estaria matando e dissecando outros Revers para estudá-los.',
          'As acusações não correspondiam à realidade. Porém, as mentiras começaram a ganhar força.'
        ],
        illustration: ''
      },
      {
        id: 'hist_prophecy',
        title: 'Capítulo VI — A Profecia',
        content: [
          'Enquanto as mortes e as acusações continuavam, surgiu uma profecia relacionada a um dos seres mais poderosos da existência.',
          'A profecia dizia que um dos seres mais poderosos possuía um poder tão sombrio que deveria ser **exilado para sempre no Vazio**.',
          'A combinação entre os acontecimentos, as mentiras de Sakai Ban e a existência da profecia fez com que a desconfiança contra Asmodeus aumentasse.',
          'A partir daquele momento, Asmodeus passou a ser associado ao poder sombrio mencionado pela profecia.'
        ],
        illustration: ''
      },
      {
        id: 'hist_exile_asmodeus',
        title: 'Capítulo VII — O Exílio de Luciferus Asmodeus',
        content: [
          'Luciferus Asmodeus foi então **exilado no Vazio**.',
          'Seu exílio marcou uma mudança importante na estrutura dos Mundos.',
          'Após sua partida, Sakai Ban assumiu uma posição ainda maior entre os Revers. Kyoka Uryu passou a atuar como seu braço direito.',
          'Zakels, por sua vez, posteriormente teria **Noru Gambia** como seu braço direito.',
          'Asmodeus permaneceu no Vazio durante o período necessário para criar novas estruturas. Foi nesse momento que surgiria a humanidade.'
        ],
        illustration: ''
      },
      {
        id: 'hist_creation_humanity',
        title: 'Capítulo VIII — A Criação da Humanidade',
        content: [
          'Depois de seu exílio, Luciferus Asmodeus criou os **humanos**.',
          'Naquele momento, a Terra ainda era formada por uma única grande massa continental: **Pangeia**.',
          'Os humanos passaram a existir em um mundo diferente daquele ocupado pelas três espécies antigas.',
          'A humanidade possuía uma estrutura energética própria e um Fluxo capaz de desenvolver diferentes manifestações mágicas.',
          'Asmodeus também estabeleceu o sistema que posteriormente permitiria o ciclo das almas das espécies do Ningen-Sekai.',
          'Assim, a humanidade passou a fazer parte de uma estrutura de vida, morte e reencarnação.'
        ],
        illustration: ''
      },
      {
        id: 'hist_first_human_dev',
        title: 'Capítulo IX — O Primeiro Desenvolvimento Humano',
        content: [
          'Os primeiros humanos desenvolveram suas próprias sociedades.',
          'Sem uma autoridade central, diferentes grupos começaram a disputar território, recursos e influência. Conflitos surgiam naturalmente entre as comunidades.',
          'Com o crescimento da humanidade, surgiu uma proposta: a criação de um **Rei** que pudesse representar toda a humanidade.',
          'Esse primeiro conceito de Rei não era baseado em hereditariedade. O título era principalmente uma **função de liderança**.',
          'O Rei deveria ser escolhido pelo consenso geral da humanidade e possuir capacidade suficiente para conduzir o mundo humano.',
          'Sua responsabilidade incluía questões como: administração, economia, recursos, organização das sociedades, resolução de conflitos e direção geral da humanidade.',
          'Como a humanidade ainda estava concentrada em uma única grande massa continental, era possível existir uma autoridade central para todo o mundo conhecido.'
        ],
        illustration: ''
      },
      {
        id: 'hist_first_king',
        title: 'Capítulo X — O Primeiro Rei',
        content: [
          'O primeiro Rei da humanidade foi escolhido de acordo com esse sistema.',
          'Seu verdadeiro nome, entretanto, não foi preservado de maneira confiável pela história.',
          'Ele não estabeleceu uma dinastia hereditária. Sua posição dependia da confiança e do reconhecimento da própria humanidade.',
          'Durante seu governo, o título de Rei representava a ideia de um líder escolhido para conduzir a espécie humana.',
          'Porém, eventualmente, o primeiro Rei morreu.',
          'Após sua morte, a humanidade não conseguiu encontrar um sucessor que reunisse consenso suficiente para assumir a posição.',
          'O sistema entrou em um período de instabilidade. Foi nesse momento que surgiu **Astarus**.'
        ],
        illustration: ''
      },
      {
        id: 'hist_astarus_second_king',
        title: 'Capítulo XI — Astarus e o Segundo Rei',
        content: [
          'Astarus aproveitou o vazio deixado pela morte do primeiro Rei.',
          'Sem uma sucessão hereditária estabelecida e sem alguém suficientemente poderoso para contestá-lo, Astarus simplesmente declarou a si mesmo como o **Segundo Rei**.',
          'A partir de sua ascensão, o significado do título começou a mudar. O Rei deixou de ser apenas um líder escolhido pela humanidade.',
          'Astarus transformou sua posição em uma forma de poder absoluto.',
          'Assim começou a **Ditadura Mundial de Astarus**.',
          'Esse acontecimento marca o início daquilo que posteriormente seria conhecido como a **Era de Ouro da Magia Humana**.'
        ],
        illustration: ''
      },
      {
        id: 'hist_world_dictatorship',
        title: 'Capítulo XII — A Ditadura Mundial',
        content: [
          'Astarus governava a humanidade através de sua força e autoridade.',
          'Durante seu reinado, passou a desenvolver e incentivar o treinamento de Magos.',
          'Porém, Astarus possuía uma característica particularmente cruel: ele treinava determinados Magos até que alcançassem um nível elevado de poder e experiência. Quando esses indivíduos se tornavam fortes o suficiente, Astarus os matava.',
          'Isso servia tanto à sua própria satisfação quanto ao seu desenvolvimento. Ao enfrentar Magos cada vez mais poderosos, Astarus acumulava experiência e aprimorava suas próprias capacidades.',
          'Entre seus aprendizes estava um jovem humano chamado **Yori**.'
        ],
        illustration: ''
      },
      {
        id: 'hist_yori',
        title: 'Capítulo XIII — Yori',
        content: [
          'Yori tornou-se um dos aprendizes de Astarus.',
          'Desde o início, Yori sabia que, em algum momento, teria de enfrentar seu próprio mestre.',
          'A relação entre os dois existia dentro de uma estrutura em que Astarus treinava indivíduos enquanto permanecia preparado para eventualmente destruí-los.',
          'Yori cresceu dentro desse sistema e tornou-se cada vez mais poderoso.',
          'Porém, enquanto o conflito entre mestre e discípulo se aproximava, outro acontecimento muito maior começava a transformar o mundo: a humanidade entrou em guerra contra os Revers.'
        ],
        illustration: ''
      },
      {
        id: 'hist_humanity_war',
        title: 'Capítulo XIV — A Guerra da Humanidade',
        content: [
          'O conflito entre humanos e Revers tornou-se uma guerra de proporções gigantescas.',
          'A guerra não terminou rapidamente. Ela durou **décadas**.',
          'Os humanos enfrentaram seres muito diferentes deles próprios, e o mundo foi sendo destruído ao longo do conflito.',
          'Sociedades foram devastadas. Milhares de vidas foram perdidas. A humanidade passou a existir em meio à destruição.',
          'Yori participou desse período.',
          'Com o passar dos anos, o peso da guerra e o estado da humanidade começaram a afetá-lo profundamente.',
          'Ele passou a questionar o sentido de sua própria existência e o destino de seu povo.'
        ],
        illustration: ''
      },
      {
        id: 'hist_white_owl',
        title: 'Capítulo XV — A Coruja Branca',
        content: [
          'Foi durante esse período de profunda depressão e incerteza que ocorreu um acontecimento que mudaria completamente a história humana.',
          'Enquanto Yori estava em meio àquele período de desespero, uma **coruja branca** sobrevoou os céus.',
          'Durante seu voo, a coruja deixou cair uma máscara.',
          'Yori encontrou a máscara. E decidiu colocá-la.',
          'Aquele momento rompeu uma barreira que até então separava completamente os humanos dos Revers.',
          'O Fluxo de Yori ultrapassou os limites naturais de um humano. Sua existência passou a tocar diretamente o nível dos seres divinos.',
          'Foi então que Yori deixou de ser simplesmente um humano. Ele se tornou: **O HERÓI**.'
        ],
        illustration: ''
      },
      {
        id: 'hist_the_hero',
        title: 'Capítulo XVI — O Herói',
        content: [
          'A transformação de Yori rompeu as barreiras entre a humanidade e os Revers.',
          'O Herói passou a possuir um nível de poder completamente diferente daquele dos humanos comuns.',
          'Durante a guerra, ele enfrentou os Revers e começou a alterar o equilíbrio do conflito.',
          'Sua existência tornou-se um dos principais fatores responsáveis pela sobrevivência da humanidade.',
          'O Herói lutou durante décadas. Sua guerra contra os Revers envolveu inúmeros confrontos e acontecimentos que posteriormente seriam esquecidos ou distorcidos pela história.',
          'Um dos acontecimentos associados a esse período foi **Norukat**.'
        ],
        illustration: ''
      },
      {
        id: 'hist_hero_children',
        title: 'Capítulo XVII — Os Filhos do Herói',
        content: [
          'Durante sua vida, O Herói teve filhos.',
          'Entre os filhos conhecidos estavam:\n\n• **Tsuki Katsu**\n• **Buddha**\n• **Raijin**\n• **sua filha que posteriormente se tornaria a primeira hospedeira de Sakai Ban**',
          'Tsuki Katsu era o **filho mais velho**. Posteriormente, o nome de Tsuki Katsu seria utilizado pelo próprio Herói para nomear seu sistema de técnicas universais: **Tsuki**.',
          'Buddha e Raijin posteriormente morreriam.',
          'A filha do Herói teria um destino completamente diferente. Sua existência se tornaria diretamente ligada ao selamento de Sakai Ban e à origem do Clã Kami.'
        ],
        illustration: ''
      },
      {
        id: 'hist_end_astarus',
        title: 'Capítulo XVIII — O Fim de Astarus',
        content: [
          'Enquanto a guerra contra os Revers continuava, O Herói também precisaria resolver seu conflito com Astarus.',
          'Astarus havia sido seu mestre. Porém, sua ditadura havia transformado a humanidade em uma sociedade marcada pelo domínio absoluto de um único indivíduo.',
          'O Herói finalmente enfrentou Astarus.',
          'O confronto terminou com a **morte de Astarus pelas mãos do Herói**.',
          'A derrota de Astarus encerrou sua Ditadura Mundial.',
          'O Herói passou então a ser reconhecido como o **Terceiro Rei** da humanidade.'
        ],
        illustration: ''
      },
      {
        id: 'hist_third_king',
        title: 'Capítulo XIX — O Terceiro Rei',
        content: [
          'A ascensão do Herói ao título de Rei representou uma mudança completa em relação ao governo de Astarus.',
          'O Herói não havia conquistado a posição através de uma sucessão hereditária.',
          'Ele havia se tornado o principal símbolo da humanidade durante a guerra.',
          'Sua autoridade vinha principalmente de sua força, de sua liderança e do reconhecimento daqueles que sobreviveram ao conflito.',
          'Mesmo assim, a guerra ainda não havia terminado. O Herói continuou lutando contra os Revers durante décadas.'
        ],
        illustration: ''
      },
      {
        id: 'hist_end_war',
        title: 'Capítulo XX — O Fim da Guerra',
        content: [
          'Depois de décadas de conflito, a guerra entre a humanidade e os Revers finalmente chegou ao fim.',
          'A humanidade havia sobrevivido, mas o mundo estava profundamente marcado pela destruição.',
          'O Herói havia perdido pessoas importantes ao longo de sua vida, incluindo seus próprios filhos Buddha e Raijin.',
          'Após o fim da guerra, a humanidade entrou em uma nova era.',
          'O Herói percebeu que não poderia simplesmente continuar existindo como o centro permanente da sociedade humana.',
          'Antes de desaparecer, ele criou um sistema de técnicas que poderia ser utilizado por diferentes humanos. Esse sistema recebeu o nome de: **Tsuki**, escolhido em homenagem a seu filho mais velho, **Tsuki Katsu**.',
          'Depois disso, O Herói desapareceu. Não existem registros confiáveis sobre seu destino posterior.'
        ],
        illustration: ''
      },
      {
        id: 'hist_kaisen_apprentice',
        title: 'Capítulo XXI — Kaisen, o Aprendiz do Herói',
        content: [
          'Entre aqueles que permaneceram após a guerra estava **Kaisen**.',
          'Kaisen havia sido aprendiz do Herói e tornou-se alguém extremamente próximo dele, assumindo uma posição semelhante à de um filho adotivo.',
          'Após o desaparecimento do Herói, Kaisen tornou-se o **Quarto Rei**.',
          'Seu governo ocorreu em um período completamente diferente daquele de Astarus. A humanidade precisava se reconstruir.',
          'Kaisen passou a utilizar seus conhecimentos para desenvolver a sociedade e principalmente as técnicas de **selamento**.',
          'Seu conhecimento nessa área acabaria sendo fundamental para um dos acontecimentos mais importantes da história humana.'
        ],
        illustration: ''
      },
      {
        id: 'hist_sakai_confrontation',
        title: 'Capítulo XXII — Sakai Ban e o Confronto com o Herói',
        content: [
          'Enquanto O Herói ainda estava ativo, um dos maiores confrontos de sua vida ocorreu contra **Sakai Ban**.',
          'Os dois lutaram durante **meses**. O combate foi extremamente prolongado.',
          'No fim, teoricamente, Sakai Ban havia perdido.',
          'Porém, Sakai Ban não aceitou a ideia de sair derrotado.',
          'Mesmo depois de chegar ao limite, decidiu utilizar suas forças restantes para realizar uma técnica extrema.',
          'Essa técnica seria conhecida como: **BABEL**.'
        ],
        illustration: ''
      },
      {
        id: 'hist_babel',
        title: 'Capítulo XXIII — Babel',
        content: [
          'Babel foi o ataque mais poderoso utilizado por Sakai Ban.',
          'Seu objetivo não era simplesmente derrotar um adversário.',
          'Sakai Ban utilizou suas forças restantes para provocar uma alteração gigantesca no sistema energético da humanidade.',
          'O ataque atingiu os **Fluxos de diversas pessoas**.',
          'A alteração foi tão profunda que modificou permanentemente a estrutura energética humana.',
          'A humanidade das gerações posteriores jamais voltaria a possuir exatamente o mesmo nível de potencial daquela época.',
          'A partir de Babel, os humanos passaram a ser, estruturalmente, **mais fracos do que os humanos da era em que O Herói e Sakai Ban existiam**.',
          'O ataque, portanto, não foi apenas destrutivo. Ele alterou a própria evolução mágica da humanidade.'
        ],
        illustration: ''
      },
      {
        id: 'hist_malevolent_energy',
        title: 'Capítulo XXIV — O Surgimento da Energia Malévola',
        content: [
          'A alteração provocada por Babel foi extremamente brusca.',
          'O sistema de Fluxos humanos sofreu uma mudança repentina. Essa movimentação criou uma nova variável energética.',
          'A partir dessa instabilidade surgiu a: **Energia Malévola**.',
          'Posteriormente, ela também passou a ser conhecida simplesmente como: **Energia Negativa**.',
          'A Energia Malévola tornou-se uma consequência permanente da alteração provocada por Babel.',
          'Dessa forma, a origem da Energia Negativa está diretamente ligada à utilização de Babel por Sakai Ban.',
          'A técnica não apenas enfraqueceu permanentemente a humanidade. Ela também criou uma nova forma de energia que passaria a influenciar a história humana durante as eras seguintes.'
        ],
        illustration: ''
      },
      {
        id: 'hist_sakai_fragility',
        title: 'Capítulo XXV — A Fragilidade de Sakai Ban',
        content: [
          'Babel exigiu praticamente tudo que Sakai Ban ainda possuía.',
          'Depois de utilizar a técnica, sua condição tornou-se extremamente debilitada.',
          'Foi nesse momento que **Kaisen** percebeu uma oportunidade.',
          'Kaisen não enfrentou Sakai Ban no auge de seu poder. Ele aproveitou a fragilidade provocada pelo próprio Babel.',
          'O antigo aprendiz do Herói utilizou seus conhecimentos de selamento para criar uma forma de aprisionar Sakai Ban.'
        ],
        illustration: ''
      },
      {
        id: 'hist_tousen_kami',
        title: 'Capítulo XXVI — Tousen Kami',
        content: [
          'Kaisen utilizou uma estrutura de selamento conhecida como: **Tousen Kami**.',
          'A Tousen Kami foi criada especificamente para conter Sakai Ban.',
          'Como Sakai Ban era um ser de poder extremamente elevado, o selamento precisava possuir uma estrutura capaz de suportar sua existência e impedir que ele simplesmente escapasse.',
          'A primeira pessoa utilizada nesse sistema foi uma das filhas do Herói. Ela tornou-se a **primeira hospedeira de Sakai Ban**.',
          'A partir daquele momento, a linhagem do Herói passou a estar diretamente conectada ao selamento de Sakai Ban.'
        ],
        illustration: ''
      },
      {
        id: 'hist_clan_kami_origin',
        title: 'Capítulo XXVII — A Origem do Clã Kami',
        content: [
          'O sistema de sucessão da Tousen Kami criou uma linhagem própria.',
          'A partir da primeira hospedeira, o conhecimento e a responsabilidade pelo selamento foram transmitidos através das gerações.',
          'Essa linhagem tornou-se conhecida como: **Clã Kami**.',
          'O Clã Kami, portanto, não surgiu simplesmente como uma família poderosa de Magos. Sua origem está diretamente ligada ao **selamento de Sakai Ban**.',
          'A família existe para manter a continuidade da Tousen Kami e garantir que Sakai Ban permaneça contido.',
          'Os descendentes da linhagem passam a carregar a responsabilidade de preservar o sistema de selamento.'
        ],
        illustration: ''
      },
      {
        id: 'hist_sakai_host',
        title: 'Capítulo XXVIII — O Hospedeiro de Sakai Ban',
        content: [
          'O sistema criado por Kaisen possui uma característica fundamental: Sakai Ban pode ser transferido entre diferentes hospedeiros.',
          'O ritual foi desenvolvido para permitir que a existência de Sakai Ban continue sendo mantida dentro da Tousen Kami sem depender eternamente de uma única pessoa.',
          'A escolha do hospedeiro está relacionada ao sistema mágico humano. Indivíduos com **2 círculos ou mais** possuem características particularmente adequadas para suportar a estrutura.',
          'Quando Sakai Ban é transferido para um novo hospedeiro, sua própria existência interfere profundamente no corpo e no Fluxo daquele indivíduo.',
          'O hospedeiro deixa de funcionar exatamente como um humano comum. A presença de Sakai Ban passa a ocupar uma posição dominante em sua estrutura.'
        ],
        illustration: ''
      },
      {
        id: 'hist_sakai_adaptation',
        title: 'Capítulo XXIX — A Adaptação de Sakai Ban',
        content: [
          'A presença de Sakai Ban dentro de um hospedeiro produz uma consequência extremamente importante: seu poder interfere no Fluxo original do indivíduo.',
          'A Magia natural do hospedeiro pode ser sobreposta ou comprometida pela existência de Sakai Ban.',
          'Isso explica por que o sistema de sucessão da Tousen Kami exige indivíduos capazes de suportar uma estrutura tão anormal.',
          'Ao longo das gerações, o Clã Kami desenvolveu conhecimentos específicos para manter esse processo funcionando.'
        ],
        illustration: ''
      },
      {
        id: 'hist_hero_heritage',
        title: 'Capítulo XXX — A Herança do Herói',
        content: [
          'A história da humanidade passou a carregar duas heranças diferentes deixadas pelo Herói.',
          'A primeira foi sua própria linhagem. Seus filhos deram origem a diferentes caminhos históricos:\n\n• **Tsuki Katsu** tornou-se a inspiração para o sistema Tsuki.\n• **Buddha** e **Raijin** morreram durante os acontecimentos da era.\n• Sua filha tornou-se a primeira hospedeira de Sakai Ban e deu origem à linhagem do Clã Kami.',
          'A segunda herança foi o próprio impacto do Herói sobre a humanidade.',
          'Sua existência demonstrou que um humano poderia ultrapassar as barreiras naturais que separavam os homens dos deuses.'
        ],
        illustration: ''
      },
      {
        id: 'hist_babel_heritage',
        title: 'Capítulo XXXI — A Herança de Babel',
        content: [
          'A humanidade também passou a carregar uma herança deixada por seu inimigo.',
          'Babel modificou os Fluxos humanos para sempre.',
          'Os humanos posteriores passaram a nascer em uma estrutura energética diferente daquela existente durante a era do Herói.',
          'O potencial mágico humano tornou-se permanentemente inferior ao daquela época.',
          'Além disso, a alteração criou a Energia Malévola.',
          'Assim, uma única técnica de Sakai Ban modificou dois aspectos fundamentais da humanidade: **o potencial mágico dos humanos** e **a própria natureza energética do mundo humano**.'
        ],
        illustration: ''
      },
      {
        id: 'hist_magic_system_evolution',
        title: 'Capítulo XXXII — A Evolução do Sistema Mágico',
        content: [
          'Após a guerra e o período dos grandes Reis, a humanidade começou a desenvolver sistemas mágicos cada vez mais estruturados.',
          'O conhecimento acumulado pelos Magos passou a ser transmitido entre gerações.',
          'As diferentes formas de utilização da Energia Espiritual foram desenvolvidas. Os Fluxos começaram a apresentar diferentes atributos.',
          'Surgiram Magias relacionadas a elementos, subelementos e conceitos mais abstratos. O sistema mágico humano tornou-se progressivamente mais complexo.',
          'Mesmo assim, a humanidade jamais recuperou completamente o potencial que possuía antes de Babel.'
        ],
        illustration: ''
      },
      {
        id: 'hist_circle_system',
        title: 'Capítulo XXXIII — O Sistema de Círculos',
        content: [
          'Com o passar das gerações, a distância genética em relação ao Herói passou a ser utilizada como uma forma de determinar o potencial natural de um indivíduo.',
          'Surgiu então o sistema dos **círculos**.',
          'O Herói representa: **0 círculos**.',
          'Seus filhos diretos representam: **1 círculo**.',
          'Porém, atualmente não existem humanos naturalmente nascidos com 1 círculo.',
          'Os humanos contemporâneos mais próximos da linhagem do Herói podem alcançar: **2 círculos**.',
          'O número de círculos não representa a força atual de uma pessoa. Ele representa principalmente sua **proximidade genética em relação ao Herói e seu potencial máximo natural**.',
          'Quanto menor o número, maior o potencial.'
        ],
        illustration: ''
      },
      {
        id: 'hist_circle_transmission',
        title: 'Capítulo XXXIV — A Transmissão dos Círculos',
        content: [
          'A quantidade de círculos de um descendente é determinada pela combinação dos círculos de seus pais.',
          'O valor esperado corresponde aproximadamente à média dos dois.',
          'Porém, existe uma margem de variação de aproximadamente **cinco círculos para mais ou para menos**.',
          'Essa variação permite que a distância genética em relação ao Herói aumente ou diminua ao longo das gerações.',
          'Por esse motivo, indivíduos de uma mesma família podem apresentar potenciais muito diferentes.',
          'Ao longo de muitas gerações, a combinação de diferentes indivíduos pode teoricamente produzir pessoas novamente extremamente próximas da linhagem original do Herói.'
        ],
        illustration: ''
      },
      {
        id: 'hist_two_circles_individuals',
        title: 'Capítulo XXXV — Os Indivíduos de Dois Círculos',
        content: [
          'Os indivíduos de 2 círculos representam uma categoria extremamente rara.',
          'Sua genialidade interfere no próprio desenvolvimento do Fluxo ainda durante a gestação.',
          'Em vez de desenvolver normalmente a Magia de atributo para a qual seu Fluxo estaria destinado, sua estrutura energética se reorganiza.',
          'O resultado é uma espécie de bloqueio natural à Magia de atributo. Esses indivíduos passam a utilizar principalmente **Energia Espiritual sem atributo**.',
          'Sua genialidade é tão elevada que pode ser compreendida como um: **talento do talento**.',
          'Eles não possuem simplesmente um talento excepcional. Sua capacidade é suficiente para interferir no próprio desenvolvimento do talento que deveriam possuir.'
        ],
        illustration: ''
      },
      {
        id: 'hist_end_kings_system',
        title: 'Capítulo XXXVI — O Fim do Sistema dos Reis',
        content: [
          'Kaisen permaneceu como o **Quarto Rei** da humanidade durante uma fase de reconstrução e desenvolvimento.',
          'Seu governo foi marcado principalmente pela organização da humanidade e pelo desenvolvimento de conhecimentos mágicos e de selamento.',
          'Com o passar do tempo, entretanto, tornou-se cada vez menos necessário que toda a humanidade fosse administrada por um único Rei.',
          'A sociedade havia se tornado maior e mais complexa. O desenvolvimento das diferentes regiões humanas tornou a ideia de uma única autoridade mundial cada vez menos prática.',
          'O próprio mundo também passou por mudanças geográficas.'
        ],
        illustration: ''
      },
      {
        id: 'hist_continents_division',
        title: 'Capítulo XXXVII — Babel e a Divisão dos Continentes',
        content: [
          'Em algum momento da história posterior, os acontecimentos relacionados a **Babel** contribuíram para uma transformação profunda da estrutura do mundo humano.',
          'Os continentes acabaram separados.',
          'A humanidade deixou de existir sobre uma única massa continental como na época de sua criação.',
          'Com diferentes povos e regiões separados geograficamente, tornou-se ainda mais difícil manter uma única autoridade mundial.',
          'A ideia original de um Rei responsável por toda a humanidade perdeu gradualmente sua utilidade.'
        ],
        illustration: ''
      },
      {
        id: 'hist_end_golden_age',
        title: 'Capítulo XXXVIII — O Fim da Era de Ouro da Magia Humana',
        content: [
          'A **Era de Ouro da Magia Humana** não corresponde à época dos Revers nem à história de Kami-Sekai. Ela é especificamente o período de maior desenvolvimento e transformação da humanidade durante sua história antiga.',
          'Seu início é marcado pela ascensão de: **Astarus como Segundo Rei e pelo estabelecimento de sua Ditadura Mundial**.',
          'Seu encerramento ocorre durante o período do governo de: **Kaisen, o Quarto Rei**.',
          'Dentro desse período ocorreram alguns dos acontecimentos mais importantes da história humana:\n\n• A Ditadura Mundial de Astarus;\n• O treinamento dos grandes Magos;\n• A ascensão de Yori;\n• O surgimento do Herói;\n• A Guerra da Humanidade contra os Revers;\n• A morte de Astarus;\n• A ascensão do Herói como Terceiro Rei;\n• O desaparecimento do Herói;\n• O governo de Kaisen;\n• O uso de Babel por Sakai Ban;\n• O surgimento da Energia Malévola;\n• O selamento de Sakai Ban;\n• A criação da Tousen Kami;\n• A origem do Clã Kami;\n• E a consolidação dos sistemas mágicos humanos.'
        ],
        illustration: ''
      },
      {
        id: 'hist_the_legacy',
        title: 'Capítulo XXXIX — O Legado',
        content: [
          'A história da humanidade foi moldada pela influência de diferentes figuras.',
          '• **Asmodeus** criou a humanidade.\n• **Astarus** transformou o mundo humano através da Ditadura Mundial.\n• **Yori** rompeu as barreiras entre humanos e deuses e tornou-se O Herói.\n• **O Herói** derrotou Astarus, lutou contra os Revers, criou Tsuki e deixou uma linhagem que continuaria influenciando a humanidade.\n• **Sakai Ban** enfrentou O Herói durante meses e, ao utilizar Babel, modificou permanentemente o Fluxo humano e criou a Energia Malévola.\n• **Kaisen**, antigo aprendiz do Herói, aproveitou a fragilidade deixada por Babel e selou Sakai Ban através da Tousen Kami.',
          'A primeira hospedeira da Tousen Kami foi uma filha do Herói. Sua linhagem deu origem ao **Clã Kami**.',
          'Assim, a história humana passou a carregar simultaneamente a herança do Herói e a marca deixada por Sakai Ban.'
        ],
        illustration: ''
      },
      {
        id: 'hist_humanity_after_golden_age',
        title: 'Capítulo XL — A Humanidade Após a Era de Ouro',
        content: [
          'Depois do fim da Era de Ouro, a humanidade entrou em uma fase de desenvolvimento gradual.',
          'As antigas histórias começaram a ser esquecidas. Os nomes de figuras importantes foram distorcidos. A verdadeira natureza de Sakai Ban foi gradualmente perdida.',
          'O sistema de hospedeiros da Tousen Kami continuou sendo mantido pelo Clã Kami, enquanto o restante da humanidade passou a conhecer apenas fragmentos da história antiga.',
          'A existência do Herói também se tornou cada vez mais distante. Os acontecimentos da Guerra da Humanidade passaram a ser tratados como acontecimentos de um passado remoto.',
          'Ainda assim, as consequências daquela época permaneceram presentes:\n\n• Os humanos continuaram possuindo os Fluxos alterados por Babel;\n• A Energia Malévola continuou existindo;\n• O Clã Kami continuou carregando Sakai Ban;\n• E o sistema de círculos continuou registrando a distância genética em relação a **O Herói**.'
        ],
        illustration: ''
      },
      {
        id: 'hist_the_persisting_history',
        title: 'Capítulo XLI — A História que Permanece',
        content: [
          'A humanidade moderna existe sobre as consequências de acontecimentos que começaram muito antes de suas sociedades atuais.',
          'Os humanos foram criados por Asmodeus. Foram governados pelo primeiro Rei. Foram dominados por Astarus. Foram salvos pelo Herói. Foram transformados por Babel. E passaram a carregar as consequências dessas figuras.',
          'O Herói deixou sua linhagem. Sakai Ban deixou sua marca no Fluxo. Kaisen deixou o sistema de selamento. E a humanidade continuou evoluindo.',
          'Mesmo quando os nomes desapareceram da memória comum, as consequências permaneceram: o sangue do Herói continuou sendo transmitido, a Tousen Kami continuou existindo, a Energia Malévola continuou fluindo, e Sakai Ban continuou esperando dentro de seus hospedeiros.',
          'A história da humanidade, portanto, nunca foi apenas uma sequência de guerras e reis. Ela foi construída pela interação entre **humanos, Revers, Fluxos, almas, magia e aqueles que ultrapassaram os limites naturais de sua própria espécie**.',
          'E, entre todos esses acontecimentos, a história de O Herói permaneceu como o ponto central de uma era que jamais poderia ser completamente esquecida.'
        ],
        illustration: ''
      }
    ]
  },
  {
    id: 'mundos_regioes',
    title: 'Mundos e Regiões',
    subtitle: 'A Estrutura Geográfica da Existência',
    category: 'Geografia & Cosmologia',
    coverColor: 'from-[#042f2e] to-[#021817] border-[#0d9488]',
    coverPattern: 'text-teal-400/30 border-teal-500/30',
    textColor: 'text-teal-300',
    iconName: 'Compass',
    chapters: [
      {
        id: 'mr_01',
        title: 'Capítulo I — A Estrutura Geográfica da Existência',
        content: [
          'A realidade conhecida é formada por diferentes níveis de organização.',
          'O maior nível conhecido é o **Universo**, dentro do qual existem diferentes **Mundos**.',
          'Cada Mundo é dividido em grandes estruturas chamadas **Vortex**, e cada Vortex pode conter diferentes **Dimensões**.',
          'A relação básica é:\n\n**Universo → Mundo → Vortex → Dimensão**',
          'Essa organização não representa necessariamente distância física.',
          'Um Vortex não precisa estar "longe" de outro da mesma maneira que dois lugares de um planeta estão separados. Trata-se principalmente de uma divisão estrutural da própria realidade.',
          'Atualmente, dois grandes Mundos possuem importância conhecida:\n\n**Kami-Sekai** e **Ningen-Sekai**.',
          'Existe ainda o **Vazio**, que não pertence à criação e, portanto, não é considerado um Mundo.'
        ],
        illustration: ''
      },
      {
        id: 'mr_02',
        title: 'Capítulo II — Kami-Sekai',
        content: [
          '**Kami-Sekai** é o Mundo associado principalmente aos Revers e às estruturas divinas.',
          'É uma região da existência completamente diferente do Ningen-Sekai.',
          'Sua organização não foi criada pensando exclusivamente em sociedades mortais. Cada Vortex possui uma função própria dentro da estrutura divina.',
          'Atualmente, Kami-Sekai possui **cinco Vortex conhecidos**:\n\n1. Reino dos Revers;\n2. Recanto de The God;\n3. Submundo;\n4. Dimensão das Dimensões;\n5. Vortex da Memória.'
        ],
        illustration: ''
      },
      {
        id: 'mr_03',
        title: 'Capítulo III — Reino dos Revers',
        content: [
          'O **Reino dos Revers** é a principal região de convivência social de Kami-Sekai.',
          'É onde a sociedade dos Revers está estabelecida.',
          'Nesse Vortex, os Revers podem viver, estudar, treinar, socializar e desenvolver suas próprias atividades.',
          'Apesar de sua importância, o Reino dos Revers representa apenas uma parte de Kami-Sekai.',
          'A sociedade dos Revers não ocupa todo o Mundo. Existem outros Vortex com funções completamente diferentes.',
          'Os Revers possuem uma natureza particular dentro da criação e utilizam **Energia Nula**, desenvolvendo técnicas classificadas como **Feitiçaria**.',
          'A existência desse sistema torna o Reino dos Revers diferente das regiões ocupadas pelas espécies do Ningen-Sekai.'
        ],
        illustration: ''
      },
      {
        id: 'mr_04',
        title: 'Capítulo IV — Recanto de The God',
        content: [
          'O **Recanto de The God** é uma das regiões mais isoladas de Kami-Sekai.',
          'É o local onde **The God** reside e descansa.',
          'Sua localização e estrutura são mantidas de maneira extremamente restrita.',
          'Praticamente nenhum ser possui autorização para entrar nesse Vortex.',
          'As únicas exceções conhecidas são os quatro Primordiais:\n\n• Zakels Lisk;\n• Luciferus Asmodeus;\n• Sakai Ban;\n• Kyoka Uryu.',
          'O Recanto não funciona como uma cidade, reino ou região de convivência. Sua principal característica é justamente o isolamento.'
        ],
        illustration: ''
      },
      {
        id: 'mr_05',
        title: 'Capítulo V — Submundo',
        content: [
          'O **Submundo** é um Vortex de Kami-Sekai relacionado ao destino de determinadas almas.',
          'Sua existência está diretamente ligada ao sistema de almas do Ningen-Sekai.',
          'Nem todas as almas que morrem seguem para o Submundo. Ele é destinado principalmente às almas que não conseguem completar normalmente seu ciclo de morte, espera, reciclagem e reencarnação.',
          'O Submundo possui uma característica geográfica muito diferente das demais regiões de Kami-Sekai.',
          'É formado por extensas áreas naturais e regiões de aparência sombria, incluindo florestas densas, regiões escuras, estruturas decadentes e ambientes de aparência quase apocalíptica.',
          'É também o principal território dos **Daichimon**. Os Daichimon são uma espécie associada ao Submundo, embora sua origem e funcionamento biológico sejam tratados em outro livro.',
          'Historicamente, o Submundo esteve ligado ao governo de **Luciferus Asmodeus**, considerado seu primeiro Imperador.',
          'Depois de seu exílio, a região passou por um longo período de pouca autoridade formal.',
          'O Submundo permanece, portanto, como uma das regiões mais particulares de toda a criação.'
        ],
        illustration: ''
      },
      {
        id: 'mr_06',
        title: 'Capítulo VI — Dimensão das Dimensões',
        content: [
          'Apesar do nome, a **Dimensão das Dimensões** é um **Vortex** de Kami-Sekai.',
          'É uma estrutura gigantesca relacionada aos **Kami no Tenkai** e às manifestações ligadas aos Revers.',
          'Sua escala é extremamente superior à de uma região comum. Grande parte de seu espaço é formada por extensões praticamente vazias.',
          'Os diferentes Kami no Tenkai encontram-se separados por distâncias absurdamente grandes.',
          'Por esse motivo, a Dimensão das Dimensões não funciona como uma sociedade convencional. Não existe uma grande cidade onde todos os Kami no Tenkai convivam.',
          'Cada manifestação ocupa uma região própria dentro da imensidão desse Vortex. Entre elas existem grandes extensões de espaço vazio, chamadas de **Vácuo**.',
          'Esse Vácuo continua pertencendo à criação e não deve ser confundido com o **Vazio**.'
        ],
        illustration: ''
      },
      {
        id: 'mr_07',
        title: 'Capítulo VII — Vortex da Memória',
        content: [
          'O **Vortex da Memória** abriga uma entidade criada por The God para preservar aquilo que foi, está sendo ou já aconteceu dentro da existência.',
          'A entidade funciona como um grande memorial vivo. Ela conhece **o passado** e **o presente**. Porém, não possui conhecimento do futuro.',
          'Sua função faz com que o Vortex tenha importância muito maior do que a de uma simples região geográfica. Ele representa um dos principais pontos de preservação da história da existência.',
          'Mesmo acontecimentos que deixaram de ser conhecidos pelos povos atuais continuam registrados nesse local.',
          'Por isso, o Vortex da Memória funciona como uma espécie de arquivo absoluto da existência, embora sua entidade não dependa de livros, documentos ou registros físicos.'
        ],
        illustration: ''
      },
      {
        id: 'mr_08',
        title: 'Capítulo VIII — Ningen-Sekai',
        content: [
          'O **Ningen-Sekai** é o Mundo onde se desenvolveu a civilização humana.',
          'Apesar do nome, ele não pertence exclusivamente à humanidade. Diversas espécies vivem dentro de seus Vortex.',
          'É nele que estão localizados os principais territórios das espécies mortais e as grandes nações humanas.',
          'Atualmente, o Ningen-Sekai possui **seis Vortex**:\n\n1. Vortex dos Void-Golems;\n2. Vortex dos Slimes;\n3. Vortex dos Fae;\n4. VCE;\n5. Reino dos Humanos;\n6. Exílio de Luciferus Asmodeus.',
          'Cada região possui uma função e uma população predominante diferente.'
        ],
        illustration: ''
      },
      {
        id: 'mr_09',
        title: 'Capítulo IX — Vortex dos Void-Golems',
        content: [
          'O primeiro Vortex do Ningen-Sekai está relacionado aos **Void-Golems**.',
          'Foi originalmente criado por Luciferus Asmodeus como a região destinada à espécie posteriormente colocada sob a posse de Zakels Lisk.',
          'Os Void-Golems possuem suas próprias estruturas sociais e territoriais dentro desse Vortex. Sua presença é concentrada principalmente nessa região.',
          'Os detalhes sobre a fisiologia, reprodução, organização interna e capacidades dos Void-Golems serão tratados no livro dedicado às espécies.',
          'Dentro da geografia do Ningen-Sekai, sua principal importância está em representar o território histórico de uma das três espécies antigas criadas antes da humanidade.'
        ],
        illustration: ''
      },
      {
        id: 'mr_10',
        title: 'Capítulo X — Vortex dos Slimes',
        content: [
          'O segundo Vortex do Ningen-Sekai é associado aos **Slimes**.',
          'A espécie foi criada por Luciferus Asmodeus e posteriormente colocada sob a posse de **Sakai Ban**.',
          'Esse Vortex representa a principal região histórica de presença dos Slimes.',
          'Assim como acontece com os Void-Golems, a organização interna e as características da espécie não serão aprofundadas aqui.',
          'Sua função neste livro é principalmente geográfica: representar uma das grandes regiões ocupadas pelas espécies antigas do Ningen-Sekai.'
        ],
        illustration: ''
      },
      {
        id: 'mr_11',
        title: 'Capítulo XI — Vortex dos Fae',
        content: [
          'O terceiro Vortex do Ningen-Sekai é o território associado aos **Fae**.',
          'Os Fae foram criados por Luciferus Asmodeus e posteriormente colocados sob a posse de **Kyoka Uryu**.',
          'É uma das regiões mais antigas do Ningen-Sekai. Sua população é formada principalmente por Fae, embora a presença de indivíduos de outras origens possa existir dependendo da região.',
          'Esse Vortex também possui importância especial por estar relacionado à origem de personagens e acontecimentos que posteriormente alcançariam outras regiões do Mundo.',
          'Entre eles está **Marutsuki**, um Fae que carrega um fragmento da alma de O Herói.'
        ],
        illustration: ''
      },
      {
        id: 'mr_12',
        title: 'Capítulo XII — VCE — Vácuo da Comunicação de Espécies',
        content: [
          'O quarto Vortex do Ningen-Sekai é conhecido como: **VCE — Vácuo da Comunicação de Espécies**.',
          'Diferentemente dos três Vortex anteriores, o VCE possui uma função principalmente de conexão.',
          'Ele foi criado para permitir que diferentes espécies pudessem entrar em contato.',
          'O VCE funciona como uma região neutra destinada a atividades como comunicação, comércio, troca de informações, negociação, contato cultural e relações entre diferentes povos.',
          'Sua existência é especialmente importante porque as diferentes espécies do Ningen-Sekai não vivem todas no mesmo território.',
          'O VCE permite que sociedades separadas por enormes distâncias mantenham algum nível de contato.',
          'O nome também não deve ser interpretado como referência ao Vazio. O VCE está completamente dentro da criação.'
        ],
        illustration: ''
      },
      {
        id: 'mr_13',
        title: 'Capítulo XIII — Reino dos Humanos',
        content: [
          'O quinto Vortex do Ningen-Sekai é o **Reino dos Humanos**.',
          'É a principal região habitada pela humanidade.',
          'Sua origem está diretamente ligada à criação dos humanos por Luciferus Asmodeus. Foi nesse Vortex que a humanidade desenvolveu suas sociedades, suas nações e seu sistema mágico.',
          'Com o passar das eras, diferentes povos humanos passaram a ocupar regiões próprias.',
          'A antiga humanidade existia sobre uma única grande massa continental, conhecida como **Pangeia**.',
          'Posteriormente, o mundo passou por transformações geográficas e os continentes se separaram. As sociedades humanas passaram então a se desenvolver em diferentes regiões.',
          'Atualmente existem diversas nações e territórios dentro do Reino dos Humanos.'
        ],
        illustration: ''
      },
      {
        id: 'mr_14',
        title: 'Capítulo XIV — O Inferno',
        content: [
          'O Reino dos Humanos possui uma segunda denominação.',
          'Entre as outras espécies do Ningen-Sekai, ele é conhecido como: **Inferno**.',
          'Esse nome nasceu da história da guerra entre humanos e os Revers.',
          'Como consequência dos relatos transmitidos pelas espécies antigas, os humanos passaram a ser conhecidos como **Asura**.',
          'Para essas espécies, os humanos eram os seres responsáveis por terem enfrentado e "matado os deuses".',
          'Assim, o nome Inferno não representa um lugar de punição após a morte. É simplesmente o nome utilizado por outras espécies para designar o território humano.',
          'Portanto:\n\n**Humanos → Reino dos Humanos**\n\n**Outras espécies → Inferno**\n\nAs duas denominações se referem ao mesmo Vortex.'
        ],
        illustration: ''
      },
      {
        id: 'mr_15',
        title: 'Capítulo XV — Tritéia',
        content: [
          '**Tritéia** é uma das principais nações humanas conhecidas.',
          'Sua história está profundamente ligada ao desenvolvimento da sociedade mágica.',
          'É a terra de origem de diversos Magos importantes e de figuras que ocupam posições de destaque dentro da sociedade mágica.',
          'Entre seus indivíduos conhecidos estão:\n\n• Reiji Kami;\n• Frades Kami;\n• Levi no Katsu;\n• Mayuri Cifer;\n• Kairo Ishiba.',
          'Tritéia possui, portanto, uma forte presença histórica e política dentro da humanidade.',
          'Apesar disso, seus detalhes territoriais específicos e sua organização interna ainda fazem parte da geografia que será aprofundada posteriormente.'
        ],
        illustration: ''
      },
      {
        id: 'mr_16',
        title: 'Capítulo XVI — Vale Shibara',
        content: [
          'O **Vale Shibara** é outra das principais regiões humanas conhecidas.',
          'É uma nação associada principalmente à linhagem e à história da família Shibara.',
          'Entre os personagens originários do Vale está **Mikael Dutri**, atual Mago Supremo da Sociedade Mágica.',
          'O território também possui relação com personagens importantes da história do sistema de selamento, especialmente **Kaisen Shibara** e **Merai Shibara**.',
          'O Vale Shibara representa, portanto, uma região de grande importância dentro da estrutura política e mágica humana.'
        ],
        illustration: ''
      },
      {
        id: 'mr_17',
        title: 'Capítulo XVII — Reino dos Céus',
        content: [
          'O **Reino dos Céus** é uma das principais nações humanas.',
          'Possui uma estrutura monárquica e uma família real própria.',
          'A família **Royal** possui grande importância dentro do Reino. Entre seus membros estão:\n\n• Rod Royal;\n• Stellix Royal.',
          'O Reino dos Céus também possui uma tradição mágica bastante desenvolvida.',
          'Entre seus indivíduos de maior destaque está **Hillin Scrov**, especialista em regeneração celular.',
          'Rod Royal, além de membro da família real, ocupa uma das posições mais altas do sistema de poder humano e é reconhecido como a mais poderosa das Quatro Luas.'
        ],
        illustration: ''
      },
      {
        id: 'mr_18',
        title: 'Capítulo XVIII — Borugal',
        content: [
          '**Borugal** é uma das principais nações humanas.',
          'Sua sociedade possui características culturais próprias e uma identidade diferente de regiões como Tritéia e o Reino dos Céus.',
          'Dois Astras importantes possuem origem em Borugal:\n\n**Daiki Zoltrak** e **Ferdinando Santos**.',
          'Daiki possui descendência de Tritéia, demonstrando que a origem cultural e a herança familiar nem sempre correspondem exatamente à nação onde um indivíduo nasceu.',
          'Borugal representa, portanto, uma das grandes regiões humanas do Ningen-Sekai.'
        ],
        illustration: ''
      },
      {
        id: 'mr_19',
        title: 'Capítulo XIX — Estados Unidos da Vórtex',
        content: [
          'Os **Estados Unidos da Vórtex**, frequentemente chamados de **EUV**, são uma grande potência humana do Ningen-Sekai.',
          'Sua principal cidade é **Nova Newton**.',
          'Nova Newton funciona como a **capital dos Estados Unidos da Vórtex**.',
          'A região possui grande importância na sociedade mágica humana. Entre seus indivíduos estão:\n\n• Luck Speed;\n• Millin Ain;\n• Meguro.',
          'Os Estados Unidos da Vórtex representam uma das principais potências políticas e territoriais do mundo humano contemporâneo.',
          'Sua própria denominação reflete a organização política de uma sociedade humana que se desenvolveu muito depois das antigas eras da humanidade.'
        ],
        illustration: ''
      },
      {
        id: 'mr_20',
        title: 'Capítulo XX — Nova Newton',
        content: [
          '**Nova Newton** é a capital dos Estados Unidos da Vórtex.',
          'A cidade representa um dos principais centros urbanos e políticos do país.',
          'Por estar associada aos Estados Unidos da Vórtex, Nova Newton faz parte do lado mais moderno da civilização humana contemporânea.',
          'Seu desenvolvimento ocorre em um mundo onde magia e tecnologia coexistem, ainda que a maior parte da população comum não conheça a verdadeira extensão do sistema mágico.',
          'A cidade é, portanto, uma das principais referências para a civilização humana atual.'
        ],
        illustration: ''
      },
      {
        id: 'mr_21',
        title: 'Capítulo XXI — Outras Regiões Humanas',
        content: [
          'As nações conhecidas atualmente não representam necessariamente toda a extensão do Reino dos Humanos.',
          'Existem outras regiões, cidades e territórios cuja descrição ainda pode ser desenvolvida.',
          'O mundo humano é muito maior do que as poucas localidades associadas aos personagens atualmente conhecidos.',
          'Por isso, novas nações e subdivisões podem ser introduzidas posteriormente sem alterar a estrutura principal do Ningen-Sekai.',
          'A divisão entre os grandes Vortex permanece a mesma.'
        ],
        illustration: ''
      },
      {
        id: 'mr_22',
        title: 'Capítulo XXII — Exílio de Luciferus Asmodeus',
        content: [
          'O sexto Vortex do Ningen-Sekai é o **Exílio de Luciferus Asmodeus**.',
          'É o menor dos Vortex dos dois Mundos atualmente conhecidos. Ainda assim, sua escala continua sendo gigantesca.',
          'A diferença de tamanho existe principalmente porque o Vortex possui poucas estruturas em seu interior.',
          'Sua característica visual mais marcante é a ausência quase completa de luz.',
          'A escuridão do Vortex é tão intensa que a experiência se aproxima da sensação de estar com os olhos fechados mesmo quando os olhos permanecem abertos.'
        ],
        illustration: ''
      },
      {
        id: 'mr_23',
        title: 'Capítulo XXIII — O Portão do Exílio',
        content: [
          'Em uma região desconhecida do Vortex encontra-se um enorme portão de aparência cinza-prateada. Sua posição não é conhecida com precisão.',
          'O portão possui diversas inscrições e funciona como a passagem para uma estrutura interna ainda mais importante.',
          'Ele é protegido por: **Kaisen Shibara** e **Merai Shibara**.',
          'Os dois guardiões possuem funções diferentes relacionadas à proteção do exílio.'
        ],
        illustration: ''
      },
      {
        id: 'mr_24',
        title: 'Capítulo XXIV — A Dimensão de Asmodeus',
        content: [
          'Atrás do portão existe uma **Dimensão própria** localizada dentro do Vortex do Exílio.',
          'Ela abriga o reino pessoal de Luciferus Asmodeus. No interior encontra-se um enorme castelo onde Asmodeus permanece.',
          'A região possui uma quantidade extremamente elevada de **Energia Espiritual**.',
          'Essa concentração energética permite que Asmodeus permaneça em recuperação.',
          'A estrutura pode ser resumida como:\n\n**Vortex do Exílio → Portão → Dimensão de Asmodeus → Reino e Castelo de Luciferus Asmodeus**'
        ],
        illustration: ''
      },
      {
        id: 'mr_25',
        title: 'Capítulo XXV — A Natureza do Exílio',
        content: [
          'O local não deve ser entendido como uma prisão convencional.',
          'Luciferus Asmodeus não está tentando escapar de uma estrutura que o mantém contra sua vontade. Ele próprio escolheu permanecer em exílio.',
          'Por esse motivo, a função dos guardiões não é impedir uma fuga.',
          'Sua função é proteger o isolamento de Asmodeus e impedir que outras pessoas alcancem ou interfiram em sua recuperação.',
          'O Vortex do Exílio é, portanto, uma região de **proteção do exílio**, e não simplesmente uma prisão.'
        ],
        illustration: ''
      },
      {
        id: 'mr_26',
        title: 'Capítulo XXVI — O Vazio',
        content: [
          'O **Vazio** ocupa uma posição completamente diferente dos Mundos.',
          'Ele não é um Vortex. Não é uma Dimensão. Não é um Mundo. Não é sequer uma região pertencente à criação.',
          'O Vazio representa aquilo que existe **fora da criação**.',
          'Por isso, não pode ser colocado na mesma estrutura geográfica de Kami-Sekai e Ningen-Sekai.',
          'Os dois Mundos existem dentro da criação. O Vazio existe além dela.'
        ],
        illustration: ''
      },
      {
        id: 'mr_27',
        title: 'Capítulo XXVII — O Vácuo',
        content: [
          'O **Vácuo**, por outro lado, continua fazendo parte da criação.',
          'Ele representa regiões onde praticamente não existem estruturas ou matéria perceptível, mas que continuam pertencendo a um Mundo ou Vortex.',
          'Um dos melhores exemplos está na **Dimensão das Dimensões**, onde enormes extensões de espaço separam diferentes manifestações dos Kami no Tenkai.',
          'Portanto:\n\n**Vácuo = espaço vazio dentro da criação**\n\n**Vazio = aquilo que existe fora da criação**\n\nA diferença entre os dois é estrutural, e não apenas linguística.'
        ],
        illustration: ''
      },
      {
        id: 'mr_28',
        title: 'Capítulo XXVIII — A Distribuição das Espécies',
        content: [
          'O Ningen-Sekai não é formado por uma única espécie.',
          'As três espécies antigas possuem seus próprios Vortex de origem:\n\n**Void-Golems → primeiro Vortex**\n\n**Slimes → segundo Vortex**\n\n**Fae → terceiro Vortex**',
          'Além delas, os **humanos** ocupam principalmente o quinto Vortex.',
          'Os **Daichimon** estão associados ao Submundo, que pertence a Kami-Sekai.',
          'Essa separação não significa que nenhuma espécie possa deixar seu Vortex de origem. O VCE existe justamente para permitir que diferentes povos mantenham contato.',
          'Indivíduos também podem viajar entre regiões através dos meios disponíveis.',
          'O Vortex de origem de uma espécie representa principalmente sua região histórica e estrutural, e não necessariamente um limite absoluto de movimentação.'
        ],
        illustration: ''
      },
      {
        id: 'mr_29',
        title: 'Capítulo XXIX — O Mundo Atual',
        content: [
          'A sociedade contemporânea do Ningen-Sekai é resultado de milhares de anos de transformações.',
          'As antigas regiões deram origem a novos territórios. Nações foram estabelecidas. Continentes foram separados. Sociedades mágicas foram organizadas.',
          'Ao mesmo tempo, grande parte da humanidade comum passou a viver sem conhecer a verdadeira estrutura do mundo em que habita.',
          'A magia permaneceu escondida por organizações e autoridades que consideram desnecessário revelar sua existência para toda a população.',
          'Assim, o mundo moderno possui duas camadas:',
          'Existe a civilização comum, que observa apenas a realidade cotidiana. E existe uma estrutura mágica que funciona paralelamente a ela.'
        ],
        illustration: ''
      },
      {
        id: 'mr_30',
        title: 'Capítulo XXX — A Sociedade Mágica',
        content: [
          'A sociedade mágica humana não constitui um país separado.',
          'Ela existe distribuída pelas diferentes nações do Reino dos Humanos.',
          'Magos podem nascer em diferentes regiões e atuar em diferentes países.',
          'A **Sociedade Mágica** funciona como uma estrutura própria dentro da civilização humana e possui autoridades capazes de recrutar, treinar e controlar usuários de Energia Espiritual.',
          'O **Conselho Supremo** ocupa uma posição central nessa organização. Seu líder é o **Mago Supremo**.',
          'Atualmente, essa posição pertence a **Mikael Dutri**.'
        ],
        illustration: ''
      },
      {
        id: 'mr_31',
        title: 'Capítulo XXXI — As Regiões e o Sistema Mágico',
        content: [
          'A distribuição geográfica do mundo também influencia a maneira como a magia é encontrada.',
          'Cada região possui sua própria história, suas famílias e seus grupos de usuários.',
          'Alguns locais possuem grande concentração de Magos. Outros possuem maior presença de determinadas espécies.',
          'Algumas regiões possuem relevância principalmente política. Outras possuem importância histórica ou espiritual.',
          'Por isso, a geografia do Ningen-Sekai não existe separadamente de sua história. Os territórios atuais foram moldados pelos acontecimentos das eras anteriores.'
        ],
        illustration: ''
      },
      {
        id: 'mr_32',
        title: 'Capítulo XXXII — A Relação entre os Mundos',
        content: [
          'Kami-Sekai e Ningen-Sekai são mundos diferentes.',
          'Sua separação não deve ser interpretada apenas como uma distância física. Eles representam estruturas distintas dentro do Universo.',
          'Kami-Sekai está relacionado principalmente às estruturas divinas e aos Revers. Ningen-Sekai é o principal ambiente das espécies mortais.',
          'Entre eles existe o **Vazio**, que representa aquilo que está fora da criação.',
          'Essa estrutura cria uma separação fundamental entre os dois grandes Mundos conhecidos.'
        ],
        illustration: ''
      },
      {
        id: 'mr_33',
        title: 'Capítulo XXXIII — Visão Geral da Geografia Cosmológica',
        content: [
          'A organização atual pode ser resumida da seguinte maneira:',
          '**UNIVERSO:** Contém os Mundos.',
          '**KAMI-SEKAI:** Contém cinco Vortex:\n\n1. Reino dos Revers;\n2. Recanto de The God;\n3. Submundo;\n4. Dimensão das Dimensões;\n5. Vortex da Memória.',
          '**NINGEN-SEKAI:** Contém seis Vortex:\n\n1. Vortex dos Void-Golems;\n2. Vortex dos Slimes;\n3. Vortex dos Fae;\n4. VCE;\n5. Reino dos Humanos;\n6. Exílio de Luciferus Asmodeus.',
          '**VAZIO:** Existe fora da criação.',
          '**VÁCUO:** Existe dentro da criação.'
        ],
        illustration: ''
      },
      {
        id: 'mr_34',
        title: 'Capítulo XXXIV — O Mundo como um Todo',
        content: [
          'O cenário atual não deve ser entendido como um único planeta dividido em países. A estrutura é muito maior.',
          'As nações humanas estão inseridas em um Vortex. Os Vortex fazem parte de Mundos. Os Mundos fazem parte do Universo. Dentro dessas grandes estruturas existem incontáveis Dimensões e regiões.',
          'Por isso, uma cidade humana, um reino, o Submundo e uma região ocupada por um Kami no Tenkai podem ser extremamente diferentes em escala e função, mesmo estando todos inseridos na mesma criação.'
        ],
        illustration: ''
      },
      {
        id: 'mr_35',
        title: 'Capítulo XXXV — O Legado Geográfico',
        content: [
          'As regiões atuais são consequências diretas da história.',
          'O mundo que existe hoje não é igual ao mundo da criação da humanidade.',
          'Na época de sua origem, os humanos viviam em uma única grande massa continental.',
          'Durante as eras seguintes, guerras, transformações e mudanças naturais alteraram a organização do mundo. Novas nações surgiram. Os continentes se separaram. As antigas estruturas deram lugar às sociedades modernas.',
          'Ainda assim, os grandes limites cosmológicos permaneceram:',
          'Kami-Sekai continuou sendo o Mundo associado aos Revers. Ningen-Sekai continuou sendo o principal Mundo das espécies mortais. E o Vazio continuou existindo além da criação.'
        ],
        illustration: ''
      },
      {
        id: 'mr_36',
        title: 'Capítulo XXXVI — Conclusão',
        content: [
          'A geografia do universo é composta por múltiplas camadas.',
          'Os grandes Mundos organizam diferentes Vortex. Os Vortex abrigam regiões e Dimensões. Dentro dessas estruturas vivem diferentes espécies e sociedades.',
          'No centro dessa organização encontram-se duas grandes realidades: **Kami-Sekai** e **Ningen-Sekai**.',
          'Kami-Sekai concentra as estruturas divinas, os Revers, o Submundo, a Dimensão das Dimensões e o Vortex da Memória.',
          'Ningen-Sekai concentra as espécies mortais, o VCE, as nações humanas e o Exílio de Luciferus Asmodeus.',
          'Acima dessa divisão está o Universo. Fora dela está o Vazio. E dentro da própria criação existe o Vácuo.',
          'Assim, o espaço onde a história acontece não é apenas um território. É uma estrutura formada por diferentes níveis de realidade, cada um com sua própria função, habitantes e importância.',
          'As espécies, nações e sociedades que vivem dentro dessas estruturas serão detalhadas nos volumes seguintes.'
        ],
        illustration: ''
      }
    ]
  },
  {
    id: 'universal_mechanics',
    title: 'Mecânicas Universais',
    subtitle: 'Manipulação de Energia, Combate, Técnicas Inatas e Controle',
    category: 'Mecânicas de Jogo',
    coverColor: 'from-[#1e1b4b] to-[#311042] border-[#4a1d6d]',
    coverPattern: 'text-fuchsia-500/40 border-fuchsia-500/30',
    textColor: 'text-fuchsia-300',
    iconName: 'Flame',
    chapters: [
      {
        id: 'mechanics_energy',
        title: 'Capítulo I — Manipulação de Energia Amaldiçoada',
        content: [
          'Rajadas de Energia Amaldiçoada',
          'A forma mais simples de utilizar Energia Amaldiçoada ofensivamente. O usuário concentra uma pequena quantidade de energia e a dispara na forma de projéteis, explosões ou cortes de energia.',
          'Funcionamento:',
          '• Gasta 1 EA para causar 1 ponto de dano.',
          '• Pode assumir diferentes formatos, como rajadas, explosões ou cortes.',
          'Rajadas de Energia Reversa',
          'Consiste em disparar Energia Reversa diretamente contra o alvo. Por possuir natureza positiva, causa efeitos diferentes da Energia Amaldiçoada convencional.',
          'Funcionamento:',
          '• Gasta 10 EA para causar 1 ponto de dano de reversão.',
          '• O dano é aplicado diretamente ao HP de Maldições.',
          '• Também pode ser utilizado para reduzir em 5 pontos o dano de um feitiço recebido.',
          'Recarregamento de Energia Amaldiçoada',
          'O usuário dedica um turno inteiro para recuperar estabilidade e reforçar sua circulação de energia. Após chegar seu próximo turno, ele recarrega sua Defesa e EA igual a (Refino x 5)'
        ],
        illustration: ''
      },
      {
        id: 'mechanics_reinforcement',
        title: 'Capítulo II — Reforço Corporal',
        content: [
          'Reforçar o Corpo com Energia Amaldiçoada para defesas',
          'O usuário utiliza Energia Amaldiçoada para fortalecer o próprio corpo contra impactos.',
          'Resultados:',
          '• 1 ou 2: Gasta 40 EA. O reforço falha.',
          '• 3 a 5: Recebe 20% de redução de dano. Gasta uma quantidade de EA equivalente aos 20% de dano que negou.',
          '• 6: Recebe 30% de redução de dano. Gasta uma quantidade de EA equivalente aos 30% de dano que negou.',
          'Reforçar o Corpo com Energia Amaldiçoada para Ataques',
          'O usuário converte parte de sua Energia Amaldiçoada para potencializar um golpe.',
          'Resultados:',
          '• 1: Gasta 40 EA. O reforço falha.',
          '• 2: Converte 10% da Técnica em EA. Recebe +10% de dano.',
          '• 3: Converte 20% da Técnica em EA. Recebe +20% de dano.',
          '• 4: Converte 30% da Técnica em EA. Recebe +30% de dano.',
          '• 5: Converte 40% da Técnica em EA. Recebe +40% de dano.',
          '• 6: Converte 50% da Técnica em EA. Recebe +50% de dano. Chance de Kokusen.'
        ],
        illustration: ''
      },
      {
        id: 'mechanics_universal_strikes',
        title: 'Capítulo III — Golpes Universais',
        content: [
          'Kokusen',
          'Antes do ataque, o usuário declara que tentará realizar um Kokusen. Caso obtenha 6 no dado de eficácia, deverá escolher um número. Se a condição for feita, o golpe causa dano equivalente ao dobro da soma entre Ataque e Técnica, sendo aplicado diretamente ao HP. O gasto é igual o dobro do dano causado.',
          'Punho Divergente',
          'Uma técnica de combate corporal baseada no Ataque Técnico (TA). O dano corresponde a 2/4 do TA. Em caso de acerto completo: 1/4 do dano é aplicado à Defesa. 1/4 do dano é aplicado diretamente ao HP. Em caso de dano parcial: Apenas 1/4 do dano é aplicado à Defesa.'
        ],
        illustration: ''
      },
      {
        id: 'mechanics_general_techniques',
        title: 'Capítulo IV — Técnicas Gerais',
        content: [
          'Accelerare',
          'O usuário impulsiona instantaneamente seu corpo utilizando Energia Amaldiçoada.',
          'Funcionamento:',
          '• Custa 100 EA.',
          '• Concede +50 de Velocidade durante apenas aquela ação.',
          'Cero',
          'Uma técnica universal extremamente simples, porém eficiente.',
          'Funcionamento:',
          '• Custa 500 EA.',
          '• Concede +1 em qualquer dado de ataque ou defesa.'
        ],
        illustration: ''
      },
      {
        id: 'mechanics_summoning_techniques',
        title: 'Capítulo V — Técnicas de Invocação',
        content: [
          'Funcionamento para invocação de qualquer Shikigami',
          'Resultados:',
          '• 1: A invocação falha.',
          '• 2: O Shikigami é invocado, porém não pode agir naquele turno.',
          '• 3 a 5: Invocação normal.',
          '• 6: O Shikigami recebe +1 no dado de ataque durante aquele turno.',
          'Sistema Geral de Shikigamis',
          'Ao criar um Shikigami, o usuário define sua função. Os atributos obrigatórios são: HP, Defesa. Os demais atributos somente são adicionados caso a função escolhida exija. Cada ponto de atributo custa 2 EA. O limite de pontos que o usuário pode distribuir e igual ao (Refino x 5). Após criado, esses atributos tornam-se sua base permanente. Além disso, o Shikigami recebe +1 em todos os atributos para cada nível de Refino do usuário. O ritual de invocação consiste em atingir, através da soma de dados, um valor equivalente à quantidade de atributos do Shikigami multiplicada por 10. O usuário pode realizar até duas tentativas por turno.'
        ],
        illustration: ''
      },
      {
        id: 'mechanics_weapon_techniques',
        title: 'Capítulo VI — Técnicas com Armas',
        content: [
          'Katana Divergente — Kanten Tō',
          'Uma técnica exclusiva para espadas, baseada no Ataque Técnico (TA). Caso o golpe acerte completamente, além do dano normal, um segundo dano equivalente a TA ÷ 2 é causado diretamente ao HP do alvo.',
          'Santō Geki',
          'Uma sequência de três ataques utilizando três espadas. O golpe é dividido em três etapas. Cada etapa aumenta a velocidade do usuário em +50, funcionando da seguinte forma: Primeira etapa: velocidade normal; Segunda etapa: +50 de Velocidade; Terceira etapa: +100 de Velocidade. Caso uma etapa cause dano parcial, a etapa seguinte recebe +1 no dado de ataque. Caso uma etapa cause dano completo, a etapa seguinte recebe +2 no dado de ataque.',
          'Tri-armamento',
          'Treinamento especializado que permite ao usuário utilizar até três armas simultaneamente.'
        ],
        illustration: ''
      },
      {
        id: 'mechanics_antidomain',
        title: 'Capítulo VII — Técnicas Anti-Domínio',
        content: [
          'Domínio Simples',
          'Uma técnica defensiva criada para enfrentar Expansões de Domínio.',
          'Funcionamento:',
          '• Consome 100 EA por turno.',
          '• Sempre que um efeito garantido de uma Expansão de Domínio for direcionado ao usuário, ambos realizam uma disputa de dados. Cada 5 pontos de Refino concedem +1 no dado correspondente. Se o usuário vencer, o efeito garantido é completamente anulado. Se o expansor vencer, o efeito ocorre normalmente. O Domínio Simples protege apenas contra efeitos garantidos direcionados diretamente ao usuário.'
        ],
        illustration: ''
      },
      {
        id: 'mechanics_domain_system',
        title: 'Capítulo VIII — Sistema de domínios',
        content: [
          'Capítulo VIII — Sistema de Expansões de Domínio',
          'As Expansões de Domínio representam o estágio mais elevado do Jujutsu, permitindo ao usuário manifestar uma realidade própria onde as regras de sua Técnica Inata são impostas de forma absoluta. Diferentemente do universo original de Jujutsu Kaisen, nesta campanha uma Expansão de Domínio não precisa obrigatoriamente possuir um acerto garantido ofensivo. O que define um domínio é a existência de uma regra central, criada pela Técnica Inata do usuário, que passa a dominar completamente o espaço da expansão.',
          'Cada domínio deve possuir uma condição claramente definida em sua ficha. Essa condição pode envolver dano automático, fortalecimento do usuário, enfraquecimento do adversário, alteração das regras do combate, cancelamento de habilidades, manipulação do ambiente ou qualquer outro efeito coerente com a Técnica Inata ou com o estado de espírito do usuário.',
          'Ativação da Expansão de Domínio',
          'Uma Expansão de Domínio não pode ser utilizada como forma de contra-ataque, interrupção ou defesa imediata contra um golpe já declarado.',
          'Sua ativação só pode ocorrer durante o turno do próprio usuário, consumindo integralmente a ação de Técnica daquele turno.',
          'Após expandir seu domínio, o usuário não poderá utilizar outra habilidade de sua Técnica Inata naquela mesma rodada, salvo se alguma característica específica de sua ficha permitir isso.',
          'Disputa de Domínios',
          'Quando duas Expansões de Domínio entram em contato, ambas iniciam uma disputa territorial.',
          'Cada domínio completo possui inicialmente três terços de território.',
          'Domínios incompletos possuem dois meios de território.',
          'Os usuários realizam uma disputa de dados.',
          'Cada 5 pontos de Refino concedem +1 no dado.',
          'O vencedor da disputa conquista um terço do território do adversário.',
          'Entre uma disputa e outra, ambos os usuários ainda podem realizar uma ação normalmente.',
          'A disputa continua até que um dos domínios perca completamente seu território, momento em que sua Expansão é destruída.',
          'Disputa Tripla de Domínios',
          'Quando três Expansões de Domínio coexistem simultaneamente, a disputa torna-se instável.',
          'Caso um dos usuários possua vantagem de Refino sobre os outros dois, essa vantagem é dividida por dois durante as disputas de dados.',
          'Além disso, o usuário que possuir o menor resultado entre os três perde imediatamente dois terços de seu território, tornando-se extremamente vulnerável ao colapso de seu domínio.',
          'Entrada de um Terceiro Domínio',
          'Caso uma terceira Expansão de Domínio seja aberta enquanto duas já disputam território, o novo domínio invade imediatamente a disputa.',
          'Nesse momento, um terço de território é automaticamente tomado, iniciando uma disputa entre os três usuários.',
          'Acertos Garantidos',
          'Nesta campanha, o conceito de acerto garantido é mais amplo do que simplesmente causar dano automático.',
          'Uma Expansão de Domínio pode garantir automaticamente qualquer efeito coerente com sua regra central, incluindo:',
          '• Aplicação automática de condições negativas;',
          '• Cancelamento de habilidades;',
          '• Restrições de movimento;',
          '• Alteração das regras do combate;',
          '• Modificação do funcionamento de técnicas;',
          '• Fortalecimento do próprio usuário;',
          '• Dano garantido.',
          'Sempre que um domínio possuir um efeito garantido, sua forma de defesa deve existir previamente através de alguma técnica específica, como Domínio Simples, Emoção da Pétala Cadente ou outra habilidade registrada.',
          'Regras de Construção',
          'Toda Expansão de Domínio deve possuir obrigatoriamente:',
          '• Uma regra central claramente definida;',
          '• Condições de funcionamento descritas na ficha;',
          '• Custos de ativação e manutenção;',
          '• Forma de aplicação dos efeitos garantidos, quando existirem;',
          '• Limitações compatíveis com a Técnica Inata do usuário.',
          'Nenhum domínio pode criar efeitos que contradigam a lógica de sua própria Técnica Inata.',
          'Interação com Técnicas Inatas',
          'Uma Expansão de Domínio não cria novos poderes.',
          'Ela apenas leva a Técnica Inata do usuário ao seu estado máximo de manifestação, permitindo que suas regras sejam impostas sobre toda a área do domínio.',
          'Quanto mais bem definida for a Técnica Inata, mais consistente e poderosa será sua Expansão de Domínio.',
          'Relação entre Refino e Domínio',
          'O Refino representa o nível de domínio que um usuário possui sobre sua própria Técnica Inata.',
          'Além de conceder vantagem nas disputas entre domínios, o Refino também determina quando determinadas formas avançadas de Jujutsu podem ser desbloqueadas, como Energia Reversa, Reversão de Feitiço e a própria Expansão de Domínio.',
          'Por esse motivo, um domínio não é apenas uma demonstração de power bruto, mas principalmente de compreensão e refinamento da própria técnica.',
          'Tipos de Expansão de Domínio',
          'As Expansões de Domínio podem se manifestar em diferentes níveis de refinamento. Quanto mais completo for um domínio, maior será sua estabilidade durante disputas territoriais.',
          'Domínio Incompleto',
          'O Domínio Incompleto representa uma Expansão de Domínio que ainda não atingiu sua forma perfeita. Sua barreira e sua regra central ainda apresentam falhas, tornando-o menos estável que um domínio convencional.',
          'Por esse motivo, um Domínio Incompleto inicia a disputa possuindo apenas dois meios de território.',
          'Durante disputas, cada vitória ou derrota continua consumindo apenas uma parte de seu território.',
          'Embora possua todas as características básicas de uma Expansão de Domínio, sua inferioridade estrutural faz com que seja destruído com maior facilidade.',
          'Expansão de Domínio',
          'É a forma convencional de domínio.',
          'Possui três terços de território, sendo o modelo utilizado pela maioria dos usuários.',
          'Durante uma disputa, cada vitória conquista um terço do território adversário.',
          'Domínio Aberto',
          'O Domínio Aberto representa uma expansão cuja barreira não fecha completamente o espaço, permitindo que sua influência se espalhe naturalmente pelo ambiente.',
          'Por possuir uma estrutura extremamente refinada, um Domínio Aberto inicia a disputa com quatro quartos de território.',
          'Cada vitória continua conquistando uma parte do território adversário, sendo necessário vencer quatro disputas para destruir completamente outro Domínio Aberto.',
          'Apesar dessa vantagem territorial, ele continua seguindo todas as demais regras de uma Expansão de Domínio convencional.',
          'Reversão de Domínio (反転領域 | Hanten Ryōiki)',
          'A Reversão de Domínio representa la manifestação máxima da Reversão de uma Técnica Inata.',
          'Em vez de expandir sua técnica original, o usuário manifesta a realidade criada por sua técnica reversa, criando uma expansão conceitualmente oposta à original.',
          'Por ser considerada a forma mais avançada de domínio conhecida, uma Reversão de Domínio inicia a disputa possuindo cinco quintos de território.',
          'Sua principal característica é sua superioridade em disputas territoriais.',
          'Sempre que vencer uma disputa contra um Domínio Incompleto, uma Expansão de Domínio ou um Domínio Aberto, a Reversão de Domínio consome duas partes do território adversário em vez de apenas uma.',
          'Caso duas Reversões de Domínio entrem em conflito, cada vitória volta a consumir apenas uma parte, mantendo o equilíbrio entre usuários do mesmo nível.',
          'Apesar dessa diferença, uma Reversão de Domínio continua sendo considerada uma Expansão de Domínio para todos os demais efeitos do sistema, distinguindo-se apenas por utilizar a Reversão da Técnica Inata e por sua superioridade em disputas territoriais.'
        ],
        illustration: ''
      },
      {
        id: 'mechanics_traits',
        title: 'Capítulo IX — Traits',
        content: [
          'TRAITS',
          'Os **Traits** representam características especiais, talentos inatos ou modificações físicas que definem e diferenciam os indivíduos no universo Jujutsu, concedendo habilidades únicas e bônus específicos.',
          '**Radar Amaldiçoado**',
          'O usuário desenvolve uma percepção extremamente refinada da Energia Amaldiçoada, permitindo reagir com maior eficiência a ataques que utilizem EA. Recebe bônus nos testes de defesa contra ataques baseados em Energia Amaldiçoada.',
          '• **Lv 1:** +1 no dado de defesa.',
          '• **Lv 2:** +2 no dado de defesa.',
          '• **Lv 3:** +3 no dado de defesa.',
          '• **Lv 4:** +4 no dado de defesa.',
          '• **Lv Máx:** +5 no dado de defesa.',
          '**Assassino Amaldiçoado**',
          'O usuário especializa sua ofensiva utilizando Energia Amaldiçoada, tornando seus ataques muito mais precisos e letais. Recebe bônus nos testes de ataque com EA.',
          '• **Lv 1:** +1 no dado de ataque.',
          '• **Lv 2:** +2 no dado de ataque.',
          '• **Lv 3:** +3 no dado de ataque.',
          '• **Lv 4:** +4 no dado de ataque.',
          '• **Lv Máx:** +5 no dado de ataque.',
          '**Impulso Amaldiçoado**',
          'O usuário utiliza Energia Amaldiçoada para impulsionar seu corpo, aumentando drasticamente sua velocidade.',
          '• **Lv 1:** +50 de Velocidade.',
          '• **Lv 2:** +100 de Velocidade.',
          '• **Lv 3:** +150 de Velocidade.',
          '• **Lv 4:** +200 de Velocidade.',
          '• **Lv 5:** +250 de Velocidade.',
          '• **Lv Máx:** +300 de Velocidade.',
          '**Seis Olhos**',
          'Os Seis Olhos concedem um controle absoluto sobre a Energia Amaldiçoada, reduzindo pela metade qualquer custo de EA realizado pelo usuário.',
          '• **Efeito:** Todos os gastos de Energia Amaldiçoada são reduzidos em 50%. Além do mais, os efeitos de análise de EA superam até mesmo o Radar Lv Máx.',
          '**4 Braços**',
          'O usuário possui quatro braços plenamente funcionais, permitindo executar técnicas simultaneamente com muito mais facilidade.',
          '• **Efeito:** O usuário pode realizar naturalmente duas ações utilizando sua técnica no mesmo turno.',
          '**Grande Lutador**',
          'Especialista em combate corpo a corpo, o usuário recebe bônus em todos os ataques físicos.',
          '• **Lv 1:** +1 no dado de ataque físico.',
          '• **Lv 2:** +2 no dado de ataque físico.',
          '• **Lv 3:** +3 no dado de ataque físico.',
          '• **Lv 4:** +4 no dado de ataque físico.',
          '• **Lv Máx:** +5 no dado de ataque físico.',
          '**Corpo Titã**',
          'O corpo do usuário possui resistência física extraordinária, aumentando sua capacidade de suportar golpes corporais.',
          '• **Lv 1:** +1 no dado de defesa física.',
          '• **Lv 2:** +2 no dado de defesa física.',
          '• **Lv 3:** +3 no dado de defesa física.',
          '• **Lv 4:** +4 no dado de defesa física.',
          '• **Lv Máx:** +5 no dado de defesa física.',
          '**ERR (Energia Reversa Refinada)**',
          'O usuário domina a Energia Reversa de forma excepcional, reduzindo o custo necessário para restaurar HP.',
          '• **Razão padrão:** 10 EA → 1 HP.',
          '• **Lv 1:** 5 EA → 1 HP.',
          '• **Lv 2:** 4 EA → 1 HP.',
          '• **Lv 3:** 3 EA → 1 HP.',
          '• **Lv 4:** 2 EA → 1 HP.',
          '• **Lv Máx:** 1 EA → 1 HP. Nesse nível, o usuário pode ativar o efeito "Sopro do Recomeço", onde qualquer dano causado no HP é regenerado imediatamente.',
          '**Ultra-Reabastecimento**',
          'A eficiência da recuperação de Energia Amaldiçoada e Defesa aumenta muito além do normal.',
          '• **Razão padrão:** Refino ×5.',
          '• **Lv 1:** Refino ×6.',
          '• **Lv 2:** Refino ×7.',
          '• **Lv 3:** Refino ×8.',
          '• **Lv 4:** Refino ×9.',
          '• **Lv Máx:** Refino ×10.',
          '**Yuji**',
          'O usuário possui um talento incomum para executar Kokusens. A cada nível, suas chances de realizar um Kokusen aumentam, permitindo selecionar mais números ou escolher livremente quais números ativarão o Kokusen.',
          '• **Efeito Padrão (Lv 0):** O usuário deve tirar 6 no dado do Golpe Amaldiçoado e após isso deve escolher um número, caso acerte o Kokusen funcionará.',
          '• **Lv 1:** O usuário escolhe dois números ao invés de um.',
          '• **Lv 2:** O usuário pode decidir se quer aumentar as chances de poder escolher os números ou aumentar a quantidade de números que podem ser escolhidos.',
          '• **Lv 3:** O usuário pode decidir se quer aumentar as chances de poder escolher os números ou aumentar a quantidade de números que podem ser escolhidos.',
          '• **Lv 4:** O usuário pode decidir se quer aumentar as chances de poder escolher os números ou aumentar a quantidade de números que podem ser escolhidos.',
          '• **Lv Máx:** O usuário pode decidir se quer aumentar as chances de poder escolher os números ou aumentar a quantidade de números que podem ser escolhidos.',
          '**Restrição Celestial**',
          'O usuário perde completamente a capacidade de utilizar Energia Amaldiçoada. Em compensação, seu corpo alcança um nível físico sobre-humano.',
          '• **Efeitos:**',
          '• Não pode utilizar Energia Amaldiçoada.',
          '• +2 nos dados de ataque.',
          '• +2 nos dados de defesa.',
          '• +300 de Velocidade.',
          '• Cada ponto investido em HP passa a valer 2 pontos de HP.',
          '**Pureza Jujutsu**',
          'A presença do usuário torna-se imperceptível, impedindo qualquer forma de rastreamento por causa do corpo ser totalmente de Energia Positiva. Além disso, ataques baseados em EA não conseguem afetá-lo, enquanto seus golpes físicos ignoram a proteção espiritual de humanos e acertam diretamente no HP de maldições.',
          '• **Efeitos:**',
          '• O usuário é indetectável por rastreamentos de Energia Amaldiçoada.',
          '• Golpes baseados em Energia Amaldiçoada não causam dano ao usuário.',
          '• Seus ataques causam dano diretamente ao HP de maldições, ignorando a Defesa.'
        ],
        illustration: 'traits_spiritual'
      }
    ]
  },
  {
    id: 'reports',
    title: 'Relatos Jujutsu',
    subtitle: 'Casos Secretos e Investigações Criminais',
    category: 'Relatórios e Casos',
    coverColor: 'from-[#2d0b19] to-[#12030a] border-[#5c0f30]',
    coverPattern: 'text-rose-500/30 border-rose-500/35',
    textColor: 'text-rose-300',
    iconName: 'BookOpen',
    chapters: [
      {
        id: 'case_cifras',
        title: 'Relato I — O Caso Cifras',
        content: [
          'Entre os inúmeros registros preservados pela Sociedade Jujutsu, poucos despertam tanto interesse quanto o chamado **Caso Cifras**, considerado até hoje uma das maiores investigações criminais da história do Jujutsu moderno.',
          'Os primeiros assassinatos ocorreram por volta do início do século XIX. As vítimas não possuíam qualquer relação entre si. Nobres, criminosos, civis e até mesmo Feiticeiros começaram a aparecer mortas em diferentes regiões do mundo.',
          'O que unificava todos os casos era o estado dos corpos.',
          'Nenhuma vítima apresentava sinais de luta excessiva. Em vez disso, seus corpos eram encontrados meticulosamente abertos, como se cada músculo, órgão, nervo e fluxo de energia tivesse sido estudado por alguém com conhecimento absoluto da anatomia humana.',
          'As incisões eram tão precisas que, durante anos, acreditou-se que mais de um assassino estivesse envolvido.',
          'Posteriormente descobriu-se que todas haviam sido realizadas pela mesma pessoa.',
          'A imprensa da época passou a chamá-lo de **Cifras**, pois cada corpo apresentava pequenas marcações aparentemente aleatórias espalhadas pelos tecidos internos. Décadas depois, estudiosos descobriram que essas marcações formavam padrões matemáticos relacionados ao fluxo de Energia Amaldiçoada, embora seu verdadeiro significado jamais tenha sido completamente compreendido.',
          'A investigação estendeu-se por quase quarenta anos.',
          'Diversos feiticeiros de elite morreram tentando localizar o responsável.',
          'Outros desapareceram sem deixar qualquer vestígio.',
          'Durante esse período, estimativas apontam que centenas de vítimas foram encontradas em todos os continentes conhecidos.',
          'Nenhuma testemunha jamais conseguiu descrever corretamente o rosto do assassino.',
          'Quando finalmente foi capturado, Cifras não ofereceu qualquer resistência.',
          'Segundo os registros oficiais, ele apenas sorriu ao ser cercado e entregou suas próprias armas, afirmando que "a pesquisa havia terminado".',
          'Mesmo após sua prisão, recusou-se a explicar seus experimentos.',
          'Jamais revelou seus objetivos.',
          'Jamais demonstrou arrependimento.',
          'Todas as tentativas de interrogatório terminaram sem resultados.',
          'Os documentos da época descrevem Cifras como um indivíduo extremamente educado, intelectualmente brilhante e assustadoramente calmo, tratando cada assassinato como se fosse apenas mais uma etapa de um grande estudo científico.',
          'Diante da quantidade de vítimas e da impossibilidade de compreender completamente sua Técnica Inata, o Conselho Supremo da Sociedade Jujutsu decretou a maior condenação já registrada até aquele momento.',
          '**Quatrocentos anos de prisão** na Prisão Jujutsu de Segurança Máxima, seguidos por **pena de morte**.',
          'A justificativa oficial afirmava que nenhum método conhecido era capaz de garantir que Cifras permaneceria permanentemente incapacitado, tornando necessária uma punição que combinasse isolamento absoluto e execução ao término da sentença.',
          'Até os dias atuais, estudiosos discutem se Cifras era apenas um assassino excepcionalmente inteligente ou se seus experimentos buscavam descobrir algum princípio desconhecido da alma, da Energia Amaldiçoada ou do próprio funcionamento da existência.',
          'Os registros completos do caso permanecem classificados, e grande parte das anotações apreendidas durante sua captura continua inacessível, sendo consideradas perigosas demais para consulta pública.',
          '**Análise Anatômica**',
          'Após sua captura, Cifras foi submetido a uma série de exames conduzidos pelos maiores especialistas em anatomia e Energia Amaldiçoada da Sociedade Jujutsu.',
          'Os resultados contrariaram completamente tudo o que se conhecia sobre o funcionamento do corpo humano.',
          'Foi constatado que seu organismo não possuía praticamente nenhum dos órgãos considerados essenciais para a vida.',
          'Pulmões, estômago, fígado, intestinos, rins e diversos outros órgãos simplesmente não existiam.',
          'Segundo as conclusões oficiais, eles haviam sido removidos cirurgicamente pelo próprio indivíduo ao longo dos anos.',
          'Em seus interrogatórios, Cifras afirmava que tais órgãos eram "mecanismos lentos de produção de energia", responsáveis por converter alimento em força de maneira ineficiente.',
          'Considerando esse processo desnecessário, desenvolveu um método próprio de sustentação biológica.',
          'Utilizando sua compreensão do fluxo de Energia Amaldiçoada, seu corpo passou a absorver continuamente a energia presente no ambiente, convertendo-a diretamente em energia física. O próprio Cifras descrevia esse fenômeno como uma espécie de **fotossíntese de Energia Amaldiçoada**, tornando alimentação e digestão praticamente obsoletas.',
          'Durante a análise de sua estrutura óssea, outra anomalia chamou a atenção dos pesquisadores.',
          'Sua coluna vertebral não seguia a anatomia humana convencional.',
          'Na altura do tórax, ela se dividia em duas estruturas independentes que percorriam lateralmente seu corpo, sustentando o tronco sem a necessidade de uma caixa torácica tradicional.',
          'Como consequência, Cifras não possuía costelas.',
          'Entre as duas colunas existia um amplo espaço vazio na região abdominal, onde normalmente estariam protegidos os órgãos internos.',
          'Essa modificação criava um **falso ponto vital**.',
          'Ataques direcionados ao abdômen frequentemente atravessavam seu corpo sem atingir estruturas essenciais, levando inúmeros adversários a acreditar, erroneamente, que haviam causado um golpe fatal.',
          'Os pesquisadores jamais conseguiram explicar como um ser humano pôde sobreviver às inúmeras modificações realizadas em si mesmo.',
          'Alguns defendem que sua Técnica Inata era responsável por manter seu organismo funcional.',
          'Outros acreditam que Cifras simplesmente compreendia a anatomia e o fluxo de Energia Amaldiçoada em um nível inalcançável para qualquer outro cientista da história.',
          'Até hoje, seus relatórios médicos permanecem classificados como documentos de risco máximo, sob a justificativa de que reproduzir seus experimentos poderia representar uma ameaça à própria definição de corpo humano.'
        ],
        illustration: 'cifras_anatomy'
      },
      {
        id: 'case_chi_mozara',
        title: 'Relato II — O Espadachim Chi Mozara',
        content: [
          'Poucos nomes atravessaram os séculos carregando tanto prestígio quanto **Chi Mozara**, considerado o maior espadachim da humanidade e o maior representante da história do Clã Mozara.',
          'A Era Sengoku é frequentemente lembrada pelos estudiosos do Jujutsu como um dos períodos mais frágeis da humanidade. Diferentemente da Era Heian, marcada pelo surgimento de inúmeros monstros e gênios, a maior parte dos feiticeiros dessa época possuía pouco talento para o combate, sendo incapaz de enfrentar Maldições de alto nível.',
          'Foi nesse cenário que Chi Mozara surgiu.',
          'Enquanto inúmeros feiticeiros eram incapazes de proteger sequer suas próprias províncias, Chi percorreu praticamente todo o Japão sozinho, exterminando Maldições por onde passava. Diversos registros atribuem a ele a morte da maior parte das Maldições conhecidas daquele período, tornando-se uma verdadeira lenda entre os sobreviventes.',
          'Sua fama fez com que o Clã Mozara prosperasse rapidamente.',
          'Originalmente conhecidos apenas como excelentes ferreiros, seus membros passaram a dedicar suas vidas à fabricação de Ferramentas Amaldiçoadas, desenvolvendo armas para praticamente todos os grandes feiticeiros da época.',
          'Foi durante esse período que inúmeras ferramentas históricas foram produzidas, incluindo a lendária **Dragon Bone**, considerada uma das maiores obras já criadas pela forja Jujutsu.',
          'O crescimento do clã foi tão expressivo que, por muitos anos, os Mozara passaram a ser reconhecidos como o **Quarto Grande Clã**, ao lado das famílias mais influentes da história do Jujutsu.',
          'Entretanto, nenhum membro jamais alcançou o prestígio de Chi.',
          '**O Segundo Santuário**',
          'Uma das maiores curiosidades envolvendo Chi Mozara é sua Técnica Inata.',
          'Até onde se sabe, ele foi o único feiticeiro conhecido, além de Ryomen Sukuna, a nascer com a Técnica **Santuário**.',
          'O surgimento de duas Técnicas Inatas idênticas é considerado praticamente impossível, tornando Chi uma anomalia sem precedentes.',
          'Apesar disso, sua fama nunca esteve ligada ao Santuário.',
          'Sua verdadeira força encontrava-se em sua espada.',
          '**Setsudan Ha**',
          'A ferramenta amaldiçoada de Chi recebeu o nome de **Setsudan Ha** (切断刃 | Lâmina da Separação).',
          'À primeira vista, tratava-se de uma simples katana.',
          'Entretanto, sua verdadeira capacidade permitia que ela assumisse a forma de qualquer arma cortante que Chi já tivesse visto durante sua vida.',
          'Mais do que copiar sua aparência, Setsudan Ha também reproduzia as propriedades especiais da arma original.',
          'Espadas, lanças, alabardas, foices, facas, machados ou qualquer outro armamento cortante podiam ser reproduzidos instantaneamente.',
          'Como contrapartida, **todos os atributos de Chi eram reduzidos à metade**, obrigando-o a compensar essa limitação exclusivamente com sua técnica e experiência.',
          'Mesmo combatendo constantemente com apenas metade de seu verdadeiro poder, seus feitos permanecem entre os maiores já registrados.',
          '**A Conexão Espiritual**',
          'Chi Mozara foi o primeiro caso documentado de uma **Conexão Espiritual** completa.',
          'Após décadas utilizando a mesma ferramenta, sua alma tornou-se inseparável de Setsudan Ha.',
          'A espada deixou de ser apenas uma arma, passando a fazer parte de sua própria existência.',
          'Como consequência, sua durabilidade deixou de representar apenas a resistência da ferramenta.',
          'Ela passou a representar a própria vida de Chi.',
          'Enquanto a espada existisse, sua alma permaneceria conectada ao mundo.',
          'Caso sofresse um golpe fatal, Setsudan Ha seria imediatamente sacrificada, restaurando completamente seu corpo e concedendo-lhe uma segunda vida.',
          'Após esse sacrifício, porém, a arma desapareceria definitivamente.',
          'Essa ligação também tornava impossível que outro usuário empunhasse Setsudan Ha.',
          'Sempre que alguém tentava utilizá-la sem autorização, a própria arma rejeitava o invasor, causando-lhe graves ferimentos antes mesmo que pudesse desembainhá-la.',
          'Esse fenômeno tornou-se a base para o conceito moderno de Conexão Espiritual entre ferramentas e usuários.',
          '**O Garanhão da Sengoku**',
          'Apesar de sua fama como espadachim, outra característica de Chi tornou-se igualmente lendária.',
          'Seu comportamento extremamente carismático e sua obsessão por mulheres renderam-lhe inúmeros apelidos ao longo dos séculos.',
          'Lendas populares afirmam que Chi Mozara passou **mais tempo de sua vida concebendo filhos do que dormindo**.',
          'Embora seja impossível confirmar esse exagero, sabe-se que sua descendência espalhou-se por diversas regiões da Ásia.',
          'Diversos ramos do Clã Mozara afirmam possuir ligação direta com ele.',
          '**O Espadachim da China**',
          'Décadas após o auge do Clã Mozara, divergências políticas com a Sociedade Jujutsu Japonesa levaram toda a família a abandonar o arquipélago.',
          'O clã estabeleceu-se definitivamente na China, onde passou a atuar como principal referência da produção de Ferramentas Amaldiçoadas no continente.',
          'Embora tenha nascido no Japão, Chi passou a representar oficialmente a China durante toda a segunda metade de sua vida.',
          'Por esse motivo, registros históricos frequentemente divergem sobre sua nacionalidade.',
          'Para os japoneses, ele foi um herói perdido.',
          'Para os chineses, tornou-se o maior espadachim de sua história.',
          'Independentemente da versão, uma conclusão permanece constante entre todos os estudiosos:',
          'Mesmo pertencendo a uma das eras mais fracas do Jujutsu, Chi Mozara foi forte o suficiente para transformar sozinho o rumo de sua época.',
          'Até hoje, nenhum outro espadachim conseguiu igualar a combinação de talento, technique e domínio sobre as Ferramentas Amaldiçoadas que eternizou seu nome na história.'
        ],
        illustration: 'setsudan_ha'
      },
      {
        id: 'case_general_vazio',
        title: 'Relato III — O General do Vazio',
        content: [
          'Entre os grandes nomes da Era Heian, poucos possuíam um talento tão extraordinário quanto **Amatsu no Katsu**, o mais jovem General do Vazio da história do antigo Clã Katsu.',
          'Antes de receber seu título, Amatsu era reconhecido apenas como um jovem prodígio da família Katsu. Ainda na adolescência, recusou-se a permanecer sob a proteção de seu clã e iniciou uma longa peregrinação pelo Japão, determinado a provar seu valor por mérito próprio.',
          'Foi durante essa jornada que ocorreu o acontecimento responsável por transformar completamente sua vida.',
          'Na época, quatro Maldições de Grau Especial assolavam diversas províncias, sendo posteriormente conhecidas como **Os Quatro Grandes Onis**.',
          'Cada uma representava um aspecto diferente da destruição.',
          'Entre elas, nenhuma inspirava tanto temor quanto **Shikon no Oni**, a Oni da Alma.',
          'Diferentemente das demais Maldições, Shikon não precisava destruir o corpo de suas vítimas.',
          'Seu toque era capaz de deformar diretamente a alma, transformando grandes feiticeiros em criaturas irreconhecíveis ou provocando sua morte instantânea.',
          'Os registros antigos afirmam que Amatsu enfrentou sozinho os Quatro Grandes Onis e saiu vitorioso.',
          'Entretanto, sua maior conquista naquele dia não foi derrotar as Maldições.',
          'Durante o confronto contra Shikon, Amatsu testemunhou pela primeira vez a verdadeira natureza da alma.',
          'Naquele instante compreendeu que o corpo, a Energia Amaldiçoada e até mesmo as Técnicas Inatas eram apenas manifestações externas de algo muito mais profundo.',
          'Ao invés de retornar imediatamente ao Clã Katsu para receber reconhecimento, tomou uma decisão inesperada.',
          'Abandonou temporariamente o caminho da força.',
          'Durante décadas percorreu templos esquecidos, bibliotecas ancestrais, ruínas, santuários e arquivos proibidos, reunindo tudo o que pudesse encontrar sobre alma, Energia Amaldiçoada e existência espiritual.',
          'Enquanto inúmeros feiticeiros dedicavam suas vidas ao aperfeiçoamento do combate, Amatsu escolheu dedicar a sua ao conhecimento.',
          'Ao compreender a si mesmo e ao mundo, retornou ao Clã Katsu.',
          'Não apenas como um guerreiro capaz de derrotar Calamidades de Grau Especial, mas como um homem cuja compreensão sobre a alma ultrapassava qualquer outro feiticeiro de sua época.',
          'Por seus feitos durante a peregrinação, recebeu o título de **General do Vazio**, tornando-se o mais jovem indivíduo da história a alcançar essa posição.',
          '**A Soul Spirit Katana**',
          'Como resultado de décadas de pesquisas, Amatsu forjou uma ferramenta amaldiçoada diferente de qualquer outra existente.',
          'Batizada de **Soul Spirit Katana**, a espada foi criada utilizando metais amaldiçoados, rituais ancestrais e todo o conhecimento adquirido durante seus estudos sobre a alma.',
          'Ao contrário das armas convencionais, sua lâmina não se limitava a cortar matéria.',
          'Ela atingia diretamente a essência espiritual do alvo, ferindo aquilo que sustentava sua existência.',
          'Defesas físicas tornavam-se praticamente irrelevantes diante da Soul Spirit Katana, pois seu verdadeiro alvo jamais foi o corpo.',
          'A espada tornou-se a maior representação da filosofia de Amatsu: compreender a alma era compreender o próprio fundamento da vida.',
          '**O Homem que Buscava Respostas**',
          'Ao contrário de diversos heróis de sua época, Amatsu jamais demonstrou interesse por fama, reconhecimento ou poder político.',
          'Nunca escreveu tratados para ensinar outras pessoas, nunca fundou escolas e jamais procurou discípulos.',
          'Toda sua pesquisa existia por um único motivo.',
          'Compreender.',
          'Após tornar-se General do Vazio, continuou desaparecendo por longos períodos, retornando apenas quando encontrava uma nova hipótese para testar ou um novo mistério relacionado à alma.',
          'Para Amatsu, batalhas nunca foram um fim.',
          'Eram apenas oportunidades de observar aquilo que ainda não compreendia.',
          'Sua própria espada jamais foi tratada como um símbolo de poder.',
          'Era apenas uma ferramenta criada para responder perguntas que ninguém mais havia feito.',
          'Com o passar dos séculos, seus feitos desapareceram junto com boa parte dos registros da Era Heian.',
          'Enquanto outros heróis tornaram-se lendas populares, o nome de Amatsu lentamente foi esquecido.',
          'Hoje, poucos documentos ainda mencionam sua existência.',
          'Não porque lhe faltaram feitos.',
          'Mas porque ele jamais fez questão de que alguém os lembrasse.'
        ],
        illustration: ''
      },
      {
        id: 'case_anomalia_jujutsu',
        title: 'Relato IV — Anomalia Jujutsu',
        content: [
          'Ao longo da história do Jujutsu, inúmeras mutações, linhagens incomuns e fenômenos espirituais já foram registrados. Entretanto, apenas um caso é considerado incompatível com todas as classificações existentes.',
          'Os registros oficiais o catalogam apenas como **Anomalia Jujutsu**.',
          'Até o presente momento, trata-se do único ser cuja existência contradiz simultaneamente as leis dos Humanos, dos Revers e dos Netriuns.',
          '**A Origem da Anomalia**',
          'Durante os momentos finais da Guerra da Humanidade, uma Rever conhecida como **Gambia Lisk** realizou um feito considerado impossível.',
          'Ao invés de permanecer no Kami Sekai, atravessou os limites da própria realidade.',
          'Para realizar tal feito, consumiu completamente sua divindade.',
          'Esse sacrifício eliminou seus poderes Revers, sua capacidade de utilizar Energia Positiva e todos os privilégios naturais de sua raça.',
          'Entretanto, uma característica permaneceu intacta.',
          'Seu molde espiritual.',
          'Embora incapaz de utilizar qualquer poder Rever, seu fluxo permaneceu sendo o de um Rever.',
          'A única diferença era a energia que agora percorria esse molde.',
          'Energia Amaldiçoada negativa.',
          'Seu estado tornou-se semelhante ao de um Rever Despertado.',
          'Entretanto, diferentemente dos demais Revers, ela jamais passou pelo processo de despertar.',
          'Aquele estado tornou-se permanente.',
          '**O Primeiro Nascimento Impossível**',
          'Anos depois, vivendo em um mundo completamente desprovido de Energia Amaldiçoada, Gambia teve um filho com um ser humano comum.',
          'O nascimento dessa criança originou uma existência jamais prevista pelas leis da criação.',
          'Enquanto um Rever precisa aprender a utilizar Energia Negativa para despertar, essa criança nasceu utilizando apenas Energia Negativa.',
          'Jamais conheceu Energia Positiva.',
          'Jamais precisou despertar.',
          'Nasceu exatamente no estado em que um Rever comum levaria séculos para alcançar.',
          'Paradoxalmente, isso tornou impossível que algum dia pudesse despertar.',
          'Seu maior potencial já havia sido alcançado no instante de seu nascimento.',
          'Como consequência, todo o seu verdadeiro poder permaneceu permanentemente selado.',
          '**A Diferença Entre um Netriun**',
          'Durante muito tempo acreditou-se que essa existência fosse apenas uma variação dos Netriuns.',
          'Essa hipótese foi posteriormente descartada.',
          'Netriuns possuem um molde humano preenchido por Energia Positiva.',
          'Por essa razão, não possuem uma Kami no Tenkai própria.',
          'Sua Arma Espiritual manifesta apenas uma pequena parcela do poder pertencente a um Rever puro.',
          'A anomalia não apresenta nenhuma dessas características.',
          'Seu molde é integralmente Rever.',
          'Seu fluxo espiritual também.',
          'A única diferença encontra-se na natureza da energia que percorre esse molde.',
          'Energia negativa.',
          'Essa diferença altera completamente sua existência.',
          'Ao contrário dos Netriuns, ele não utiliza parte do poder de uma Kami no Tenkai.',
          'Ele compartilha uma.',
          '**A Alma Compartilhada**',
          'Investigações posteriores demonstraram que sua alma não pertence exclusivamente a ele.',
          'Sua existência está diretamente ligada à Kami no Tenkai de um Rever puro.',
          'Não como herdeiro.',
          'Não como usuário.',
          'Mas como uma segunda consciência habitando a mesma dimensão espiritual.',
          'Por esse motivo, sua alma jamais poderá seguir o ciclo natural da existência.',
          'Ela não reencarna.',
          'Não pode tornar-se uma maldição.',
          'E permanece eternamente vinculada à Kami no Tenkai que compartilha.',
          'Até o presente momento, nenhum outro caso semelhante foi registrado.',
          '**O Rever Negativo**',
          'Embora alguns estudiosos utilizem informalmente o termo **Rever Negativo**, essa denominação não representa uma nova raça.',
          'Ela existe apenas para descrever esse caso específico.',
          'Assim como um Rever comum, seu corpo deixa de envelhecer ao atingir a maturidade física.',
          'A partir desse momento, permanece biologicamente estável por tempo indeterminado.',
          'Entretanto, essa mesma condição constitui sua maior limitação.',
          'Por já ter nascido desperto, jamais poderá experimentar o verdadeiro Despertar Rever.',
          'Seu potencial permanece eternamente incompleto.',
          'Sua própria existência tornou-se um selo sobre seu poder.',
          '**Classificação Final**',
          'Após décadas de estudos, todas as hipóteses anteriores foram abandonadas.',
          'A existência registrada neste documento não pode ser classificada como Humano.',
          'Não pode ser classificada como Rever.',
          'Também não pode ser considerada um Netriun.',
          'Os arquivos da Sociedade Jujutsu passaram, então, a utilizar uma classificação inédita para descrevê-lo.',
          '**Anomalia Jujutsu.**',
          'Até o presente momento, apenas um indivíduo recebeu essa classificação.',
          '**Cosmic Darkside.**'
        ],
        illustration: ''
      },
      {
        id: 'case_ultimo_feiticeiro_inglaterra',
        title: 'Relato V — O Último Feiticeiro da Inglaterra',
        content: [
          'Entre os inúmeros registros esquecidos da história do jujutsu, poucos nomes carregam tanto respeito quanto **Kar**, conhecido através dos séculos como **o Feiticeiro da Peste**.',
          'Nascido na Inglaterra medieval, durante um período assolado por guerras, fome e epidemias, Kar foi o único feiticeiro conhecido de toda a região. Enquanto o Japão desenvolvia escolas e clãs especializados em Energia Amaldiçoada, a Europa praticamente desconhecia sua existência. Ainda assim, Kar caminhava sozinho, enfrentando maldições que nenhum outro ser humano sequer era capaz de enxergar.',
          'De aparência incomum, possuía cabelos completamente brancos, pele extremamente pálida e olhos vermelhos, cuja sensibilidade à luz o obrigava a esconder constantemente o rosto atrás de uma máscara de médico da peste e de um longo manto negro. Sua figura tornou-se uma lenda. Para o povo, era um anjo enviado por Deus. Para os nobres, um presságio de desgraças.',
          'Sua principal arma era a lendária **Foice da Morte**, uma ferramenta amaldiçoada cuja lâmina atacava diretamente o fluxo de Energia Amaldiçoada do alvo, causando dano e perda de Energia amaldiçoada no combate contra o inimigo, tornando qualquer ferimento potencialmente fatal até mesmo para maldições.',
          'A verdadeira origem de sua força, entretanto, estava em sua Técnica Amaldiçoada.',
          '**A Técnica da Criação**',
          'Kar era portador da Técnica da Criação, considerada por muitos estudiosos uma das técnicas mais versáteis já registradas.',
          'Ela permitia materializar praticamente qualquer objeto utilizando Energia Amaldiçoada como matéria-prima. Armas, muralhas, armaduras, instrumentos médicos e mecanismos complexos podiam ser criados livremente, desde que o usuário possuísse energia suficiente para sustentá-los. Quanto maior a complexidade da criação, maior era seu consumo.',
          'Essa capacidade transformou Kar em um combatente e médico sem igual, capaz de adaptar-se a qualquer situação.',
          '**Juliele**',
          'Ao lado de Kar vivia Juliele, sua esposa.',
          'Embora incapaz de utilizar Energia Amaldiçoada, Juliele tornou-se uma das maiores médicas de sua época. Seu conhecimento salvou incontáveis vidas durante diversas epidemias, fazendo com que ambos fossem conhecidos como os Guardiões da Inglaterra.',
          'Enquanto Kar eliminava maldições invisíveis, Juliele combatia as doenças visíveis.',
          'Durante anos, representaram esperança para um continente dominado pelo medo.',
          '**O Discípulo**',
          'Em determinado momento de sua vida, Kar encontrou um jovem órfão chamado Arthumer.',
          'Reconhecendo seu talento, decidiu aceitá-lo como discípulo.',
          'Durante anos, ensinou-lhe medicina, combate, manipulação de Energia Amaldiçoada e tudo o que sabia sobre o jujutsu.',
          'Por muito tempo, Arthumer admirou profundamente seu mestre.',
          'Entretanto, a admiração transformou-se lentamente em inveja.',
          'Percebendo que jamais conseguiria ultrapassar Kar apenas pelo treinamento convencional, aceitou um acordo com uma entidade misteriosa que o transformou em uma maldição aos poucos.',
          'Quando Kar descobriu a verdade, expulsou imediatamente o discípulo.',
          '**"Você escolheu o caminho da destruição. Já não é mais meu aluno."**',
          '**A Peste Negra**',
          'Meses depois, Arthumer retornou.',
          'Não para enfrentar seu mestre.',
          'Mas para destruir aquilo que ele mais amava.',
          'Juliele permaneceu atendendo seus pacientes até o último instante, recusando-se a abandonar o hospital que ajudara a construir.',
          'Arthumer assassinou Juliele diante daqueles que ela jurou proteger.',
          'Ao encontrar o corpo da esposa, Kar mergulhou em um silêncio absoluto.',
          'Não houve gritos.',
          'Não houve lágrimas.',
          'Apenas uma explosão de Energia Amaldiçoada que percorreu toda a região.',
          'Enquanto isso, Arthumer concluiu o ritual que preparava desde sua expulsão.',
          'Seu corpo apodreceu.',
          'Sua carne tornou-se uma doença viva.',
          'Milhares de moscas passaram a cobrir sua pele.',
          'Naquele instante nasceu a entidade posteriormente conhecida como **a Maldição da Peste Negra**.',
          'Sua simples existência espalhava enfermidades capazes de apagar cidades inteiras do mapa.',
          '**A Vitória Sobre a Calamidade**',
          'Compreendendo que aquela maldição jamais seria derrotada em um combate convencional, Kar tomou uma decisão extrema.',
          'Usou o potencial máximo de sua Técnica da Criação para fabricar uma única arma: um explosivo amaldiçoado alimentado por praticamente toda a sua Energia Amaldiçoada.',
          'Após momentos em luta, fingiu estar completamente derrotado.',
          'A maldição acreditou ter vencido.',
          'Aproximou-se lentamente para desferir o golpe final.',
          'Foi nesse momento que Kar sorriu pela primeira vez desde a morte de Juliele.',
          '**"Você perdeu no instante em que acreditou que eu havia desistido."**',
          'No momento seguinte, ativou o explosivo.',
          'A explosão foi descrita pelos poucos sobreviventes como um segundo nascer do sol.',
          'Montanhas foram destruídas.',
          'Florestas desapareceram.',
          'O campo de batalha foi completamente consumido pela Energia Amaldiçoada.',
          'Quando a poeira baixou, Arthumer e a Maldição da Peste Negra haviam sido completamente exterminados.',
          'Contra todas as expectativas, Kar sobreviveu.',
          'Até hoje não se sabe o motivo de ter sobrevivido sem ferimento algum. Ele deixou para trás uma Inglaterra finalmente livre da maior calamidade de sua história.',
          '**O Quinto Grande Clã**',
          'Após derrotar a Peste Negra, Kar abandonou definitivamente a Inglaterra e viajou para o Japão.',
          'Lá conheceu um jovem feiticeiro que se tornaria seu único ajudante e sucessor. Juntos estabeleceram uma nova clínica dedicada ao estudo da medicina jujutsu e da criação de medicamentos com Energia Amaldiçoada.',
          'Com o passar dos anos, essa linhagem foi oficialmente reconhecida como o **Quinto Grande Clã**, recebendo o nome de **Clã Kar** em homenagem ao seu Molde Humano.',
          'Durante aproximadamente uma década, Kar permaneceu no Japão, transmitindo seus conhecimentos e ajudando a consolidar o clã.',
          'Nesse mesmo período, os registros relatam que Kar participou de uma das maiores batalhas de sua vida. Ao lado de um poderoso feiticeiro também Europeu, enfrentou a temida **Maldição do Satã**, uma entidade de Grau Especial cuja existência era associada aos sentimentos humanos de heresia, corrupção e desespero.',
          'A batalha teria devastado uma vasta região. Embora os detalhes permaneçam perdidos, sabe-se que a maldição foi derrotada graças ao esforço conjunto dos dois feiticeiros, tornando esse confronto um dos primeiros registros de cooperação entre grandes feiticeiros de diferentes nações.',
          '**O Desaparecimento**',
          'Então, de forma completamente inesperada após a batalha, Kar desapareceu.',
          'Não houve explicações.',
          'Não houve corpo.',
          'Não houve despedidas.',
          'Nenhum registro explica para onde foi, como desapareceu ou sequer se ainda estava vivo.',
          'Seu ajudante fundou do zero o Clã Kar, enquanto o paradeiro de seu ideal humano transformou-se em um dos maiores mistérios da história do jujutsu.',
          'Mesmo séculos depois, nenhuma investigação conseguiu descobrir o destino do Feiticeiro da Peste.',
          'Até os dias atuais, seu desaparecimento permanece sem resposta.'
        ],
        illustration: ''
      }
    ]
  }
];

export const MAP_DATA = {
  title: "Mapa de Focos de Energia Amaldiçoada",
  description: "O monitoramento do fluxo residual na região metropolitana de Tóquio. As anomalias de energia negativa se acumulam em áreas de alta densidade populacional, exigindo constante vigilância da Escola Técnica Metropolitana.",
  locations: [
    { name: "Escola de Tóquio", desc: "Localizado em uma área montanhosa isolada por barreiras protetoras de Tengen.", coords: { x: "55%", y: "30%" } },
    { name: "Distrito de Shibuya", desc: "O local onde foi desencadeada a grande barreira do Incidente de Shibuya, aprisionando civis e feiticeiros.", coords: { x: "40%", y: "65%" } },
    { name: "Área Comercial de Shinjuku", desc: "O campo de batalha definitivo entre Satoru Gojo e Ryomen Sukuna, reduzido a escombros pela expansão de domínios.", coords: { x: "45%", y: "48%" } },
    { name: "Roppongi (Prédio Abandonado)", desc: "A primeira missão de Yuji e Nobara, infestada por maldições de baixo grau.", coords: { x: "32%", y: "58%" } },
    { name: "Abismo do Jogo de Abate (Sendai)", desc: "Colônia mística de alta letalidade, onde feiticeiros do passado reencarnaram para disputar pontos.", coords: { x: "72%", y: "25%" } }
  ]
};
