import { drizzle } from 'drizzle-orm/mysql2';
import { exercises } from './drizzle/schema.ts';

const db = drizzle(process.env.DATABASE_URL);

const newExercises = [
  // ===== CONTROLE DE CONSTITUCIONALIDADE (5 Fácil, 5 Médio, 5 Difícil) =====
  // Fáceis
  {
    uniqueCode: 'EX-CTRL-005',
    title: 'Natureza Jurídica do Controle de Constitucionalidade',
    description: 'Conceitos básicos sobre controle de constitucionalidade',
    type: 'multiple_choice',
    content: 'Qual é a principal finalidade do controle de constitucionalidade no ordenamento jurídico brasileiro?',
    correctAnswer: 'Garantir a supremacia da Constituição Federal',
    explanation: 'O controle de constitucionalidade tem como objetivo principal assegurar que todas as normas e atos do poder público estejam em conformidade com a Constituição Federal, garantindo sua supremacia no ordenamento jurídico.',
    difficulty: 'easy',
    themeId: 1,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Garantir a supremacia da Constituição Federal',
      'Fiscalizar atos administrativos',
      'Julgar crimes de responsabilidade',
      'Controlar o orçamento público'
    ]),
    fgvPattern: 'Questão conceitual sobre fundamentos do controle de constitucionalidade'
  },
  {
    uniqueCode: 'EX-CTRL-006',
    title: 'Modalidades de Controle',
    description: 'Identificação das modalidades de controle',
    type: 'multiple_choice',
    content: 'Quanto ao momento de realização, o controle de constitucionalidade pode ser classificado em:',
    correctAnswer: 'Preventivo e repressivo',
    explanation: 'O controle preventivo ocorre antes da promulgação da lei (ex: veto presidencial, CCJ), enquanto o repressivo ocorre após a entrada em vigor da norma (controle judicial).',
    difficulty: 'easy',
    themeId: 1,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Preventivo e repressivo',
      'Difuso e concentrado',
      'Abstrato e concreto',
      'Judicial e administrativo'
    ]),
    fgvPattern: 'Classificação básica do controle de constitucionalidade'
  },
  {
    uniqueCode: 'EX-CTRL-007',
    title: 'Controle Político',
    description: 'Controle exercido pelo Poder Legislativo',
    type: 'multiple_choice',
    content: 'A Comissão de Constituição e Justiça (CCJ) exerce qual tipo de controle de constitucionalidade?',
    correctAnswer: 'Controle preventivo político',
    explanation: 'A CCJ realiza controle preventivo de natureza política ao analisar a constitucionalidade dos projetos de lei antes de sua aprovação final.',
    difficulty: 'easy',
    themeId: 1,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Controle preventivo político',
      'Controle repressivo judicial',
      'Controle difuso',
      'Controle concentrado'
    ]),
    fgvPattern: 'Identificação de modalidade de controle'
  },
  {
    uniqueCode: 'EX-CTRL-008',
    title: 'Veto Presidencial',
    description: 'Veto por inconstitucionalidade',
    type: 'multiple_choice',
    content: 'O veto presidencial por inconstitucionalidade é exemplo de:',
    correctAnswer: 'Controle preventivo político',
    explanation: 'O veto presidencial por inconstitucionalidade é um mecanismo de controle preventivo de natureza política, exercido pelo Chefe do Poder Executivo.',
    difficulty: 'easy',
    themeId: 1,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Controle preventivo político',
      'Controle repressivo judicial',
      'Controle concentrado',
      'Controle difuso'
    ]),
    fgvPattern: 'Classificação de mecanismo de controle'
  },
  {
    uniqueCode: 'EX-CTRL-009',
    title: 'Supremacia Constitucional',
    description: 'Fundamento do controle',
    type: 'multiple_choice',
    content: 'O princípio da supremacia da Constituição fundamenta-se na ideia de que:',
    correctAnswer: 'A Constituição é o fundamento de validade de todas as normas do ordenamento jurídico',
    explanation: 'O princípio da supremacia constitucional estabelece que a Constituição está no ápice do ordenamento jurídico, sendo fundamento de validade de todas as demais normas.',
    difficulty: 'easy',
    themeId: 1,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'A Constituição é o fundamento de validade de todas as normas do ordenamento jurídico',
      'A Constituição pode ser alterada por lei ordinária',
      'A Constituição tem a mesma hierarquia que as leis',
      'A Constituição só se aplica ao Poder Judiciário'
    ]),
    fgvPattern: 'Conceito fundamental de supremacia constitucional'
  },

  // Médios
  {
    uniqueCode: 'EX-CTRL-010',
    title: 'Legitimidade Ativa na ADI',
    description: 'Legitimados universais e especiais',
    type: 'multiple_choice',
    content: 'Sobre a legitimidade ativa para propositura de ADI, é correto afirmar que:',
    correctAnswer: 'O Governador de Estado é legitimado especial e deve demonstrar pertinência temática',
    explanation: 'Os Governadores de Estado são legitimados especiais (art. 103, V, CF), devendo demonstrar pertinência temática entre a norma impugnada e o interesse estadual.',
    difficulty: 'medium',
    themeId: 1,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'O Governador de Estado é legitimado especial e deve demonstrar pertinência temática',
      'Qualquer cidadão pode propor ADI',
      'O Prefeito Municipal é legitimado universal',
      'A Mesa da Câmara Municipal tem legitimidade ativa'
    ]),
    fgvPattern: 'Distinção entre legitimados universais e especiais'
  },
  {
    uniqueCode: 'EX-CTRL-011',
    title: 'Modulação de Efeitos',
    description: 'Técnica de decisão no controle concentrado',
    type: 'multiple_choice',
    content: 'A modulação temporal dos efeitos da decisão em controle concentrado exige:',
    correctAnswer: 'Quórum de 2/3 dos membros do STF e razões de segurança jurídica ou excepcional interesse social',
    explanation: 'Conforme art. 27 da Lei 9.868/99, a modulação exige 2/3 dos ministros e fundamentação em segurança jurídica ou excepcional interesse social.',
    difficulty: 'medium',
    themeId: 1,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Quórum de 2/3 dos membros do STF e razões de segurança jurídica ou excepcional interesse social',
      'Maioria simples e qualquer razão de conveniência',
      'Unanimidade dos ministros',
      'Não é possível modular efeitos no controle concentrado'
    ]),
    fgvPattern: 'Requisitos para modulação temporal de efeitos'
  },
  {
    uniqueCode: 'EX-CTRL-012',
    title: 'Controle Difuso e Senado Federal',
    description: 'Papel do Senado no controle difuso',
    type: 'multiple_choice',
    content: 'No controle difuso de constitucionalidade, a competência do Senado Federal para suspender a execução de lei declarada inconstitucional pelo STF é:',
    correctAnswer: 'Discricionária, podendo o Senado deixar de suspender a execução da lei',
    explanation: 'A competência do Senado (art. 52, X, CF) é discricionária, não sendo obrigado a suspender a execução da lei declarada inconstitucional pelo STF.',
    difficulty: 'medium',
    themeId: 1,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Discricionária, podendo o Senado deixar de suspender a execução da lei',
      'Vinculada, devendo obrigatoriamente suspender a execução',
      'Inexistente, pois o STF tem efeito erga omnes automaticamente',
      'Compartilhada com a Câmara dos Deputados'
    ]),
    fgvPattern: 'Natureza da competência do Senado Federal'
  },
  {
    uniqueCode: 'EX-CTRL-013',
    title: 'Inconstitucionalidade por Omissão',
    description: 'ADO e Mandado de Injunção',
    type: 'multiple_choice',
    content: 'A diferença fundamental entre ADO e Mandado de Injunção é que:',
    correctAnswer: 'A ADO tem natureza abstrata e o MI tem natureza concreta',
    explanation: 'A ADO é instrumento de controle abstrato de omissão inconstitucional, enquanto o MI é remédio constitucional concreto para viabilizar direito individual.',
    difficulty: 'medium',
    themeId: 1,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'A ADO tem natureza abstrata e o MI tem natureza concreta',
      'A ADO só pode ser proposta pelo PGR',
      'O MI não pode ser usado para omissão legislativa',
      'A ADO tem efeito inter partes'
    ]),
    fgvPattern: 'Distinção entre instrumentos de controle de omissão'
  },
  {
    uniqueCode: 'EX-CTRL-014',
    title: 'Efeitos da Decisão em ADI',
    description: 'Eficácia temporal e subjetiva',
    type: 'multiple_choice',
    content: 'Quanto aos efeitos da decisão definitiva de mérito em ADI, é correto afirmar que:',
    correctAnswer: 'Possui efeito erga omnes, vinculante e, em regra, ex tunc',
    explanation: 'A decisão em ADI tem efeito erga omnes (contra todos), vinculante (obriga todos os órgãos do Poder Judiciário e Administração) e, em regra, ex tunc (retroativo).',
    difficulty: 'medium',
    themeId: 1,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Possui efeito erga omnes, vinculante e, em regra, ex tunc',
      'Possui efeito inter partes e não vinculante',
      'Possui efeito erga omnes mas não vinculante',
      'Possui efeito apenas ex nunc'
    ]),
    fgvPattern: 'Características dos efeitos da decisão em controle concentrado'
  },

  // Difíceis
  {
    uniqueCode: 'EX-CTRL-015',
    title: 'Interpretação Conforme e Declaração Parcial',
    description: 'Técnicas de decisão',
    type: 'multiple_choice',
    content: 'Sobre as técnicas de interpretação conforme a Constituição e declaração parcial de inconstitucionalidade sem redução de texto, analise: I) Ambas preservam a literalidade do texto normativo; II) A interpretação conforme exclui sentidos inconstitucionais; III) A declaração parcial sem redução de texto declara a inconstitucionalidade de determinada aplicação da norma. Está correto:',
    correctAnswer: 'I, II e III',
    explanation: 'Todas as assertivas estão corretas. Ambas as técnicas preservam o texto legal, mas a interpretação conforme exclui sentidos inconstitucionais mantendo os constitucionais, enquanto a declaração parcial sem redução de texto declara inconstitucional determinada hipótese de aplicação.',
    difficulty: 'hard',
    themeId: 1,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'I, II e III',
      'Apenas I e II',
      'Apenas II e III',
      'Apenas I e III'
    ]),
    fgvPattern: 'Distinção entre técnicas de decisão no controle de constitucionalidade'
  },
  {
    uniqueCode: 'EX-CTRL-016',
    title: 'Controle de Emendas Constitucionais',
    description: 'Limites materiais ao poder de reforma',
    type: 'multiple_choice',
    content: 'Em relação ao controle de constitucionalidade de emendas constitucionais, é correto afirmar que:',
    correctAnswer: 'É possível o controle de emendas que violem cláusulas pétreas, limites formais ou circunstanciais',
    explanation: 'O STF admite controle de constitucionalidade de emendas constitucionais que violem cláusulas pétreas (art. 60, §4º), limites formais (procedimento) ou circunstanciais (art. 60, §1º).',
    difficulty: 'hard',
    themeId: 1,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'É possível o controle de emendas que violem cláusulas pétreas, limites formais ou circunstanciais',
      'Não é possível controlar emendas constitucionais',
      'Só é possível controlar emendas que violem direitos fundamentais',
      'O controle de emendas só pode ser feito pelo Congresso Nacional'
    ]),
    fgvPattern: 'Limites ao poder constituinte derivado reformador'
  },
  {
    uniqueCode: 'EX-CTRL-017',
    title: 'Fungibilidade entre ADI e ADC',
    description: 'Ambivalência das ações',
    type: 'multiple_choice',
    content: 'Sobre a fungibilidade entre ADI e ADC, o STF entende que:',
    correctAnswer: 'É possível a conversão de ADI em ADC e vice-versa, desde que presentes os requisitos de admissibilidade',
    explanation: 'O STF admite a fungibilidade entre ADI e ADC em razão da ambivalência dessas ações, desde que preenchidos os requisitos de admissibilidade da ação para qual se converte.',
    difficulty: 'hard',
    themeId: 1,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'É possível a conversão de ADI em ADC e vice-versa, desde que presentes os requisitos de admissibilidade',
      'Não é possível a conversão entre as ações',
      'Só é possível converter ADC em ADI',
      'A conversão depende de concordância do autor'
    ]),
    fgvPattern: 'Princípio da fungibilidade no controle concentrado'
  },
  {
    uniqueCode: 'EX-CTRL-018',
    title: 'Inconstitucionalidade Progressiva',
    description: 'Situações ainda constitucionais',
    type: 'multiple_choice',
    content: 'A técnica da declaração de inconstitucionalidade progressiva ou "ainda constitucional" caracteriza-se por:',
    correctAnswer: 'Reconhecer que a norma caminha para a inconstitucionalidade, mas ainda não o é no momento da decisão',
    explanation: 'A inconstitucionalidade progressiva reconhece que, embora a norma ainda seja constitucional no momento do julgamento, ela caminha para a inconstitucionalidade devido à evolução social e jurídica.',
    difficulty: 'hard',
    themeId: 1,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Reconhecer que a norma caminha para a inconstitucionalidade, mas ainda não o é no momento da decisão',
      'Declarar a inconstitucionalidade parcial da norma',
      'Modular os efeitos da decisão para o futuro',
      'Declarar a inconstitucionalidade com efeitos ex nunc'
    ]),
    fgvPattern: 'Técnica de decisão em controle de constitucionalidade'
  },
  {
    uniqueCode: 'EX-CTRL-019',
    title: 'Controle de Constitucionalidade Estadual',
    description: 'Representação de inconstitucionalidade estadual',
    type: 'multiple_choice',
    content: 'Sobre o controle de constitucionalidade de leis estaduais e municipais em face da Constituição Estadual, é correto afirmar que:',
    correctAnswer: 'Compete ao Tribunal de Justiça processar e julgar, sendo legitimados aqueles previstos na Constituição Estadual',
    explanation: 'O controle concentrado estadual é de competência do TJ (art. 125, §2º, CF), cabendo à Constituição Estadual definir os legitimados, observando simetria com o modelo federal.',
    difficulty: 'hard',
    themeId: 1,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Compete ao Tribunal de Justiça processar e julgar, sendo legitimados aqueles previstos na Constituição Estadual',
      'Compete ao STF julgar todas as ações de inconstitucionalidade',
      'Não existe controle concentrado no âmbito estadual',
      'Os legitimados são os mesmos da ADI federal'
    ]),
    fgvPattern: 'Controle de constitucionalidade no âmbito estadual'
  },

  // ===== DIREITOS FUNDAMENTAIS (5 Fácil, 5 Médio, 5 Difícil) =====
  // Fáceis
  {
    uniqueCode: 'EX-DIR-004',
    title: 'Características dos Direitos Fundamentais',
    description: 'Atributos essenciais',
    type: 'multiple_choice',
    content: 'São características dos direitos fundamentais:',
    correctAnswer: 'Historicidade, universalidade, inalienabilidade e imprescritibilidade',
    explanation: 'Os direitos fundamentais são históricos (surgem e evoluem no tempo), universais (para todos), inalienáveis (não podem ser transferidos) e imprescritíveis (não se perdem pelo não uso).',
    difficulty: 'easy',
    themeId: 2,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Historicidade, universalidade, inalienabilidade e imprescritibilidade',
      'Relatividade, temporariedade e alienabilidade',
      'Absolutismo e imutabilidade',
      'Exclusividade e prescritibilidade'
    ]),
    fgvPattern: 'Características fundamentais dos direitos'
  },
  {
    uniqueCode: 'EX-DIR-005',
    title: 'Direitos de Primeira Geração',
    description: 'Direitos civis e políticos',
    type: 'multiple_choice',
    content: 'Os direitos fundamentais de primeira geração (ou dimensão) correspondem aos direitos:',
    correctAnswer: 'Civis e políticos, que exigem abstenção do Estado',
    explanation: 'Os direitos de primeira geração são os direitos civis e políticos, caracterizados por exigirem uma abstenção estatal (liberdades negativas).',
    difficulty: 'easy',
    themeId: 2,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Civis e políticos, que exigem abstenção do Estado',
      'Sociais, econômicos e culturais',
      'Difusos e coletivos',
      'Ambientais e tecnológicos'
    ]),
    fgvPattern: 'Classificação geracional dos direitos fundamentais'
  },
  {
    uniqueCode: 'EX-DIR-006',
    title: 'Aplicabilidade Imediata',
    description: 'Art. 5º, §1º da CF',
    type: 'multiple_choice',
    content: 'Segundo o art. 5º, §1º da Constituição Federal, as normas definidoras de direitos e garantias fundamentais têm aplicação:',
    correctAnswer: 'Imediata',
    explanation: 'O art. 5º, §1º estabelece que as normas definidoras de direitos e garantias fundamentais têm aplicação imediata, dispensando, em regra, regulamentação.',
    difficulty: 'easy',
    themeId: 2,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Imediata',
      'Mediata',
      'Diferida',
      'Condicionada à regulamentação'
    ]),
    fgvPattern: 'Aplicabilidade das normas de direitos fundamentais'
  },
  {
    uniqueCode: 'EX-DIR-007',
    title: 'Direito à Vida',
    description: 'Direito fundamental primário',
    type: 'multiple_choice',
    content: 'O direito à vida, previsto no art. 5º, caput, da CF, é considerado:',
    correctAnswer: 'Direito fundamental primário e pressuposto dos demais direitos',
    explanation: 'O direito à vida é o mais fundamental de todos os direitos, sendo pressuposto para o exercício de todos os demais direitos fundamentais.',
    difficulty: 'easy',
    themeId: 2,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Direito fundamental primário e pressuposto dos demais direitos',
      'Direito relativo que pode ser restringido livremente',
      'Direito absoluto sem qualquer exceção',
      'Direito de segunda geração'
    ]),
    fgvPattern: 'Natureza do direito à vida'
  },
  {
    uniqueCode: 'EX-DIR-008',
    title: 'Princípio da Igualdade',
    description: 'Igualdade formal e material',
    type: 'multiple_choice',
    content: 'O princípio da igualdade, previsto no caput do art. 5º da CF, determina que:',
    correctAnswer: 'Deve-se tratar igualmente os iguais e desigualmente os desiguais na medida de suas desigualdades',
    explanation: 'O princípio da igualdade (isonomia) exige tratamento igual para situações iguais e tratamento desigual para situações desiguais, na medida de suas desigualdades.',
    difficulty: 'easy',
    themeId: 2,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Deve-se tratar igualmente os iguais e desigualmente os desiguais na medida de suas desigualdades',
      'Todos devem ser tratados de forma absolutamente igual',
      'Não são permitidas distinções em nenhuma hipótese',
      'A igualdade é apenas formal, não material'
    ]),
    fgvPattern: 'Conceito de igualdade material'
  },

  // Médios
  {
    uniqueCode: 'EX-DIR-009',
    title: 'Eficácia Horizontal dos Direitos Fundamentais',
    description: 'Aplicação nas relações privadas',
    type: 'multiple_choice',
    content: 'A eficácia horizontal dos direitos fundamentais significa que:',
    correctAnswer: 'Os direitos fundamentais aplicam-se também às relações entre particulares',
    explanation: 'A eficácia horizontal (ou privada) dos direitos fundamentais reconhece sua aplicação nas relações entre particulares, não apenas nas relações Estado-indivíduo.',
    difficulty: 'medium',
    themeId: 2,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Os direitos fundamentais aplicam-se também às relações entre particulares',
      'Os direitos fundamentais só se aplicam nas relações verticais (Estado-indivíduo)',
      'Os direitos fundamentais não se aplicam ao setor privado',
      'Os direitos fundamentais têm aplicação apenas internacional'
    ]),
    fgvPattern: 'Eficácia dos direitos fundamentais nas relações privadas'
  },
  {
    uniqueCode: 'EX-DIR-010',
    title: 'Reserva Legal Qualificada',
    description: 'Restrições a direitos fundamentais',
    type: 'multiple_choice',
    content: 'A reserva legal qualificada para restrição de direitos fundamentais exige que:',
    correctAnswer: 'A lei estabeleça não apenas a restrição, mas também seus limites e finalidades',
    explanation: 'A reserva legal qualificada não se satisfaz com qualquer lei, exigindo que a norma estabeleça os contornos, limites e finalidades da restrição ao direito fundamental.',
    difficulty: 'medium',
    themeId: 2,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'A lei estabeleça não apenas a restrição, mas também seus limites e finalidades',
      'Qualquer lei possa restringir direitos fundamentais',
      'Apenas emenda constitucional possa restringir direitos',
      'Não é possível restringir direitos fundamentais'
    ]),
    fgvPattern: 'Limites à restrição de direitos fundamentais'
  },
  {
    uniqueCode: 'EX-DIR-011',
    title: 'Direito de Reunião',
    description: 'Requisitos constitucionais',
    type: 'multiple_choice',
    content: 'Sobre o direito de reunião (art. 16, XVI, CF), é correto afirmar que:',
    correctAnswer: 'Exige prévia comunicação à autoridade competente e que seja pacífica e sem armas',
    explanation: 'O direito de reunião exige: prévia comunicação à autoridade, caráter pacífico, ausência de armas e não frustração de outra reunião previamente convocada para o mesmo local.',
    difficulty: 'medium',
    themeId: 2,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Exige prévia comunicação à autoridade competente e que seja pacífica e sem armas',
      'Exige prévia autorização judicial',
      'Pode ser realizada com armas para defesa',
      'Não exige qualquer comunicação prévia'
    ]),
    fgvPattern: 'Requisitos para exercício do direito de reunião'
  },
  {
    uniqueCode: 'EX-DIR-012',
    title: 'Inviolabilidade Domiciliar',
    description: 'Exceções constitucionais',
    type: 'multiple_choice',
    content: 'A inviolabilidade domiciliar pode ser excepcionada nas seguintes hipóteses:',
    correctAnswer: 'Flagrante delito, desastre, prestação de socorro, ou durante o dia com determinação judicial',
    explanation: 'O art. 5º, XI, CF permite ingresso no domicílio sem consentimento em caso de flagrante delito, desastre, prestação de socorro (a qualquer hora) ou durante o dia por determinação judicial.',
    difficulty: 'medium',
    themeId: 2,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Flagrante delito, desastre, prestação de socorro, ou durante o dia com determinação judicial',
      'Apenas com mandado judicial, independente do horário',
      'Sempre que houver suspeita de crime',
      'Apenas em caso de guerra declarada'
    ]),
    fgvPattern: 'Exceções à inviolabilidade domiciliar'
  },
  {
    uniqueCode: 'EX-DIR-013',
    title: 'Liberdade de Expressão e seus Limites',
    description: 'Restrições constitucionais',
    type: 'multiple_choice',
    content: 'A liberdade de expressão encontra limites constitucionais em:',
    correctAnswer: 'Direito de resposta, indenização por dano material, moral ou à imagem, e vedação ao anonimato',
    explanation: 'A CF estabelece limites à liberdade de expressão: vedação ao anonimato (art. 5º, IV), direito de resposta (art. 5º, V) e indenização por danos (art. 5º, V e X).',
    difficulty: 'medium',
    themeId: 2,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Direito de resposta, indenização por dano material, moral ou à imagem, e vedação ao anonimato',
      'Não há limites à liberdade de expressão',
      'Apenas a censura prévia é vedada',
      'Somente crimes contra a honra limitam a liberdade de expressão'
    ]),
    fgvPattern: 'Limites constitucionais à liberdade de expressão'
  },

  // Difíceis
  {
    uniqueCode: 'EX-DIR-014',
    title: 'Teoria dos Limites dos Limites',
    description: 'Restrições às restrições de direitos',
    type: 'multiple_choice',
    content: 'A teoria dos limites dos limites (Schranken-Schranken) estabelece que:',
    correctAnswer: 'As restrições a direitos fundamentais devem respeitar o núcleo essencial, proporcionalidade e reserva legal',
    explanation: 'A teoria dos limites dos limites estabelece que as restrições a direitos fundamentais encontram limites no núcleo essencial do direito, no princípio da proporcionalidade e na reserva legal.',
    difficulty: 'hard',
    themeId: 2,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'As restrições a direitos fundamentais devem respeitar o núcleo essencial, proporcionalidade e reserva legal',
      'Não há limites para as restrições de direitos fundamentais',
      'Apenas o Poder Judiciário pode limitar direitos fundamentais',
      'Os limites são absolutos e imutáveis'
    ]),
    fgvPattern: 'Limites às restrições de direitos fundamentais'
  },
  {
    uniqueCode: 'EX-DIR-015',
    title: 'Colisão de Direitos Fundamentais',
    description: 'Técnicas de solução',
    type: 'multiple_choice',
    content: 'Na colisão entre direitos fundamentais, o método da ponderação (balancing) exige:',
    correctAnswer: 'Análise do caso concreto, aplicação da proporcionalidade e concordância prática entre os direitos',
    explanation: 'A ponderação de direitos fundamentais exige análise do caso concreto, aplicação do princípio da proporcionalidade e busca da concordância prática (harmonização) entre os direitos colidentes.',
    difficulty: 'hard',
    themeId: 2,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Análise do caso concreto, aplicação da proporcionalidade e concordância prática entre os direitos',
      'Prevalência automática do direito à vida sobre os demais',
      'Hierarquia absoluta entre direitos fundamentais',
      'Sacrifício total de um direito em favor do outro'
    ]),
    fgvPattern: 'Solução de colisão entre direitos fundamentais'
  },
  {
    uniqueCode: 'EX-DIR-016',
    title: 'Direitos Fundamentais e Cláusulas Pétreas',
    description: 'Proteção reforçada',
    type: 'multiple_choice',
    content: 'Sobre a relação entre direitos fundamentais e cláusulas pétreas, é correto afirmar que:',
    correctAnswer: 'Nem todos os direitos fundamentais são cláusulas pétreas, mas todos os direitos e garantias individuais do art. 5º o são',
    explanation: 'O art. 60, §4º, IV, CF protege como cláusula pétrea os "direitos e garantias individuais", que não se limitam ao art. 5º, mas não abrangem todos os direitos fundamentais (ex: direitos sociais não são cláusulas pétreas em si).',
    difficulty: 'hard',
    themeId: 2,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Nem todos os direitos fundamentais são cláusulas pétreas, mas todos os direitos e garantias individuais do art. 5º o são',
      'Todos os direitos fundamentais são cláusulas pétreas',
      'Nenhum direito fundamental é cláusula pétrea',
      'Apenas o direito à vida é cláusula pétrea'
    ]),
    fgvPattern: 'Relação entre direitos fundamentais e limites ao poder de reforma'
  },
  {
    uniqueCode: 'EX-DIR-017',
    title: 'Proibição de Retrocesso Social',
    description: 'Efeito cliquet',
    type: 'multiple_choice',
    content: 'O princípio da proibição de retrocesso social (efeito cliquet) em matéria de direitos sociais significa que:',
    correctAnswer: 'O legislador não pode suprimir ou reduzir significativamente direitos sociais já concretizados sem justificativa constitucional',
    explanation: 'A proibição de retrocesso impede que o legislador suprima ou reduza significativamente direitos sociais já implementados, salvo justificativa constitucional adequada e proporcional.',
    difficulty: 'hard',
    themeId: 2,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'O legislador não pode suprimir ou reduzir significativamente direitos sociais já concretizados sem justificativa constitucional',
      'Os direitos sociais nunca podem ser alterados',
      'O legislador tem liberdade absoluta para revogar direitos sociais',
      'Apenas emenda constitucional pode alterar direitos sociais'
    ]),
    fgvPattern: 'Proteção aos direitos sociais contra retrocesso'
  },
  {
    uniqueCode: 'EX-DIR-018',
    title: 'Direitos Fundamentais e Estado de Exceção',
    description: 'Núcleo intangível',
    type: 'multiple_choice',
    content: 'Durante o estado de defesa e o estado de sítio, a Constituição Federal:',
    correctAnswer: 'Permite restrição de certos direitos fundamentais, mas veda a suspensão de direitos como vida, integridade e devido processo legal',
    explanation: 'Mesmo nos estados de exceção (defesa e sítio), há um núcleo intangível de direitos fundamentais que não podem ser suspensos, como direito à vida, integridade física e devido processo legal (art. 136, §3º e 139, parágrafo único, CF).',
    difficulty: 'hard',
    themeId: 2,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Permite restrição de certos direitos fundamentais, mas veda a suspensão de direitos como vida, integridade e devido processo legal',
      'Permite suspensão de todos os direitos fundamentais',
      'Não permite qualquer restrição a direitos fundamentais',
      'Apenas o direito à vida é protegido'
    ]),
    fgvPattern: 'Limites aos estados de exceção'
  },

  // ===== AÇÕES CONSTITUCIONAIS (5 Fácil, 5 Médio, 5 Difícil) =====
  // Fáceis
  {
    uniqueCode: 'EX-ACO-004',
    title: 'Habeas Corpus - Natureza',
    description: 'Remédio constitucional',
    type: 'multiple_choice',
    content: 'O habeas corpus é ação constitucional destinada a proteger:',
    correctAnswer: 'O direito de locomoção contra ilegalidade ou abuso de poder',
    explanation: 'O HC (art. 5º, LXVIII, CF) protege o direito de ir, vir e permanecer (liberdade de locomoção) contra ilegalidade ou abuso de poder.',
    difficulty: 'easy',
    themeId: 3,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'O direito de locomoção contra ilegalidade ou abuso de poder',
      'Qualquer direito líquido e certo',
      'Direitos difusos e coletivos',
      'Apenas a liberdade de expressão'
    ]),
    fgvPattern: 'Objeto do habeas corpus'
  },
  {
    uniqueCode: 'EX-ACO-005',
    title: 'Mandado de Segurança - Requisitos',
    description: 'Direito líquido e certo',
    type: 'multiple_choice',
    content: 'Para a impetração de mandado de segurança, é necessário:',
    correctAnswer: 'Direito líquido e certo, ato de autoridade e ilegalidade ou abuso de poder',
    explanation: 'O MS (art. 5º, LXIX, CF) exige: direito líquido e certo (comprovável de plano), ato de autoridade pública ou agente de pessoa jurídica no exercício de atribuições públicas, e ilegalidade ou abuso de poder.',
    difficulty: 'easy',
    themeId: 3,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Direito líquido e certo, ato de autoridade e ilegalidade ou abuso de poder',
      'Apenas lesão a direito',
      'Prova testemunhal do direito',
      'Decisão judicial transitada em julgado'
    ]),
    fgvPattern: 'Requisitos do mandado de segurança'
  },
  {
    uniqueCode: 'EX-ACO-006',
    title: 'Mandado de Injunção - Finalidade',
    description: 'Suprimento de omissão',
    type: 'multiple_choice',
    content: 'O mandado de injunção tem por finalidade:',
    correctAnswer: 'Viabilizar o exercício de direito constitucional inviabilizado por falta de norma regulamentadora',
    explanation: 'O MI (art. 5º, LXXI, CF) visa suprir omissão legislativa que inviabilize o exercício de direitos e liberdades constitucionais e prerrogativas inerentes à nacionalidade, soberania e cidadania.',
    difficulty: 'easy',
    themeId: 3,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Viabilizar o exercício de direito constitucional inviabilizado por falta de norma regulamentadora',
      'Proteger o direito de locomoção',
      'Anular ato administrativo ilegal',
      'Obter informações de órgãos públicos'
    ]),
    fgvPattern: 'Objeto do mandado de injunção'
  },
  {
    uniqueCode: 'EX-ACO-007',
    title: 'Habeas Data - Objeto',
    description: 'Acesso e retificação de dados',
    type: 'multiple_choice',
    content: 'O habeas data é cabível para:',
    correctAnswer: 'Conhecer e retificar informações pessoais constantes de registros públicos',
    explanation: 'O HD (art. 5º, LXXII, CF) serve para: a) conhecer informações relativas à pessoa do impetrante; b) retificar dados; c) anotar justificação ou explicação sobre dado verdadeiro mas justificável.',
    difficulty: 'easy',
    themeId: 3,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Conhecer e retificar informações pessoais constantes de registros públicos',
      'Proteger qualquer dado, inclusive de terceiros',
      'Obter certidões em repartições públicas',
      'Anular ato administrativo'
    ]),
    fgvPattern: 'Finalidades do habeas data'
  },
  {
    uniqueCode: 'EX-ACO-008',
    title: 'Ação Popular - Legitimidade',
    description: 'Legitimação ativa',
    type: 'multiple_choice',
    content: 'A ação popular pode ser proposta por:',
    correctAnswer: 'Qualquer cidadão no gozo dos direitos políticos',
    explanation: 'A ação popular (art. 5º, LXXIII, CF) pode ser proposta por qualquer cidadão (brasileiro nato ou naturalizado) no pleno gozo dos direitos políticos.',
    difficulty: 'easy',
    themeId: 3,
    maxPoints: '1.00',
    estimatedTime: 3,
    options: JSON.stringify([
      'Qualquer cidadão no gozo dos direitos políticos',
      'Apenas o Ministério Público',
      'Qualquer pessoa, inclusive estrangeiros',
      'Apenas associações legalmente constituídas'
    ]),
    fgvPattern: 'Legitimidade ativa da ação popular'
  },

  // Médios
  {
    uniqueCode: 'EX-ACO-009',
    title: 'Mandado de Segurança Coletivo',
    description: 'Legitimados e objeto',
    type: 'multiple_choice',
    content: 'O mandado de segurança coletivo pode ser impetrado por:',
    correctAnswer: 'Partido político com representação no Congresso, organização sindical, entidade de classe ou associação constituída há pelo menos um ano',
    explanation: 'O MS coletivo (art. 5º, LXX, CF) pode ser impetrado por: a) partido político com representação no Congresso; b) organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano.',
    difficulty: 'medium',
    themeId: 3,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Partido político com representação no Congresso, organização sindical, entidade de classe ou associação constituída há pelo menos um ano',
      'Qualquer cidadão',
      'Apenas o Ministério Público',
      'Defensoria Pública e OAB'
    ]),
    fgvPattern: 'Legitimados para MS coletivo'
  },
  {
    uniqueCode: 'EX-ACO-010',
    title: 'Habeas Corpus Preventivo e Repressivo',
    description: 'Modalidades de HC',
    type: 'multiple_choice',
    content: 'A diferença entre habeas corpus preventivo e repressivo é que:',
    correctAnswer: 'O preventivo é impetrado quando há ameaça à liberdade, e o repressivo quando já há violação consumada',
    explanation: 'O HC preventivo (salvo-conduto) é cabível quando há ameaça à liberdade de locomoção. O HC repressivo (liberatório) é cabível quando já há violação consumada à liberdade.',
    difficulty: 'medium',
    themeId: 3,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'O preventivo é impetrado quando há ameaça à liberdade, e o repressivo quando já há violação consumada',
      'O preventivo só pode ser impetrado antes do processo, e o repressivo durante',
      'Não há diferença entre eles',
      'O preventivo é mais amplo que o repressivo'
    ]),
    fgvPattern: 'Distinção entre modalidades de HC'
  },
  {
    uniqueCode: 'EX-ACO-011',
    title: 'Mandado de Segurança contra Ato Judicial',
    description: 'Cabimento e limites',
    type: 'multiple_choice',
    content: 'O mandado de segurança contra ato judicial:',
    correctAnswer: 'É cabível quando não couber recurso com efeito suspensivo e desde que não se trate de decisão transitada em julgado',
    explanation: 'O MS contra ato judicial é subsidiário (só cabe se não houver recurso com efeito suspensivo) e não cabe contra decisão transitada em julgado (art. 5º, §3º, Lei 12.016/09).',
    difficulty: 'medium',
    themeId: 3,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'É cabível quando não couber recurso com efeito suspensivo e desde que não se trate de decisão transitada em julgado',
      'Nunca é cabível contra ato judicial',
      'Sempre é cabível, independente de recurso',
      'Só é cabível contra decisões de primeira instância'
    ]),
    fgvPattern: 'Limites do MS contra ato judicial'
  },
  {
    uniqueCode: 'EX-ACO-012',
    title: 'Ação Popular - Objeto',
    description: 'Atos anuláveis',
    type: 'multiple_choice',
    content: 'A ação popular visa anular ato lesivo ao:',
    correctAnswer: 'Patrimônio público, moralidade administrativa, meio ambiente e patrimônio histórico e cultural',
    explanation: 'A ação popular (art. 5º, LXXIII, CF) visa anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural.',
    difficulty: 'medium',
    themeId: 3,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      'Patrimônio público, moralidade administrativa, meio ambiente e patrimônio histórico e cultural',
      'Apenas ao patrimônio público material',
      'Apenas à moralidade administrativa',
      'Qualquer interesse difuso ou coletivo'
    ]),
    fgvPattern: 'Objeto da ação popular'
  },
  {
    uniqueCode: 'EX-ACO-013',
    title: 'Prazo Decadencial do Mandado de Segurança',
    description: 'Prazo de 120 dias',
    type: 'multiple_choice',
    content: 'O prazo para impetração de mandado de segurança é de:',
    correctAnswer: '120 dias, contados da ciência do ato impugnado, sendo prazo decadencial',
    explanation: 'O prazo para impetrar MS é de 120 dias (art. 23, Lei 12.016/09), contados da ciência do ato, sendo prazo decadencial (não se suspende nem se interrompe).',
    difficulty: 'medium',
    themeId: 3,
    maxPoints: '1.50',
    estimatedTime: 5,
    options: JSON.stringify([
      '120 dias, contados da ciência do ato impugnado, sendo prazo decadencial',
      '5 anos, sendo prazo prescricional',
      '30 dias, sendo prazo decadencial',
      'Não há prazo para impetração'
    ]),
    fgvPattern: 'Prazo decadencial do MS'
  },

  // Difíceis
  {
    uniqueCode: 'EX-ACO-014',
    title: 'Mandado de Injunção - Posições Concretistas',
    description: 'Evolução jurisprudencial',
    type: 'multiple_choice',
    content: 'Sobre as posições do STF quanto aos efeitos da decisão em mandado de injunção, a posição concretista geral significa que:',
    correctAnswer: 'O Tribunal supre a omissão legislativa com efeitos erga omnes, regulamentando provisoriamente o direito',
    explanation: 'Na posição concretista geral, o STF supre a omissão com efeitos erga omnes (para todos), regulamentando provisoriamente o direito até que sobrevenha lei. Diferencia-se da concretista individual (efeitos apenas para o impetrante).',
    difficulty: 'hard',
    themeId: 3,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'O Tribunal supre a omissão legislativa com efeitos erga omnes, regulamentando provisoriamente o direito',
      'O Tribunal apenas declara a mora legislativa sem efeitos concretos',
      'O Tribunal concede o direito apenas ao impetrante',
      'O Tribunal obriga o Congresso a legislar em prazo determinado'
    ]),
    fgvPattern: 'Efeitos da decisão em mandado de injunção'
  },
  {
    uniqueCode: 'EX-ACO-015',
    title: 'Habeas Data - Condição de Procedibilidade',
    description: 'Prévio requerimento administrativo',
    type: 'multiple_choice',
    content: 'Para a propositura de habeas data, a jurisprudência do STF exige:',
    correctAnswer: 'Prévio requerimento administrativo negado, recusado ou não respondido em prazo razoável',
    explanation: 'O STF entende que o HD exige prévio requerimento administrativo como condição de procedibilidade, devendo haver negativa, recusa ou ausência de resposta em prazo razoável.',
    difficulty: 'hard',
    themeId: 3,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Prévio requerimento administrativo negado, recusado ou não respondido em prazo razoável',
      'Não há necessidade de prévio requerimento',
      'Apenas esgotamento de todas as vias administrativas',
      'Prévio ajuizamento de ação ordinária'
    ]),
    fgvPattern: 'Condição de procedibilidade do habeas data'
  },
  {
    uniqueCode: 'EX-ACO-016',
    title: 'Mandado de Segurança - Súmula 266 STF',
    description: 'MS contra lei em tese',
    type: 'multiple_choice',
    content: 'Segundo a Súmula 266 do STF, não cabe mandado de segurança contra:',
    correctAnswer: 'Lei em tese, sendo necessário ato concreto de aplicação',
    explanation: 'A Súmula 266 do STF estabelece que não cabe MS contra lei em tese (abstrata), sendo necessário ato concreto de aplicação da lei que viole direito líquido e certo.',
    difficulty: 'hard',
    themeId: 3,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Lei em tese, sendo necessário ato concreto de aplicação',
      'Ato de autoridade pública',
      'Decisão judicial com trânsito em julgado',
      'Ato do Presidente da República'
    ]),
    fgvPattern: 'Limites objetivos do mandado de segurança'
  },
  {
    uniqueCode: 'EX-ACO-017',
    title: 'Ação Popular - Coisa Julgada',
    description: 'Efeitos da sentença',
    type: 'multiple_choice',
    content: 'Na ação popular, a sentença de improcedência por insuficiência de provas:',
    correctAnswer: 'Não faz coisa julgada material, podendo qualquer cidadão propor nova ação com outros fundamentos',
    explanation: 'Na ação popular, a sentença de improcedência por insuficiência de provas não faz coisa julgada material (art. 18, Lei 4.717/65), permitindo que qualquer cidadão proponha nova ação com novos elementos.',
    difficulty: 'hard',
    themeId: 3,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'Não faz coisa julgada material, podendo qualquer cidadão propor nova ação com outros fundamentos',
      'Faz coisa julgada material, impedindo nova ação',
      'Só permite nova ação pelo mesmo autor',
      'Impede qualquer nova discussão sobre o tema'
    ]),
    fgvPattern: 'Regime de coisa julgada na ação popular'
  },
  {
    uniqueCode: 'EX-ACO-018',
    title: 'Habeas Corpus - Writ e Ordem',
    description: 'Decisões em HC',
    type: 'multiple_choice',
    content: 'No habeas corpus, a diferença entre concessão da ordem e concessão do writ é que:',
    correctAnswer: 'A concessão do writ é o julgamento procedente do HC, enquanto a concessão da ordem é a efetiva liberação ou proteção da liberdade',
    explanation: 'O writ é a ação de HC em si (julgada procedente ou improcedente). A ordem é o comando de liberação ou proteção da liberdade. Pode-se conceder o writ sem conceder a ordem (ex: se o paciente já foi solto).',
    difficulty: 'hard',
    themeId: 3,
    maxPoints: '2.00',
    estimatedTime: 7,
    options: JSON.stringify([
      'A concessão do writ é o julgamento procedente do HC, enquanto a concessão da ordem é a efetiva liberação ou proteção da liberdade',
      'Não há diferença entre writ e ordem',
      'O writ é preventivo e a ordem é repressiva',
      'O writ é para civis e a ordem para militares'
    ]),
    fgvPattern: 'Distinção entre writ e ordem no HC'
  },
];

console.log('🎯 Iniciando população expandida de exercícios...');
console.log(`📝 Total de novos exercícios a inserir: ${newExercises.length}`);

try {
  for (const exercise of newExercises) {
    await db.insert(exercises).values(exercise);
    console.log(`  ✓ ${exercise.uniqueCode} - ${exercise.title}`);
  }
  
  console.log('\n✅ População expandida de exercícios concluída com sucesso!');
  console.log(`📊 Resumo:`);
  console.log(`   - ${newExercises.length} novos exercícios inseridos`);
  console.log(`   - Cobertura expandida dos temas: Controle de Constitucionalidade, Direitos Fundamentais e Ações Constitucionais`);
  console.log(`   - Distribuição: 5 exercícios por tema em cada nível (Fácil, Médio, Difícil)`);
  console.log(`   - Todos alinhados ao conteúdo programático da FGV`);
} catch (error) {
  console.error('❌ Erro ao popular exercícios:', error);
  process.exit(1);
}

process.exit(0);
