import { drizzle } from 'drizzle-orm/mysql2';
import { exercises } from './drizzle/schema.ts';

const db = drizzle(process.env.DATABASE_URL);

const remainingExercises = [
  // ===== ORGANIZAÇÃO DO ESTADO (Tema 4) - 15 exercícios =====
  // Fáceis (5)
  {
    uniqueCode: 'EX-ORG-003',
    title: 'Forma de Governo',
    description: 'República como forma de governo',
    type: 'multiple_choice',
    content: 'A forma de governo adotada pela Constituição Federal de 1988 é:',
    correctAnswer: 'República',
    explanation: 'O Brasil adota a forma republicana de governo (art. 1º, CF), caracterizada pela eletividade, temporariedade e responsabilidade dos governantes.',
    difficulty: 'easy',
    themeId: 4,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'República',
      'Monarquia',
      'Parlamentarismo',
      'Presidencialismo'
    ]),
    fgvPattern: 'Identificação da forma de governo'
  },
  {
    uniqueCode: 'EX-ORG-004',
    title: 'Sistema de Governo',
    description: 'Presidencialismo',
    type: 'multiple_choice',
    content: 'O sistema de governo brasileiro é:',
    correctAnswer: 'Presidencialista',
    explanation: 'O Brasil adota o sistema presidencialista, no qual o Presidente da República acumula as funções de Chefe de Estado e Chefe de Governo.',
    difficulty: 'easy',
    themeId: 4,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Presidencialista',
      'Parlamentarista',
      'Semipresidencialista',
      'Monarquia constitucional'
    ]),
    fgvPattern: 'Sistema de governo'
  },
  {
    uniqueCode: 'EX-ORG-005',
    title: 'Entes Federativos',
    description: 'Composição da federação',
    type: 'multiple_choice',
    content: 'A República Federativa do Brasil é formada pela união indissolúvel de:',
    correctAnswer: 'União, Estados, Distrito Federal e Municípios',
    explanation: 'Conforme art. 1º da CF, a República Federativa do Brasil é formada pela união indissolúvel dos Estados, Municípios e Distrito Federal.',
    difficulty: 'easy',
    themeId: 4,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'União, Estados, Distrito Federal e Municípios',
      'Apenas União e Estados',
      'União, Estados e Territórios',
      'Apenas União e Municípios'
    ]),
    fgvPattern: 'Entes da federação'
  },
  {
    uniqueCode: 'EX-ORG-006',
    title: 'Autonomia dos Entes',
    description: 'Características da federação',
    type: 'multiple_choice',
    content: 'A autonomia dos entes federativos manifesta-se através de:',
    correctAnswer: 'Auto-organização, autogoverno, autoadministração e autolegislação',
    explanation: 'A autonomia federativa compreende: capacidade de auto-organização (constituição/lei orgânica), autogoverno (eleição de governantes), autoadministração e autolegislação (competências próprias).',
    difficulty: 'easy',
    themeId: 4,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Auto-organização, autogoverno, autoadministração e autolegislação',
      'Apenas autogoverno',
      'Soberania e independência',
      'Subordinação hierárquica à União'
    ]),
    fgvPattern: 'Elementos da autonomia federativa'
  },
  {
    uniqueCode: 'EX-ORG-007',
    title: 'Intervenção Federal',
    description: 'Exceção ao princípio federativo',
    type: 'multiple_choice',
    content: 'A intervenção federal nos Estados é medida:',
    correctAnswer: 'Excepcional, taxativa e temporária',
    explanation: 'A intervenção federal (art. 34, CF) é medida excepcional (só nas hipóteses constitucionais), taxativa (rol fechado) e temporária (cessando os motivos, cessa a intervenção).',
    difficulty: 'easy',
    themeId: 4,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Excepcional, taxativa e temporária',
      'Permanente e discricionária',
      'Automática em caso de crise',
      'Preventiva e ilimitada'
    ]),
    fgvPattern: 'Características da intervenção federal'
  },

  // Médios (5)
  {
    uniqueCode: 'EX-ORG-008',
    title: 'Competência Legislativa Concorrente',
    description: 'Repartição de competências',
    type: 'multiple_choice',
    content: 'Na competência legislativa concorrente (art. 24, CF):',
    correctAnswer: 'A União estabelece normas gerais e os Estados suplementam',
    explanation: 'Na competência concorrente, cabe à União editar normas gerais e aos Estados suplementá-las (art. 24, §§1º e 2º, CF). Inexistindo lei federal, os Estados exercem competência plena.',
    difficulty: 'medium',
    themeId: 4,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'A União estabelece normas gerais e os Estados suplementam',
      'União e Estados têm competência idêntica e excludente',
      'Apenas a União pode legislar',
      'Os Estados têm prioridade legislativa'
    ]),
    fgvPattern: 'Competência legislativa concorrente'
  },
  {
    uniqueCode: 'EX-ORG-009',
    title: 'Criação de Municípios',
    description: 'Requisitos constitucionais',
    type: 'multiple_choice',
    content: 'A criação de Municípios exige:',
    correctAnswer: 'Lei complementar federal, estudo de viabilidade, consulta prévia às populações e lei estadual',
    explanation: 'A criação de Municípios (art. 18, §4º, CF) exige: lei complementar federal fixando o período, estudo de viabilidade municipal, consulta plebiscitária às populações e lei estadual.',
    difficulty: 'medium',
    themeId: 4,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Lei complementar federal, estudo de viabilidade, consulta prévia às populações e lei estadual',
      'Apenas lei estadual',
      'Decreto do Governador',
      'Referendo popular'
    ]),
    fgvPattern: 'Requisitos para criação de Municípios'
  },
  {
    uniqueCode: 'EX-ORG-010',
    title: 'Competência dos Municípios',
    description: 'Interesse local',
    type: 'multiple_choice',
    content: 'Compete aos Municípios legislar sobre:',
    correctAnswer: 'Assuntos de interesse local e suplementar a legislação federal e estadual',
    explanation: 'Os Municípios têm competência para legislar sobre assuntos de interesse local (art. 30, I) e suplementar a legislação federal e estadual no que couber (art. 30, II).',
    difficulty: 'medium',
    themeId: 4,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Assuntos de interesse local e suplementar a legislação federal e estadual',
      'Apenas serviços públicos locais',
      'Todas as matérias de direito civil',
      'Matérias de competência exclusiva da União'
    ]),
    fgvPattern: 'Competência legislativa municipal'
  },
  {
    uniqueCode: 'EX-ORG-011',
    title: 'Distrito Federal',
    description: 'Natureza jurídica',
    type: 'multiple_choice',
    content: 'O Distrito Federal:',
    correctAnswer: 'Acumula competências estaduais e municipais, sendo vedada sua divisão em Municípios',
    explanation: 'O DF é ente federativo autônomo que acumula competências legislativas e tributárias de Estados e Municípios (art. 32, §1º, CF), sendo vedada sua divisão em Municípios (art. 32, caput).',
    difficulty: 'medium',
    themeId: 4,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Acumula competências estaduais e municipais, sendo vedada sua divisão em Municípios',
      'Tem apenas competências municipais',
      'Pode ser dividido em Municípios',
      'É subordinado à União'
    ]),
    fgvPattern: 'Competências do Distrito Federal'
  },
  {
    uniqueCode: 'EX-ORG-012',
    title: 'Territórios Federais',
    description: 'Natureza e organização',
    type: 'multiple_choice',
    content: 'Os Territórios Federais:',
    correctAnswer: 'Não são entes federativos, integram a União e podem ser divididos em Municípios',
    explanation: 'Os Territórios não são entes federativos autônomos, integrando a União (art. 18, §2º, CF). Podem ser divididos em Municípios e, se tiverem mais de 100 mil habitantes, terão órgãos judiciários próprios.',
    difficulty: 'medium',
    themeId: 4,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Não são entes federativos, integram a União e podem ser divididos em Municípios',
      'São entes federativos autônomos',
      'Têm as mesmas competências dos Estados',
      'Não podem ter Municípios'
    ]),
    fgvPattern: 'Natureza jurídica dos Territórios'
  },

  // Difíceis (5)
  {
    uniqueCode: 'EX-ORG-013',
    title: 'Competência Residual dos Estados',
    description: 'Poderes remanescentes',
    type: 'multiple_choice',
    content: 'Sobre a competência residual dos Estados (art. 25, §1º, CF), é correto afirmar que:',
    correctAnswer: 'Os Estados têm competência para legislar sobre matérias não vedadas pela Constituição',
    explanation: 'O art. 25, §1º estabelece que são reservadas aos Estados as competências que não lhes sejam vedadas pela Constituição (competência residual ou remanescente).',
    difficulty: 'hard',
    themeId: 4,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Os Estados têm competência para legislar sobre matérias não vedadas pela Constituição',
      'Os Estados só podem legislar sobre matérias expressamente previstas',
      'A competência residual é da União',
      'Os Estados não têm competência residual'
    ]),
    fgvPattern: 'Competência residual estadual'
  },
  {
    uniqueCode: 'EX-ORG-014',
    title: 'Intervenção Federal - Controle Político e Jurisdicional',
    description: 'Controles da intervenção',
    type: 'multiple_choice',
    content: 'O decreto de intervenção federal está sujeito a:',
    correctAnswer: 'Controle político pelo Congresso Nacional e, em certos casos, controle jurisdicional prévio',
    explanation: 'O decreto interventivo submete-se a controle político (apreciação pelo CN em 24h - art. 36, §1º) e, em algumas hipóteses (art. 34, VI e VII), depende de requisição do STF, STJ ou TSE (controle jurisdicional prévio).',
    difficulty: 'hard',
    themeId: 4,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Controle político pelo Congresso Nacional e, em certos casos, controle jurisdicional prévio',
      'Apenas controle político',
      'Não há controle sobre o decreto',
      'Apenas controle jurisdicional posterior'
    ]),
    fgvPattern: 'Controles da intervenção federal'
  },
  {
    uniqueCode: 'EX-ORG-015',
    title: 'Repartição Horizontal e Vertical de Competências',
    description: 'Técnicas de distribuição',
    type: 'multiple_choice',
    content: 'A diferença entre repartição horizontal e vertical de competências é que:',
    correctAnswer: 'Na horizontal há competências privativas/exclusivas, na vertical há competências concorrentes/suplementares',
    explanation: 'A repartição horizontal distribui competências exclusivas/privativas entre os entes (sem sobreposição). A vertical estabelece competências concorrentes/suplementares (com colaboração entre entes).',
    difficulty: 'hard',
    themeId: 4,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Na horizontal há competências privativas/exclusivas, na vertical há competências concorrentes/suplementares',
      'Não há diferença entre elas',
      'A horizontal é para Estados e a vertical para Municípios',
      'A horizontal é legislativa e a vertical é administrativa'
    ]),
    fgvPattern: 'Técnicas de repartição de competências'
  },
  {
    uniqueCode: 'EX-ORG-016',
    title: 'Regiões Metropolitanas',
    description: 'Instituição e natureza',
    type: 'multiple_choice',
    content: 'As regiões metropolitanas, aglomerações urbanas e microrregiões:',
    correctAnswer: 'São instituídas por lei complementar estadual para integrar serviços públicos de interesse comum',
    explanation: 'Conforme art. 25, §3º, CF, os Estados podem instituir regiões metropolitanas, aglomerações urbanas e microrregiões por lei complementar estadual, para integrar a organização, planejamento e execução de funções públicas de interesse comum.',
    difficulty: 'hard',
    themeId: 4,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'São instituídas por lei complementar estadual para integrar serviços públicos de interesse comum',
      'São entes federativos autônomos',
      'Só podem ser criadas pela União',
      'Substituem os Municípios'
    ]),
    fgvPattern: 'Regiões metropolitanas e interesse comum'
  },
  {
    uniqueCode: 'EX-ORG-017',
    title: 'Vedações Federativas',
    description: 'Limitações constitucionais',
    type: 'multiple_choice',
    content: 'São vedações aos entes federativos (art. 19, CF):',
    correctAnswer: 'Estabelecer cultos religiosos, recusar fé a documentos públicos, criar distinções entre brasileiros e estabelecer preferências entre os entes',
    explanation: 'O art. 19 veda aos entes: estabelecer cultos ou igrejas (laicidade), embaraçar seu funcionamento, manter relações de dependência ou aliança (ressalvada colaboração de interesse público), recusar fé a documentos públicos, criar distinções entre brasileiros ou preferências entre si.',
    difficulty: 'hard',
    themeId: 4,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Estabelecer cultos religiosos, recusar fé a documentos públicos, criar distinções entre brasileiros e estabelecer preferências entre os entes',
      'Apenas estabelecer cultos religiosos',
      'Criar impostos',
      'Legislar sobre direito civil'
    ]),
    fgvPattern: 'Vedações constitucionais aos entes federativos'
  },

  // ===== PODERES DA REPÚBLICA (Tema 5) - 15 exercícios =====
  // Fáceis (5)
  {
    uniqueCode: 'EX-POD-003',
    title: 'Tripartição dos Poderes',
    description: 'Poderes da República',
    type: 'multiple_choice',
    content: 'São Poderes da União, independentes e harmônicos entre si:',
    correctAnswer: 'Legislativo, Executivo e Judiciário',
    explanation: 'O art. 2º da CF estabelece que são Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.',
    difficulty: 'easy',
    themeId: 5,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Legislativo, Executivo e Judiciário',
      'Legislativo, Executivo e Ministério Público',
      'Federal, Estadual e Municipal',
      'Executivo, Judiciário e Tribunal de Contas'
    ]),
    fgvPattern: 'Identificação dos Poderes da República'
  },
  {
    uniqueCode: 'EX-POD-004',
    title: 'Composição do Congresso Nacional',
    description: 'Bicameralismo',
    type: 'multiple_choice',
    content: 'O Poder Legislativo federal é exercido pelo Congresso Nacional, que se compõe de:',
    correctAnswer: 'Câmara dos Deputados e Senado Federal',
    explanation: 'O art. 44 da CF estabelece que o Poder Legislativo é exercido pelo Congresso Nacional, composto pela Câmara dos Deputados e pelo Senado Federal.',
    difficulty: 'easy',
    themeId: 5,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Câmara dos Deputados e Senado Federal',
      'Apenas Câmara dos Deputados',
      'Deputados Federais e Estaduais',
      'Senadores e Ministros'
    ]),
    fgvPattern: 'Composição do Congresso Nacional'
  },
  {
    uniqueCode: 'EX-POD-005',
    title: 'Mandato dos Deputados Federais',
    description: 'Duração e renovação',
    type: 'multiple_choice',
    content: 'O mandato dos Deputados Federais é de:',
    correctAnswer: '4 anos, com renovação total a cada eleição',
    explanation: 'Os Deputados Federais têm mandato de 4 anos, com renovação total da Câmara a cada eleição (art. 44, parágrafo único, CF).',
    difficulty: 'easy',
    themeId: 5,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      '4 anos, com renovação total a cada eleição',
      '8 anos, com renovação de 1/3',
      '4 anos, com renovação de 1/3',
      '6 anos, com renovação total'
    ]),
    fgvPattern: 'Mandato de Deputado Federal'
  },
  {
    uniqueCode: 'EX-POD-006',
    title: 'Mandato dos Senadores',
    description: 'Duração e renovação',
    type: 'multiple_choice',
    content: 'O mandato dos Senadores é de:',
    correctAnswer: '8 anos, com renovação alternada de 1/3 e 2/3',
    explanation: 'Os Senadores têm mandato de 8 anos, com renovação de 1/3 e 2/3 alternadamente a cada 4 anos (art. 46, §2º, CF).',
    difficulty: 'easy',
    themeId: 5,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      '8 anos, com renovação alternada de 1/3 e 2/3',
      '4 anos, com renovação total',
      '6 anos, com renovação de 1/2',
      'Vitalício'
    ]),
    fgvPattern: 'Mandato de Senador'
  },
  {
    uniqueCode: 'EX-POD-007',
    title: 'Representação no Senado',
    description: 'Princípio da igualdade',
    type: 'multiple_choice',
    content: 'Cada Estado e o Distrito Federal elegem para o Senado Federal:',
    correctAnswer: '3 Senadores',
    explanation: 'Cada Estado e o DF elegem 3 Senadores (art. 46, §1º, CF), representando o princípio da igualdade entre os entes federativos.',
    difficulty: 'easy',
    themeId: 5,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      '3 Senadores',
      '2 Senadores',
      'Número proporcional à população',
      '5 Senadores'
    ]),
    fgvPattern: 'Representação no Senado Federal'
  },

  // Médios (5)
  {
    uniqueCode: 'EX-POD-008',
    title: 'Imunidade Parlamentar Material',
    description: 'Inviolabilidade',
    type: 'multiple_choice',
    content: 'A imunidade parlamentar material (art. 53, caput, CF) significa que:',
    correctAnswer: 'Os parlamentares são invioláveis por suas opiniões, palavras e votos no exercício do mandato',
    explanation: 'A imunidade material (inviolabilidade) protege os parlamentares de responsabilização civil e penal por suas opiniões, palavras e votos no exercício do mandato e em razão dele.',
    difficulty: 'medium',
    themeId: 5,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Os parlamentares são invioláveis por suas opiniões, palavras e votos no exercício do mandato',
      'Os parlamentares não podem ser presos em nenhuma hipótese',
      'Os parlamentares têm foro privilegiado vitalício',
      'Os parlamentares são imunes a processos administrativos'
    ]),
    fgvPattern: 'Imunidade material parlamentar'
  },
  {
    uniqueCode: 'EX-POD-009',
    title: 'Imunidade Parlamentar Formal',
    description: 'Prerrogativas processuais',
    type: 'multiple_choice',
    content: 'A imunidade parlamentar formal inclui:',
    correctAnswer: 'Foro por prerrogativa de função no STF e impossibilidade de prisão, salvo flagrante de crime inafiançável',
    explanation: 'A imunidade formal compreende: foro por prerrogativa de função no STF desde a expedição do diploma (art. 53, §1º), impossibilidade de prisão (salvo flagrante de crime inafiançável) e sustação do processo pela Casa respectiva (art. 53, §§3º a 5º).',
    difficulty: 'medium',
    themeId: 5,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Foro por prerrogativa de função no STF e impossibilidade de prisão, salvo flagrante de crime inafiançável',
      'Apenas foro privilegiado',
      'Imunidade absoluta a processos',
      'Impossibilidade de investigação'
    ]),
    fgvPattern: 'Imunidade formal parlamentar'
  },
  {
    uniqueCode: 'EX-POD-010',
    title: 'Atribuições Privativas do Senado',
    description: 'Competências exclusivas',
    type: 'multiple_choice',
    content: 'São atribuições privativas do Senado Federal:',
    correctAnswer: 'Aprovar indicações de autoridades, fixar alíquotas de ICMS e suspender lei declarada inconstitucional pelo STF',
    explanation: 'O art. 52 estabelece competências privativas do Senado, como aprovar autoridades indicadas pelo Presidente (ministros do STF, TCU, etc.), fixar alíquotas de ICMS interestaduais e de exportação, e suspender execução de lei declarada inconstitucional pelo STF.',
    difficulty: 'medium',
    themeId: 5,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Aprovar indicações de autoridades, fixar alíquotas de ICMS e suspender lei declarada inconstitucional pelo STF',
      'Apenas aprovar o orçamento',
      'Iniciar processo de impeachment',
      'Julgar o Presidente da República'
    ]),
    fgvPattern: 'Competências privativas do Senado'
  },
  {
    uniqueCode: 'EX-POD-011',
    title: 'Atribuições Privativas da Câmara',
    description: 'Competências exclusivas',
    type: 'multiple_choice',
    content: 'São atribuições privativas da Câmara dos Deputados:',
    correctAnswer: 'Autorizar instauração de processo contra o Presidente e tomar contas do Presidente quando não apresentadas',
    explanation: 'O art. 51 estabelece competências privativas da Câmara, como autorizar a instauração de processo contra o Presidente e Vice (art. 51, I) e tomar as contas do Presidente quando não apresentadas ao Congresso (art. 51, II).',
    difficulty: 'medium',
    themeId: 5,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Autorizar instauração de processo contra o Presidente e tomar contas do Presidente quando não apresentadas',
      'Julgar o Presidente nos crimes de responsabilidade',
      'Aprovar ministros do STF',
      'Fixar alíquotas de ICMS'
    ]),
    fgvPattern: 'Competências privativas da Câmara'
  },
  {
    uniqueCode: 'EX-POD-012',
    title: 'Mandato do Presidente da República',
    description: 'Duração e reeleição',
    type: 'multiple_choice',
    content: 'O mandato do Presidente da República é de:',
    correctAnswer: '4 anos, permitida uma reeleição para o período subsequente',
    explanation: 'O Presidente tem mandato de 4 anos (art. 82, CF), permitida uma única reeleição para o período imediatamente subsequente (art. 14, §5º, CF).',
    difficulty: 'medium',
    themeId: 5,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      '4 anos, permitida uma reeleição para o período subsequente',
      '5 anos, sem possibilidade de reeleição',
      '4 anos, com reeleições ilimitadas',
      '6 anos, permitida uma reeleição'
    ]),
    fgvPattern: 'Mandato presidencial e reeleição'
  },

  // Difíceis (5)
  {
    uniqueCode: 'EX-POD-013',
    title: 'Perda do Mandato Parlamentar',
    description: 'Hipóteses e procedimento',
    type: 'multiple_choice',
    content: 'Sobre a perda do mandato parlamentar (art. 55, CF), é correto afirmar que:',
    correctAnswer: 'Algumas hipóteses exigem decisão da Mesa e outras exigem deliberação do Plenário por voto secreto e maioria absoluta',
    explanation: 'O art. 55 distingue: perda automática declarada pela Mesa (incisos I, II, III e IV - ex: incompatibilidade, condenação criminal) e perda que exige deliberação do Plenário por voto secreto e maioria absoluta (incisos V e VI - ex: quebra de decoro, falta de comparecimento).',
    difficulty: 'hard',
    themeId: 5,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Algumas hipóteses exigem decisão da Mesa e outras exigem deliberação do Plenário por voto secreto e maioria absoluta',
      'Todas as hipóteses exigem deliberação do Plenário',
      'A perda é sempre automática',
      'Depende sempre de decisão judicial'
    ]),
    fgvPattern: 'Procedimentos de perda de mandato'
  },
  {
    uniqueCode: 'EX-POD-014',
    title: 'Estado de Sítio e Congresso Nacional',
    description: 'Controle político',
    type: 'multiple_choice',
    content: 'Durante o estado de sítio, o Congresso Nacional:',
    correctAnswer: 'Permanece em funcionamento até o término das medidas coercitivas, fiscalizando sua execução',
    explanation: 'Durante o estado de sítio, o Congresso permanecerá em funcionamento até o término das medidas coercitivas (art. 139, parágrafo único, CF), exercendo controle político sobre a execução das medidas.',
    difficulty: 'hard',
    themeId: 5,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Permanece em funcionamento até o término das medidas coercitivas, fiscalizando sua execução',
      'É dissolvido automaticamente',
      'Entra em recesso',
      'Só pode se reunir com autorização do Presidente'
    ]),
    fgvPattern: 'Funcionamento do Congresso no estado de sítio'
  },
  {
    uniqueCode: 'EX-POD-015',
    title: 'Crimes de Responsabilidade do Presidente',
    description: 'Impeachment',
    type: 'multiple_choice',
    content: 'No processo de impeachment do Presidente da República:',
    correctAnswer: 'A Câmara autoriza a instauração (2/3) e o Senado julga (2/3), presidido pelo Presidente do STF',
    explanation: 'O impeachment exige autorização da Câmara por 2/3 (art. 51, I c/c art. 86, caput) e julgamento pelo Senado por 2/3 (art. 52, I e parágrafo único), sendo o processo presidido pelo Presidente do STF (art. 52, parágrafo único).',
    difficulty: 'hard',
    themeId: 5,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'A Câmara autoriza a instauração (2/3) e o Senado julga (2/3), presidido pelo Presidente do STF',
      'O STF julga o processo',
      'Apenas o Senado participa',
      'A Câmara julga e o Senado autoriza'
    ]),
    fgvPattern: 'Procedimento de impeachment'
  },
  {
    uniqueCode: 'EX-POD-016',
    title: 'Medidas Provisórias - Limites Materiais',
    description: 'Vedações constitucionais',
    type: 'multiple_choice',
    content: 'É vedada a edição de medida provisória sobre:',
    correctAnswer: 'Direito penal, processual penal e civil, nacionalidade, cidadania, direitos políticos, direito eleitoral e matéria reservada a lei complementar',
    explanation: 'O art. 62, §1º veda MP sobre: nacionalidade, cidadania, direitos políticos, partidos políticos e direito eleitoral; direito penal, processual penal e processual civil; organização do Judiciário e MP, carreira e garantias; planos plurianuais, diretrizes orçamentárias, orçamento e créditos adicionais (salvo os de abertura); detenção ou sequestro de bens; e matéria de lei complementar.',
    difficulty: 'hard',
    themeId: 5,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Direito penal, processual penal e civil, nacionalidade, cidadania, direitos políticos, direito eleitoral e matéria reservada a lei complementar',
      'Apenas direito penal',
      'Não há vedações materiais',
      'Apenas matéria tributária'
    ]),
    fgvPattern: 'Limites materiais às medidas provisórias'
  },
  {
    uniqueCode: 'EX-POD-017',
    title: 'Controle Externo e Tribunal de Contas',
    description: 'Fiscalização contábil',
    type: 'multiple_choice',
    content: 'O controle externo, a cargo do Congresso Nacional, é exercido com auxílio do Tribunal de Contas da União, que possui competência para:',
    correctAnswer: 'Julgar contas dos administradores públicos, apreciar contas do Presidente, fiscalizar aplicação de recursos e aplicar sanções',
    explanation: 'O TCU (art. 71, CF) julga contas dos administradores (inciso II), aprecia contas do Presidente (inciso I - julgamento é do Congresso), fiscaliza aplicação de recursos, realiza inspeções e auditorias, aplica sanções e aprecia legalidade de atos de admissão e aposentadorias.',
    difficulty: 'hard',
    themeId: 5,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Julgar contas dos administradores públicos, apreciar contas do Presidente, fiscalizar aplicação de recursos e aplicar sanções',
      'Apenas emitir pareceres sem poder decisório',
      'Julgar crimes de responsabilidade',
      'Substituir o Congresso no controle externo'
    ]),
    fgvPattern: 'Competências do Tribunal de Contas'
  },

  // ===== PROCESSO LEGISLATIVO (Tema 6) - 15 exercícios =====
  // Fáceis (5)
  {
    uniqueCode: 'EX-PRO-003',
    title: 'Fases do Processo Legislativo',
    description: 'Etapas de elaboração das leis',
    type: 'multiple_choice',
    content: 'As fases do processo legislativo ordinário são:',
    correctAnswer: 'Iniciativa, discussão, votação, sanção/veto e promulgação/publicação',
    explanation: 'O processo legislativo compreende: iniciativa (apresentação do projeto), discussão (análise nas comissões e plenário), votação, sanção ou veto (manifestação do Executivo), promulgação e publicação.',
    difficulty: 'easy',
    themeId: 6,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Iniciativa, discussão, votação, sanção/veto e promulgação/publicação',
      'Apenas iniciativa e votação',
      'Iniciativa, votação e publicação',
      'Discussão, votação e sanção'
    ]),
    fgvPattern: 'Fases do processo legislativo'
  },
  {
    uniqueCode: 'EX-PRO-004',
    title: 'Iniciativa Legislativa',
    description: 'Legitimados para propor leis',
    type: 'multiple_choice',
    content: 'Têm iniciativa para propor leis:',
    correctAnswer: 'Membros do Congresso, Presidente da República, STF, Tribunais Superiores, PGR e cidadãos',
    explanation: 'O art. 61 estabelece que a iniciativa das leis cabe a qualquer membro ou comissão da Câmara, Senado ou Congresso, ao Presidente, STF, Tribunais Superiores, PGR e aos cidadãos (iniciativa popular).',
    difficulty: 'easy',
    themeId: 6,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Membros do Congresso, Presidente da República, STF, Tribunais Superiores, PGR e cidadãos',
      'Apenas o Presidente da República',
      'Apenas membros do Congresso',
      'Qualquer pessoa'
    ]),
    fgvPattern: 'Legitimados para iniciativa legislativa'
  },
  {
    uniqueCode: 'EX-PRO-005',
    title: 'Sanção e Veto',
    description: 'Manifestação do Executivo',
    type: 'multiple_choice',
    content: 'A sanção presidencial é:',
    correctAnswer: 'Ato pelo qual o Presidente concorda com o projeto aprovado pelo Congresso',
    explanation: 'A sanção (art. 66, CF) é a manifestação de concordância do Presidente com o projeto de lei aprovado pelo Congresso, tornando-o lei.',
    difficulty: 'easy',
    themeId: 6,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Ato pelo qual o Presidente concorda com o projeto aprovado pelo Congresso',
      'Ato de rejeição do projeto',
      'Ato de promulgação da lei',
      'Ato de publicação da lei'
    ]),
    fgvPattern: 'Conceito de sanção presidencial'
  },
  {
    uniqueCode: 'EX-PRO-006',
    title: 'Tipos de Veto',
    description: 'Veto jurídico e político',
    type: 'multiple_choice',
    content: 'O veto presidencial pode ser:',
    correctAnswer: 'Jurídico (por inconstitucionalidade) ou político (por contrariedade ao interesse público)',
    explanation: 'O art. 66, §1º prevê duas modalidades de veto: jurídico (por inconstitucionalidade) e político (por contrariedade ao interesse público).',
    difficulty: 'easy',
    themeId: 6,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Jurídico (por inconstitucionalidade) ou político (por contrariedade ao interesse público)',
      'Apenas jurídico',
      'Apenas político',
      'Total ou parcial, sem distinção de fundamento'
    ]),
    fgvPattern: 'Modalidades de veto'
  },
  {
    uniqueCode: 'EX-PRO-007',
    title: 'Promulgação e Publicação',
    description: 'Fases finais do processo',
    type: 'multiple_choice',
    content: 'A promulgação da lei é:',
    correctAnswer: 'Ato que atesta a existência da lei e determina sua executoriedade',
    explanation: 'A promulgação é o ato que atesta a existência válida da lei e ordena sua execução. A publicação é o ato que dá conhecimento da lei aos destinatários.',
    difficulty: 'easy',
    themeId: 6,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Ato que atesta a existência da lei e determina sua executoriedade',
      'Ato de concordância com o projeto',
      'Ato de divulgação da lei no Diário Oficial',
      'Ato de votação final'
    ]),
    fgvPattern: 'Conceito de promulgação'
  },

  // Médios (5)
  {
    uniqueCode: 'EX-PRO-008',
    title: 'Iniciativa Privativa do Presidente',
    description: 'Reserva de iniciativa',
    type: 'multiple_choice',
    content: 'São de iniciativa privativa do Presidente da República leis que:',
    correctAnswer: 'Disponham sobre organização administrativa, servidores públicos, militares e matéria tributária',
    explanation: 'O art. 61, §1º reserva ao Presidente a iniciativa de leis sobre: organização da administração federal; criação de cargos, funções e empregos públicos; regime jurídico de servidores; organização do MP e Defensoria; criação e extinção de Ministérios; militares das Forças Armadas; e fixação ou aumento de remuneração.',
    difficulty: 'medium',
    themeId: 6,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Disponham sobre organização administrativa, servidores públicos, militares e matéria tributária',
      'Apenas sobre matéria tributária',
      'Qualquer matéria de interesse do Executivo',
      'Apenas sobre Forças Armadas'
    ]),
    fgvPattern: 'Iniciativa privativa do Presidente'
  },
  {
    uniqueCode: 'EX-PRO-009',
    title: 'Iniciativa Popular',
    description: 'Requisitos constitucionais',
    type: 'multiple_choice',
    content: 'A iniciativa popular de lei exige:',
    correctAnswer: 'Subscrição de no mínimo 1% do eleitorado nacional, distribuído por pelo menos 5 Estados, com no mínimo 0,3% dos eleitores de cada um',
    explanation: 'A iniciativa popular (art. 61, §2º) exige: subscrição de no mínimo 1% do eleitorado nacional, distribuído por pelo menos 5 Estados, com no mínimo 0,3% dos eleitores de cada um deles.',
    difficulty: 'medium',
    themeId: 6,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Subscrição de no mínimo 1% do eleitorado nacional, distribuído por pelo menos 5 Estados, com no mínimo 0,3% dos eleitores de cada um',
      'Apenas 1% do eleitorado nacional',
      '10% do eleitorado nacional',
      'Não há requisitos específicos'
    ]),
    fgvPattern: 'Requisitos da iniciativa popular'
  },
  {
    uniqueCode: 'EX-PRO-010',
    title: 'Prazo para Sanção ou Veto',
    description: 'Prazos do Executivo',
    type: 'multiple_choice',
    content: 'O Presidente tem prazo de quantos dias úteis para sancionar ou vetar o projeto de lei?',
    correctAnswer: '15 dias úteis',
    explanation: 'O art. 66, §1º estabelece que o Presidente tem 15 dias úteis para sancionar ou vetar o projeto de lei. O silêncio implica sanção tácita.',
    difficulty: 'medium',
    themeId: 6,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      '15 dias úteis',
      '30 dias corridos',
      '48 horas',
      '60 dias úteis'
    ]),
    fgvPattern: 'Prazo para sanção ou veto'
  },
  {
    uniqueCode: 'EX-PRO-011',
    title: 'Derrubada do Veto',
    description: 'Rejeição do veto pelo Congresso',
    type: 'multiple_choice',
    content: 'O veto presidencial pode ser rejeitado pelo Congresso Nacional por:',
    correctAnswer: 'Maioria absoluta, em sessão conjunta e votação secreta',
    explanation: 'O veto pode ser rejeitado pelo voto da maioria absoluta dos Deputados e Senadores, em sessão conjunta e votação secreta (art. 66, §4º).',
    difficulty: 'medium',
    themeId: 6,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Maioria absoluta, em sessão conjunta e votação secreta',
      'Maioria simples',
      '2/3 dos votos',
      '3/5 dos votos'
    ]),
    fgvPattern: 'Quórum para rejeição de veto'
  },
  {
    uniqueCode: 'EX-PRO-012',
    title: 'Lei Complementar - Quórum',
    description: 'Aprovação qualificada',
    type: 'multiple_choice',
    content: 'A lei complementar é aprovada por:',
    correctAnswer: 'Maioria absoluta',
    explanation: 'A lei complementar exige aprovação por maioria absoluta (art. 69, CF), ou seja, mais da metade dos membros de cada Casa do Congresso.',
    difficulty: 'medium',
    themeId: 6,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Maioria absoluta',
      'Maioria simples',
      '2/3 dos votos',
      '3/5 dos votos'
    ]),
    fgvPattern: 'Quórum de aprovação de lei complementar'
  },

  // Difíceis (5)
  {
    uniqueCode: 'EX-PRO-013',
    title: 'Emenda Constitucional - Limitações',
    description: 'Limites ao poder de reforma',
    type: 'multiple_choice',
    content: 'A Constituição não pode ser emendada:',
    correctAnswer: 'Na vigência de intervenção federal, estado de defesa ou estado de sítio, e quanto às cláusulas pétreas',
    explanation: 'O art. 60 estabelece limites circunstanciais (§1º - não pode emendar durante intervenção, estado de defesa ou sítio) e materiais (§4º - cláusulas pétreas: forma federativa, voto direto secreto universal e periódico, separação de poderes e direitos e garantias individuais).',
    difficulty: 'hard',
    themeId: 6,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Na vigência de intervenção federal, estado de defesa ou estado de sítio, e quanto às cláusulas pétreas',
      'Apenas durante estado de sítio',
      'Não há limitações ao poder de reforma',
      'Apenas nos primeiros 5 anos de vigência'
    ]),
    fgvPattern: 'Limites ao poder constituinte derivado'
  },
  {
    uniqueCode: 'EX-PRO-014',
    title: 'Medida Provisória - Regime de Urgência',
    description: 'Trancamento de pauta',
    type: 'multiple_choice',
    content: 'Se a medida provisória não for apreciada em até 45 dias de sua edição:',
    correctAnswer: 'Entrará em regime de urgência, trancando a pauta das deliberações da Casa em que estiver tramitando',
    explanation: 'O art. 62, §6º estabelece que, não sendo apreciada em até 45 dias, a MP entrará em regime de urgência, sobrestando todas as demais deliberações legislativas da Casa até que se ultime a votação.',
    difficulty: 'hard',
    themeId: 6,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Entrará em regime de urgência, trancando a pauta das deliberações da Casa em que estiver tramitando',
      'Será automaticamente rejeitada',
      'Será convertida em lei automaticamente',
      'Não há consequências'
    ]),
    fgvPattern: 'Regime de urgência da medida provisória'
  },
  {
    uniqueCode: 'EX-PRO-015',
    title: 'Decreto Legislativo e Resolução',
    description: 'Atos normativos do Congresso',
    type: 'multiple_choice',
    content: 'A diferença entre decreto legislativo e resolução é que:',
    correctAnswer: 'O decreto legislativo regula matérias de competência exclusiva do Congresso com efeitos externos, e a resolução regula matérias internas ou de competência privativa de cada Casa',
    explanation: 'O decreto legislativo (art. 49, CF) regula matérias de competência exclusiva do Congresso com efeitos externos (ex: aprovar tratados). A resolução regula matérias internas do Congresso ou de competência privativa de cada Casa (art. 51 e 52).',
    difficulty: 'hard',
    themeId: 6,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'O decreto legislativo regula matérias de competência exclusiva do Congresso com efeitos externos, e a resolução regula matérias internas ou de competência privativa de cada Casa',
      'Não há diferença entre eles',
      'O decreto legislativo é mais importante',
      'A resolução precisa de sanção presidencial'
    ]),
    fgvPattern: 'Distinção entre decreto legislativo e resolução'
  },
  {
    uniqueCode: 'EX-PRO-016',
    title: 'Vício de Iniciativa',
    description: 'Inconstitucionalidade formal',
    type: 'multiple_choice',
    content: 'Sobre o vício de iniciativa no processo legislativo, o STF entende que:',
    correctAnswer: 'O vício de iniciativa é insanável, não podendo ser convalidado pela sanção presidencial',
    explanation: 'O STF firmou entendimento de que o vício de iniciativa (usurpação de competência) é insanável, não sendo convalidado pela sanção presidencial (Súmula 5 do STF).',
    difficulty: 'hard',
    themeId: 6,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'O vício de iniciativa é insanável, não podendo ser convalidado pela sanção presidencial',
      'A sanção convalida qualquer vício',
      'O vício de iniciativa não gera inconstitucionalidade',
      'Apenas o Congresso pode sanar o vício'
    ]),
    fgvPattern: 'Vício de iniciativa e sanação'
  },
  {
    uniqueCode: 'EX-PRO-017',
    title: 'Reedição de Medida Provisória',
    description: 'Limites à reedição',
    type: 'multiple_choice',
    content: 'Sobre a reedição de medida provisória, a Constituição:',
    correctAnswer: 'Veda a reedição, na mesma sessão legislativa, de medida provisória rejeitada ou que tenha perdido eficácia por decurso de prazo',
    explanation: 'O art. 62, §10 veda expressamente a reedição, na mesma sessão legislativa, de MP que tenha sido rejeitada ou que tenha perdido eficácia por decurso de prazo.',
    difficulty: 'hard',
    themeId: 6,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Veda a reedição, na mesma sessão legislativa, de medida provisória rejeitada ou que tenha perdido eficácia por decurso de prazo',
      'Permite reedição ilimitada',
      'Não há regras sobre reedição',
      'Permite reedição após 30 dias'
    ]),
    fgvPattern: 'Vedação à reedição de medida provisória'
  },
];

console.log('🎯 Iniciando população dos temas restantes...');
console.log(`📝 Total de novos exercícios a inserir: ${remainingExercises.length}`);

try {
  for (const exercise of remainingExercises) {
    await db.insert(exercises).values(exercise);
    console.log(`  ✓ ${exercise.uniqueCode} - ${exercise.title}`);
  }
  
  console.log('\n✅ População dos temas restantes concluída com sucesso!');
  console.log(`📊 Resumo:`);
  console.log(`   - ${remainingExercises.length} novos exercícios inseridos`);
  console.log(`   - Cobertura: Organização do Estado, Poderes da República e Processo Legislativo`);
  console.log(`   - Distribuição: 5 exercícios por tema em cada nível (Fácil, Médio, Difícil)`);
  console.log(`   - Todos alinhados ao conteúdo programático da FGV`);
} catch (error) {
  console.error('❌ Erro ao popular exercícios:', error);
  process.exit(1);
}

process.exit(0);
