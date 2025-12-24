import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './drizzle/schema.js';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection, { schema, mode: 'default' });

console.log('🌱 Iniciando população do banco de dados...\n');

// ===== TEMAS DE DIREITO CONSTITUCIONAL =====
console.log('📚 Inserindo temas de Direito Constitucional...');

const themes = [
  {
    name: 'Controle de Constitucionalidade',
    slug: 'controle-constitucionalidade',
    description: 'Estudo dos mecanismos de controle de constitucionalidade das leis e atos normativos',
    icon: 'Scale',
    colorPrimary: '#1a1a2e',
    order: 1,
    content: `# Controle de Constitucionalidade

O controle de constitucionalidade é o mecanismo pelo qual se verifica a compatibilidade de leis e atos normativos com a Constituição Federal.

## Tipos de Controle

### Controle Difuso
- Exercido por qualquer juiz ou tribunal
- Análise incidental (via de exceção)
- Efeitos inter partes
- Cláusula de reserva de plenário (art. 97, CF)

### Controle Concentrado
- Exercido pelo STF
- Análise principal (via de ação)
- Efeitos erga omnes
- Ações: ADI, ADC, ADPF, ADO`,
    legislation: `- CF/88, arts. 102 e 103
- Lei 9.868/99 (ADI e ADC)
- Lei 9.882/99 (ADPF)`,
    jurisprudence: `- Súmula Vinculante 10: Viola a cláusula de reserva de plenário a decisão de órgão fracionário que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do poder público, afasta sua incidência, no todo ou em parte.`,
    examples: 'Exemplos práticos de aplicação do controle de constitucionalidade em casos concretos.'
  },
  {
    name: 'Direitos Fundamentais',
    slug: 'direitos-fundamentais',
    description: 'Direitos e garantias individuais e coletivos previstos na Constituição',
    icon: 'Users',
    colorPrimary: '#d4af37',
    order: 2,
    content: 'Conteúdo sobre Direitos Fundamentais...',
    legislation: 'CF/88, arts. 5º a 17',
    jurisprudence: 'Jurisprudência relevante sobre direitos fundamentais',
    examples: 'Exemplos de aplicação'
  },
  {
    name: 'Ações Constitucionais',
    slug: 'acoes-constitucionais',
    description: 'Habeas Corpus, Mandado de Segurança, Habeas Data e outras ações',
    icon: 'FileText',
    colorPrimary: '#1a1a2e',
    order: 3,
    content: 'Conteúdo sobre Ações Constitucionais...',
    legislation: 'CF/88, art. 5º, LXVIII a LXXIII',
    jurisprudence: 'Jurisprudência sobre ações constitucionais',
    examples: 'Exemplos práticos'
  },
  {
    name: 'Organização do Estado',
    slug: 'organizacao-estado',
    description: 'Federação, União, Estados, Municípios e Distrito Federal',
    icon: 'Building',
    colorPrimary: '#d4af37',
    order: 4,
    content: 'Conteúdo sobre Organização do Estado...',
    legislation: 'CF/88, arts. 18 a 43',
    jurisprudence: 'Jurisprudência relevante',
    examples: 'Exemplos'
  },
  {
    name: 'Organização dos Poderes',
    slug: 'organizacao-poderes',
    description: 'Poder Legislativo, Executivo e Judiciário',
    icon: 'Landmark',
    colorPrimary: '#1a1a2e',
    order: 5,
    content: 'Conteúdo sobre Organização dos Poderes...',
    legislation: 'CF/88, arts. 44 a 135',
    jurisprudence: 'Jurisprudência',
    examples: 'Exemplos'
  },
  {
    name: 'Processo Legislativo',
    slug: 'processo-legislativo',
    description: 'Elaboração de emendas, leis complementares, ordinárias e delegadas',
    icon: 'BookOpen',
    colorPrimary: '#d4af37',
    order: 6,
    content: 'Conteúdo sobre Processo Legislativo...',
    legislation: 'CF/88, arts. 59 a 69',
    jurisprudence: 'Jurisprudência',
    examples: 'Exemplos'
  },
  {
    name: 'Defesa do Estado e Instituições Democráticas',
    slug: 'defesa-estado',
    description: 'Estado de defesa, estado de sítio e Forças Armadas',
    icon: 'Shield',
    colorPrimary: '#1a1a2e',
    order: 7,
    content: 'Conteúdo sobre Defesa do Estado...',
    legislation: 'CF/88, arts. 136 a 144',
    jurisprudence: 'Jurisprudência',
    examples: 'Exemplos'
  },
  {
    name: 'Ordem Econômica e Financeira',
    slug: 'ordem-economica',
    description: 'Princípios da atividade econômica e sistema financeiro',
    icon: 'TrendingUp',
    colorPrimary: '#d4af37',
    order: 8,
    content: 'Conteúdo sobre Ordem Econômica...',
    legislation: 'CF/88, arts. 170 a 192',
    jurisprudence: 'Jurisprudência',
    examples: 'Exemplos'
  },
  {
    name: 'Ordem Social',
    slug: 'ordem-social',
    description: 'Seguridade social, educação, cultura e meio ambiente',
    icon: 'Heart',
    colorPrimary: '#1a1a2e',
    order: 9,
    content: 'Conteúdo sobre Ordem Social...',
    legislation: 'CF/88, arts. 193 a 232',
    jurisprudence: 'Jurisprudência',
    examples: 'Exemplos'
  }
];

for (const theme of themes) {
  await db.insert(schema.themes).values(theme);
  console.log(`  ✓ ${theme.name}`);
}

// ===== PEÇAS PROCESSUAIS =====
console.log('\n⚖️  Inserindo peças processuais...');

const pieces = [
  {
    name: 'Ação Direta de Inconstitucionalidade (ADI)',
    slug: 'adi',
    description: 'Ação para declarar a inconstitucionalidade de lei ou ato normativo',
    applicableLaw: 'Lei 9.868/99',
    structure: JSON.stringify({
      sections: [
        'Endereçamento',
        'Qualificação do Requerente',
        'Objeto da Ação',
        'Legitimidade Ativa',
        'Fundamentação Jurídica',
        'Pedido',
        'Requerimentos',
        'Fecho'
      ]
    }),
    examples: JSON.stringify([
      'Exemplo 1: ADI contra lei estadual',
      'Exemplo 2: ADI contra lei federal'
    ]),
    tips: 'Sempre indicar o dispositivo constitucional violado e fundamentar adequadamente.',
    commonMistakes: 'Não indicar a legitimidade ativa, não fundamentar juridicamente',
    order: 1
  },
  {
    name: 'Mandado de Segurança',
    slug: 'mandado-seguranca',
    description: 'Ação para proteger direito líquido e certo contra ilegalidade ou abuso de poder',
    applicableLaw: 'Lei 12.016/2009',
    structure: JSON.stringify({
      sections: [
        'Endereçamento',
        'Qualificação do Impetrante',
        'Qualificação da Autoridade Coatora',
        'Dos Fatos',
        'Do Direito',
        'Do Direito Líquido e Certo',
        'Da Ilegalidade ou Abuso de Poder',
        'Dos Pedidos',
        'Fecho'
      ]
    }),
    examples: JSON.stringify(['Exemplo de MS individual', 'Exemplo de MS coletivo']),
    tips: 'Demonstrar claramente o direito líquido e certo e a ilegalidade',
    commonMistakes: 'Não demonstrar o direito líquido e certo',
    order: 2
  },
  {
    name: 'Habeas Corpus',
    slug: 'habeas-corpus',
    description: 'Ação para proteger a liberdade de locomoção',
    applicableLaw: 'CPP, arts. 647 a 667',
    structure: JSON.stringify({
      sections: ['Endereçamento', 'Qualificação', 'Dos Fatos', 'Do Direito', 'Dos Pedidos', 'Fecho']
    }),
    examples: JSON.stringify(['HC preventivo', 'HC liberatório']),
    tips: 'Indicar claramente a coação ilegal à liberdade de locomoção',
    commonMistakes: 'Não demonstrar a ilegalidade da coação',
    order: 3
  },
  {
    name: 'Habeas Data',
    slug: 'habeas-data',
    description: 'Ação para conhecer ou retificar informações pessoais em bancos de dados',
    applicableLaw: 'Lei 9.507/97',
    structure: JSON.stringify({
      sections: ['Endereçamento', 'Qualificação', 'Dos Fatos', 'Do Direito', 'Dos Pedidos', 'Fecho']
    }),
    examples: JSON.stringify(['HD para conhecimento', 'HD para retificação']),
    tips: 'Comprovar a recusa administrativa prévia',
    commonMistakes: 'Não comprovar a recusa administrativa',
    order: 4
  },
  {
    name: 'Mandado de Injunção',
    slug: 'mandado-injuncao',
    description: 'Ação para suprir omissão legislativa que inviabilize direito constitucional',
    applicableLaw: 'Lei 13.300/2016',
    structure: JSON.stringify({
      sections: ['Endereçamento', 'Qualificação', 'Dos Fatos', 'Da Omissão', 'Do Direito', 'Dos Pedidos', 'Fecho']
    }),
    examples: JSON.stringify(['MI individual', 'MI coletivo']),
    tips: 'Demonstrar a omissão legislativa e o direito inviabilizado',
    commonMistakes: 'Não demonstrar a omissão',
    order: 5
  },
  {
    name: 'Ação Popular',
    slug: 'acao-popular',
    description: 'Ação para anular ato lesivo ao patrimônio público',
    applicableLaw: 'Lei 4.717/65',
    structure: JSON.stringify({
      sections: ['Endereçamento', 'Qualificação', 'Dos Fatos', 'Da Lesividade', 'Do Direito', 'Dos Pedidos', 'Fecho']
    }),
    examples: JSON.stringify(['Ação popular contra ato administrativo']),
    tips: 'Demonstrar a lesividade ao patrimônio público',
    commonMistakes: 'Não demonstrar a lesividade',
    order: 6
  },
  {
    name: 'Ação Civil Pública',
    slug: 'acao-civil-publica',
    description: 'Ação para defesa de interesses difusos e coletivos',
    applicableLaw: 'Lei 7.347/85',
    structure: JSON.stringify({
      sections: ['Endereçamento', 'Qualificação', 'Dos Fatos', 'Do Direito', 'Dos Pedidos', 'Fecho']
    }),
    examples: JSON.stringify(['ACP ambiental', 'ACP consumidor']),
    tips: 'Demonstrar o interesse difuso ou coletivo',
    commonMistakes: 'Não demonstrar o interesse coletivo',
    order: 7
  },
  {
    name: 'Reclamação Constitucional',
    slug: 'reclamacao-constitucional',
    description: 'Ação para preservar a competência do STF ou garantir autoridade de suas decisões',
    applicableLaw: 'CF/88, art. 102, I, "l"',
    structure: JSON.stringify({
      sections: ['Endereçamento', 'Qualificação', 'Dos Fatos', 'Da Usurpação ou Descumprimento', 'Do Direito', 'Dos Pedidos', 'Fecho']
    }),
    examples: JSON.stringify(['Reclamação por usurpação', 'Reclamação por descumprimento']),
    tips: 'Demonstrar a usurpação de competência ou descumprimento de decisão',
    commonMistakes: 'Não demonstrar a usurpação ou descumprimento',
    order: 8
  },
  {
    name: 'Arguição de Descumprimento de Preceito Fundamental (ADPF)',
    slug: 'adpf',
    description: 'Ação para evitar ou reparar lesão a preceito fundamental',
    applicableLaw: 'Lei 9.882/99',
    structure: JSON.stringify({
      sections: ['Endereçamento', 'Qualificação', 'Objeto', 'Legitimidade', 'Fundamentação', 'Subsidiariedade', 'Pedido', 'Fecho']
    }),
    examples: JSON.stringify(['ADPF autônoma', 'ADPF incidental']),
    tips: 'Demonstrar a lesão ao preceito fundamental e a subsidiariedade',
    commonMistakes: 'Não demonstrar a subsidiariedade',
    order: 9
  },
  {
    name: 'Ação Declaratória de Constitucionalidade (ADC)',
    slug: 'adc',
    description: 'Ação para declarar a constitucionalidade de lei ou ato normativo federal',
    applicableLaw: 'Lei 9.868/99',
    structure: JSON.stringify({
      sections: ['Endereçamento', 'Qualificação', 'Objeto', 'Legitimidade', 'Controvérsia Judicial', 'Fundamentação', 'Pedido', 'Fecho']
    }),
    examples: JSON.stringify(['ADC de lei federal']),
    tips: 'Demonstrar a existência de controvérsia judicial relevante',
    commonMistakes: 'Não demonstrar a controvérsia judicial',
    order: 10
  }
];

for (const piece of pieces) {
  await db.insert(schema.pieces).values(piece);
  console.log(`  ✓ ${piece.name}`);
}

console.log('\n✅ População do banco de dados concluída com sucesso!');
console.log(`\n📊 Resumo:`);
console.log(`   - ${themes.length} temas de Direito Constitucional`);
console.log(`   - ${pieces.length} peças processuais`);

await connection.end();
