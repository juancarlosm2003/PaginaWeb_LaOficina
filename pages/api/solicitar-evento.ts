import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ok: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Método no permitido" });
  }

  // NOMBRES EXACTOS DEL FORMULARIO
  const { nombre, correo, tipo, fecha, mensaje } = req.body;

  // Validación básica
  if (!nombre || !correo || !tipo || !fecha) {
    return res.status(400).json({
      ok: false,
      message: "Por favor completa los campos obligatorios.",
    });
  }

  // Mostrar solicitud en consola (de momento)
  console.log("📩 Nueva solicitud de evento:", {
    nombre,
    correo,
    tipo,
    fecha,
    mensaje,
  });

  return res.status(200).json({
    ok: true,
    message: "Solicitud enviada correctamente. ¡Gracias!",
  });
}
