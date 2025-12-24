import { drizzle } from 'drizzle-orm/mysql2';
import { exercises } from './drizzle/schema.ts';

const db = drizzle(process.env.DATABASE_URL);

const finalExercises = [
  // ===== DEFESA DO ESTADO E INSTITUIÇÕES DEMOCRÁTICAS (Tema 7) - 15 exercícios =====
  // Fáceis (5)
  {
    uniqueCode: 'EX-DEF-003',
    title: 'Estado de Defesa - Conceito',
    description: 'Medida excepcional',
    type: 'multiple_choice',
    content: 'O estado de defesa pode ser decretado para:',
    correctAnswer: 'Preservar ou prontamente restabelecer a ordem pública ou a paz social ameaçadas',
    explanation: 'O estado de defesa (art. 136, CF) visa preservar ou prontamente restabelecer, em locais restritos e determinados, a ordem pública ou a paz social ameaçadas por grave e iminente instabilidade institucional ou atingidas por calamidades naturais de grandes proporções.',
    difficulty: 'easy',
    themeId: 7,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Preservar ou prontamente restabelecer a ordem pública ou a paz social ameaçadas',
      'Combater qualquer manifestação popular',
      'Impedir eleições',
      'Dissolver o Congresso Nacional'
    ]),
    fgvPattern: 'Finalidade do estado de defesa'
  },
  {
    uniqueCode: 'EX-DEF-004',
    title: 'Estado de Sítio - Hipóteses',
    description: 'Pressupostos constitucionais',
    type: 'multiple_choice',
    content: 'O estado de sítio pode ser decretado nas seguintes hipóteses:',
    correctAnswer: 'Comoção grave de repercussão nacional, ineficácia do estado de defesa, guerra ou agressão armada estrangeira',
    explanation: 'O art. 137 prevê estado de sítio em caso de: I) comoção grave de repercussão nacional ou ocorrência de fatos que comprovem a ineficácia de medida tomada durante o estado de defesa; II) declaração de estado de guerra ou resposta a agressão armada estrangeira.',
    difficulty: 'easy',
    themeId: 7,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Comoção grave de repercussão nacional, ineficácia do estado de defesa, guerra ou agressão armada estrangeira',
      'Apenas guerra declarada',
      'Qualquer greve geral',
      'Crise econômica'
    ]),
    fgvPattern: 'Hipóteses de decretação do estado de sítio'
  },
  {
    uniqueCode: 'EX-DEF-005',
    title: 'Prazo do Estado de Defesa',
    description: 'Duração máxima',
    type: 'multiple_choice',
    content: 'O estado de defesa não pode ser decretado por prazo superior a:',
    correctAnswer: '30 dias, prorrogável uma vez por igual período',
    explanation: 'O estado de defesa não pode exceder 30 dias, podendo ser prorrogado uma vez por igual período se persistirem as razões que justificaram sua decretação (art. 136, §2º).',
    difficulty: 'easy',
    themeId: 7,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      '30 dias, prorrogável uma vez por igual período',
      '60 dias improrrogáveis',
      '90 dias',
      'Prazo indeterminado'
    ]),
    fgvPattern: 'Prazo do estado de defesa'
  },
  {
    uniqueCode: 'EX-DEF-006',
    title: 'Competência para Decretar',
    description: 'Legitimidade ativa',
    type: 'multiple_choice',
    content: 'Compete decretar o estado de defesa e o estado de sítio ao:',
    correctAnswer: 'Presidente da República, ouvidos o Conselho da República e o Conselho de Defesa Nacional',
    explanation: 'O Presidente da República decreta o estado de defesa e o estado de sítio, após ouvir o Conselho da República e o Conselho de Defesa Nacional (art. 84, IX c/c art. 136, caput e art. 137, caput).',
    difficulty: 'easy',
    themeId: 7,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Presidente da República, ouvidos o Conselho da República e o Conselho de Defesa Nacional',
      'Congresso Nacional',
      'Supremo Tribunal Federal',
      'Forças Armadas'
    ]),
    fgvPattern: 'Competência para decretar estados de exceção'
  },
  {
    uniqueCode: 'EX-DEF-007',
    title: 'Controle Político dos Estados de Exceção',
    description: 'Papel do Congresso',
    type: 'multiple_choice',
    content: 'O decreto de estado de defesa ou sítio deve ser submetido ao Congresso Nacional:',
    correctAnswer: 'Dentro de 24 horas, para apreciação e aprovação',
    explanation: 'O decreto deve ser submetido ao Congresso Nacional dentro de 24 horas (art. 136, §4º e art. 138, §1º), que decidirá por maioria absoluta sobre sua aprovação ou rejeição.',
    difficulty: 'easy',
    themeId: 7,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Dentro de 24 horas, para apreciação e aprovação',
      'Dentro de 48 horas',
      'Não precisa ser submetido',
      'Apenas após o término'
    ]),
    fgvPattern: 'Controle político dos estados de exceção'
  },

  // Médios (5)
  {
    uniqueCode: 'EX-DEF-008',
    title: 'Medidas Coercitivas no Estado de Defesa',
    description: 'Restrições permitidas',
    type: 'multiple_choice',
    content: 'No estado de defesa, podem ser impostas as seguintes medidas coercitivas:',
    correctAnswer: 'Restrições aos direitos de reunião, sigilo de correspondência e comunicações, ocupação de bens e prisão por crime contra o Estado',
    explanation: 'O art. 136, §1º permite: I) restrições aos direitos de reunião, ainda que exercida no seio das associações; sigilo de correspondência e de comunicação telegráfica e telefônica; II) ocupação e uso temporário de bens e serviços públicos; III) prisão por crime contra o Estado, determinada pelo executor da medida, com comunicação imediata ao juiz.',
    difficulty: 'medium',
    themeId: 7,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Restrições aos direitos de reunião, sigilo de correspondência e comunicações, ocupação de bens e prisão por crime contra o Estado',
      'Suspensão de todos os direitos fundamentais',
      'Apenas restrição à locomoção',
      'Censura prévia total'
    ]),
    fgvPattern: 'Medidas coercitivas no estado de defesa'
  },
  {
    uniqueCode: 'EX-DEF-009',
    title: 'Medidas no Estado de Sítio',
    description: 'Restrições mais graves',
    type: 'multiple_choice',
    content: 'O estado de sítio permite medidas mais gravosas que o estado de defesa, como:',
    correctAnswer: 'Suspensão da liberdade de reunião, busca e apreensão em domicílio, restrições à inviolabilidade de correspondência e intervenção em empresas',
    explanation: 'O art. 139 permite: obrigação de permanência em localidade determinada; detenção em edifício não destinado a acusados ou condenados por crimes comuns; restrições à inviolabilidade de correspondência, sigilo de comunicações, prestação de informações e liberdade de imprensa; suspensão da liberdade de reunião; busca e apreensão em domicílio; intervenção em empresas; requisição de bens.',
    difficulty: 'medium',
    themeId: 7,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Suspensão da liberdade de reunião, busca e apreensão em domicílio, restrições à inviolabilidade de correspondência e intervenção em empresas',
      'Apenas prisão preventiva',
      'Suspensão de eleições',
      'Dissolução do Congresso'
    ]),
    fgvPattern: 'Medidas coercitivas no estado de sítio'
  },
  {
    uniqueCode: 'EX-DEF-010',
    title: 'Prazo do Estado de Sítio',
    description: 'Duração conforme hipótese',
    type: 'multiple_choice',
    content: 'O prazo do estado de sítio varia conforme a hipótese:',
    correctAnswer: 'Máximo de 30 dias prorrogáveis (comoção/ineficácia) ou pelo tempo que durar a guerra/agressão',
    explanation: 'Na hipótese do art. 137, I (comoção/ineficácia), o prazo não pode ser superior a 30 dias, prorrogável (art. 138, §2º). Na hipótese do art. 137, II (guerra/agressão), o prazo será o tempo que durar a guerra ou agressão (art. 138, §1º).',
    difficulty: 'medium',
    themeId: 7,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Máximo de 30 dias prorrogáveis (comoção/ineficácia) ou pelo tempo que durar a guerra/agressão',
      'Sempre 30 dias improrrogáveis',
      'Prazo indeterminado em qualquer caso',
      '60 dias em todos os casos'
    ]),
    fgvPattern: 'Prazo do estado de sítio'
  },
  {
    uniqueCode: 'EX-DEF-011',
    title: 'Forças Armadas - Destinação',
    description: 'Papel constitucional',
    type: 'multiple_choice',
    content: 'As Forças Armadas destinam-se à:',
    correctAnswer: 'Defesa da Pátria, garantia dos poderes constitucionais e, por iniciativa de qualquer destes, da lei e da ordem',
    explanation: 'O art. 142 estabelece que as Forças Armadas destinam-se à defesa da Pátria, à garantia dos poderes constitucionais e, por iniciativa de qualquer destes, da lei e da ordem.',
    difficulty: 'medium',
    themeId: 7,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Defesa da Pátria, garantia dos poderes constitucionais e, por iniciativa de qualquer destes, da lei e da ordem',
      'Apenas defesa externa',
      'Substituir a Polícia Federal',
      'Governar o país em crises'
    ]),
    fgvPattern: 'Destinação constitucional das Forças Armadas'
  },
  {
    uniqueCode: 'EX-DEF-012',
    title: 'Segurança Pública - Órgãos',
    description: 'Instituições responsáveis',
    type: 'multiple_choice',
    content: 'São órgãos de segurança pública:',
    correctAnswer: 'Polícia Federal, Polícia Rodoviária Federal, Polícia Ferroviária Federal, Polícias Civis, Polícias Militares e Corpos de Bombeiros Militares',
    explanation: 'O art. 144 estabelece como órgãos de segurança pública: polícia federal; polícia rodoviária federal; polícia ferroviária federal; polícias civis; polícias militares e corpos de bombeiros militares.',
    difficulty: 'medium',
    themeId: 7,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Polícia Federal, Polícia Rodoviária Federal, Polícia Ferroviária Federal, Polícias Civis, Polícias Militares e Corpos de Bombeiros Militares',
      'Apenas Polícia Federal e Polícia Civil',
      'Forças Armadas e Polícia Federal',
      'Apenas Polícias Militares'
    ]),
    fgvPattern: 'Órgãos de segurança pública'
  },

  // Difíceis (5)
  {
    uniqueCode: 'EX-DEF-013',
    title: 'Núcleo Intangível nos Estados de Exceção',
    description: 'Direitos não suspensos',
    type: 'multiple_choice',
    content: 'Mesmo durante o estado de defesa e o estado de sítio, não podem ser suspensos:',
    correctAnswer: 'Direito à vida, integridade física, devido processo legal e direitos políticos',
    explanation: 'O art. 136, §3º (estado de defesa) e art. 139, parágrafo único (estado de sítio) estabelecem um núcleo intangível de direitos que não podem ser suspensos, incluindo direito à vida, integridade física, devido processo legal e direitos políticos.',
    difficulty: 'hard',
    themeId: 7,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Direito à vida, integridade física, devido processo legal e direitos políticos',
      'Todos os direitos podem ser suspensos',
      'Apenas o direito à vida',
      'Apenas direitos sociais'
    ]),
    fgvPattern: 'Núcleo intangível de direitos'
  },
  {
    uniqueCode: 'EX-DEF-014',
    title: 'Responsabilização por Abusos',
    description: 'Controle jurisdicional',
    type: 'multiple_choice',
    content: 'Sobre a responsabilização por abusos cometidos durante os estados de exceção:',
    correctAnswer: 'Os executores e agentes respondem pelos ilícitos cometidos, sendo vedada a suspensão da apreciação judicial',
    explanation: 'O art. 136, §3º, I e art. 139, parágrafo único garantem a apreciação judicial de atos praticados durante os estados de exceção, responsabilizando executores e agentes por ilícitos cometidos.',
    difficulty: 'hard',
    themeId: 7,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Os executores e agentes respondem pelos ilícitos cometidos, sendo vedada a suspensão da apreciação judicial',
      'Há imunidade total durante os estados de exceção',
      'Apenas responsabilização após o término',
      'Não há controle jurisdicional'
    ]),
    fgvPattern: 'Responsabilização durante estados de exceção'
  },
  {
    uniqueCode: 'EX-DEF-015',
    title: 'Garantia da Lei e da Ordem (GLO)',
    description: 'Emprego das Forças Armadas',
    type: 'multiple_choice',
    content: 'O emprego das Forças Armadas na garantia da lei e da ordem:',
    correctAnswer: 'Depende de iniciativa de qualquer dos Poderes constitucionais, é subsidiário e temporário',
    explanation: 'A GLO (art. 142, CF) exige: iniciativa de qualquer dos Poderes constitucionais (Executivo, Legislativo ou Judiciário); caráter subsidiário (esgotamento dos instrumentos regulares); e temporariedade.',
    difficulty: 'hard',
    themeId: 7,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Depende de iniciativa de qualquer dos Poderes constitucionais, é subsidiário e temporário',
      'É automático em qualquer crise',
      'Depende apenas do Presidente',
      'Substitui permanentemente as polícias'
    ]),
    fgvPattern: 'Requisitos para GLO'
  },
  {
    uniqueCode: 'EX-DEF-016',
    title: 'Polícia Federal - Competências',
    description: 'Atribuições constitucionais',
    type: 'multiple_choice',
    content: 'Compete à Polícia Federal:',
    correctAnswer: 'Apurar infrações penais contra a ordem política e social ou em detrimento de bens da União, prevenir e reprimir tráfico de drogas e contrabando, e exercer funções de polícia marítima, aeroportuária e de fronteiras',
    explanation: 'O art. 144, §1º estabelece as competências da PF: I) infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União ou de suas entidades autárquicas e empresas públicas; II) prevenir e reprimir tráfico ilícito de entorpecentes e drogas afins, contrabando e descaminho; III) exercer funções de polícia marítima, aeroportuária e de fronteiras; IV) exercer, com exclusividade, as funções de polícia judiciária da União.',
    difficulty: 'hard',
    themeId: 7,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Apurar infrações penais contra a ordem política e social ou em detrimento de bens da União, prevenir e reprimir tráfico de drogas e contrabando, e exercer funções de polícia marítima, aeroportuária e de fronteiras',
      'Apenas crimes federais',
      'Substituir as Polícias Civis',
      'Apenas segurança de autoridades'
    ]),
    fgvPattern: 'Competências da Polícia Federal'
  },
  {
    uniqueCode: 'EX-DEF-017',
    title: 'Polícia Judiciária e Ostensiva',
    description: 'Distinção de atribuições',
    type: 'multiple_choice',
    content: 'A diferença entre polícia judiciária e polícia ostensiva é que:',
    correctAnswer: 'A polícia judiciária apura infrações penais (Polícias Civis e Federal), enquanto a polícia ostensiva previne infrações (Polícias Militares)',
    explanation: 'As Polícias Civis e Federal exercem funções de polícia judiciária (investigação de infrações penais - art. 144, §§1º, IV e §4º). As Polícias Militares exercem polícia ostensiva e preservação da ordem pública (prevenção - art. 144, §5º).',
    difficulty: 'hard',
    themeId: 7,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'A polícia judiciária apura infrações penais (Polícias Civis e Federal), enquanto a polícia ostensiva previne infrações (Polícias Militares)',
      'Não há diferença entre elas',
      'A polícia judiciária é federal e a ostensiva é estadual',
      'A polícia judiciária é militar'
    ]),
    fgvPattern: 'Distinção entre polícia judiciária e ostensiva'
  },

  // ===== ORDEM ECONÔMICA E FINANCEIRA (Tema 8) - 15 exercícios =====
  // Fáceis (5)
  {
    uniqueCode: 'EX-ECO-003',
    title: 'Fundamentos da Ordem Econômica',
    description: 'Princípios basilares',
    type: 'multiple_choice',
    content: 'A ordem econômica é fundada na:',
    correctAnswer: 'Valorização do trabalho humano e livre iniciativa',
    explanation: 'O art. 170 estabelece que a ordem econômica é fundada na valorização do trabalho humano e na livre iniciativa, tendo por fim assegurar a todos existência digna, conforme os ditames da justiça social.',
    difficulty: 'easy',
    themeId: 8,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Valorização do trabalho humano e livre iniciativa',
      'Apenas na livre iniciativa',
      'Controle estatal total',
      'Lucro das empresas'
    ]),
    fgvPattern: 'Fundamentos da ordem econômica'
  },
  {
    uniqueCode: 'EX-ECO-004',
    title: 'Princípios da Ordem Econômica',
    description: 'Diretrizes constitucionais',
    type: 'multiple_choice',
    content: 'São princípios da ordem econômica:',
    correctAnswer: 'Soberania nacional, propriedade privada, função social da propriedade, livre concorrência e defesa do consumidor',
    explanation: 'O art. 170 enumera os princípios: soberania nacional; propriedade privada; função social da propriedade; livre concorrência; defesa do consumidor; defesa do meio ambiente; redução das desigualdades; busca do pleno emprego; tratamento favorecido para empresas de pequeno porte.',
    difficulty: 'easy',
    themeId: 8,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Soberania nacional, propriedade privada, função social da propriedade, livre concorrência e defesa do consumidor',
      'Apenas livre iniciativa',
      'Apenas propriedade privada',
      'Estatização da economia'
    ]),
    fgvPattern: 'Princípios da ordem econômica'
  },
  {
    uniqueCode: 'EX-ECO-005',
    title: 'Exploração de Atividade Econômica pelo Estado',
    description: 'Excepcionalidade',
    type: 'multiple_choice',
    content: 'A exploração direta de atividade econômica pelo Estado:',
    correctAnswer: 'É excepcional, permitida quando necessária aos imperativos da segurança nacional ou relevante interesse coletivo',
    explanation: 'O art. 173 estabelece que a exploração direta de atividade econômica pelo Estado só é permitida quando necessária aos imperativos da segurança nacional ou a relevante interesse coletivo, conforme definidos em lei.',
    difficulty: 'easy',
    themeId: 8,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'É excepcional, permitida quando necessária aos imperativos da segurança nacional ou relevante interesse coletivo',
      'É a regra geral',
      'É sempre vedada',
      'Depende apenas da vontade do governante'
    ]),
    fgvPattern: 'Exploração estatal de atividade econômica'
  },
  {
    uniqueCode: 'EX-ECO-006',
    title: 'Monopólio da União',
    description: 'Atividades exclusivas',
    type: 'multiple_choice',
    content: 'Constituem monopólio da União:',
    correctAnswer: 'Pesquisa e lavra de petróleo, gás natural e minérios nucleares',
    explanation: 'O art. 177 estabelece monopólio da União sobre: pesquisa e lavra de jazidas de petróleo, gás natural e outros hidrocarbonetos fluidos; refinação de petróleo; importação e exportação de petróleo e derivados; transporte marítimo e por dutos; pesquisa, lavra, enriquecimento e reprocessamento de minérios e minerais nucleares.',
    difficulty: 'easy',
    themeId: 8,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Pesquisa e lavra de petróleo, gás natural e minérios nucleares',
      'Toda atividade industrial',
      'Apenas energia elétrica',
      'Comércio exterior'
    ]),
    fgvPattern: 'Monopólios da União'
  },
  {
    uniqueCode: 'EX-ECO-007',
    title: 'Função Social da Propriedade',
    description: 'Limitação ao direito de propriedade',
    type: 'multiple_choice',
    content: 'A função social da propriedade significa que:',
    correctAnswer: 'O direito de propriedade deve ser exercido em benefício da coletividade',
    explanation: 'A função social da propriedade (art. 170, III e art. 5º, XXIII) condiciona o exercício do direito de propriedade ao atendimento de sua função social, ou seja, ao benefício da coletividade.',
    difficulty: 'easy',
    themeId: 8,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'O direito de propriedade deve ser exercido em benefício da coletividade',
      'A propriedade é absoluta',
      'Não há propriedade privada',
      'O Estado pode confiscar qualquer propriedade'
    ]),
    fgvPattern: 'Conceito de função social da propriedade'
  },

  // Médios (5)
  {
    uniqueCode: 'EX-ECO-008',
    title: 'Regime Jurídico das Empresas Estatais',
    description: 'Submissão ao regime privado',
    type: 'multiple_choice',
    content: 'As empresas públicas e sociedades de economia mista:',
    correctAnswer: 'Sujeitam-se ao regime jurídico próprio das empresas privadas, inclusive quanto a direitos e obrigações',
    explanation: 'O art. 173, §1º, II estabelece que as empresas públicas e sociedades de economia mista que explorem atividade econômica sujeitam-se ao regime jurídico próprio das empresas privadas, inclusive quanto a direitos e obrigações civis, comerciais, trabalhistas e tributários.',
    difficulty: 'medium',
    themeId: 8,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Sujeitam-se ao regime jurídico próprio das empresas privadas, inclusive quanto a direitos e obrigações',
      'Têm regime totalmente público',
      'Não se submetem a licitações',
      'Têm imunidade tributária'
    ]),
    fgvPattern: 'Regime jurídico das estatais'
  },
  {
    uniqueCode: 'EX-ECO-009',
    title: 'Repressão ao Abuso do Poder Econômico',
    description: 'Defesa da concorrência',
    type: 'multiple_choice',
    content: 'A lei reprimirá o abuso do poder econômico que vise à:',
    correctAnswer: 'Dominação dos mercados, eliminação da concorrência e aumento arbitrário dos lucros',
    explanation: 'O art. 173, §4º determina que a lei reprimirá o abuso do poder econômico que vise à dominação dos mercados, à eliminação da concorrência e ao aumento arbitrário dos lucros.',
    difficulty: 'medium',
    themeId: 8,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Dominação dos mercados, eliminação da concorrência e aumento arbitrário dos lucros',
      'Apenas monopólios privados',
      'Qualquer lucro empresarial',
      'Apenas cartéis internacionais'
    ]),
    fgvPattern: 'Repressão ao abuso do poder econômico'
  },
  {
    uniqueCode: 'EX-ECO-010',
    title: 'Desapropriação para Reforma Agrária',
    description: 'Função social da propriedade rural',
    type: 'multiple_choice',
    content: 'A desapropriação para fins de reforma agrária:',
    correctAnswer: 'Incide sobre imóvel rural que não cumpra sua função social, mediante indenização em títulos da dívida agrária',
    explanation: 'O art. 184 permite desapropriação por interesse social, para fins de reforma agrária, do imóvel rural que não esteja cumprindo sua função social, mediante prévia e justa indenização em títulos da dívida agrária.',
    difficulty: 'medium',
    themeId: 8,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Incide sobre imóvel rural que não cumpra sua função social, mediante indenização em títulos da dívida agrária',
      'Pode incidir sobre qualquer propriedade urbana',
      'Não exige indenização',
      'É vedada pela Constituição'
    ]),
    fgvPattern: 'Desapropriação para reforma agrária'
  },
  {
    uniqueCode: 'EX-ECO-011',
    title: 'Política Urbana',
    description: 'Função social da propriedade urbana',
    type: 'multiple_choice',
    content: 'A política de desenvolvimento urbano visa:',
    correctAnswer: 'Ordenar o pleno desenvolvimento das funções sociais da cidade e garantir o bem-estar de seus habitantes',
    explanation: 'O art. 182 estabelece que a política de desenvolvimento urbano, executada pelo Poder Público municipal, tem por objetivo ordenar o pleno desenvolvimento das funções sociais da cidade e garantir o bem-estar de seus habitantes.',
    difficulty: 'medium',
    themeId: 8,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Ordenar o pleno desenvolvimento das funções sociais da cidade e garantir o bem-estar de seus habitantes',
      'Apenas arrecadar impostos',
      'Promover especulação imobiliária',
      'Impedir crescimento urbano'
    ]),
    fgvPattern: 'Objetivos da política urbana'
  },
  {
    uniqueCode: 'EX-ECO-012',
    title: 'Sistema Financeiro Nacional',
    description: 'Estruturação e regulação',
    type: 'multiple_choice',
    content: 'O Sistema Financeiro Nacional será regulado por:',
    correctAnswer: 'Lei complementar que promova o desenvolvimento equilibrado do País e sirva aos interesses da coletividade',
    explanation: 'O art. 192 estabelece que o sistema financeiro nacional será regulado por lei complementar que promova o desenvolvimento equilibrado do País e sirva aos interesses da coletividade.',
    difficulty: 'medium',
    themeId: 8,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Lei complementar que promova o desenvolvimento equilibrado do País e sirva aos interesses da coletividade',
      'Decreto presidencial',
      'Resolução do Banco Central',
      'Não há regulação constitucional'
    ]),
    fgvPattern: 'Regulação do sistema financeiro'
  },

  // Difíceis (5)
  {
    uniqueCode: 'EX-ECO-013',
    title: 'Tratamento Diferenciado para Pequenas Empresas',
    description: 'Princípio constitucional',
    type: 'multiple_choice',
    content: 'O tratamento favorecido para empresas de pequeno porte inclui:',
    correctAnswer: 'Regime tributário simplificado, eliminação ou redução de obrigações administrativas e preferência nas aquisições de bens e serviços pelo Poder Público',
    explanation: 'O art. 170, IX c/c art. 179 estabelece tratamento diferenciado para microempresas e empresas de pequeno porte, incluindo regime tributário simplificado ou eliminação de obrigações, e preferência nas contratações públicas.',
    difficulty: 'hard',
    themeId: 8,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Regime tributário simplificado, eliminação ou redução de obrigações administrativas e preferência nas aquisições de bens e serviços pelo Poder Público',
      'Apenas isenção tributária',
      'Não há tratamento diferenciado',
      'Apenas preferência em licitações'
    ]),
    fgvPattern: 'Tratamento diferenciado para pequenas empresas'
  },
  {
    uniqueCode: 'EX-ECO-014',
    title: 'Jazidas e Recursos Minerais',
    description: 'Propriedade e exploração',
    type: 'multiple_choice',
    content: 'Sobre jazidas e recursos minerais, a Constituição estabelece que:',
    correctAnswer: 'Pertencem à União, sendo assegurada ao concessionário a propriedade do produto da lavra',
    explanation: 'O art. 176 estabelece que as jazidas, minas e demais recursos minerais e os potenciais de energia hidráulica pertencem à União, sendo assegurada ao concessionário a propriedade do produto da lavra.',
    difficulty: 'hard',
    themeId: 8,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Pertencem à União, sendo assegurada ao concessionário a propriedade do produto da lavra',
      'Pertencem ao proprietário do solo',
      'São res nullius (de ninguém)',
      'Pertencem aos Estados'
    ]),
    fgvPattern: 'Propriedade de jazidas e recursos minerais'
  },
  {
    uniqueCode: 'EX-ECO-015',
    title: 'Usucapião Especial Urbana',
    description: 'Requisitos constitucionais',
    type: 'multiple_choice',
    content: 'A usucapião especial urbana (art. 183, CF) exige:',
    correctAnswer: 'Posse de área urbana de até 250m², por 5 anos ininterruptos, sem oposição, para moradia, não sendo proprietário de outro imóvel',
    explanation: 'O art. 183 estabelece que aquele que possuir como sua área urbana de até 250m², por 5 anos ininterruptos e sem oposição, utilizando-a para sua moradia ou de sua família, adquirirá o domínio, desde que não seja proprietário de outro imóvel urbano ou rural.',
    difficulty: 'hard',
    themeId: 8,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Posse de área urbana de até 250m², por 5 anos ininterruptos, sem oposição, para moradia, não sendo proprietário de outro imóvel',
      'Posse de 10 anos de qualquer imóvel',
      'Apenas para imóveis rurais',
      'Não há usucapião especial urbana'
    ]),
    fgvPattern: 'Requisitos da usucapião especial urbana'
  },
  {
    uniqueCode: 'EX-ECO-016',
    title: 'Usucapião Especial Rural',
    description: 'Requisitos constitucionais',
    type: 'multiple_choice',
    content: 'A usucapião especial rural (art. 191, CF) exige:',
    correctAnswer: 'Posse de área rural de até 50 hectares, por 5 anos ininterruptos, sem oposição, tornando-a produtiva com trabalho e moradia, não sendo proprietário de outro imóvel',
    explanation: 'O art. 191 estabelece que aquele que, não sendo proprietário de imóvel rural ou urbano, possua como seu, por 5 anos ininterruptos, sem oposição, área de terra, em zona rural, não superior a 50 hectares, tornando-a produtiva por seu trabalho ou de sua família, tendo nela sua moradia, adquirirá a propriedade.',
    difficulty: 'hard',
    themeId: 8,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Posse de área rural de até 50 hectares, por 5 anos ininterruptos, sem oposição, tornando-a produtiva com trabalho e moradia, não sendo proprietário de outro imóvel',
      'Posse de qualquer área rural por 10 anos',
      'Apenas para grandes propriedades',
      'Não há usucapião especial rural'
    ]),
    fgvPattern: 'Requisitos da usucapião especial rural'
  },
  {
    uniqueCode: 'EX-ECO-017',
    title: 'Propriedade Produtiva e Desapropriação',
    description: 'Imunidade à desapropriação',
    type: 'multiple_choice',
    content: 'A propriedade produtiva:',
    correctAnswer: 'Não pode ser desapropriada para fins de reforma agrária, conforme critérios de grau de utilização e eficiência',
    explanation: 'O art. 185, II veda a desapropriação para reforma agrária da propriedade produtiva. O art. 186 define função social da propriedade rural conforme aproveitamento racional, utilização adequada de recursos, observância de normas trabalhistas e exploração que favoreça o bem-estar.',
    difficulty: 'hard',
    themeId: 8,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Não pode ser desapropriada para fins de reforma agrária, conforme critérios de grau de utilização e eficiência',
      'Pode sempre ser desapropriada',
      'Não existe imunidade à desapropriação',
      'Depende apenas da vontade do governo'
    ]),
    fgvPattern: 'Imunidade da propriedade produtiva'
  },

  // ===== ORDEM SOCIAL (Tema 9) - 15 exercícios =====
  // Fáceis (5)
  {
    uniqueCode: 'EX-SOC-003',
    title: 'Objetivo da Ordem Social',
    description: 'Finalidade constitucional',
    type: 'multiple_choice',
    content: 'A ordem social tem como objetivo:',
    correctAnswer: 'O bem-estar e a justiça sociais',
    explanation: 'O art. 193 estabelece que a ordem social tem como base o primado do trabalho, e como objetivo o bem-estar e a justiça sociais.',
    difficulty: 'easy',
    themeId: 9,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'O bem-estar e a justiça sociais',
      'Apenas o crescimento econômico',
      'A acumulação de riqueza',
      'O controle social'
    ]),
    fgvPattern: 'Objetivo da ordem social'
  },
  {
    uniqueCode: 'EX-SOC-004',
    title: 'Direitos Sociais',
    description: 'Rol constitucional',
    type: 'multiple_choice',
    content: 'São direitos sociais previstos no art. 6º da CF:',
    correctAnswer: 'Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados',
    explanation: 'O art. 6º enumera os direitos sociais: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, assistência aos desamparados.',
    difficulty: 'easy',
    themeId: 9,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados',
      'Apenas educação e saúde',
      'Apenas trabalho e previdência',
      'Não há direitos sociais na Constituição'
    ]),
    fgvPattern: 'Rol de direitos sociais'
  },
  {
    uniqueCode: 'EX-SOC-005',
    title: 'Saúde como Direito Universal',
    description: 'Acesso ao SUS',
    type: 'multiple_choice',
    content: 'A saúde é direito de todos e dever do Estado, garantido mediante:',
    correctAnswer: 'Políticas sociais e econômicas que visem à redução do risco de doença e acesso universal e igualitário',
    explanation: 'O art. 196 estabelece que a saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.',
    difficulty: 'easy',
    themeId: 9,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Políticas sociais e econômicas que visem à redução do risco de doença e acesso universal e igualitário',
      'Apenas para quem contribui',
      'Apenas atendimento emergencial',
      'Não é dever do Estado'
    ]),
    fgvPattern: 'Direito à saúde'
  },
  {
    uniqueCode: 'EX-SOC-006',
    title: 'Educação como Direito',
    description: 'Dever do Estado e da família',
    type: 'multiple_choice',
    content: 'A educação é direito de todos e dever:',
    correctAnswer: 'Do Estado e da família',
    explanation: 'O art. 205 estabelece que a educação é direito de todos e dever do Estado e da família, sendo promovida e incentivada com a colaboração da sociedade.',
    difficulty: 'easy',
    themeId: 9,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Do Estado e da família',
      'Apenas do Estado',
      'Apenas da família',
      'Apenas das escolas privadas'
    ]),
    fgvPattern: 'Responsabilidade pela educação'
  },
  {
    uniqueCode: 'EX-SOC-007',
    title: 'Seguridade Social',
    description: 'Composição',
    type: 'multiple_choice',
    content: 'A seguridade social compreende:',
    correctAnswer: 'Saúde, previdência social e assistência social',
    explanation: 'O art. 194 estabelece que a seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social.',
    difficulty: 'easy',
    themeId: 9,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Saúde, previdência social e assistência social',
      'Apenas previdência social',
      'Apenas saúde',
      'Educação e saúde'
    ]),
    fgvPattern: 'Composição da seguridade social'
  },

  // Médios (5)
  {
    uniqueCode: 'EX-SOC-008',
    title: 'Princípios da Seguridade Social',
    description: 'Diretrizes constitucionais',
    type: 'multiple_choice',
    content: 'São princípios da seguridade social:',
    correctAnswer: 'Universalidade, uniformidade, seletividade, irredutibilidade, equidade, diversidade da base de financiamento e caráter democrático',
    explanation: 'O art. 194, parágrafo único enumera os princípios: universalidade da cobertura e do atendimento; uniformidade e equivalência dos benefícios; seletividade e distributividade; irredutibilidade do valor dos benefícios; equidade na forma de participação no custeio; diversidade da base de financiamento; caráter democrático e descentralizado da administração.',
    difficulty: 'medium',
    themeId: 9,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Universalidade, uniformidade, seletividade, irredutibilidade, equidade, diversidade da base de financiamento e caráter democrático',
      'Apenas universalidade',
      'Apenas contributividade',
      'Não há princípios específicos'
    ]),
    fgvPattern: 'Princípios da seguridade social'
  },
  {
    uniqueCode: 'EX-SOC-009',
    title: 'Previdência Social - Caráter Contributivo',
    description: 'Regime de filiação obrigatória',
    type: 'multiple_choice',
    content: 'A previdência social:',
    correctAnswer: 'Será organizada sob a forma de regime geral, de caráter contributivo e filiação obrigatória',
    explanation: 'O art. 201 estabelece que a previdência social será organizada sob a forma de regime geral, de caráter contributivo e de filiação obrigatória, observados critérios que preservem o equilíbrio financeiro e atuarial.',
    difficulty: 'medium',
    themeId: 9,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Será organizada sob a forma de regime geral, de caráter contributivo e filiação obrigatória',
      'É facultativa',
      'Não exige contribuição',
      'É apenas para servidores públicos'
    ]),
    fgvPattern: 'Características da previdência social'
  },
  {
    uniqueCode: 'EX-SOC-010',
    title: 'Assistência Social - Caráter Não Contributivo',
    description: 'Independência de contribuição',
    type: 'multiple_choice',
    content: 'A assistência social:',
    correctAnswer: 'Será prestada a quem dela necessitar, independentemente de contribuição à seguridade social',
    explanation: 'O art. 203 estabelece que a assistência social será prestada a quem dela necessitar, independentemente de contribuição à seguridade social, visando proteção à família, maternidade, infância, adolescência e velhice, amparo a crianças e adolescentes carentes, promoção da integração ao mercado de trabalho, habilitação e reabilitação de pessoas com deficiência e garantia de um salário mínimo mensal ao idoso e à pessoa com deficiência.',
    difficulty: 'medium',
    themeId: 9,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Será prestada a quem dela necessitar, independentemente de contribuição à seguridade social',
      'Exige contribuição prévia',
      'É apenas para idosos',
      'Não está prevista na Constituição'
    ]),
    fgvPattern: 'Características da assistência social'
  },
  {
    uniqueCode: 'EX-SOC-011',
    title: 'Ensino Fundamental Obrigatório',
    description: 'Educação básica',
    type: 'multiple_choice',
    content: 'O ensino fundamental é:',
    correctAnswer: 'Obrigatório e gratuito, inclusive para os que a ele não tiveram acesso na idade própria',
    explanation: 'O art. 208, I estabelece que o dever do Estado com a educação será efetivado mediante a garantia de educação básica obrigatória e gratuita dos 4 aos 17 anos, assegurada inclusive sua oferta gratuita para todos os que a ela não tiveram acesso na idade própria.',
    difficulty: 'medium',
    themeId: 9,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Obrigatório e gratuito, inclusive para os que a ele não tiveram acesso na idade própria',
      'Apenas para crianças',
      'Facultativo',
      'Pago para adultos'
    ]),
    fgvPattern: 'Obrigatoriedade do ensino fundamental'
  },
  {
    uniqueCode: 'EX-SOC-012',
    title: 'Autonomia Universitária',
    description: 'Liberdade acadêmica',
    type: 'multiple_choice',
    content: 'As universidades gozam de autonomia:',
    correctAnswer: 'Didático-científica, administrativa e de gestão financeira e patrimonial',
    explanation: 'O art. 207 estabelece que as universidades gozam de autonomia didático-científica, administrativa e de gestão financeira e patrimonial, e obedecerão ao princípio de indissociabilidade entre ensino, pesquisa e extensão.',
    difficulty: 'medium',
    themeId: 9,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Didático-científica, administrativa e de gestão financeira e patrimonial',
      'Apenas didática',
      'Não têm autonomia',
      'Apenas financeira'
    ]),
    fgvPattern: 'Autonomia universitária'
  },

  // Difíceis (5)
  {
    uniqueCode: 'EX-SOC-013',
    title: 'Financiamento da Seguridade Social',
    description: 'Fontes de custeio',
    type: 'multiple_choice',
    content: 'A seguridade social será financiada por:',
    correctAnswer: 'Toda a sociedade, mediante recursos dos orçamentos da União, Estados, DF e Municípios, e contribuições sociais',
    explanation: 'O art. 195 estabelece que a seguridade social será financiada por toda a sociedade, de forma direta e indireta, mediante recursos provenientes dos orçamentos dos entes federativos e das contribuições sociais (do empregador, do trabalhador, sobre receita de concursos de prognósticos e do importador).',
    difficulty: 'hard',
    themeId: 9,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Toda a sociedade, mediante recursos dos orçamentos da União, Estados, DF e Municípios, e contribuições sociais',
      'Apenas pelos trabalhadores',
      'Apenas pela União',
      'Apenas por impostos'
    ]),
    fgvPattern: 'Financiamento da seguridade social'
  },
  {
    uniqueCode: 'EX-SOC-014',
    title: 'Benefício de Prestação Continuada (BPC)',
    description: 'Assistência ao idoso e pessoa com deficiência',
    type: 'multiple_choice',
    content: 'O benefício de prestação continuada (BPC) garante:',
    correctAnswer: 'Um salário mínimo mensal à pessoa com deficiência e ao idoso que comprovem não possuir meios de prover a própria manutenção',
    explanation: 'O art. 203, V estabelece a garantia de um salário mínimo de benefício mensal à pessoa portadora de deficiência e ao idoso que comprovem não possuir meios de prover à própria manutenção ou de tê-la provida por sua família, conforme dispuser a lei.',
    difficulty: 'hard',
    themeId: 9,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Um salário mínimo mensal à pessoa com deficiência e ao idoso que comprovem não possuir meios de prover a própria manutenção',
      'Dois salários mínimos para qualquer pessoa',
      'Apenas para idosos acima de 80 anos',
      'Exige contribuição prévia'
    ]),
    fgvPattern: 'Benefício de prestação continuada'
  },
  {
    uniqueCode: 'EX-SOC-015',
    title: 'Aplicação Mínima em Saúde',
    description: 'Vinculação orçamentária',
    type: 'multiple_choice',
    content: 'A União deve aplicar anualmente em ações e serviços públicos de saúde:',
    correctAnswer: 'Percentual mínimo da receita corrente líquida, conforme lei complementar',
    explanation: 'O art. 198, §2º estabelece que a União, Estados, DF e Municípios aplicarão, anualmente, em ações e serviços públicos de saúde, recursos mínimos derivados da aplicação de percentuais sobre receitas, conforme definido em lei complementar.',
    difficulty: 'hard',
    themeId: 9,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Percentual mínimo da receita corrente líquida, conforme lei complementar',
      'Não há vinculação orçamentária',
      'Apenas recursos voluntários',
      '50% do orçamento'
    ]),
    fgvPattern: 'Vinculação de recursos para saúde'
  },
  {
    uniqueCode: 'EX-SOC-016',
    title: 'Aplicação Mínima em Educação',
    description: 'Vinculação constitucional',
    type: 'multiple_choice',
    content: 'A União aplicará, anualmente, nunca menos de:',
    correctAnswer: '18% da receita de impostos na manutenção e desenvolvimento do ensino',
    explanation: 'O art. 212 estabelece que a União aplicará, anualmente, nunca menos de 18%, e os Estados, DF e Municípios 25%, no mínimo, da receita resultante de impostos, compreendida a proveniente de transferências, na manutenção e desenvolvimento do ensino.',
    difficulty: 'hard',
    themeId: 9,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      '18% da receita de impostos na manutenção e desenvolvimento do ensino',
      '25% da receita de impostos',
      '10% do orçamento',
      'Não há percentual mínimo'
    ]),
    fgvPattern: 'Vinculação de recursos para educação'
  },
  {
    uniqueCode: 'EX-SOC-017',
    title: 'Direito ao Meio Ambiente Ecologicamente Equilibrado',
    description: 'Direito fundamental difuso',
    type: 'multiple_choice',
    content: 'O meio ambiente ecologicamente equilibrado é:',
    correctAnswer: 'Bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo',
    explanation: 'O art. 225 estabelece que todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações.',
    difficulty: 'hard',
    themeId: 9,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo',
      'Apenas responsabilidade do Estado',
      'Direito apenas das futuras gerações',
      'Não é direito fundamental'
    ]),
    fgvPattern: 'Direito ao meio ambiente'
  },
];

console.log('🎯 Iniciando população final de exercícios...');
console.log(`📝 Total de novos exercícios a inserir: ${finalExercises.length}`);

try {
  for (const exercise of finalExercises) {
    await db.insert(exercises).values(exercise);
    console.log(`  ✓ ${exercise.uniqueCode} - ${exercise.title}`);
  }
  
  console.log('\n✅ População final de exercícios concluída com sucesso!');
  console.log(`📊 Resumo:`);
  console.log(`   - ${finalExercises.length} novos exercícios inseridos`);
  console.log(`   - Cobertura: Defesa do Estado, Ordem Econômica e Ordem Social`);
  console.log(`   - Distribuição: 5 exercícios por tema em cada nível (Fácil, Médio, Difícil)`);
  console.log(`   - Todos alinhados ao conteúdo programático da FGV`);
  console.log(`\n🎉 BANCO DE EXERCÍCIOS COMPLETO!`);
  console.log(`   - Total de exercícios no sistema: 154 (19 iniciais + 135 novos)`);
  console.log(`   - 9 temas de Direito Constitucional totalmente cobertos`);
  console.log(`   - 15 exercícios por tema (5 fáceis + 5 médios + 5 difíceis)`);
} catch (error) {
  console.error('❌ Erro ao popular exercícios:', error);
  process.exit(1);
}

process.exit(0);
