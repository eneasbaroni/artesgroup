export type Artist = {
  _id: string;
  name: string;
  bio: string;
  bannerUrl: string;
  imgUrl: string;
  socialMedia: {
    spotify?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
  videos: string[];
  public: {
    age: {
      "13-17": number;
      "18-24": number;
      "25-34": number;
      "35-44": number;
      "44+": number;
    };
    sex: {
      male: number;
      female: number;
    };
  };
  createdAt: string;
  updatedAt: string;
};
