import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './drizzle/schema.js';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection, { schema, mode: 'default' });

console.log('🎯 Iniciando população de exercícios...\n');

// Buscar IDs dos temas
const themes = await db.select().from(schema.themes);
const themeMap = {};
themes.forEach(theme => {
  themeMap[theme.slug] = theme.id;
});

console.log('📝 Inserindo exercícios de múltipla escolha...\n');

const exercises = [
  // ===== CONTROLE DE CONSTITUCIONALIDADE =====
  {
    uniqueCode: 'EX-CTRL-001',
    title: 'Controle Difuso de Constitucionalidade',
    description: 'Questão sobre características do controle difuso',
    type: 'multiple_choice',
    content: `Sobre o controle difuso de constitucionalidade, assinale a alternativa CORRETA:`,
    options: JSON.stringify([
      'É exercido exclusivamente pelo Supremo Tribunal Federal',
      'Pode ser exercido por qualquer juiz ou tribunal, de forma incidental',
      'Produz efeitos erga omnes automaticamente',
      'Dispensa a cláusula de reserva de plenário'
    ]),
    correctAnswer: 'Pode ser exercido por qualquer juiz ou tribunal, de forma incidental',
    explanation: `O controle difuso é exercido por qualquer órgão do Poder Judiciário, de forma incidental (via de exceção), produzindo efeitos inter partes. A cláusula de reserva de plenário (art. 97, CF) é obrigatória quando órgão colegiado declarar inconstitucionalidade.`,
    difficulty: 'easy',
    themeId: themeMap['controle-constitucionalidade'],
    maxPoints: '1.00',
    estimatedTime: 3,
    fgvPattern: 'Questão típica da FGV sobre distinção entre controle difuso e concentrado'
  },
  {
    uniqueCode: 'EX-CTRL-002',
    title: 'Ação Direta de Inconstitucionalidade - Legitimidade',
    description: 'Questão sobre legitimados para propor ADI',
    type: 'multiple_choice',
    content: `De acordo com a Constituição Federal, NÃO possui legitimidade para propor Ação Direta de Inconstitucionalidade:`,
    options: JSON.stringify([
      'Governador de Estado',
      'Mesa de Assembleia Legislativa',
      'Prefeito Municipal',
      'Conselho Federal da Ordem dos Advogados do Brasil'
    ]),
    correctAnswer: 'Prefeito Municipal',
    explanation: `O art. 103 da CF/88 estabelece o rol taxativo de legitimados para ADI. O Prefeito Municipal NÃO está incluído neste rol. São legitimados: Presidente da República, Mesa do Senado, Mesa da Câmara, Mesa de Assembleia Legislativa, Governador de Estado, Procurador-Geral da República, Conselho Federal da OAB, partido político com representação no Congresso Nacional e confederação sindical ou entidade de classe de âmbito nacional.`,
    difficulty: 'medium',
    themeId: themeMap['controle-constitucionalidade'],
    maxPoints: '1.50',
    estimatedTime: 4,
    fgvPattern: 'FGV cobra frequentemente legitimidade ativa para controle concentrado'
  },
  {
    uniqueCode: 'EX-CTRL-003',
    title: 'Cláusula de Reserva de Plenário',
    description: 'Aplicação do art. 97 da CF/88',
    type: 'multiple_choice',
    content: `A cláusula de reserva de plenário, prevista no art. 97 da Constituição Federal, estabelece que:`,
    options: JSON.stringify([
      'Somente o plenário do STF pode declarar a inconstitucionalidade de lei',
      'Os tribunais só podem declarar a inconstitucionalidade de lei ou ato normativo pelo voto da maioria absoluta de seus membros ou do respectivo órgão especial',
      'A declaração de inconstitucionalidade depende sempre de manifestação do Senado Federal',
      'Juízes de primeiro grau não podem afastar a aplicação de lei inconstitucional'
    ]),
    correctAnswer: 'Os tribunais só podem declarar a inconstitucionalidade de lei ou ato normativo pelo voto da maioria absoluta de seus membros ou do respectivo órgão especial',
    explanation: `O art. 97 da CF/88 estabelece que "somente pelo voto da maioria absoluta de seus membros ou dos membros do respectivo órgão especial poderão os tribunais declarar a inconstitucionalidade de lei ou ato normativo do Poder Público". Esta é a cláusula de reserva de plenário, que visa garantir segurança jurídica nas decisões sobre constitucionalidade. A Súmula Vinculante 10 reforça esta regra.`,
    difficulty: 'medium',
    themeId: themeMap['controle-constitucionalidade'],
    maxPoints: '1.50',
    estimatedTime: 4,
    fgvPattern: 'Tema recorrente em provas da FGV, especialmente quanto à aplicação da SV 10'
  },
  {
    uniqueCode: 'EX-CTRL-004',
    title: 'ADPF - Subsidiariedade',
    description: 'Princípio da subsidiariedade na ADPF',
    type: 'multiple_choice',
    content: `Sobre a Arguição de Descumprimento de Preceito Fundamental (ADPF), é CORRETO afirmar que:`,
    options: JSON.stringify([
      'Pode ser proposta mesmo havendo outro meio eficaz de sanar a lesividade',
      'Tem caráter subsidiário, só cabendo quando não houver outro meio eficaz',
      'Somente pode ser utilizada para questionar leis federais',
      'Não admite medida cautelar'
    ]),
    correctAnswer: 'Tem caráter subsidiário, só cabendo quando não houver outro meio eficaz',
    explanation: `A ADPF possui caráter subsidiário, conforme art. 4º, §1º da Lei 9.882/99: "Não será admitida ADPF quando houver qualquer outro meio eficaz de sanar a lesividade". Este princípio visa evitar a banalização do controle concentrado e preservar a competência dos demais órgãos jurisdicionais.`,
    difficulty: 'hard',
    themeId: themeMap['controle-constitucionalidade'],
    maxPoints: '2.00',
    estimatedTime: 5,
    fgvPattern: 'FGV explora o caráter subsidiário da ADPF e sua distinção das demais ações'
  },

  // ===== DIREITOS FUNDAMENTAIS =====
  {
    uniqueCode: 'EX-DIR-001',
    title: 'Gerações de Direitos Fundamentais',
    description: 'Classificação dos direitos fundamentais',
    type: 'multiple_choice',
    content: `Os direitos sociais, como saúde, educação e trabalho, são classificados como direitos fundamentais de:`,
    options: JSON.stringify([
      'Primeira geração (dimensão)',
      'Segunda geração (dimensão)',
      'Terceira geração (dimensão)',
      'Quarta geração (dimensão)'
    ]),
    correctAnswer: 'Segunda geração (dimensão)',
    explanation: `Os direitos fundamentais são classificados em gerações (ou dimensões): 1ª geração - direitos civis e políticos (liberdade); 2ª geração - direitos sociais, econômicos e culturais (igualdade); 3ª geração - direitos de solidariedade (fraternidade), como meio ambiente e paz; 4ª geração - direitos relacionados à democracia, informação e pluralismo.`,
    difficulty: 'easy',
    themeId: themeMap['direitos-fundamentais'],
    maxPoints: '1.00',
    estimatedTime: 3,
    fgvPattern: 'Questão conceitual básica sobre classificação dos direitos fundamentais'
  },
  {
    uniqueCode: 'EX-DIR-002',
    title: 'Direito de Propriedade e Função Social',
    description: 'Limitações ao direito de propriedade',
    type: 'multiple_choice',
    content: `Sobre o direito de propriedade previsto no art. 5º, XXII da CF/88, é CORRETO afirmar:`,
    options: JSON.stringify([
      'É um direito absoluto e ilimitado',
      'Deve atender à sua função social',
      'Não pode ser objeto de desapropriação',
      'Não se aplica à propriedade intelectual'
    ]),
    correctAnswer: 'Deve atender à sua função social',
    explanation: `O art. 5º, XXIII da CF/88 estabelece que "a propriedade atenderá a sua função social". O direito de propriedade não é absoluto, devendo ser exercido em conformidade com sua função social. A Constituição prevê diversas formas de intervenção na propriedade (desapropriação, requisição, etc.) quando não cumprida sua função social.`,
    difficulty: 'easy',
    themeId: themeMap['direitos-fundamentais'],
    maxPoints: '1.00',
    estimatedTime: 3,
    fgvPattern: 'FGV cobra a função social da propriedade e suas limitações'
  },
  {
    uniqueCode: 'EX-DIR-003',
    title: 'Princípio da Isonomia',
    description: 'Igualdade material e formal',
    type: 'multiple_choice',
    content: `O princípio da isonomia, previsto no caput do art. 5º da CF/88, significa:`,
    options: JSON.stringify([
      'Tratar todos de forma absolutamente igual, sem qualquer distinção',
      'Tratar igualmente os iguais e desigualmente os desiguais, na medida de suas desigualdades',
      'Proibir qualquer tipo de diferenciação entre pessoas',
      'Garantir igualdade apenas perante a lei, não na lei'
    ]),
    correctAnswer: 'Tratar igualmente os iguais e desigualmente os desiguais, na medida de suas desigualdades',
    explanation: `O princípio da isonomia (igualdade) possui duas dimensões: formal (igualdade perante a lei) e material (igualdade na lei). A igualdade material permite tratamento diferenciado quando justificado, visando reduzir desigualdades. É a aplicação da máxima aristotélica: "tratar igualmente os iguais e desigualmente os desiguais, na medida de suas desigualdades".`,
    difficulty: 'medium',
    themeId: themeMap['direitos-fundamentais'],
    maxPoints: '1.50',
    estimatedTime: 4,
    fgvPattern: 'Distinção entre igualdade formal e material é tema recorrente'
  },

  // ===== AÇÕES CONSTITUCIONAIS =====
  {
    uniqueCode: 'EX-ACO-001',
    title: 'Habeas Corpus - Cabimento',
    description: 'Hipóteses de cabimento do HC',
    type: 'multiple_choice',
    content: `O Habeas Corpus é o remédio constitucional adequado para proteger:`,
    options: JSON.stringify([
      'Qualquer direito líquido e certo violado por autoridade pública',
      'A liberdade de locomoção contra ilegalidade ou abuso de poder',
      'O direito de obter informações de interesse particular',
      'O direito de participar de concurso público'
    ]),
    correctAnswer: 'A liberdade de locomoção contra ilegalidade ou abuso de poder',
    explanation: `O Habeas Corpus (art. 5º, LXVIII, CF/88) é ação constitucional destinada a proteger a liberdade de locomoção contra ilegalidade ou abuso de poder. Pode ser preventivo (quando há ameaça) ou repressivo/liberatório (quando já há violação). É gratuito e não exige advogado.`,
    difficulty: 'easy',
    themeId: themeMap['acoes-constitucionais'],
    maxPoints: '1.00',
    estimatedTime: 3,
    fgvPattern: 'Questão básica sobre distinção entre os remédios constitucionais'
  },
  {
    uniqueCode: 'EX-ACO-002',
    title: 'Mandado de Segurança - Requisitos',
    description: 'Requisitos para impetração de MS',
    type: 'multiple_choice',
    content: `São requisitos para a impetração de Mandado de Segurança:`,
    options: JSON.stringify([
      'Direito líquido e certo, ilegalidade ou abuso de poder, e ato de autoridade',
      'Apenas a ilegalidade do ato impugnado',
      'Prova pré-constituída e esgotamento da via administrativa',
      'Ameaça à liberdade de locomoção'
    ]),
    correctAnswer: 'Direito líquido e certo, ilegalidade ou abuso de poder, e ato de autoridade',
    explanation: `O Mandado de Segurança (art. 5º, LXIX, CF/88 e Lei 12.016/2009) exige três requisitos cumulativos: 1) direito líquido e certo (demonstrável de plano, sem necessidade de dilação probatória); 2) ilegalidade ou abuso de poder; 3) ato de autoridade pública ou agente de pessoa jurídica no exercício de atribuições públicas. Não se exige esgotamento da via administrativa.`,
    difficulty: 'medium',
    themeId: themeMap['acoes-constitucionais'],
    maxPoints: '1.50',
    estimatedTime: 4,
    fgvPattern: 'FGV cobra frequentemente os requisitos e distinções do MS'
  },
  {
    uniqueCode: 'EX-ACO-003',
    title: 'Habeas Data - Finalidade',
    description: 'Objeto do Habeas Data',
    type: 'multiple_choice',
    content: `O Habeas Data, nos termos do art. 5º, LXXII da CF/88, destina-se a:`,
    options: JSON.stringify([
      'Proteger a liberdade de locomoção',
      'Assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público',
      'Anular ato lesivo ao patrimônio público',
      'Suprir omissão legislativa que inviabilize direito constitucional'
    ]),
    correctAnswer: 'Assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público',
    explanation: `O Habeas Data (Lei 9.507/97) tem duas finalidades: a) assegurar o conhecimento de informações relativas à pessoa do impetrante; b) retificar dados incorretos. Exige-se prova de recusa administrativa prévia. Não se confunde com o direito de acesso à informação (art. 5º, XXXIII) nem com o Mandado de Segurança.`,
    difficulty: 'medium',
    themeId: themeMap['acoes-constitucionais'],
    maxPoints: '1.50',
    estimatedTime: 4,
    fgvPattern: 'Distinção entre HD e MS é tema recorrente nas provas'
  },

  // ===== ORGANIZAÇÃO DO ESTADO =====
  {
    uniqueCode: 'EX-ORG-001',
    title: 'Forma de Estado - Federação',
    description: 'Características do Estado Federal brasileiro',
    type: 'multiple_choice',
    content: `Sobre a forma federativa de Estado adotada pela Constituição de 1988, é CORRETO afirmar:`,
    options: JSON.stringify([
      'Pode ser abolida por emenda constitucional',
      'É cláusula pétrea, não podendo ser objeto de emenda tendente a aboli-la',
      'Permite a secessão dos Estados-membros',
      'Não se aplica aos Municípios'
    ]),
    correctAnswer: 'É cláusula pétrea, não podendo ser objeto de emenda tendente a aboli-la',
    explanation: `O art. 60, §4º, I da CF/88 estabelece que não será objeto de deliberação a proposta de emenda tendente a abolir a forma federativa de Estado. É uma cláusula pétrea (limitação material ao poder de reforma). A federação brasileira é indissolúvel (art. 1º) e inclui União, Estados, DF e Municípios (art. 18).`,
    difficulty: 'easy',
    themeId: themeMap['organizacao-estado'],
    maxPoints: '1.00',
    estimatedTime: 3,
    fgvPattern: 'Cláusulas pétreas são tema frequente na OAB'
  },
  {
    uniqueCode: 'EX-ORG-002',
    title: 'Competência dos Estados',
    description: 'Competências estaduais na federação',
    type: 'multiple_choice',
    content: `De acordo com a CF/88, compete aos Estados:`,
    options: JSON.stringify([
      'Apenas as competências expressamente previstas na Constituição',
      'As competências que não lhes sejam vedadas pela Constituição (competência residual)',
      'Somente legislar sobre direito civil e penal',
      'Exclusivamente as competências delegadas pela União'
    ]),
    correctAnswer: 'As competências que não lhes sejam vedadas pela Constituição (competência residual)',
    explanation: `O art. 25, §1º da CF/88 estabelece que "são reservadas aos Estados as competências que não lhes sejam vedadas por esta Constituição". Esta é a competência residual ou remanescente dos Estados. Diferentemente da União (competências enumeradas) e Municípios (competências expressas), os Estados possuem competência residual.`,
    difficulty: 'medium',
    themeId: themeMap['organizacao-estado'],
    maxPoints: '1.50',
    estimatedTime: 4,
    fgvPattern: 'Repartição de competências é tema central em Direito Constitucional'
  },

  // ===== ORGANIZAÇÃO DOS PODERES =====
  {
    uniqueCode: 'EX-POD-001',
    title: 'Separação dos Poderes',
    description: 'Princípio da separação dos poderes',
    type: 'multiple_choice',
    content: `Sobre o princípio da separação dos poderes, previsto no art. 2º da CF/88, é CORRETO afirmar:`,
    options: JSON.stringify([
      'Os Poderes são absolutamente independentes, não havendo qualquer interferência entre eles',
      'Os Poderes são independentes e harmônicos entre si, havendo sistema de freios e contrapesos',
      'Apenas o Poder Legislativo pode fiscalizar os demais Poderes',
      'O Poder Judiciário não pode declarar a inconstitucionalidade de atos do Legislativo'
    ]),
    correctAnswer: 'Os Poderes são independentes e harmônicos entre si, havendo sistema de freios e contrapesos',
    explanation: `O art. 2º da CF/88 estabelece que "são Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário". A independência não é absoluta, havendo sistema de freios e contrapesos (checks and balances) que permite controle recíproco. É cláusula pétrea (art. 60, §4º, III).`,
    difficulty: 'easy',
    themeId: themeMap['organizacao-poderes'],
    maxPoints: '1.00',
    estimatedTime: 3,
    fgvPattern: 'Conceito fundamental de separação dos poderes'
  },
  {
    uniqueCode: 'EX-POD-002',
    title: 'Imunidade Parlamentar',
    description: 'Imunidades dos parlamentares',
    type: 'multiple_choice',
    content: `A imunidade material (inviolabilidade) dos parlamentares:`,
    options: JSON.stringify([
      'Abrange qualquer crime cometido pelo parlamentar',
      'Refere-se às opiniões, palavras e votos proferidos no exercício do mandato',
      'Impede a prisão do parlamentar em qualquer hipótese',
      'Pode ser suspensa pela Casa respectiva'
    ]),
    correctAnswer: 'Refere-se às opiniões, palavras e votos proferidos no exercício do mandato',
    explanation: `O art. 53 da CF/88 estabelece a imunidade material (inviolabilidade): os parlamentares são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos. É uma garantia funcional, não pessoal, limitada ao exercício do mandato e conexão com as funções parlamentares. Não abrange crimes comuns.`,
    difficulty: 'medium',
    themeId: themeMap['organizacao-poderes'],
    maxPoints: '1.50',
    estimatedTime: 4,
    fgvPattern: 'Imunidades parlamentares são cobradas com frequência'
  },

  // ===== PROCESSO LEGISLATIVO =====
  {
    uniqueCode: 'EX-PRO-001',
    title: 'Espécies Normativas',
    description: 'Processo legislativo e hierarquia',
    type: 'multiple_choice',
    content: `Sobre as espécies normativas previstas no art. 59 da CF/88, é INCORRETO afirmar:`,
    options: JSON.stringify([
      'A lei complementar exige quórum de maioria absoluta para aprovação',
      'A medida provisória tem força de lei e é editada pelo Presidente da República',
      'O decreto legislativo é utilizado para matérias de competência exclusiva do Congresso Nacional',
      'A emenda constitucional pode ser proposta por qualquer cidadão mediante iniciativa popular'
    ]),
    correctAnswer: 'A emenda constitucional pode ser proposta por qualquer cidadão mediante iniciativa popular',
    explanation: `A emenda constitucional NÃO admite iniciativa popular. O art. 60 da CF/88 estabelece que a proposta pode ser apresentada por: I) 1/3 dos membros da Câmara ou Senado; II) Presidente da República; III) mais da metade das Assembleias Legislativas. A iniciativa popular é prevista apenas para lei ordinária (art. 61, §2º).`,
    difficulty: 'medium',
    themeId: themeMap['processo-legislativo'],
    maxPoints: '1.50',
    estimatedTime: 4,
    fgvPattern: 'Processo legislativo e iniciativa das leis são temas centrais'
  },
  {
    uniqueCode: 'EX-PRO-002',
    title: 'Medida Provisória - Requisitos',
    description: 'Pressupostos para edição de MP',
    type: 'multiple_choice',
    content: `A Medida Provisória, prevista no art. 62 da CF/88, pode ser editada pelo Presidente da República em caso de:`,
    options: JSON.stringify([
      'Relevância, urgência e conveniência política',
      'Relevância e urgência',
      'Apenas urgência',
      'Qualquer situação, a critério exclusivo do Presidente'
    ]),
    correctAnswer: 'Relevância e urgência',
    explanation: `O art. 62 da CF/88 estabelece que "em caso de relevância e urgência, o Presidente da República poderá adotar medidas provisórias, com força de lei". São dois requisitos cumulativos: relevância (importância da matéria) e urgência (necessidade de regulamentação imediata). O STF exerce controle sobre estes pressupostos.`,
    difficulty: 'easy',
    themeId: themeMap['processo-legislativo'],
    maxPoints: '1.00',
    estimatedTime: 3,
    fgvPattern: 'Medida provisória é tema recorrente, especialmente seus limites'
  },

  // ===== DEFESA DO ESTADO =====
  {
    uniqueCode: 'EX-DEF-001',
    title: 'Estado de Defesa vs Estado de Sítio',
    description: 'Distinção entre os institutos',
    type: 'multiple_choice',
    content: `Sobre o Estado de Defesa e o Estado de Sítio, é CORRETO afirmar:`,
    options: JSON.stringify([
      'Ambos são decretados pelo Presidente da República sem necessidade de autorização do Congresso',
      'O Estado de Defesa é mais grave que o Estado de Sítio',
      'O Estado de Defesa é medida menos gravosa, precedendo o Estado de Sítio',
      'Apenas o Estado de Sítio pode restringir direitos fundamentais'
    ]),
    correctAnswer: 'O Estado de Defesa é medida menos gravosa, precedendo o Estado de Sítio',
    explanation: `O Estado de Defesa (art. 136, CF) é medida menos gravosa para preservar ou restabelecer a ordem pública ou paz social ameaçadas. O Estado de Sítio (art. 137, CF) é medida mais grave, cabível em situações excepcionais (comoção grave, guerra, ineficácia do estado de defesa). Ambos exigem autorização do Congresso Nacional e permitem restrição de direitos fundamentais.`,
    difficulty: 'medium',
    themeId: themeMap['defesa-estado'],
    maxPoints: '1.50',
    estimatedTime: 4,
    fgvPattern: 'Distinção entre estado de defesa e sítio é tema clássico'
  },

  // ===== ORDEM ECONÔMICA =====
  {
    uniqueCode: 'EX-ECO-001',
    title: 'Princípios da Ordem Econômica',
    description: 'Fundamentos da atividade econômica',
    type: 'multiple_choice',
    content: `São princípios da ordem econômica, previstos no art. 170 da CF/88, EXCETO:`,
    options: JSON.stringify([
      'Livre concorrência',
      'Defesa do consumidor',
      'Centralização econômica',
      'Busca do pleno emprego'
    ]),
    correctAnswer: 'Centralização econômica',
    explanation: `O art. 170 da CF/88 estabelece os princípios da ordem econômica: soberania nacional, propriedade privada, função social da propriedade, livre concorrência, defesa do consumidor, defesa do meio ambiente, redução das desigualdades, busca do pleno emprego e tratamento favorecido para empresas de pequeno porte. A centralização econômica NÃO é princípio constitucional.`,
    difficulty: 'easy',
    themeId: themeMap['ordem-economica'],
    maxPoints: '1.00',
    estimatedTime: 3,
    fgvPattern: 'Princípios da ordem econômica são cobrados literalmente'
  },

  // ===== ORDEM SOCIAL =====
  {
    uniqueCode: 'EX-SOC-001',
    title: 'Seguridade Social',
    description: 'Conceito e abrangência',
    type: 'multiple_choice',
    content: `A Seguridade Social, nos termos do art. 194 da CF/88, compreende:`,
    options: JSON.stringify([
      'Apenas a previdência social',
      'Saúde, previdência social e assistência social',
      'Educação, saúde e previdência',
      'Apenas saúde e assistência social'
    ]),
    correctAnswer: 'Saúde, previdência social e assistência social',
    explanation: `O art. 194 da CF/88 estabelece que "a seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social". São três pilares distintos, cada um com características próprias.`,
    difficulty: 'easy',
    themeId: themeMap['ordem-social'],
    maxPoints: '1.00',
    estimatedTime: 3,
    fgvPattern: 'Conceito básico de seguridade social'
  }
];

console.log('Inserindo exercícios...');
for (const exercise of exercises) {
  await db.insert(schema.exercises).values(exercise);
  console.log(`  ✓ ${exercise.uniqueCode} - ${exercise.title}`);
}

console.log('\n✅ População de exercícios concluída com sucesso!');
console.log(`\n📊 Resumo:`);
console.log(`   - ${exercises.length} exercícios inseridos`);
console.log(`   - Distribuídos pelos 9 temas de Direito Constitucional`);
console.log(`   - Níveis: Fácil, Médio e Difícil`);
console.log(`   - Todos alinhados ao conteúdo programático da FGV\n`);

await connection.end();
