import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, Trophy, Target, TrendingUp } from "lucide-react";

export default function ExerciseRoomPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<"easy" | "moderate" | "hard" | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [feedback, setFeedback] = useState<{ exerciseId: number; isCorrect: boolean; points: number } | null>(null);

  // Queries
  const { data: disciplines } = trpc.disciplines.list.useQuery();
  const { data: allExercises } = trpc.standaloneExercises.getAll.useQuery();
  const { data: stats } = trpc.standaloneExercises.getStats.useQuery();

  // Mutations
  const submitMutation = trpc.standaloneExercises.submit.useMutation({
    onSuccess: (data, variables) => {
      setFeedback({ exerciseId: variables.exerciseId, isCorrect: data.isCorrect, points: data.points });
      setCurrentAnswer("");
      
      // Refetch stats after submission
      setTimeout(() => {
        trpc.useUtils().standaloneExercises.getStats.invalidate();
      }, 500);
    },
  });

  // Filter exercises
  const filteredExercises = allExercises?.filter((ex) => {
    if (selectedDiscipline && ex.disciplineId !== selectedDiscipline) return false;
    if (selectedDifficulty && ex.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const handleSubmit = (exerciseId: number) => {
    const answer = parseInt(currentAnswer);
    if (isNaN(answer)) {
      alert("Por favor, insira um número válido");
      return;
    }
    submitMutation.mutate({ exerciseId, userAnswer: answer });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-50 border-green-200";
      case "moderate":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "hard":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "Fácil";
      case "moderate":
        return "Moderado";
      case "hard":
        return "Difícil";
      default:
        return difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sala de Exercícios</h1>
          <p className="text-lg text-gray-600">
            Pratique suas habilidades matemáticas com exercícios de múltipla escolha
          </p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Total de Tentativas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">{stats.totalAttempts}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Respostas Corretas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">{stats.correctAnswers}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Taxa de Acerto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600">{stats.accuracy}%</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
            <CardDescription>Filtre os exercícios por disciplina e dificuldade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Disciplina</label>
                <Select
                  value={selectedDiscipline?.toString() || "all"}
                  onValueChange={(value) => setSelectedDiscipline(value === "all" ? null : parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Todas as disciplinas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as disciplinas</SelectItem>
                    {disciplines?.map((d) => (
                      <SelectItem key={d.id} value={d.id.toString()}>
                        {d.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dificuldade</label>
                <Select
                  value={selectedDifficulty || "all"}
                  onValueChange={(value) => setSelectedDifficulty(value === "all" ? null : value as any)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Todas as dificuldades" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as dificuldades</SelectItem>
                    <SelectItem value="easy">Fácil (5 pts)</SelectItem>
                    <SelectItem value="moderate">Moderado (10 pts)</SelectItem>
                    <SelectItem value="hard">Difícil (15 pts)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exercises Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredExercises && filteredExercises.length > 0 ? (
            filteredExercises.map((exercise) => {
              const hasFeedback = feedback?.exerciseId === exercise.id;
              const isCorrect = hasFeedback && feedback.isCorrect;
              const isIncorrect = hasFeedback && !feedback.isCorrect;

              return (
                <Card
                  key={exercise.id}
                  className={`transition-all ${
                    isCorrect
                      ? "border-green-500 bg-green-50"
                      : isIncorrect
                      ? "border-red-500 bg-red-50"
                      : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{exercise.question}</CardTitle>
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block px-3 py-1 text-sm font-medium rounded-full border ${getDifficultyColor(
                              exercise.difficulty
                            )}`}
                          >
                            {getDifficultyLabel(exercise.difficulty)}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                            <Trophy className="h-4 w-4" />
                            {exercise.points} pontos
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(exercise.options as string[]).map((option: string, index: number) => (
                          <div
                            key={index}
                            className="p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-700">
                              {String.fromCharCode(65 + index)}) {option}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Answer Input */}
                      {!hasFeedback && (
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Input
                            type="number"
                            placeholder="Digite sua resposta..."
                            value={currentAnswer}
                            onChange={(e) => setCurrentAnswer(e.target.value)}
                            className="flex-1"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleSubmit(exercise.id);
                              }
                            }}
                          />
                          <Button
                            onClick={() => handleSubmit(exercise.id)}
                            disabled={submitMutation.isPending || !currentAnswer}
                            className="w-full sm:w-auto"
                          >
                            {submitMutation.isPending ? "Enviando..." : "Enviar Resposta"}
                          </Button>
                        </div>
                      )}

                      {/* Feedback */}
                      {hasFeedback && (
                        <div
                          className={`p-4 rounded-lg border-2 ${
                            isCorrect
                              ? "bg-green-100 border-green-500 text-green-800"
                              : "bg-red-100 border-red-500 text-red-800"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            {isCorrect ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : (
                              <XCircle className="h-5 w-5" />
                            )}
                            <span className="font-bold">
                              {isCorrect ? "Correto!" : "Incorreto"}
                            </span>
                          </div>
                          <p className="text-sm">
                            {isCorrect
                              ? `Parabéns! Você ganhou ${feedback.points} pontos.`
                              : "Tente novamente em outro exercício."}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-3"
                            onClick={() => setFeedback(null)}
                          >
                            Próximo Exercício
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-500 text-lg">
                  Nenhum exercício encontrado com os filtros selecionados.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
