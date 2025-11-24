import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Reseña = {
  id: number;
  nombre: string;
  mensaje: string;
  rating: number;
  fecha: string;
};

const filePath = path.join(process.cwd(), "data", "reseñas.json");

function leerReseñas(): Reseña[] {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function escribirReseñas(reseñas: Reseña[]) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(reseñas, null, 2), "utf8");
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const reseñas = leerReseñas();
    return res.status(200).json(reseñas);
  }

  if (req.method === "POST") {
    const { nombre, mensaje, rating } = req.body;

    if (!nombre || !mensaje) {
      return res
        .status(400)
        .json({ message: "Nombre y mensaje son obligatorios." });
    }

    const reseñas = leerReseñas();

    const nueva: Reseña = {
      id: Date.now(),
      nombre,
      mensaje,
      rating: Number(rating) || 5,
      fecha: new Date().toISOString(),
    };

    reseñas.unshift(nueva);
    escribirReseñas(reseñas);

    return res.status(201).json(nueva);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
