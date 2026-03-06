import type { AudienceStatisticsProp } from "./types";
import AgeStatistics from "./AgeStatistics";
import SexStatistics from "./SexStatistics";

const AudienceStatistics = ({ age, sex }: AudienceStatisticsProp) => {
  return (
    <>
      <h2 className="font-anton text-2xl mb-6">Público</h2>
      <div className="flex flex-col gap-4">
        <AgeStatistics age={age} />
        <SexStatistics sex={sex} />
      </div>
    </>
  );
};

export default AudienceStatistics;
