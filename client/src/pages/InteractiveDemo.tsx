import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DragAndDrop, DragItem } from "@/components/interactive/DragAndDrop";
import { InteractiveSlider } from "@/components/interactive/InteractiveSlider";
import { FreeCanvas } from "@/components/interactive/FreeCanvas";
import { MatchingGame, MatchPair } from "@/components/interactive/MatchingGame";
import { FillInBlanks, BlankItem } from "@/components/interactive/FillInBlanks";
import { VisualMultipleChoice, ChoiceOption } from "@/components/interactive/VisualMultipleChoice";
import { useConfetti } from "@/lib/useConfetti";
import { Particles } from "@/components/effects/Particles";
import { Sparkles, Zap, Palette } from "lucide-react";

export default function InteractiveDemo() {
  const [showParticles, setShowParticles] = useState(false);
  const confetti = useConfetti();

  // Dados de exemplo para DragAndDrop
  const dragItems: DragItem[] = [
    { id: "1", content: "Primeiro item" },
    { id: "2", content: "Segundo item" },
    { id: "3", content: "Terceiro item" },
    { id: "4", content: "Quarto item" },
  ];

  // Dados de exemplo para MatchingGame
  const matchPairs: MatchPair[] = [
    { id: "1", left: "2 + 2", right: "4" },
    { id: "2", left: "3 × 3", right: "9" },
    { id: "3", left: "10 ÷ 2", right: "5" },
    { id: "4", left: "7 - 3", right: "4" },
  ];

  // Dados de exemplo para FillInBlanks
  const blanks: BlankItem[] = [
    { id: "blank1", correctAnswer: "4", acceptableAnswers: ["quatro"] },
    { id: "blank2", correctAnswer: "9", acceptableAnswers: ["nove"] },
  ];

  // Dados de exemplo para VisualMultipleChoice
  const choices: ChoiceOption[] = [
    { id: "1", content: "2 + 2 = 4", isCorrect: true },
    { id: "2", content: "2 + 2 = 5", isCorrect: false },
    { id: "3", content: "2 + 2 = 3", isCorrect: false },
    { id: "4", content: "2 + 2 = 6", isCorrect: false },
  ];

  const triggerParticles = () => {
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 100);
  };

  return (
    <div className="container max-w-7xl py-8 space-y-12">
      <Particles trigger={showParticles} />

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Componentes Interativos Avançados</h1>
        <p className="text-lg text-muted-foreground">
          Demonstração de todos os componentes com feedback visual, sonoro e tátil
        </p>
      </div>

      {/* Efeitos Visuais */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Efeitos Visuais</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button onClick={() => confetti.fireConfetti()} className="h-20">
            🎉 Confete Padrão
          </Button>
          <Button onClick={() => confetti.fireAchievementConfetti()} className="h-20">
            🏆 Conquista
          </Button>
          <Button onClick={() => confetti.fireLevelUpConfetti()} className="h-20">
            ⭐ Level Up
          </Button>
          <Button onClick={() => confetti.fireSideConfetti()} className="h-20">
            ✨ Confete Lateral
          </Button>
          <Button onClick={() => confetti.fireStarsConfetti()} className="h-20">
            🌟 Estrelas
          </Button>
          <Button onClick={triggerParticles} className="h-20">
            💥 Partículas
          </Button>
        </div>
      </section>

      {/* Drag and Drop */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Zap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Drag and Drop</h2>
        </div>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Arraste os itens para reordená-los
          </p>
          <DragAndDrop items={dragItems} />
        </Card>
      </section>

      {/* Interactive Slider */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Slider Interativo</h2>
        <InteractiveSlider
          label="Qual é o resultado de 5 × 8?"
          min={0}
          max={100}
          step={1}
          defaultValue={40}
          correctValue={40}
          showFeedback
        />
      </section>

      {/* Matching Game */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Jogo de Correspondência</h2>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Conecte cada operação ao seu resultado
          </p>
          <MatchingGame pairs={matchPairs} showFeedback />
        </Card>
      </section>

      {/* Fill in Blanks */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Preencher Lacunas</h2>
        <FillInBlanks
          text="A soma de 2 + 2 é {blank1} e 3 × 3 é {blank2}."
          blanks={blanks}
          showFeedback
        />
      </section>

      {/* Visual Multiple Choice */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Múltipla Escolha Visual</h2>
        <VisualMultipleChoice
          question="Qual é o resultado de 2 + 2?"
          options={choices}
          showFeedback
          explanation="2 + 2 = 4 é uma operação básica de adição."
        />
      </section>

      {/* Free Canvas */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Palette className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Canvas Livre</h2>
        </div>
        <FreeCanvas />
      </section>

      {/* Animações CSS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Animações CSS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center animate-shake">
            <p className="font-semibold">Shake</p>
          </Card>
          <Card className="p-4 text-center animate-bounce-once">
            <p className="font-semibold">Bounce</p>
          </Card>
          <Card className="p-4 text-center animate-pulse-success">
            <p className="font-semibold">Pulse Success</p>
          </Card>
          <Card className="p-4 text-center animate-slide-in-up">
            <p className="font-semibold">Slide Up</p>
          </Card>
          <Card className="p-4 text-center animate-fade-in">
            <p className="font-semibold">Fade In</p>
          </Card>
          <Card className="p-4 text-center animate-scale-in">
            <p className="font-semibold">Scale In</p>
          </Card>
          <Card className="p-4 text-center hover-lift">
            <p className="font-semibold">Hover Lift</p>
          </Card>
          <Card className="p-4 text-center card-interactive">
            <p className="font-semibold">Card Interactive</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
