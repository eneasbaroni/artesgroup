import { Artist } from "@/app/types/artist";

export async function getArtists(): Promise<Artist[] | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/artists`, {
      cache: "no-store", // Siempre obtener datos frescos
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    /* Ordenar artistas por nombre */
    const sortedArtists = data.artists.sort((a: Artist, b: Artist) => {
      return a.name.localeCompare(b.name);
    });

    return sortedArtists;
  } catch (error) {
    console.error("Error fetching artists:", error);
    return null;
  }
}
