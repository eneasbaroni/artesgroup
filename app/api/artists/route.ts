import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/app/lib/mongodb";
import Artist from "@/app/api/DAO/models/artist.model";

// GET - Obtener todos los artistas
export async function GET() {
  try {
    await connectMongoDB();

    const artists = await Artist.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { artists, count: artists.length },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching artists:", error);
    return NextResponse.json(
      { message: "Error al obtener los artistas", error },
      { status: 500 },
    );
  }
}

// POST - Crear un nuevo artista
export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();

    const body = await request.json();

    const newArtist = new Artist(body);
    await newArtist.save();

    return NextResponse.json(
      { message: "Artista creado exitosamente", artist: newArtist },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating artist:", error);
    return NextResponse.json(
      { message: "Error al crear el artista", error },
      { status: 500 },
    );
  }
}
