import { Artist } from "@/app/types/artist";

export type AgeStatisticsProp = {
  age: Artist["public"]["age"];
};

export type SexStatisticsProp = {
  sex: Artist["public"]["sex"];
};

export type AudienceStatisticsProp = {
  age: AgeStatisticsProp["age"];
  sex: SexStatisticsProp["sex"];
};
