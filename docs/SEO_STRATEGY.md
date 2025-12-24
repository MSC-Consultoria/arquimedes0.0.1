# 🔍 Estratégia de SEO Técnico - Arquimedes

**Data:** 23 de dezembro de 2025  
**Versão:** v2.42.0  
**Objetivo:** Otimizar SEO técnico para aumentar visibilidade orgânica sem depender de blog/artigos

---

## 🎯 Executive Summary

Esta estratégia foca em **SEO técnico** (não conteúdo de blog) para melhorar ranking orgânico da plataforma Arquimedes. Inclui otimização de meta tags, structured data, performance, acessibilidade e arquitetura de informação.

### Metas de SEO

| Métrica | Atual | Meta 3 meses | Meta 6 meses |
|---------|-------|--------------|--------------|
| **Google PageSpeed** | ? | 90+ | 95+ |
| **Core Web Vitals** | ? | Todos "Good" | Todos "Good" |
| **Páginas Indexadas** | 0 | 100+ | 500+ |
| **Posição Média** | N/A | Top 20 | Top 10 |
| **CTR Orgânico** | 0% | 3-5% | 8-12% |

---

## 📋 Checklist de SEO Técnico

### 1. Meta Tags e Títulos

#### ✅ Implementar em Todas as Páginas

```html
<!-- Title (50-60 caracteres) -->
<title>Arquimedes - Aprenda Matemática de Forma Simples e Divertida</title>

<!-- Description (150-160 caracteres) -->
<meta name="description" content="Plataforma de educação em matemática para adultos. Aulas interativas de Aritmética, Álgebra, Geometria e Cálculo. Aprenda no seu ritmo!">

<!-- Keywords (10-15 palavras-chave relevantes) -->
<meta name="keywords" content="matemática online, aulas de matemática, aritmética, álgebra, geometria, cálculo, educação adultos, EJA, matemática básica">

<!-- Canonical URL -->
<link rel="canonical" href="https://arquimedes.manus.space/">

<!-- Robots -->
<meta name="robots" content="index, follow">

<!-- Language -->
<meta http-equiv="content-language" content="pt-BR">

<!-- Author -->
<meta name="author" content="Arquimedes - Matemática Descomplicada">
```

---

### 2. Open Graph (Facebook, LinkedIn)

```html
<!-- Open Graph Protocol -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Arquimedes">
<meta property="og:title" content="Arquimedes - Matemática Descomplicada">
<meta property="og:description" content="Aprenda matemática de forma simples e divertida. Aulas interativas, exercícios práticos e gamificação.">
<meta property="og:url" content="https://arquimedes.manus.space/">
<meta property="og:image" content="https://arquimedes.manus.space/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="pt_BR">
```

**Tamanho ideal da imagem OG:** 1200x630px

---

### 3. Twitter Cards

```html
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@arquimedes">
<meta name="twitter:title" content="Arquimedes - Matemática Descomplicada">
<meta name="twitter:description" content="Aprenda matemática de forma simples e divertida.">
<meta name="twitter:image" content="https://arquimedes.manus.space/twitter-card.png">
```

---

### 4. Schema.org Structured Data

#### 4.1. EducationalOrganization

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Arquimedes",
  "alternateName": "Arquimedes - Matemática Descomplicada",
  "url": "https://arquimedes.manus.space",
  "logo": "https://arquimedes.manus.space/logo.png",
  "description": "Plataforma de educação em matemática para adultos com aulas interativas e gamificação.",
  "foundingDate": "2025",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://facebook.com/arquimedes",
    "https://twitter.com/arquimedes",
    "https://linkedin.com/company/arquimedes"
  ]
}
```

#### 4.2. Course (para cada disciplina)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Aritmética Básica",
  "description": "Curso completo de aritmética básica com 5 módulos: Adição, Subtração, Multiplicação, Divisão e Porcentagem.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Arquimedes",
    "url": "https://arquimedes.manus.space"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT60H"
  },
  "educationalLevel": "Beginner",
  "inLanguage": "pt-BR",
  "availableLanguage": "pt-BR",
  "teaches": "Aritmética básica, operações fundamentais, porcentagem",
  "url": "https://arquimedes.manus.space/disciplina/aritmetica"
}
```

#### 4.3. LearningResource (para cada aula)

```json
{
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "O que é Adicionar?",
  "description": "Aprenda o conceito fundamental de adição com exemplos práticos do cotidiano.",
  "learningResourceType": "Lesson",
  "educationalLevel": "Beginner",
  "timeRequired": "PT45M",
  "inLanguage": "pt-BR",
  "isPartOf": {
    "@type": "Course",
    "name": "Aritmética Básica"
  },
  "author": {
    "@type": "EducationalOrganization",
    "name": "Arquimedes"
  },
  "url": "https://arquimedes.manus.space/disciplina/aritmetica/modulo/adicao/aula/o-que-e-adicionar"
}
```

#### 4.4. FAQPage (para páginas de aulas)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é adição?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adição é a operação matemática que junta dois ou mais números para formar um total. Por exemplo: 2 + 3 = 5."
      }
    },
    {
      "@type": "Question",
      "name": "Como fazer adição com números grandes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para adicionar números grandes, alinhe os números pela direita e some coluna por coluna, começando pelas unidades."
      }
    }
  ]
}
```

#### 4.5. BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://arquimedes.manus.space/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Aritmética",
      "item": "https://arquimedes.manus.space/disciplina/aritmetica"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Adição",
      "item": "https://arquimedes.manus.space/disciplina/aritmetica/modulo/adicao"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "O que é Adicionar?",
      "item": "https://arquimedes.manus.space/disciplina/aritmetica/modulo/adicao/aula/o-que-e-adicionar"
    }
  ]
}
```

---

### 5. Sitemap.xml Dinâmico

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://arquimedes.manus.space/</loc>
    <lastmod>2025-12-23</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Disciplinas -->
  <url>
    <loc>https://arquimedes.manus.space/disciplina/aritmetica</loc>
    <lastmod>2025-12-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Módulos -->
  <url>
    <loc>https://arquimedes.manus.space/disciplina/aritmetica/modulo/adicao</loc>
    <lastmod>2025-12-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Aulas (258 aulas planejadas) -->
  <url>
    <loc>https://arquimedes.manus.space/disciplina/aritmetica/modulo/adicao/aula/o-que-e-adicionar</loc>
    <lastmod>2025-12-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

**Implementação:** Gerar dinamicamente via endpoint `/sitemap.xml`

---

### 6. robots.txt

```txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /perfil
Disallow: /dashboard

Sitemap: https://arquimedes.manus.space/sitemap.xml
```

---

### 7. Otimização de Imagens

#### Checklist
- ✅ Usar formato WebP (fallback para PNG/JPG)
- ✅ Adicionar `alt` text descritivo em todas as imagens
- ✅ Implementar lazy loading (`loading="lazy"`)
- ✅ Usar dimensões explícitas (width/height)
- ✅ Comprimir imagens (TinyPNG, ImageOptim)
- ✅ Usar CDN para servir imagens

#### Exemplo

```html
<picture>
  <source srcset="/images/hero.webp" type="image/webp">
  <img 
    src="/images/hero.jpg" 
    alt="Estudante aprendendo matemática na plataforma Arquimedes"
    width="1200"
    height="630"
    loading="lazy"
  >
</picture>
```

---

### 8. Performance (Core Web Vitals)

#### Métricas Alvo

| Métrica | Alvo | Descrição |
|---------|------|-----------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Tempo até maior elemento visível |
| **FID** (First Input Delay) | < 100ms | Tempo até primeira interação |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Estabilidade visual |
| **FCP** (First Contentful Paint) | < 1.8s | Tempo até primeiro conteúdo |
| **TTI** (Time to Interactive) | < 3.8s | Tempo até interativo |

#### Otimizações

1. **Code Splitting**
```typescript
// Lazy load páginas
const Dashboard = lazy(() => import('./pages/Dashboard'));
const LessonPage = lazy(() => import('./pages/LessonPage'));
```

2. **Preload Critical Resources**
```html
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/main.css" as="style">
```

3. **Minimize JavaScript**
- Remover código não utilizado
- Tree shaking automático (Vite)
- Minificar com Terser

4. **Optimize CSS**
- Critical CSS inline
- Defer non-critical CSS
- Remove unused CSS (PurgeCSS)

5. **Caching Strategy**
```javascript
// Service Worker
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|webp)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
      }),
    ],
  })
);
```

---

### 9. Acessibilidade (A11y)

#### Checklist WCAG 2.1 AA

- ✅ Contraste de cores mínimo 4.5:1
- ✅ Navegação por teclado completa
- ✅ Labels em todos os inputs
- ✅ ARIA labels onde necessário
- ✅ Skip links para conteúdo principal
- ✅ Foco visível em elementos interativos
- ✅ Textos alternativos em imagens
- ✅ Headings hierárquicos (H1 → H2 → H3)
- ✅ Landmarks semânticos (header, nav, main, footer)

#### Exemplo

```html
<nav aria-label="Navegação principal">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/disciplinas">Disciplinas</a></li>
  </ul>
</nav>

<main id="main-content">
  <h1>Aritmética Básica</h1>
  <!-- conteúdo -->
</main>

<a href="#main-content" class="skip-link">Pular para conteúdo principal</a>
```

---

### 10. URLs Amigáveis

#### ✅ Boas Práticas

```
✅ https://arquimedes.manus.space/disciplina/aritmetica
✅ https://arquimedes.manus.space/disciplina/aritmetica/modulo/adicao
✅ https://arquimedes.manus.space/disciplina/aritmetica/modulo/adicao/aula/o-que-e-adicionar

❌ https://arquimedes.manus.space/d/1
❌ https://arquimedes.manus.space/module?id=5
❌ https://arquimedes.manus.space/lesson.php?m=2&p=10
```

#### Regras
- Usar hífens (-) ao invés de underscores (_)
- Manter URLs curtas e descritivas
- Incluir palavras-chave relevantes
- Evitar parâmetros de query quando possível
- Usar lowercase

---

### 11. Breadcrumbs Visuais

```html
<nav aria-label="Breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/">
        <span itemprop="name">Home</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/disciplina/aritmetica">
        <span itemprop="name">Aritmética</span>
      </a>
      <meta itemprop="position" content="2" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span itemprop="name">Adição</span>
      <meta itemprop="position" content="3" />
    </li>
  </ol>
</nav>
```

---

### 12. Internacionalização (i18n)

```html
<!-- Hreflang para diferentes idiomas -->
<link rel="alternate" hreflang="pt-BR" href="https://arquimedes.manus.space/" />
<link rel="alternate" hreflang="en" href="https://arquimedes.manus.space/en/" />
<link rel="alternate" hreflang="es" href="https://arquimedes.manus.space/es/" />
<link rel="alternate" hreflang="x-default" href="https://arquimedes.manus.space/" />
```

---

## 🎯 Palavras-Chave Alvo

### Primárias (Alto Volume)
- matemática online
- aulas de matemática
- aprender matemática
- curso de matemática
- matemática para adultos

### Secundárias (Médio Volume)
- aritmética básica
- álgebra para iniciantes
- geometria online
- cálculo fácil
- matemática EJA

### Long-tail (Baixo Volume, Alta Conversão)
- como aprender matemática sozinho
- matemática básica para adultos
- curso de matemática gratuito
- aulas de matemática interativas
- plataforma de educação matemática

---

## 📊 Ferramentas de Monitoramento

### Google Tools
1. **Google Search Console** - Monitorar indexação e erros
2. **Google Analytics 4** - Tráfego orgânico
3. **Google PageSpeed Insights** - Performance
4. **Google Rich Results Test** - Validar structured data

### Outras Ferramentas
1. **Ahrefs / SEMrush** - Análise de keywords e backlinks
2. **Screaming Frog** - Auditoria técnica
3. **Lighthouse** - Performance e SEO
4. **Schema Markup Validator** - Validar JSON-LD

---

## 🚀 Plano de Implementação

### Fase 1: Fundação (Semana 1-2)
- ✅ Implementar meta tags em todas as páginas
- ✅ Adicionar Open Graph e Twitter Cards
- ✅ Criar sitemap.xml dinâmico
- ✅ Configurar robots.txt
- ✅ Otimizar URLs (já feito)

### Fase 2: Structured Data (Semana 3-4)
- ✅ Implementar EducationalOrganization schema
- ✅ Adicionar Course schema para disciplinas
- ✅ Adicionar LearningResource schema para aulas
- ✅ Implementar BreadcrumbList
- ✅ Adicionar FAQPage nas aulas

### Fase 3: Performance (Semana 5-6)
- ✅ Otimizar imagens (WebP, lazy loading)
- ✅ Implementar code splitting
- ✅ Adicionar preload para recursos críticos
- ✅ Configurar caching strategy
- ✅ Atingir Core Web Vitals "Good"

### Fase 4: Acessibilidade (Semana 7-8)
- ✅ Auditoria WCAG 2.1 AA
- ✅ Corrigir problemas de contraste
- ✅ Melhorar navegação por teclado
- ✅ Adicionar ARIA labels
- ✅ Implementar skip links

### Fase 5: Monitoramento (Semana 9-10)
- ✅ Configurar Google Search Console
- ✅ Submeter sitemap
- ✅ Configurar Google Analytics 4
- ✅ Implementar event tracking
- ✅ Criar dashboard de métricas

---

## 📈 KPIs de SEO

| KPI | Baseline | Meta 1 mês | Meta 3 meses | Meta 6 meses |
|-----|----------|------------|--------------|--------------|
| **Páginas Indexadas** | 0 | 50 | 200 | 500 |
| **Impressões (Search Console)** | 0 | 1.000 | 10.000 | 50.000 |
| **Cliques Orgânicos** | 0 | 30 | 500 | 3.000 |
| **CTR Médio** | 0% | 3% | 5% | 6% |
| **Posição Média** | N/A | 50 | 20 | 10 |
| **PageSpeed Score** | ? | 85 | 90 | 95 |
| **Core Web Vitals** | ? | 2/3 Good | 3/3 Good | 3/3 Good |

---

## 🎯 Próximos Passos Imediatos

1. ✅ Criar componente `<SEOHead>` reutilizável
2. ✅ Implementar meta tags dinâmicas por página
3. ✅ Gerar sitemap.xml automaticamente
4. ✅ Adicionar structured data em todas as páginas
5. ✅ Otimizar imagens existentes
6. ✅ Configurar Google Search Console
7. ✅ Submeter sitemap ao Google
8. ✅ Monitorar indexação e erros

---

**Preparado por:** Equipe Arquimedes  
**Próxima Revisão:** Q1 2026
