import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/app/lib/mongodb";
import Event from "@/app/api/DAO/models/event.model";

// GET - Obtener todos los eventos
export async function GET() {
  try {
    await connectMongoDB();

    const events = await Event.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ events, count: events.length }, { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { message: "Error al obtener los eventos", error },
      { status: 500 },
    );
  }
}

// POST - Crear un nuevo evento
export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();

    const body = await request.json();

    const newEvent = new Event(body);
    await newEvent.save();

    return NextResponse.json(
      { message: "Evento creado exitosamente", event: newEvent },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { message: "Error al crear el evento", error },
      { status: 500 },
    );
  }
}
