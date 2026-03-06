/**
 * Extraer video ID de diferentes formatos de URL de YouTube
 */
export const extractVideoId = (url: string): string | null => {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/v\/([^?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

/**
 * Formatear número de vistas en formato español
 */
export const formatViewCount = (viewCount: string): string => {
  return parseInt(viewCount).toLocaleString("es-ES");
};

export const formatViews = (rawViews: string | number): string => {
  const views =
    typeof rawViews === "string"
      ? parseInt(rawViews.replace(/\./g, ""), 10)
      : rawViews;

  if (views >= 1_000_000_000) {
    const value = Math.floor(views / 100_000_000) / 10;
    return `+${value}B views`;
  }

  if (views >= 1_000_000) {
    const value = Math.floor(views / 100_000) / 10;
    return `+${value}M views`;
  }

  if (views >= 1_000) {
    const value = Math.floor(views / 100) / 10;
    return `+${value}K views`;
  }

  return `+${views} views`;
};
