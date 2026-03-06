import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/app/lib/mongodb";
import Artist from "@/app/api/DAO/models/artist.model";

// GET - Obtener un artista por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectMongoDB();
    const { id } = await params;

    const artist = await Artist.findById(id);

    if (!artist) {
      return NextResponse.json(
        { message: "Artista no encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json({ artist }, { status: 200 });
  } catch (error) {
    console.error("Error fetching artist:", error);
    return NextResponse.json(
      { message: "Error al obtener el artista", error },
      { status: 500 },
    );
  }
}

// PUT - Actualizar un artista por ID
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectMongoDB();
    const { id } = await params;

    const body = await request.json();

    const updatedArtist = await Artist.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedArtist) {
      return NextResponse.json(
        { message: "Artista no encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Artista actualizado exitosamente", artist: updatedArtist },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating artist:", error);
    return NextResponse.json(
      { message: "Error al actualizar el artista", error },
      { status: 500 },
    );
  }
}

// DELETE - Eliminar un artista por ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectMongoDB();
    const { id } = await params;

    const deletedArtist = await Artist.findByIdAndDelete(id);

    if (!deletedArtist) {
      return NextResponse.json(
        { message: "Artista no encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Artista eliminado exitosamente", artist: deletedArtist },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting artist:", error);
    return NextResponse.json(
      { message: "Error al eliminar el artista", error },
      { status: 500 },
    );
  }
}
