export interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  viewCount: string;
  url: string;
}

export interface YouTubeVideoItem {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
  };
}

export interface YouTubeAPIResponse {
  items: YouTubeVideoItem[];
}
