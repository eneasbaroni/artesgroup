"use client";
import { useEffect, useState } from "react";
import { extractVideoId, formatViewCount } from "./helpers";
import type { VideoData, YouTubeAPIResponse } from "./types";

export const useYouTubeVideos = (videos: string[]) => {
  const [videosData, setVideosData] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideosData = async () => {
      try {
        const videoIds = videos
          .map((url) => extractVideoId(url))
          .filter((id): id is string => id !== null);

        if (videoIds.length === 0) {
          setLoading(false);
          return;
        }

        const response = await fetch("/api/youtube/videos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ videoIds }),
        });

        if (!response.ok) {
          throw new Error("Error al obtener datos de YouTube");
        }

        const data: YouTubeAPIResponse = await response.json();

        const formattedData: VideoData[] = data.items.map((item) => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          viewCount: formatViewCount(item.statistics.viewCount),
          url: `https://www.youtube.com/watch?v=${item.id}`,
        }));

        setVideosData(formattedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    if (videos.length > 0) {
      fetchVideosData();
    } else {
      setLoading(false);
    }
  }, [videos]);

  return { videosData, loading, error };
};
