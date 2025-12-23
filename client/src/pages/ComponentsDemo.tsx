import { NumberLine, InteractiveNumberLine } from '@/components/NumberLine';
import { ExerciseCard } from '@/components/ExerciseCard';
import { YouTubeEmbed, YouTubePlaceholder } from '@/components/YouTubeEmbed';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ComponentsDemo() {
  return (
    <div className="container mx-auto py-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-900">
          Componentes Interativos Arquimedes
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Demonstração dos componentes educacionais interativos usados nas aulas de matemática.
        </p>
      </div>

      {/* NumberLine - Reta Numérica */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">
              1. NumberLine - Reta Numérica Animada
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Exemplo 1: Adição Simples (5 + 3 = 8)
              </h3>
              <NumberLine
                start={0}
                end={10}
                addition={3}
                showAnimation={true}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Exemplo 2: Adição com Números Maiores (7 + 6 = 13)
              </h3>
              <NumberLine
                start={0}
                end={15}
                addition={6}
                showAnimation={true}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Exemplo 3: Reta Numérica Interativa
              </h3>
              <InteractiveNumberLine />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ExerciseCard - Exercícios com Validação */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">
              2. ExerciseCard - Exercícios Interativos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700">
              Estes componentes usam o backend para validação. Para testá-los completamente,
              você precisa estar logado e ter exercícios cadastrados no banco de dados.
            </p>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                Características do ExerciseCard:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Validação automática de respostas via backend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Sistema de hints progressivos (aparecem após 2 tentativas erradas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Feedback visual e sonoro (sons de acerto e erro)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Contador de tentativas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Suporte a múltiplas respostas corretas alternativas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Renderização de conteúdo matemático (LaTeX)</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
              <p className="text-sm text-yellow-900">
                <strong>💡 Nota:</strong> Para ver um ExerciseCard funcionando, acesse uma página
                de aula que contenha exercícios cadastrados no banco de dados.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* YouTubeEmbed - Player de Vídeo */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">
              3. YouTubeEmbed - Player de Vídeo Responsivo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Exemplo 1: Vídeo Real (Khan Academy - Adição)
              </h3>
              <YouTubeEmbed
                videoId="dQw4w9WgXcQ"
                title="Introdução à Adição - Conceitos Básicos"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Exemplo 2: Placeholder (Vídeo em Produção)
              </h3>
              <YouTubePlaceholder title="A Reta Numérica - Visualizando Números no Espaço" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Exemplo 3: Outro Placeholder
              </h3>
              <YouTubePlaceholder title="Exercícios Práticos de Adição - Do Básico ao Avançado" />
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                Características do YouTubeEmbed:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Responsivo (16:9 aspect ratio)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Thumbnail de preview antes de carregar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Carregamento lazy (só carrega quando usuário clica)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Suporte a autoplay e loop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Placeholder visual para vídeos em produção</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Badge "Vídeo Educacional" para identificação</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Exemplo de Integração */}
      <section className="space-y-6">
        <Card className="border-4 border-green-300 bg-green-50">
          <CardHeader>
            <CardTitle className="text-2xl text-green-900">
              4. Exemplo de Integração Completa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700 text-lg">
              Veja como os componentes funcionam juntos em uma aula completa:
            </p>

            {/* Vídeo introdutório */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                📹 Passo 1: Assista ao Vídeo Introdutório
              </h3>
              <YouTubePlaceholder title="Adição - Conceito Básico" />
            </div>

            {/* Explicação com reta numérica */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                📊 Passo 2: Visualize na Reta Numérica
              </h3>
              <NumberLine
                start={0}
                end={12}
                addition={5}
                showAnimation={true}
              />
              <p className="mt-4 text-gray-700">
                Começamos no número <strong className="text-blue-600">5</strong>,
                adicionamos <strong className="text-blue-600">3</strong>, e
                chegamos em <strong className="text-green-600">8</strong>.
              </p>
            </div>

            {/* Exercício prático */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                ✏️ Passo 3: Pratique com Exercícios
              </h3>
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <p className="text-gray-700 mb-4">
                  Os exercícios apareceriam aqui, conectados ao backend para validação
                  automática de respostas.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>Exemplo de pergunta:</strong> "Quanto é 7 + 4?"
                  </p>
                  <p className="text-xs text-blue-700 mt-2">
                    O aluno digitaria a resposta, receberia feedback imediato, e poderia
                    solicitar hints se necessário.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Instruções de Uso */}
      <section className="space-y-6">
        <Card className="border-4 border-purple-300 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-900">
              📚 Como Usar Estes Componentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                NumberLine
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import { NumberLine } from '@/components/NumberLine';

<NumberLine
  start={0}
  end={10}
  addition={3}
  showAnimation={true}
/>`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                ExerciseCard
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import { ExerciseCard } from '@/components/ExerciseCard';

<ExerciseCard
  exercise={{
    id: 1,
    type: "simple_input",
    question: "Quanto é 5 + 3?",
    hints: ["Use a reta numérica", "5 → 6 → 7 → 8"]
  }}
  onComplete={(isCorrect) => {
    console.log('Exercício concluído:', isCorrect);
  }}
/>`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                YouTubeEmbed
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import { YouTubeEmbed, YouTubePlaceholder } from '@/components/YouTubeEmbed';

// Vídeo real
<YouTubeEmbed
  videoId="dQw4w9WgXcQ"
  title="Introdução à Adição"
/>

// Placeholder
<YouTubePlaceholder
  title="Vídeo em Produção"
/>`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Rodapé */}
      <div className="text-center py-8 border-t-2 border-gray-200">
        <p className="text-gray-600">
          ✨ Todos os componentes estão prontos para uso nas páginas de conteúdo!
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Arquimedes - Matemática Descomplicada para Adultos
        </p>
      </div>
    </div>
  );
}
