import { mkdir, appendFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const lead = {
    name,
    email,
    phone: body.phone?.trim() ?? "",
    service: body.service?.trim() ?? "",
    message,
    at: new Date().toISOString(),
  };

  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "leads.jsonl"), `${JSON.stringify(lead)}\n`);

  return NextResponse.json({ ok: true });
}
