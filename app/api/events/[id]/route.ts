import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/app/lib/mongodb";
import Event from "@/app/api/DAO/models/event.model";

// GET - Obtener un evento por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectMongoDB();
    const { id } = await params;

    const event = await Event.findById(id);

    if (!event) {
      return NextResponse.json(
        { message: "Evento no encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json({ event }, { status: 200 });
  } catch (error) {
    console.error("Error fetching event:", error);
    return NextResponse.json(
      { message: "Error al obtener el evento", error },
      { status: 500 },
    );
  }
}

// PUT - Actualizar un evento por ID
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectMongoDB();
    const { id } = await params;

    const body = await request.json();

    const updatedEvent = await Event.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedEvent) {
      return NextResponse.json(
        { message: "Evento no encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Evento actualizado exitosamente", event: updatedEvent },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json(
      { message: "Error al actualizar el evento", error },
      { status: 500 },
    );
  }
}

// DELETE - Eliminar un evento por ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectMongoDB();
    const { id } = await params;

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return NextResponse.json(
        { message: "Evento no encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Evento eliminado exitosamente", event: deletedEvent },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      { message: "Error al eliminar el evento", error },
      { status: 500 },
    );
  }
}
