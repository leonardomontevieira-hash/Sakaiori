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
    id: "species_races",
    title: "As Espécies",
    subtitle: "Origem, Fluxo, Almas e Natureza das Formas de Vida",
    category: "Enciclopédia de Espécies",
    coverColor: "from-[#064e3b] to-[#022c22] border-[#047857]",
    coverPattern: "text-emerald-400/40 border-emerald-500/30",
    textColor: "text-emerald-300",
    iconName: "Users",
    chapters: [
      {
        id: "species_01_intro",
        title: "Capítulo I — Introdução às Espécies",
        content: [
          "A existência é habitada por inúmeras formas de vida. Entretanto, nem todas possuem a mesma origem, estrutura energética ou relação com os sistemas que sustentam a realidade.",
          "Algumas espécies foram criadas diretamente por entidades poderosas. Outras surgiram a partir de alterações nas almas e nos Fluxos. Existem também espécies cuja existência está diretamente relacionada às estruturas divinas.",
          "Entre as espécies de maior relevância para a organização atual do universo estão:\n\n• **Humanos**;\n• **Yokais Positivos**;\n• **Yokais Negativos**;\n• **Bruxos**;\n• **Void-Golems**;\n• **Slimes**;\n• **Fae**;\n• **Daichimon**;\n• **Revers**.",
          "Cada uma dessas espécies ocupa uma posição particular dentro da existência.",
          "É importante compreender que essas diferenças não se limitam à aparência física. Elas também envolvem a relação de cada espécie com a Energia Espiritual, a Energia Malévola, a Energia Nula, as almas e os diferentes sistemas de Fluxo.",
          "Este livro apresenta as características conhecidas dessas espécies e sua importância para a estrutura do universo.",
        ],
        illustration: "",
      },
      {
        id: "species_02_humanos",
        title: "Capítulo II — Humanos",
        content: [
          "Os humanos foram criados por Luciferus Asmodeus depois de seu exílio no Vazio.\n\nSua criação ocorreu posteriormente à das três espécies antigas: Void-Golems, Slimes e Fae.\n\nA humanidade desenvolveu-se inicialmente sobre uma única grande massa continental, conhecida como Pangeia. Ao longo das eras, as sociedades humanas cresceram, entraram em conflito e formaram diferentes estruturas políticas.\n\nOs humanos estabeleceram suas próprias nações e desenvolveram um sistema mágico baseado principalmente na Energia Espiritual.",
          "**Fluxo e Potencial Mágico**\n\nO Fluxo humano determina como a Energia Espiritual pode ser desenvolvida e utilizada por cada indivíduo.\n\nEm condições naturais, o desenvolvimento do Fluxo pode resultar em uma Magia com atributo. Esse atributo pode estar relacionado a elementos, subelementos ou conceitos mais abstratos.\n\nEntretanto, nem todos os humanos desenvolvem uma Magia de atributo.\n\nOs indivíduos de dois círculos apresentam uma genialidade excepcional que interfere no desenvolvimento natural do Fluxo. Como consequência, sua estrutura energética impede o uso convencional de uma Magia com atributo, levando-os a utilizar principalmente Energia Espiritual sem atributo.",
          "**Círculos**\n\nA humanidade desenvolveu um sistema de classificação conhecido como círculos, que representa a proximidade genética de um indivíduo em relação ao Herói e, consequentemente, seu potencial máximo natural.\n\nQuanto menor o número de círculos, maior o potencial.\n\nEntretanto, os círculos não determinam a força atual de uma pessoa. Treinamento, experiência, conhecimento, técnicas e domínio energético continuam sendo fatores importantes.",
          "**Magos**\n\nOs humanos que utilizam Energia Espiritual são tradicionalmente chamados de Magos.\n\nA sociedade mágica humana desenvolveu organizações próprias para recrutar, treinar e controlar seus integrantes.\n\nApesar disso, a maior parte da população humana comum desconhece a verdadeira extensão da magia e das estruturas existentes no mundo.",
          "**Ciclo das Almas**\n\nOs humanos participam do sistema de almas desenvolvido por Asmodeus.\n\nNormalmente, após a morte, a alma segue para o Plano dos Mortos, onde aguarda sua reciclagem e posterior reencarnação.\n\nCada espécie possui seu próprio molde de Fluxo, o que determina a compatibilidade de suas almas com os diferentes sistemas de reencarnação.\n\nAlterações profundas na estrutura espiritual de um humano podem comprometer esse ciclo, como aconteceu com Meguro após os experimentos realizados por Mayuri Cifer.",
        ],
        illustration: "",
      },
      {
        id: "species_03_netriuns",
        title: "Capítulo III — Netriuns",
        content: [
          "Os Netriuns são seres originados da linhagem de O Herói.\n\nSua existência está relacionada à natureza excepcional do Herói, que rompeu as barreiras naturais entre humanos e Revers ao colocar a máscara recebida da coruja branca.\n\nOs Netriuns possuem uma estrutura particular: apresentam um molde de Fluxo humano combinado a uma Energia Nula semelhante à dos Revers.\n\nEssa combinação faz com que não sejam considerados humanos comuns, mas também não sejam classificados como Revers.\n\nOs Netriuns constituem, portanto, uma categoria própria de seres dentro da existência.",
          "**Natureza Energética**\n\nA principal característica conhecida dos Netriuns é a combinação entre duas naturezas distintas.\n\nDe um lado, possuem o molde de Fluxo associado à humanidade. De outro, apresentam uma Energia Nula semelhante à encontrada nos Revers.\n\nEssa combinação distingue sua estrutura das duas espécies das quais suas características se aproximam.\n\nApesar da semelhança energética com os Revers, os Netriuns não devem ser confundidos com eles. Sua existência possui uma origem própria, diretamente ligada à linhagem do Herói.",
          "**Reencarnação**\n\nOs Netriuns possuem uma característica excepcional relacionada ao ciclo das almas: quando morrem, reencarnam instantaneamente.\n\nDiferentemente do ciclo normal de reencarnação, sua alma não precisa passar pelo período habitual de espera antes de retornar à vida.\n\nAlém disso, os Netriuns preservam todas as memórias e experiências adquiridas em suas vidas anteriores.\n\nIsso significa que uma nova encarnação não representa um recomeço do ponto de vista da consciência. O indivíduo continua carregando o conhecimento acumulado durante suas existências anteriores.\n\nCada vida acrescenta novas experiências à sua trajetória, permitindo que sua história pessoal continue através de sucessivas encarnações.\n\nA morte, portanto, não representa uma interrupção prolongada de sua existência, mas uma transição praticamente imediata para uma nova vida.",
          "**Importância para a Humanidade**\n\nOs Netriuns possuem importância histórica por estarem ligados à descendência do Herói e às consequências de sua transformação.\n\nSua existência representa uma ligação entre a humanidade e características normalmente associadas aos seres divinos.\n\nEntretanto, essa relação não significa que sejam simplesmente humanos mais poderosos ou Revers com aparência humana.\n\nOs Netriuns são seres próprios, com uma estrutura que combina características dessas duas naturezas sem pertencer integralmente a nenhuma delas.\n\nSua reencarnação instantânea e a preservação das memórias tornam sua relação com a vida e a morte particularmente diferente daquela experimentada pelas demais espécies.",
        ],
        illustration: "",
      },
      {
        id: "species_04_yokais",
        title: "Capítulo IV — Yokais",
        content: [
          "Os Yokais constituem uma categoria importante de seres espirituais e estão associados a fenômenos relacionados à Energia Espiritual, às almas e à Energia Malévola.\n\nExistem duas classificações fundamentais:\n\n**Yokais Positivos** e **Yokais Negativos**.\n\nEmbora compartilhem a denominação Yokai, suas funções dentro da existência são diferentes.",
          "**4.1. Yokais Positivos**\n\nOs Yokais Positivos estão relacionados à criação e à proteção da Energia Espiritual.\n\nSua função inclui proteger as almas contra a influência dos Yokais Negativos.\n\nDessa maneira, desempenham um papel importante na manutenção do equilíbrio espiritual e na proteção das almas que participam do ciclo da existência.\n\nSua importância não se limita ao combate contra outros seres. Eles também estão ligados à preservação das condições necessárias para que a Energia Espiritual continue existindo e sendo utilizada pelos seres vivos.",
          "**4.2. Yokais Negativos**\n\nOs Yokais Negativos estão associados à Energia Malévola e à Bruxaria.\n\nUma das formas conhecidas de surgimento de um Yokai Negativo envolve a morte de uma pessoa sob condições de intensa Bruxaria.\n\nQuando uma alma é submetida a esse tipo de influência em intensidade suficiente, ela pode deixar de seguir seu destino normal e transformar-se em um Yokai Negativo.\n\nEsse processo representa uma alteração profunda na condição da alma.\n\nOs Yokais Negativos são, portanto, diretamente relacionados às consequências espirituais da Energia Malévola e da Bruxaria.",
          "**4.3. Diferenças Fundamentais**\n\nA principal diferença entre as duas categorias está em sua relação com os sistemas espirituais.\n\nOs Yokais Positivos contribuem para a criação e a proteção da Energia Espiritual e das almas.\n\nOs Yokais Negativos estão associados à Energia Malévola e à transformação de almas sob determinadas condições.\n\nSuas características físicas, formas de reprodução e demais propriedades específicas serão definidas de acordo com o desenvolvimento particular de cada categoria.",
        ],
        illustration: "",
      },
      {
        id: "species_05_bruxos",
        title: "Capítulo V — Bruxos",
        content: [
          "Os Bruxos constituem uma das categorias de maior relevância para a compreensão da Bruxaria e de suas consequências dentro da existência.",
          "A Bruxaria está diretamente relacionada à história de Sakai Ban e aos acontecimentos que alteraram o sistema mágico humano.",
          "Durante seu confronto com O Herói, Sakai Ban utilizou Babel, seu ataque mais poderoso. A técnica provocou alterações profundas nos Fluxos humanos e deu origem a uma nova variável energética conhecida como Energia Malévola, também chamada de Energia Negativa.",
          "A Energia Malévola e a Bruxaria passaram, assim, a ocupar posições importantes na história espiritual da humanidade.",
          "**Relação com a Energia Malévola**\n\nA Bruxaria está associada a fenômenos espirituais capazes de interferir no destino das almas.\n\nQuando uma alma é submetida a uma quantidade suficientemente elevada de Bruxaria, existe a possibilidade de ela se transformar em um Yokai Negativo.\n\nEssa relação faz com que os Bruxos sejam relevantes para o estudo das alterações espirituais e dos acontecimentos que podem retirar uma alma de seu ciclo normal.",
          "A natureza completa dos Bruxos, suas características físicas, sua origem específica e suas capacidades individuais constituem aspectos próprios dessa espécie e devem ser diferenciados das propriedades gerais da Bruxaria.",
        ],
        illustration: "",
      },
      {
        id: "species_06_void_golems",
        title: "Capítulo VI — Void-Golems",
        content: [
          "Os Void-Golems foram criados por Luciferus Asmodeus para Zakels Lisk.\n\nPosteriormente, a espécie foi colocada sob a posse e proteção de Zakels.\n\nEles constituem uma das três espécies antigas criadas por Asmodeus antes de seu exílio.",
          "**Natureza Física**\n\nOs Void-Golems são criaturas pequenas constituídas por uma espécie de fumaça negra.\n\nCada indivíduo nasce com uma aparência própria e permanente.\n\nUm Void-Golem pode apresentar uma silhueta semelhante à de um humano, enquanto outro pode possuir características semelhantes às de um corvo.\n\nNão existe uma forma física universal que todos os indivíduos precisem compartilhar.\n\nTambém não existem características visuais evidentes que permitam determinar com precisão sua idade.",
          "**Mitose**\n\nOs Void-Golems possuem a capacidade natural de realizar mitose.\n\nQuando chegam ao momento adequado de seu ciclo de vida, podem dividir-se em dois indivíduos.\n\nOs novos indivíduos possuem genética essencialmente idêntica à do original, mas tornam-se jovens novamente.\n\nAlém disso, não herdam as Magias acumuladas pelo antepassado.\n\nCada novo Void-Golem recebe uma alma diferente, proveniente do ciclo das almas.\n\nPortanto, a mitose não duplica uma alma: ela produz dois novos indivíduos geneticamente equivalentes, mas espiritualmente distintos.",
          "**Magia**\n\nA característica central das Magias dos Void-Golems é a divisão.\n\nToda Magia dessa espécie precisa envolver algum tipo de divisão, independentemente do atributo ou da manifestação utilizada.\n\nEssa propriedade pode assumir diversas formas, como a divisão de um corpo em partículas, pétalas, criaturas menores ou outras unidades.\n\nA manifestação específica varia de indivíduo para indivíduo, mas o conceito de divisão permanece como uma regra fundamental.",
          "**Morte**\n\nOs Void-Golems podem sobreviver a situações que seriam fatais para outras espécies graças à sua capacidade de divisão.\n\nEntre as condições conhecidas que podem resultar em sua morte definitiva estão a velhice e os efeitos capazes de impedir sua capacidade de realizar a divisão.\n\nA unica forma de aumentar seu volume sem morrer é realizando a mitose enquanto se está em seu modo dividido, como por exemplo: Um Void-Golem se dividindo normalmente, tem seu fluxo retirado e voltado ao ciclo de almas e outros dois assumem o lugar de suas metades com magias distintas, mas caso o Void Golem esteja dividido em diversas petalas (Sua magia no exemplo) e se multiplicar, na hora de se juntar, todos voltam a ser o mesmo ser, garantindo uma forma de longividade.",
        ],
        illustration: "",
      },
      {
        id: "species_07_slimes",
        title: "Capítulo VII — Slimes",
        content: [
          "Os Slimes foram criados por Luciferus Asmodeus para Sakai Ban.\n\nPosteriormente, foram colocados sob a posse e proteção de Sakai.\n\nAssim como os Void-Golems, fazem parte das três espécies antigas criadas antes do exílio de Asmodeus.",
          "**Natureza Física**\n\nOs corpos dos Slimes são formados por Energia Espiritual condensada (霊質 - Reishitsu).\n\nSua coloração natural inicial é amarela, mas muda conforme absorvem mais Magias.\n\nA sequência conhecida é:\n\n**Amarelo → Verde → Azul → Ciano brilhante**.\n\nO ciano brilhante representa o auge de sua evolução cromática e está relacionado à acumulação de Magias.\n\nOs Slimes podem assumir formas bípedes, quadrúpedes e outras configurações, embora continuem reconhecíveis como membros de sua espécie.",
          "**Absorção de Magia**\n\nOs Slimes não possuem inicialmente um atributo mágico próprio.\n\nEm compensação, podem absorver Magias e armazená-las em seu reservatório mágico para utilização posterior.\n\nEsse processo possui um custo energético. A energia necessária para absorver uma Magia é retirada da própria reserva do Slime.\n\nQuanto mais energia ele gasta, mais vulnerável se torna.\n\nEntretanto, sua capacidade de absorção possui limites importantes.\n\nOs Slimes não conseguem absorver técnicas baseadas exclusivamente em Energia Espiritual sem atributo mágico. Isso inclui técnicas de usuários como Reiji Kami e Millin Ain.",
          "**Comunicação**\n\nOs Slimes possuem uma natureza naturalmente ingênua e não conseguem falar de maneira convencional por conta própria.\n\nPara se comunicarem verbalmente, precisam absorver uma Magia relacionada à voz, comunicação ou linguagem.",
          "**Morte**\n\nA existência dos Slimes depende diretamente de sua reserva energética.\n\nQuando sua Energia Espiritual chega completamente a zero, eles morrem.\n\nEssa característica torna o gerenciamento de energia uma parte fundamental de sua sobrevivência.",
        ],
        illustration: "",
      },
      {
        id: "species_08_fae",
        title: "Capítulo VIII — Fae",
        content: [
          "Os Fae foram criados por Luciferus Asmodeus para Kyoka Uryu.\n\nPosteriormente, foram colocados sob a posse e proteção de Kyoka.\n\nSão uma das três espécies antigas do Ningen-Sekai.",
          "**Natureza e Energia Espiritual**\n\nOs Fae possuem uma capacidade natural de absorver passivamente a Energia Espiritual presente no ambiente.\n\nEsse processo, conhecido como fotossíntese de Energia Espiritual, permite que utilizem energia ambiental para sustentar o próprio organismo.\n\nEssa característica contribui para sua longevidade e para a manutenção de suas reservas energéticas.\n\nOs Fae também podem ultrapassar o limite normal de armazenamento energético quando utilizam a energia absorvida para sustentar o funcionamento de seus corpos.",
          "**Magia**\n\nOs Fae obrigatoriamente possuem uma Magia relacionada a elementos ou subelementos.\n\nDiferentemente de outras formas de Magia humana, sua estrutura não permite atributos abstratos como tempo, espaço, gravidade, alma, medicina ou veneno.\n\nEssa limitação representa uma característica própria da espécie.",
          "**Classificação**\n\nOs Fae utilizam Energia Espiritual e, por isso, são classificados como Xamãs.\n\nO termo Xamã é utilizado para as espécies não humanas que utilizam essa forma de energia.\n\nOs humanos utilizam tradicionalmente o termo Mago, enquanto os Revers possuem um sistema próprio baseado em Energia Nula e Feitiçaria.",
          "**Mentira**\n\nOs Fae possuem uma característica particularmente incomum: conseguem mentir sem deixar qualquer rastro da mentira.\n\nSua natureza não manifesta um sinal detectável simplesmente porque uma falsidade foi pronunciada.\n\nPor isso, métodos comuns de detecção de mentiras podem falhar ao tentar identificar suas falsidades.",
        ],
        illustration: "",
      },
      {
        id: "species_09_daichimon",
        title: "Capítulo IX — Daichimon",
        content: [
          "Os Daichimon, também escritos em japonês como 大血モン, são a espécie associada ao Submundo.\n\nSeu nome pode ser interpretado como uma referência a grandes monstros sanguinários.\n\nO Submundo está localizado em Kami-Sekai e funciona como destino para determinadas almas que não conseguem continuar o ciclo normal de reciclagem e reencarnação.\n\nOs Daichimon estão diretamente ligados a esse ambiente.",
          "**Formação**\n\nQuando uma alma chega ao Submundo, ela manifesta um corpo físico.\n\nEsse corpo é uma síntese influenciada pelas diferentes vidas que a alma já teve.\n\nSua existência reúne, portanto, aspectos da história acumulada daquela alma.\n\nIsso diferencia os Daichimon das almas que permanecem no Plano dos Mortos aguardando sua reciclagem, normalmente sem possuir corpos físicos.",
          "**Natureza**\n\nOs Daichimon são seres imortais.\n\nVivem em um ambiente caracterizado por florestas densas, regiões sombrias, estruturas decadentes e biomas de aparência quase apocalíptica.\n\nO Submundo também possui poucas leis formais desde o exílio de Luciferus Asmodeus, seu primeiro Imperador.",
          "**Energia**\n\nOs Daichimon utilizam Energia Espiritual e, por isso, são classificados como Xamãs.\n\nSua existência está relacionada ao funcionamento do Submundo e ao destino de determinadas almas.\n\nEntretanto, o Submundo não deve ser confundido com o Inferno.\n\nO Inferno é o nome utilizado pelas outras espécies para designar o Reino dos Humanos, enquanto o Submundo é uma região distinta de Kami-Sekai.",
        ],
        illustration: "",
      },
      {
        id: "species_10_revers",
        title: "Capítulo X — Revers",
        content: [
          "Os Revers estão diretamente relacionados à estrutura divina da criação.\n\nSua existência está associada aos Kami no Tenkai, entidades relacionadas a conceitos e fenômenos fundamentais da realidade.\n\nOs Revers não são simplesmente uma espécie mortal extremamente poderosa.\n\nEles constituem manifestações físicas associadas a essas entidades.",
          "**Relação com os Kami no Tenkai**\n\nA estrutura de um Rever está diretamente ligada ao Kami no Tenkai que representa.\n\nSua alma corresponde a uma dimensão própria relacionada a essa entidade.\n\nPor isso, o Rever não possui uma vontade completamente independente do Kami no Tenkai correspondente.\n\nEssa relação é fundamental para compreender sua natureza.\n\nOs Revers representam uma ligação entre as manifestações dos conceitos fundamentais da criação e a existência física.",
          "**Energia Nula**\n\nOs Revers utilizam Energia Nula, diferentemente das espécies que utilizam Energia Espiritual.\n\nSuas técnicas são classificadas como Feitiçaria.\n\nEssa diferença os separa dos Magos humanos e dos Xamãs de outras espécies.\n\nA Energia Nula não deve ser tratada simplesmente como uma variedade comum de Energia Espiritual, pois pertence a um sistema próprio.",
          "**Os Quatro Primordiais**\n\nEntre os Revers de maior importância histórica estão os Quatro Primordiais:\n\n• **Zakels Lisk**;\n• **Luciferus Asmodeus**;\n• **Sakai Ban**;\n• **Kyoka Uryu**.\n\nEsses quatro seres ocuparam posições fundamentais na história dos Revers e na criação das espécies do Ningen-Sekai.\n\nAsmodeus, por exemplo, criou os Void-Golems, os Slimes, os Fae e, posteriormente, os humanos.\n\nSakai Ban também desempenhou um papel fundamental na história humana, especialmente através do uso de Babel e das consequências energéticas deixadas por sua técnica.",
          "**Papel na Existência**\n\nOs Revers ocupam uma posição particular dentro da estrutura cosmológica.\n\nSua natureza está relacionada às entidades divinas, enquanto as demais espécies possuem outros tipos de origem e organização energética.\n\nEssa diferença é uma das razões pelas quais os Revers não são classificados como Magos ou Xamãs.",
        ],
        illustration: "",
      },
      {
        id: "species_11_relations",
        title: "Capítulo XI — Relação entre as Espécies",
        content: [
          "As espécies conhecidas não representam apenas diferenças de aparência ou comportamento.",
          "Cada uma possui uma relação particular com a energia, as almas e a própria estrutura da criação.\n\n• Os **humanos** utilizam Energia Espiritual e desenvolveram seu próprio sistema de Magia.\n• Os **Yokais Positivos** estão relacionados à criação e à proteção da Energia Espiritual e das almas.\n• Os **Yokais Negativos** estão associados à Energia Malévola e a determinadas transformações de almas.\n• Os **Bruxos** estão relacionados à Bruxaria e aos fenômenos espirituais associados a ela.\n• Os **Void-Golems** possuem Magias cuja característica essencial é a divisão.\n• Os **Slimes** absorvem e armazenam Magias, embora dependam de sua reserva energética para sobreviver.\n• Os **Fae** absorvem passivamente Energia Espiritual do ambiente e possuem limitações próprias quanto aos atributos mágicos.\n• Os **Daichimon** estão associados ao Submundo e à manifestação física de determinadas almas.\n• Os **Revers** estão ligados aos Kami no Tenkai e utilizam Energia Nula e Feitiçaria.",
          "Essas diferenças demonstram que não existe um único modelo de existência aplicável a todos os seres.",
          "Cada espécie possui suas próprias regras e sua própria relação com os sistemas que compõem o universo.",
        ],
        illustration: "",
      },
      {
        id: "species_12_conclusion",
        title: "Capítulo XII — Conclusão — As Espécies Mais Relevantes",
        content: [
          "A seleção apresentada neste livro não significa que existam apenas nove espécies em toda a criação.",
          "Pelo contrário, a existência é habitada por inúmeras formas de vida, e muitas delas podem ser encontradas dentro dos próprios Vortex apresentados anteriormente.",
          "A razão para abordar especificamente humanos, Yokais Positivos, Yokais Negativos, Bruxos, Void-Golems, Slimes, Fae, Daichimon e Revers é que essas são algumas das espécies mais relevantes para compreender o funcionamento do universo e a organização de seus respectivos Vortex.",
          "Cada uma delas possui uma importância particular dentro da estrutura cosmológica, histórica ou energética da existência.",
          "Isso não significa que todos os seres existentes precisem possuir características mágicas extraordinárias ou desempenhar um papel central na história.",
          "Um exemplo simples são os gatos e cachorros.\n\nAmbos existem no Vortex dos humanos, mas não precisam receber capítulos próprios neste livro, pois sua presença não é tão relevante para a compreensão dos principais sistemas mágicos e cosmológicos apresentados.\n\nO mesmo princípio se aplica a inúmeras outras formas de vida que podem existir nos diferentes Vortex.",
          "Portanto, este livro não pretende apresentar um catálogo absolutamente completo de todos os seres existentes.\n\nSeu objetivo é registrar as espécies que possuem maior relevância para a estrutura do universo, seus sistemas de energia, suas almas e sua história.\n\nOutras espécies poderão ser desenvolvidas futuramente conforme sua importância para o mundo for estabelecida.",
          "A existência é muito maior do que aquilo que foi registrado nestas páginas.\n\nAs espécies descritas representam apenas uma parte do conjunto de seres que habitam os Mundos, os Vortex e as Dimensões.\n\nConhecer essas espécies é compreender uma parte fundamental do universo, não conhecer todos os seres que existem nele.",
        ],
        illustration: "",
      },
    ],
  },
  {
  "id": "power_system",
  "title": "Sistema de Poder",
  "subtitle": "Fluxo, Energia Espiritual, Tsuki e Manifestações Divinas",
  "category": "Tratado Esotérico & Combate",
  "coverColor": "from-[#451a03] to-[#1c0802] border-[#b45309]",
  "coverPattern": "text-amber-400/40 border-amber-500/30",
  "textColor": "text-amber-300",
  "iconName": "Sparkles",
  "chapters": [
    {
      "id": "power_01_intro",
      "title": "Capítulo I — Introdução ao Sistema de Poder",
      "content": [
        "O sistema de poder determina como os diferentes seres utilizam energia, desenvolvem capacidades mágicas e interagem com as estruturas da existência.",
        "Embora diversas espécies compartilhem alguns mecanismos, elas não utilizam necessariamente a mesma forma de energia ou seguem as mesmas regras.",
        "Os humanos desenvolvem suas capacidades principalmente por meio do Fluxo, da Energia Espiritual e das Magias com atributos. Algumas espécies não humanas também utilizam Energia Espiritual, sendo classificadas como Xamãs. Os Revers, por outro lado, utilizam Energia Nula e desenvolvem técnicas chamadas Feitiçarias.",
        "Além desses sistemas, existem técnicas universais, características especiais, mecanismos de herança e manifestações de poder relacionadas aos seres divinos.",
        "Os principais elementos do sistema são:\n\n• **Fluxo**;\n• **Energia Espiritual**;\n• **Energia Espiritual sem atributo**;\n• **Magia e Atributos Mágicos**;\n• **Magos e Xamãs**;\n• **Tsuki, Hao, Bax e Tsuki Superior**;\n• **MuryoGan**;\n• **Círculos e herança genética**;\n• **Ressonância Divina**;\n• **Graças Divinas**;\n• **Conexão Espiritual**;\n• **Bruxaria**.",
        "Cada elemento possui uma função específica dentro da organização geral do poder."
      ],
      "illustration": ""
    },
    {
      "id": "power_02_fluxo",
      "title": "Capítulo II — Fluxo",
      "content": [
        "O Fluxo é uma estrutura fundamental que determina como a energia de um indivíduo se desenvolve, circula e pode ser utilizada.\n\nEle está diretamente relacionado às capacidades mágicas de cada ser.\n\nNos humanos, o desenvolvimento natural do Fluxo pode resultar na formação de uma Magia com atributo. Entretanto, sua estrutura também pode permitir a utilização de Energia Espiritual sem atributo mágico.\n\nO Fluxo não é apenas uma medida da quantidade de energia que alguém possui. Ele influencia a maneira como essa energia pode ser utilizada e quais possibilidades estão disponíveis para o indivíduo.\n\nPor isso, duas pessoas com reservas energéticas semelhantes podem desenvolver capacidades completamente diferentes.",
        "**2.1. Desenvolvimento do Fluxo**\n\nDurante o desenvolvimento de um indivíduo, o Fluxo pode organizar-se para permitir a manifestação de determinado atributo mágico.\n\nUma pessoa poderia, por exemplo, desenvolver uma Magia de Fogo, enquanto outra desenvolveria Magia de Vento ou Gravidade.\n\nEntretanto, esse processo não é idêntico para todos.\n\nOs indivíduos de dois círculos apresentam uma característica excepcional: sua genialidade interfere no desenvolvimento do próprio Fluxo ainda durante a gestação.\n\nEssa interferência impede a manifestação convencional do atributo mágico que deveria surgir naturalmente, fazendo com que o indivíduo passe a utilizar Energia Espiritual sem atributo.\n\nEsse fenômeno demonstra que o Fluxo não determina apenas a Magia que alguém pode desenvolver, mas também pode ser profundamente influenciado pelas características do próprio indivíduo.",
        "**2.2. Fluxo e Espécies**\n\nCada espécie possui um molde próprio de Fluxo.\n\nEsses moldes estão relacionados à estrutura energética e à compatibilidade das almas com os sistemas de cada espécie.\n\nPor isso, uma alma humana não pode simplesmente ser tratada como equivalente à alma de um Fae, Slime ou Void-Golem.\n\nAs diferenças entre os moldes energéticos são fundamentais para compreender a existência das espécies e o funcionamento do ciclo de reencarnação."
      ],
      "illustration": ""
    },
    {
      "id": "power_03_energia_espiritual",
      "title": "Capítulo III — Energia Espiritual",
      "content": [
        "A Energia Espiritual é uma das principais formas de energia utilizadas pelos seres vivos do Ningen-Sekai.\n\nEla pode ser empregada de diferentes maneiras, dependendo das características do Fluxo e das capacidades individuais.\n\nExistem duas formas gerais de utilização que precisam ser diferenciadas:\n\n• **Energia Espiritual com atributo mágico**\n• **Energia Espiritual sem atributo mágico**.",
        "A primeira permite manifestar uma Magia específica, determinada pelo atributo do indivíduo.\n\nA segunda permite manipular diretamente a energia, sem depender de um atributo convencional.\n\nEssa distinção é fundamental, pois possuir Magia não significa necessariamente dominar técnicas sem atributo, assim como ser capaz de manipular Energia Espiritual diretamente não significa possuir uma Magia convencional."
      ],
      "illustration": ""
    },
    {
      "id": "power_04_espiritual_sem_atributo",
      "title": "Capítulo IV — Energia Espiritual sem Atributo",
      "content": [
        "A Energia Espiritual sem atributo é utilizada diretamente, sem ser transformada em uma Magia fundamentada em um atributo específico.\n\nSua utilização permite produzir técnicas através da manipulação e estruturação da própria energia.\n\nEntre as possibilidades estão:\n\n• Criação de lâminas e armas energéticas;\n• Disparos concentrados;\n• Barreiras defensivas;\n• Revestimentos corporais;\n• Ataques de diferentes alcances;\n• Técnicas personalizadas.",
        "A variedade dessas técnicas depende da capacidade do usuário de compreender, controlar e estruturar sua própria energia.\n\nDois indivíduos podem possuir reservas semelhantes e, mesmo assim, apresentar estilos de combate completamente diferentes.\n\nA ausência de atributo não significa ausência de versatilidade. Pelo contrário, um usuário com grande capacidade de manipulação pode desenvolver técnicas extremamente complexas sem depender de uma Magia convencional.",
        "**4.1. Limitações**\n\nA utilização de Energia Espiritual sem atributo não significa que qualquer indivíduo consiga reproduzir qualquer técnica.\n\nÉ necessário compreender sua estrutura e possuir domínio suficiente para executá-la.\n\nAlém disso, algumas espécies apresentam limitações específicas.\n\nOs Slimes, por exemplo, não conseguem absorver técnicas fundamentadas exclusivamente em Energia Espiritual sem atributo.\n\nIsso demonstra que a utilização e a interação com essa energia dependem também das características próprias de cada espécie.",
        "**4.2. Reserva Energética**\n\nA quantidade de Energia Espiritual disponível influencia a capacidade de um indivíduo de sustentar suas técnicas.\n\nEntretanto, a reserva não determina sozinha o resultado de um combate.\n\nControle, experiência, eficiência e complexidade das técnicas também interferem no desempenho.\n\nOs humanos de dois círculos possuem a maior reserva de Energia Espiritual entre os humanos, característica associada à reorganização excepcional de seu Fluxo."
      ],
      "illustration": ""
    },
    {
      "id": "power_05_magia",
      "title": "Capítulo V — Magia",
      "content": [
        "A Magia é a manifestação de capacidades mágicas associadas ao desenvolvimento do Fluxo.\n\nNos humanos, uma Magia convencional manifesta um atributo específico.\n\nEsse atributo determina a natureza das capacidades que o indivíduo pode desenvolver.\n\nUma pessoa com Magia de Fogo, por exemplo, pode manipular manifestações relacionadas às chamas. Uma pessoa com Magia de Gravidade pode produzir efeitos relacionados à gravidade.\n\nEntretanto, os atributos não estão limitados a fenômenos elementais.\n\nExistem Magias associadas a conceitos abstratos, como aceleração, intangibilidade, medicina e regeneração celular.\n\nCada Magia possui suas próprias possibilidades e limitações.",
        "**5.1. Magia e Energia Espiritual**\n\nA Energia Espiritual fornece a energia utilizada, enquanto o atributo determina a natureza da manifestação mágica.\n\nEssa diferença permite que a Magia de dois indivíduos seja completamente distinta, mesmo quando ambos utilizam Energia Espiritual.\n\nO atributo não representa necessariamente a quantidade de energia disponível, mas uma característica do modo como essa energia pode se manifestar.",
        "**5.2. Magia e Técnicas Universais**\n\nMagia e Tsuki não são a mesma coisa.\n\nA Magia está associada a um atributo específico desenvolvido pelo Fluxo.\n\nTsuki é um sistema de técnicas baseado principalmente na utilização de Energia Espiritual sem atributo.\n\nUm indivíduo pode dominar sua Magia e apresentar pouco domínio de Tsuki.\n\nTambém pode ocorrer o contrário.\n\nPortanto, a capacidade de utilizar uma Magia não determina automaticamente a habilidade de executar técnicas universais."
      ],
      "illustration": ""
    },
    {
      "id": "power_06_atributos_magicos",
      "title": "Capítulo VI — Atributos Mágicos",
      "content": [
        "Os Atributos Mágicos determinam a natureza das Magias individuais.\n\nEles podem ser elementais, subelementais ou abstratos.\n\nA variedade de atributos permite que os indivíduos desenvolvam capacidades bastante diferentes entre si.\n\nEntre os atributos conhecidos estão:\n\n**Elementais e subelementais:**\n• Fogo;\n• Vento;\n• Raio;\n• Luz;\n• Neblina.\n\n**Abstratos e especializados:**\n• Gravidade;\n• Medicina;\n• Veneno;\n• Regeneração celular;\n• Aceleração;\n• Invocação;\n• Intangibilidade.\n\nEssa classificação é ilustrativa e não representa uma lista completa de todos os atributos existentes.",
        "**6.1. Elementos e Subelementos**\n\nOs atributos elementais estão relacionados à manipulação de determinados fenômenos ou elementos.\n\nSuas manifestações podem variar de acordo com o domínio individual e as características específicas da Magia.\n\nA existência de um atributo não significa que todos os seus usuários apresentem o mesmo estilo de combate.",
        "**6.2. Atributos Abstratos**\n\nOs atributos abstratos não precisam corresponder a um elemento convencional.\n\nEles podem estar relacionados a propriedades, fenômenos ou funções específicas.\n\nUma Magia de Aceleração, por exemplo, não é simplesmente uma Magia de Raio, pois atua diretamente sobre a aceleração.\n\nDa mesma forma, a Intangibilidade possui uma natureza diferente da manipulação de um elemento físico.",
        "**6.3. Limitações Raciais**\n\nNem todas as espécies podem desenvolver qualquer atributo.\n\nOs Fae, por exemplo, obrigatoriamente possuem Magias relacionadas a elementos ou subelementos. Eles não podem possuir atributos abstratos como tempo, espaço, gravidade, alma, medicina ou veneno.\n\nEssa restrição faz parte da estrutura particular da espécie.\n\nPortanto, a variedade de atributos disponíveis depende não apenas da Magia individual, mas também das regras próprias de cada espécie."
      ],
      "illustration": ""
    },
    {
      "id": "power_07_magos_xamans",
      "title": "Capítulo VII — Magos e Xamãs",
      "content": [
        "A utilização de Energia Espiritual é encontrada em diferentes espécies, mas a classificação de seus usuários varia de acordo com a sua natureza e origem biológica ou cosmológica.",
        "**7.1. Magos**\n\nOs humanos que utilizam Energia Espiritual são tradicionalmente chamados de Magos.\n\nEles podem desenvolver Magias com atributos ou especializar-se na utilização de Energia Espiritual sem atributo.\n\nA sociedade mágica humana possui organizações próprias para recrutar, treinar e controlar seus integrantes.\n\nOs humanos também desenvolveram sistemas de classificação e técnicas que influenciam o treinamento e a avaliação de seus usuários.",
        "**7.2. Xamãs**\n\nO termo Xamã é utilizado para os seres não humanos que utilizam Energia Espiritual.\n\nEntre eles estão:\n• Fae;\n• Slimes;\n• Void-Golems;\n• Daichimon;\n• Outras espécies capazes de utilizar Energia Espiritual.\n\nA classificação não significa que todos esses seres possuam as mesmas capacidades. Cada espécie apresenta regras particulares de utilização da energia.",
        "**7.3. Revers**\n\nOs Revers constituem uma exceção.\n\nEles utilizam Energia Nula e desenvolvem técnicas classificadas como Feitiçaria.\n\nPor isso, não são considerados Magos ou Xamãs dentro dessa classificação.\n\nA Energia Nula pertence a um sistema próprio e não deve ser confundida com a Energia Espiritual sem atributo."
      ],
      "illustration": ""
    },
    {
      "id": "power_08_tsuki",
      "title": "Capítulo VIII — Tsuki",
      "content": [
        "Tsuki é um sistema de técnicas universais criado por O Herói.\n\nSeu nome foi escolhido em homenagem a Tsuki Katsu, seu filho mais velho.\n\nO sistema foi desenvolvido para permitir a utilização de técnicas baseadas principalmente em Energia Espiritual sem atributo.\n\nDiferentemente de uma Magia individual, Tsuki não depende de um atributo específico.\n\nIsso permite que indivíduos com capacidades mágicas distintas utilizem o sistema, desde que possuam as condições necessárias para executar suas técnicas.\n\nEntretanto, ter acesso a Tsuki não significa dominá-lo.\n\nO domínio varia de indivíduo para indivíduo e depende da capacidade de manipular Energia Espiritual, compreender as técnicas e executá-las com eficiência.",
        "**8.1. Numeração das Técnicas**\n\nAs técnicas Tsuki possuem uma numeração própria.\n\nEssa numeração não representa necessariamente uma escala direta de poder.\n\nEntretanto, quanto maior o número de um Tsuki, maior é a maestria necessária para utilizá-lo.\n\nAssim, a numeração está relacionada às exigências de domínio da técnica, não devendo ser interpretada simplesmente como uma classificação de força.\n\nA numeração vai de 1 a 100, tanto para Hao quanto para Bax.",
        "**8.2. Domínio de Tsuki**\n\nO domínio de Tsuki varia entre os indivíduos.\n\nExistem usuários péssimos, medianos, experientes, ótimos, especialistas e prodígios.\n\nEssa classificação não depende diretamente dos círculos.\n\nUm indivíduo de poucos círculos pode possuir enorme talento para Tsuki, enquanto outro de muitos círculos pode apresentar dificuldades para utilizar as técnicas.\n\nO desempenho depende principalmente do controle energético, da compreensão das técnicas e da experiência do usuário.",
        "**8.3. Hao**\n\nHao é um dos ramos associados à estrutura apresentada para o sistema de Tsuki.\n\nEle é uma das categorias do Tsuki, focado em magias sem atributos com intenção ofensiva, como disparos energéticos e criações focadas em causar dano direto.",
        "**8.4. Bax**\n\nBax também integra a estrutura do sistema de Tsuki.\n\nDiferente do Hao, sua função é focada na defesa, suporte, armadilhas e cura, sendo mais ensinado para que os magos adquiram maior versatilidade tática.",
        "**8.5. Tsuki Superior**\n\nA Tsuki Superior representa uma categoria reservada entre as técnicas que podem ser alcançadas por usuários de Energia Espiritual sem atributo.\n\nSua complexidade pode chegar a um nível no qual as técnicas se tornam extremamente especializadas e difíceis de reproduzir.\n\nAlgumas técnicas pessoais dos indivíduos de dois círculos podem alcançar uma complexidade semelhante à de uma Tsuki Superior.\n\nIsso não significa, porém, que toda técnica complexa seja automaticamente uma Tsuki Superior.\n\nUm mago só adquire esse título quando desenvolve seu próprio estilo de combate sendo um mago de dois círculos ou possuindo um conhecimento espetacular dos dois ramos do Tsuki.\n\nO segundo caso só se aplica com magos que possuem maestria para Tsukis superiores a 80 nos dois ramos; nesse estágio, qualquer tsuki inferior a 80 não precisa ter seu número pronunciado e sua eficácia ocorre como se estivesse sob encantamento completo."
      ],
      "illustration": ""
    },
    {
      "id": "power_09_muryogan",
      "title": "Capítulo IX — MuryoGan",
      "content": [
        "O MuryoGan é uma característica especial encontrada exclusivamente em indivíduos de dois círculos.\n\nSeus portadores possuem olhos naturalmente azuis ou vermelhos, sendo a cor determinada pelo acaso genético e espiritual.\n\nO MuryoGan permite analisar possibilidades do futuro próximo.\n\nEntretanto, sua capacidade não consiste simplesmente em visualizar um futuro fixo.\n\nEle funciona de maneira semelhante a um sistema de cálculo extremamente avançado: o usuário analisa variáveis em tempo real, considera diferentes possibilidades e calcula quais acontecimentos possuem maior probabilidade de ocorrer.",
        "Testes de implante de MuryoGan em outros magos de teste sem dois círculos mostraram o enfraquecimento acelerado e a morte dos voluntários.\n\nPor conta da ausência da genialidade inata e da afinidade genética com esses olhos, não era possível desativar os cálculos constantes, e as mentes dos magos comuns não conseguiam acompanhar a sobrecarga, resultando em colapso cerebral e morte por exaustão total.",
        "**9.1. Análise de Possibilidades**\n\nQuanto mais variáveis precisam ser consideradas, maior é a exigência mental do MuryoGan.\n\nA habilidade pode fornecer informações valiosas durante um confronto, especialmente quando o usuário precisa avaliar ações possíveis e escolher entre diferentes respostas imediatas.\n\nEntretanto, o resultado depende da capacidade do usuário de processar as informações necessárias.\n\nO MuryoGan não deve ser tratado como uma garantia absoluta de que determinado acontecimento ocorrerá de maneira infalível.",
        "**9.2. Custo Físico**\n\nA utilização do MuryoGan possui um custo biológico e espiritual extremamente elevado.\n\nO esforço necessário para processar possibilidades futuras pode provocar danos internos severos no organismo do utilizador.\n\nQuanto mais complexa for a análise de variáveis, maior será a exigência imposta ao cérebro e ao sistema nervoso.\n\nAssim, o MuryoGan representa uma ferramenta poderosa, mas altamente perigosa.\n\nSua utilização não elimina os riscos de uma decisão errada nem permite prever qualquer acontecimento sem graves consequências para a integridade física."
      ],
      "illustration": ""
    },
    {
      "id": "power_10_circulos",
      "title": "Capítulo X — Círculos",
      "content": [
        "Os círculos representam a proximidade genética de um indivíduo em relação ao Herói e, consequentemente, seu potencial máximo natural.\n\nEles não medem diretamente a força atual de combate.\n\nA regra fundamental é:\n\n**Quanto menor o número de círculos, maior o potencial natural.**\n\nSendo assim, a quantidade de círculos define o teto máximo de desenvolvimento que o mago poderá alcançar em sua vida e o quanto ele conseguirá expandir e aproveitar sua magia.",
        "**Exemplo prático de potencial:**\n\nDois magos nascem no mesmo dia, ambos com o Atributo Mágico de Água; um nasce com 4 círculos e o outro com 15 círculos.\n\nO segundo pode criar água e gerar formas básicas, com seu ápice sendo criações mais complexas e manipulação de água do ambiente.\n\nJá o primeiro mago (de 4 círculos) poderia fazer tudo isso e, ao mesmo tempo, utilizar magias de gelo, vapor denso, transformar o próprio corpo em água líquida e desenvolver inúmeros outros usos avançados.\n\nOu seja, a quantidade de círculos pode ser compreendida diretamente como o grau de refinamento e criatividade que a magia do indivíduo pode alcançar.",
        "O Herói representa o ponto de referência absoluto desse sistema, possuindo a classificação de zero círculos.\n\nSeus filhos diretos possuem um círculo, representando a maior proximidade genética possível depois do próprio Herói.\n\nAtualmente, nenhum humano possui naturalmente um círculo.\n\nOs humanos contemporâneos mais próximos da linhagem do Herói podem alcançar no máximo dois círculos.\n\nPor isso, dois círculos representam atualmente o patamar mais alto de potencial natural encontrado entre os seres humanos.",
        "**10.1. Potencial e Força Atual**\n\nO potencial representa o limite natural de desenvolvimento que um indivíduo pode alcançar.\n\nA força atual depende também de múltiplos outros fatores práticos, como:\n\n• Treinamento e disciplina;\n• Experiência de combate real;\n• Conhecimento teórico e tático;\n• Domínio das técnicas Tsuki;\n• Controle minucioso de energia;\n• Características e atributos individuais;\n• Eficiência no gasto energético das técnicas.\n\nUm indivíduo com menos círculos não é necessariamente mais forte no presente do que alguém com muitos círculos. A diferença real está principalmente no teto máximo que cada um conseguirá atingir com dedicação.",
        "**10.2. Indivíduos de Dois Círculos**\n\nOs indivíduos de dois círculos apresentam uma genialidade sem paralelos.\n\nSua capacidade mental e espiritual interfere no próprio desenvolvimento natural do Fluxo durante o período gestacional.\n\nEm vez de desenvolver normalmente a Magia com atributo para a qual seu Fluxo estaria destinado, sua estrutura energética se reorganiza espontaneamente e impede esse funcionamento convencional.\n\nO resultado é uma especialização inata na utilização pura de Energia Espiritual sem atributo.\n\nSua genialidade pode ser entendida como um \"talento do talento\": uma aptidão tão extraordinária que sobrepõe e anula o desenvolvimento do próprio talento elemental que o indivíduo deveria possuir.\n\nAlém disso, esses indivíduos detêm a maior reserva de Energia Espiritual registrada entre toda a humanidade.",
        "**10.3. Desaparecimento da Magia Original**\n\nA estrutura originalmente destinada a produzir uma Magia com atributo pode não desaparecer de imediato.\n\nPorém, como o indivíduo de dois círculos passa a vida utilizando exclusivamente Energia Espiritual sem atributo, a estrutura da Magia original começa a atrofiar e definhar devido à falta contínua de ativação.\n\nApós o passar de muitos anos, essa estrutura pode desaparecer completamente.\n\nO indivíduo pode sequer perceber que perdeu uma possibilidade mágica, pois nunca teve acesso consciente ou deliberado à sua Magia primordial."
      ],
      "illustration": ""
    },
    {
      "id": "power_11_heranca_circulos",
      "title": "Capítulo XI — Herança dos Círculos",
      "content": [
        "A quantidade de círculos de um descendente é determinada geneticamente pela combinação dos círculos de seus genitores.\n\nO valor esperado corresponde aproximadamente à média matemática entre os dois valores parentais.\n\nEntretanto, existe uma margem de variação natural de aproximadamente cinco círculos para mais ou para menos.\n\nPor isso, o descendente não precisa possuir rigorosamente a mesma quantidade de círculos que seus pais ou a média aritmética exata entre eles.",
        "Por exemplo, dois indivíduos de dez círculos podem gerar um descendente que possua entre cinco e quinze círculos.\n\nDentro dessa margem de variação probabilística, o descendente pode apresentar tanto maior quanto menor proximidade genética em relação ao Herói original.",
        "**11.1. Variação entre Gerações**\n\nAo longo de várias gerações sucessivas, essas diferenças podem se acumular progressivamente.\n\nA linhagem humana pode aproximar-se ou afastar-se geneticamente do Herói, dependendo dos cruzamentos entre os indivíduos que se reproduzem.\n\nIsso abre a possibilidade teórica de cultivar linhagens extremamente próximas do Herói através de casamentos e reprodução direcionada entre indivíduos de elevado potencial genético.\n\nEsse conceito é amplamente associado na história ao projeto de criação de um \"Herói artificial\".",
        "**11.2. Significado Real dos Círculos**\n\nOs círculos não indicam que o sangue do Herói seja moralmente ou misticamente superior ao de outros seres humanos.\n\nSua verdadeira importância reside na proximidade genética e estrutural em relação ao molde biológico que serve como padrão máximo para o potencial mágico da humanidade.\n\nA classificação representa, portanto, uma métrica de potencial latente, e nunca uma garantia imediata ou automática de vitória em combate."
      ],
      "illustration": ""
    },
    {
      "id": "power_12_ressonancia_divina",
      "title": "Capítulo XII — Ressonância Divina",
      "content": [
        "A Ressonância Divina é um fenômeno excepcional relacionado à compatibilidade entre a alma e o Fluxo de um indivíduo e um fragmento da essência primordial de um Rever.\n\nEssa compatibilidade permite que o mortal entre em contato direto com uma parcela da natureza divina associada àquela essência cósmica.\n\nEntretanto, a ocorrência de uma Ressonância Divina não transforma o indivíduo em um Rever.\n\nTrata-se de uma ponte energética entre estruturas de ordens totalmente distintas.\n\nA natureza, estabilidade e intensidade dessa conexão dependem estritamente das características de ambas as partes.",
        "**12.1. Compatibilidade Espiritual**\n\nA Ressonância Divina está condicionada à capacidade rara de determinadas estruturas espirituais interagirem em perfeita harmonia.\n\nNão é uma questão de apenas possuir grandes reservas de Energia Espiritual.\n\nA identidade da alma, a pureza do molde e a frequência do Fluxo do indivíduo determinam essa viabilidade.\n\nPor esse motivo, o fenômeno distingue-se radicalmente do mero aprendizado de técnicas avançadas ou do refinamento comum de uma Magia mortal.",
        "**12.2. Consequências da Ressonância**\n\nUma Ressonância Divina bem-sucedida pode viabilizar o florescimento de manifestações de poder diretamente associadas à divindade em questão.\n\nEntre essas manifestações conhecidas, a mais proeminente é o despertar de uma Graça Divina.\n\nEsse fenômeno comprova que o poder de um ser pode extrapolar os limites convencionais das regras mortais quando ocorre simbiose com uma essência dos deuses."
      ],
      "illustration": ""
    },
    {
      "id": "power_13_gracas_divinas",
      "title": "Capítulo XIII — Graças Divinas",
      "content": [
        "As Graças Divinas são manifestações transcendentais de poder originadas do contato com uma essência divina.\n\nElas conferem ao portador aptidões singulares ou reconfiguram a própria forma como sua Magia original se manifesta no mundo.\n\nUma Graça Divina jamais deve ser confundida com um Atributo Mágico natural.\n\nO atributo provém do molde biológico de nascença do indivíduo, enquanto a Graça Divina é uma emanação concedida ou herdada a partir de uma fonte divina externa.",
        "**13.1. O Processo de Manifestação**\n\nA maneira como uma Graça Divina se concretiza depende da compatibilidade mística e de um ciclo espiritual específico.\n\nNo célebre caso de Mikael Dutri, sua Magia original estava vinculada ao controle de temperatura.\n\nPor meio de uma Ressonância Divina com Amaterasu, ele desenvolveu uma Graça Divina que transformou sua capacidade em uma sublime manifestação de poder solar.\n\nÉ importante notar que seu poder não deriva do atual portador da técnica Hinode Gênesis, mas sim de um fragmento autêntico da essência primordial de Amaterasu.",
        "**O Ciclo de Transmissão da Graça:**\n\nEsse processo ocorre segundo uma ordem rigorosa:\n\n1. Um mago com notável poder morre (no exemplo citado, portador de Magia de Fogo);\n2. Sua alma e fluxo de energia desprendem-se e vagam pelo mundo até o instante em que se convertem em um Yokai;\n3. Essa transformação em Yokai deve ocorrer nas imediações do fragmento divino de um Rever com habilidade compatível;\n4. O Yokai resultante nasce com poder muito superior ao ordinário e portando uma manifestação de fogo divinamente ampliada;\n5. Posteriormente, quando esse Yokai é destruído, seu fluxo purificado deve reencarnar em um bebê humano nascido próximo ao mesmo fragmento divino;\n6. Como resultado dessa sequência, a nova criança nasce portando a Graça Divina (neste caso, a Graça do Sol).",
        "**13.2. Relação com o Sistema Mágico**\n\nAs Graças Divinas provam que os limites de um indivíduo não estão irrevogavelmente aprisionados ao seu atributo de nascença.\n\nA intervenção de uma essência divina introduz uma nova dimensão à realidade mágica.\n\nTodavia, cada Graça é singular e opera segundo as propriedades conceituais do Rever de origem, não existindo duas Graças com comportamentos inteiramente idênticos."
      ],
      "illustration": ""
    },
    {
      "id": "power_14_conexao_espiritual",
      "title": "Capítulo XIV — Conexão Espiritual",
      "content": [
        "A Conexão Espiritual é um processo mágico avançado que estabelece um elo intrínseco entre um mago e um objeto inanimado que possua grande valor emocional, histórico ou funcional para ele, como ferramentas mágicas, armas rituais ou relíquias.",
        "Quando a conexão se consolida, o artefato passa a ser classificado como um Objeto Espiritual e torna-se uma extensão da própria alma do mago, podendo ser materializado, desmaterializado e invocado instantaneamente à vontade.",
        "**A Segunda Chance de Vida:**\n\nO Objeto Espiritual atua adicionalmente como uma salvaguarda vital para o mago.\n\nCaso o portador sofra um golpe fatal em combate, o objeto consome toda a sua essência e se sacrifica no lugar do mago, permitindo que este continue vivo.\n\nDurante o período em que a conexão está ativa, o mago pode usufruir das propriedades mágicas do objeto como magias secundárias integradas ao seu corpo.",
        "**Exemplo Prático:**\n\nA conexão espiritual com uma pulseira mágica imbuída de propriedades curativas concede ao mago a capacidade de realizar magias de cura de baixo nível como se essa habilidade fosse uma extensão natural de sua própria biologia.\n\nNo entanto, caso esse mago venha a receber um ataque mortal, a pulseira é aniquilada para poupar sua vida, e o mago perde definitivamente o acesso a essas magias de cura.",
        "**Morte Natural e Selamento:**\n\nCaso o mago venha a falecer por causas naturais (e não por combate), o Objeto Espiritual atua como uma barreira que impede sua alma de retornar ao ciclo comum das almas, servindo como uma câmara de selamento espiritual.\n\nSe outro mago vier a encontrar essa relíquia materializada no mundo após a morte do portador anterior, ele poderá estabelecer contato mental com a consciência preservada.\n\nA partir desse encontro, três desfechos são possíveis:\n\n• Um pacto de libertação da alma em troca de ensinamentos;\n• Um acordo de cooperação mútua para empréstimo das técnicas do falecido;\n• Um duelo espiritual onde a aposta é a posse e controle definitivo do corpo físico do novo mago."
      ],
      "illustration": ""
    },
    {
      "id": "power_15_bruxaria",
      "title": "Capítulo XV — Bruxaria",
      "content": [
        "A Bruxaria está diretamente fundamentada na Energia Malévola — também amplamente denominada Energia Negativa — e acarreta repercussões severas sobre a estabilidade espiritual do mundo.",
        "A gênese histórica desse fenômeno remonta ao confronto lendário entre Sakai Ban e O Herói.\n\nApós meses de combate ininterrupto, Sakai Ban desferiu sua técnica mais destrutiva: Babel.\n\nO impacto de Babel provocou um cataclismo nos Fluxos biológicos da humanidade, desestabilizando permanentemente as matrizes energéticas dos sobreviventes.\n\nEssa distorção abrupta deu origem a uma nova variável energética no universo: a Energia Malévola, cujos resíduos permanecem ativos através das eras.",
        "**15.1. Energia Malévola**\n\nA Energia Malévola manifestou-se como fruto direto da fratura forçada nos Fluxos humanos causada por Babel.\n\nPor sua polaridade corruptiva, também recebeu o nome de Energia Negativa.\n\nEla é o alicerce fundamental para a compreensão dos malefícios da Bruxaria e das anomalias que distorcem o destino espiritual dos indivíduos.",
        "**15.2. Consequências para as Almas**\n\nA Bruxaria exerce um efeito corrosivo sobre o ciclo pós-morte.\n\nQuando uma alma mortal é exposta a uma carga suficientemente densa de Bruxaria no instante de seu falecimento, ela é impedida de ascender ao Plano dos Mortos e se corrompe, transmutando-se irreversivelmente em um Yokai Negativo.\n\nIsso evidencia que a Bruxaria não se resume a dano destrutivo em batalha, mas constitui uma ameaça direta à integridade cósmica das almas.",
        "**15.3. Relação com os Yokais Negativos**\n\nOs Yokais Negativos são as criaturas nascidas dessa mácula energética.\n\nCompreender o elo entre a Bruxaria e essas entidades é indispensável para mensurar a gravidade da poluição espiritual provocada por usuários corrompidos.\n\nContudo, deve-se registrar que Energia Malévola e Bruxaria não são termos idênticos: a Energia Malévola é a matéria-prima energética bruta, ao passo que a Bruxaria engloba as artes, rituais e disciplinas que manipulam essa força nociva."
      ],
      "illustration": ""
    },
    {
      "id": "power_16_diferencas_sistemas",
      "title": "Capítulo XVI — Diferenças entre os Sistemas de Poder",
      "content": [
        "Embora múltiplos sistemas de poder coexistam no cosmos, eles não são equivalentes nem devem ser confundidos:\n\n• **Energia Espiritual:** Energia primordial utilizada por seres humanos e diversas espécies mortais do Ningen-Sekai.\n\n• **Energia Espiritual sem Atributo:** Forma de manipulação direta da Energia Espiritual pura, independente de qualquer atributo específico.\n\n• **Magia:** Manifestação canalizada de um atributo mágico específico forjado no Fluxo individual.\n\n• **Tsuki:** Sistema universal e metódico de técnicas desenvolvido por O Herói, alicerçado em Energia Espiritual pura sem atributo.\n\n• **Energia Nula:** Modalidade energética exclusiva pertencente à estrutura primordial dos Revers.\n\n• **Feitiçaria:** Classificação formal das técnicas e disciplinas desenvolvidas pelos Revers através da manipulação da Energia Nula.\n\n• **Energia Malévola (Negativa):** Forma corrompida de energia originada da ruptura dos Fluxos humanos pelo impacto de Babel.\n\n• **Bruxaria:** Sistema de práticas espirituais alicerçado na Energia Malévola, capaz de macular almas e gerar Yokais Negativos.\n\n• **Ressonância Divina:** Alinhamento harmônico entre o Fluxo de um mortal e o fragmento de essência de um Rever divino.\n\n• **Graça Divina:** Dádiva ou transmutação de poder concedida através de uma conexão sustentada com uma divindade primordial.",
        "Essas distinções fundamentais garantem que os fenômenos do universo mantenham suas identidades próprias, refutando qualquer simplificação que tente reduzi-los a uma escala genérica de poder."
      ],
      "illustration": ""
    },
    {
      "id": "power_17_escala_unica",
      "title": "Capítulo XVII — O Poder Não É uma Escala Única",
      "content": [
        "O universo não opera sob uma régua linear ou unidimensional de poder.\n\nOs círculos estabelecem o potencial genético máximo que um indivíduo pode almejar.\n\nA reserva energética delimita o volume de combustível espiritual disponível a cada momento.\n\nO atributo mágico determina o conceito e a física através dos quais as magias tomam forma no mundo real.\n\nO domínio de Tsuki mensura a proficiência prática em técnicas universais neutras.\n\nA Ressonância Divina e as Graças Divinas viabilizam acessos a energias que violam os limites mortais conhecidos.\n\nAs restrições de cada espécie impõem regras fisiológicas e cosmológicas intransponíveis.",
        "Por esses motivos, dois indivíduos portadores do mesmo número de círculos podem manifestar arsenais e estilos de combate totalmente discrepantes.\n\nDo mesmo modo, um combatente com menor potencial teórico pode sobrepujar um oponente de linhagem superior graças à astúcia tática, maestria de Tsuki, experiência em combate e disciplina energética.\n\nO potencial indica apenas onde o teto se encontra; como o indivíduo constrói seu caminho até ele é o que verdadeiramente define seu poder."
      ],
      "illustration": ""
    },
    {
      "id": "power_18_conclusao",
      "title": "Capítulo XVIII — Conclusão — A Estrutura do Poder",
      "content": [
        "O sistema de poder foi erguido a partir do entrelaçamento de pilares cosmológicos, genéticos e transcendentais.\n\nO Fluxo rege as vias internas de circulação e crescimento energético.\n\nA Energia Espiritual pode fluir crua ou expressar atributos elementais e abstratos.\n\nMagos e Xamãs delimitam os domínios humanos e não humanos no uso dessa força.\n\nTsuki democratizou técnicas universais de combate, ao passo que o MuryoGan concede aos raros indivíduos de dois círculos a faculdade computacional de antecipar o fluxo das probabilidades imediatas.\n\nOs círculos perpetuam a herança genética do Herói e organizam o potencial da humanidade.\n\nA Ressonância e as Graças Divinas provam que os ecos dos Revers ainda reverberam sobre os mortais.\n\nA Conexão Espiritual forja elos eternos entre a alma e ferramentas rituais, concedendo segundas chances e selamentos além da sepultura.\n\nE a Bruxaria permanece como o lembrete sombrio das cicatrizes deixadas por Babel sobre o tecido espiritual da criação.",
        "Compreender o poder, portanto, não é medir grandezas brutas ou números arbitrários.\n\nÉ desvendar a origem de cada centelha de energia, dominar as regras pelas quais ela atua e respeitar os mistérios que regem toda a existência conhecida."
      ],
      "illustration": ""
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
