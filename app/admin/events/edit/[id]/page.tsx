"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EventForm from "../../components/EventForm/EventForm";
import { transformEventToFormData } from "../../components/EventForm/helpers";
import { EventFormData } from "../../components/EventForm/formValidation";
import Loader from "@/app/components/Loader/Loader";
import ErrorSnackbar from "@/app/admin/artists/components/ErrorSnackbar/ErrorSnackbar";

interface EditEventPageProps {
  params: Promise<{ id: string }>;
}

const EditEventPage = ({ params }: EditEventPageProps) => {
  const router = useRouter();
  const [eventId, setEventId] = useState<string | null>(null);
  const [eventData, setEventData] = useState<EventFormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const resolvedParams = await params;
        const id = resolvedParams.id;
        setEventId(id);

        const response = await fetch(`/api/events/${id}`);

        if (response.status === 401) {
          router.push("/login");
          return;
        }

        if (!response.ok) {
          throw new Error("Error al cargar el evento");
        }

        const result = await response.json();
        const formData = transformEventToFormData(result.event);
        setEventData(formData);
      } catch (error) {
        console.error("Error fetching event:", error);
        setErrorMessage(
          "Error al cargar los datos del evento. Por favor intenta nuevamente.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [params, router]);

  if (isLoading) {
    return <Loader />;
  }

  if (errorMessage) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center p-10">
        <ErrorSnackbar
          message={errorMessage}
          onClose={() => {
            setErrorMessage(null);
            router.push("/admin/events");
          }}
        />
      </div>
    );
  }

  if (!eventData || !eventId) {
    return null;
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-10">
      <EventForm initialData={eventData} eventId={eventId} />
    </div>
  );
};

export default EditEventPage;
