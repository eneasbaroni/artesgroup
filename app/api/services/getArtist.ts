import type { Artist } from "@/app/types/artist";

export async function getArtist(id: string): Promise<Artist | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/artists/${id}`, {
      cache: "no-store", // Siempre obtener datos frescos
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.artist;
  } catch (error) {
    console.error("Error fetching artist:", error);
    return null;
  }
}
