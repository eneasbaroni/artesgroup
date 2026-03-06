import { Event } from "@/app/types/event";

export async function getEvents(): Promise<Event[] | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/events`, {
      cache: "no-store", // Siempre obtener datos frescos
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    /* Ordenar eventos por fecha */
    const sortedEvents = data.events.sort((a: Event, b: Event) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    return sortedEvents;
  } catch (error) {
    console.error("Error fetching events:", error);
    return null;
  }
}
