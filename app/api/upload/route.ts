import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    // Verificar configuración de Cloudinary
    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      console.error("CLOUDINARY_CLOUD_NAME no configurado");
      return NextResponse.json(
        { error: "CLOUDINARY_CLOUD_NAME no configurado" },
        { status: 500 },
      );
    }
    if (!process.env.CLOUDINARY_API_KEY) {
      console.error("CLOUDINARY_API_KEY no configurado");
      return NextResponse.json(
        { error: "CLOUDINARY_API_KEY no configurado" },
        { status: 500 },
      );
    }
    if (!process.env.CLOUDINARY_API_SECRET) {
      console.error("CLOUDINARY_API_SECRET no configurado");
      return NextResponse.json(
        { error: "CLOUDINARY_API_SECRET no configurado" },
        { status: 500 },
      );
    }

    console.log(
      "Cloudinary configurado con cloud_name:",
      process.env.CLOUDINARY_CLOUD_NAME,
    );

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No se recibió archivo" },
        { status: 400 },
      );
    }

    console.log("Archivo recibido:", file.name, "Tamaño:", file.size);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "artesgroup",
              resource_type: "auto",
            },
            (error, result) => {
              if (error) {
                console.error("Error de Cloudinary:", error);
                return reject(error);
              }
              if (!result) {
                console.error("No se recibió resultado de Cloudinary");
                return reject(new Error("No se recibió resultado"));
              }
              console.log("Upload exitoso:", result.secure_url);
              resolve(result);
            },
          )
          .end(buffer);
      },
    );

    return NextResponse.json({ url: result.secure_url });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error en upload:", error);
    return NextResponse.json(
      {
        error: error.message || "Error al subir imagen",
        details: error.http_code ? `HTTP ${error.http_code}` : undefined,
      },
      { status: 500 },
    );
  }
}
