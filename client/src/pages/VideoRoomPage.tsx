import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Play, Clock, Eye, Trophy } from "lucide-react";

export default function VideoRoomPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  // Queries
  const { data: disciplines } = trpc.disciplines.list.useQuery();
  const { data: allVideos } = trpc.standaloneVideos.getAll.useQuery();
  const { data: watchedVideos } = trpc.standaloneVideos.getWatched.useQuery();
  const { data: stats } = trpc.standaloneVideos.getStats.useQuery();

  // Mutations
  const markWatchedMutation = trpc.standaloneVideos.markWatched.useMutation({
    onSuccess: () => {
      // Refetch watched videos and stats
      trpc.useUtils().standaloneVideos.getWatched.invalidate();
      trpc.useUtils().standaloneVideos.getStats.invalidate();
      trpc.useUtils().points.getSummary.invalidate();
    },
  });

  // Filter videos
  const filteredVideos = allVideos?.filter((video) => {
    if (selectedDiscipline && video.disciplineId !== selectedDiscipline) return false;
    return true;
  });

  // Check if video is watched
  const isVideoWatched = (videoId: number) => {
    return watchedVideos?.some((v) => v.videoId === videoId) || false;
  };

  const handleMarkWatched = (videoId: number) => {
    if (isVideoWatched(videoId)) {
      alert("Você já assistiu este vídeo!");
      return;
    }
    markWatchedMutation.mutate({ videoId });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sala de Vídeos</h1>
          <p className="text-lg text-gray-600">
            Assista vídeos educacionais e ganhe 3 pontos por vídeo assistido
          </p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Vídeos Assistidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600">{stats.totalWatched}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  Pontos Ganhos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-yellow-600">{stats.totalWatched * 3}</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
            <CardDescription>Filtre os vídeos por disciplina</CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        {/* Video Player */}
        {selectedVideo && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Vídeo Selecionado</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const video = allVideos?.find((v) => v.id === selectedVideo);
                if (!video) return null;

                return (
                  <div className="space-y-4">
                    <div className="aspect-video bg-black rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{video.title}</h3>
                        {video.description && (
                          <p className="text-gray-600 mt-2">{video.description}</p>
                        )}
                        {video.duration && (
                          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {video.duration}
                          </p>
                        )}
                      </div>

                      <Button
                        onClick={() => handleMarkWatched(video.id)}
                        disabled={isVideoWatched(video.id) || markWatchedMutation.isPending}
                        className="flex items-center gap-2"
                      >
                        {isVideoWatched(video.id) ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" />
                            Já Assistido
                          </>
                        ) : markWatchedMutation.isPending ? (
                          "Marcando..."
                        ) : (
                          <>
                            <Trophy className="h-4 w-4" />
                            Marcar como Assistido (+3 pts)
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos && filteredVideos.length > 0 ? (
            filteredVideos.map((video) => {
              const watched = isVideoWatched(video.id);

              return (
                <Card
                  key={video.id}
                  className={`transition-all hover:shadow-lg cursor-pointer ${
                    watched ? "border-green-500 bg-green-50" : ""
                  }`}
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <CardHeader className="p-0">
                    <div className="relative aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                      {watched && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Assistido
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                    {video.description && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">{video.description}</p>
                    )}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      {video.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {video.duration}
                        </span>
                      )}
                      {!watched && (
                        <span className="text-yellow-600 font-medium flex items-center gap-1">
                          <Trophy className="h-4 w-4" />
                          +3 pts
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Card className="col-span-full">
              <CardContent className="py-12 text-center">
                <p className="text-gray-500 text-lg">
                  Nenhum vídeo encontrado com os filtros selecionados.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
