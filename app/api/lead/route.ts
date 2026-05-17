import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, eventType, eventDate, budget, phone } = body as Record<string, string>;

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json({ ok: false, reason: "no_key" });
  }

  const html = `
    <h2 style="font-family:sans-serif;color:#1a1416">Nueva consulta — Crealtiva Studio</h2>
    <table style="font-family:sans-serif;font-size:14px;color:#1a1416;border-collapse:collapse">
      <tr><td style="padding:6px 16px 6px 0;font-weight:600">Nombre</td><td>${name}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;font-weight:600">Evento</td><td>${eventType}</td></tr>
      ${eventDate ? `<tr><td style="padding:6px 16px 6px 0;font-weight:600">Fecha tentativa</td><td>${eventDate}</td></tr>` : ""}
      ${budget ? `<tr><td style="padding:6px 16px 6px 0;font-weight:600">Presupuesto</td><td>${budget}</td></tr>` : ""}
      ${phone ? `<tr><td style="padding:6px 16px 6px 0;font-weight:600">Teléfono</td><td>${phone}</td></tr>` : ""}
    </table>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Crealtiva Web <noreply@crealtivaestudio.com>",
      to: ["info@crealtivastudio.com"],
      subject: `Nueva consulta de ${name} — ${eventType}`,
      html,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, reason: "send_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
