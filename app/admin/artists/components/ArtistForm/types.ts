import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { ArtistaFormData } from "./formValidation";

export type Tregister = UseFormRegister<{
  name: string;
  bio: string;
  bannerUrl: string;
  imgUrl: string;
  socialMedia: {
    spotify?: string | undefined;
    instagram?: string | undefined;
    youtube?: string | undefined;
    tiktok?: string | undefined;
  };
  videos: {
    url: string;
  }[];
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
}>;

export type Terrors = FieldErrors<{
  name: string;
  bio: string;
  bannerUrl: string;
  imgUrl: string;
  socialMedia: {
    spotify?: string | undefined;
    instagram?: string | undefined;
    youtube?: string | undefined;
    tiktok?: string | undefined;
  };
  videos: {
    url: string;
  }[];
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
}>;

export type Tcontrol =
  | Control<
      {
        name: string;
        bio: string;
        bannerUrl: string;
        imgUrl: string;
        socialMedia: {
          spotify?: string | undefined;
          instagram?: string | undefined;
          youtube?: string | undefined;
          tiktok?: string | undefined;
        };
        videos: {
          url: string;
        }[];
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
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any,
      {
        name: string;
        bio: string;
        bannerUrl: string;
        imgUrl: string;
        socialMedia: {
          spotify?: string | undefined;
          instagram?: string | undefined;
          youtube?: string | undefined;
          tiktok?: string | undefined;
        };
        videos: {
          url: string;
        }[];
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
      }
    >
  | undefined;

export type TsetValue = UseFormSetValue<{
  name: string;
  bio: string;
  bannerUrl: string;
  imgUrl: string;
  socialMedia: {
    spotify?: string | undefined;
    instagram?: string | undefined;
    youtube?: string | undefined;
    tiktok?: string | undefined;
  };
  videos: {
    url: string;
  }[];
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
}>;

// Props para el componente ArtistForm
export interface ArtistFormProps {
  initialData?: ArtistaFormData;
  artistId?: string;
}
