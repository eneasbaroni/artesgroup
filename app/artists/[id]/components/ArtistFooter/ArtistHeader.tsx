import Link from "next/link";
import { Artist } from "@/app/types/artist";
import AuthGuard, {
  isAuthenticated,
} from "@/app/components/AuthGuard/AuthGuard";
import DeleteArtistButton from "../DeleteArtistButton/DeleteArtistButton";

const ArtistFooter = async ({ id }: { id: Artist["_id"] }) => {
  const authenticated = await isAuthenticated();
  const backHref = authenticated ? "/admin/artists" : "/#artists";

  return (
    <div className="mb-8 flex items-center justify-between">
      <Link
        href={backHref}
        className="px-4 py-2 mobile:text-sm border border-white/10 rounded-full hover:bg-white/5 transition"
      >
        ← Volver
      </Link>
      <AuthGuard>
        <div className="flex gap-2">
          <DeleteArtistButton artistId={id} />
          <Link
            href={`/admin/artists/edit/${id}`}
            className="px-4 py-2 mobile:text-sm border border-ag-magent bg-ag-magent/10 rounded-full hover:bg-ag-magent/20 transition "
          >
            Editar artista
          </Link>
        </div>
      </AuthGuard>
    </div>
  );
};

export default ArtistFooter;
