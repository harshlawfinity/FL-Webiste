// app/api/submit-contact/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const text = await req.text();
    const params = new URLSearchParams(text);

    const name = params.get("name");
    const email = params.get("email");
    const contact = params.get("contact");
    const service = params.get("service");

    if (!name || !email || !contact) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const sheetData = new URLSearchParams();
    sheetData.append("name", name);
    sheetData.append("email", email);
    sheetData.append("contact", contact);
    sheetData.append("service", service);
    sheetData.append("source", "default"); // Optional

    const res = await fetch("https://script.google.com/macros/s/AKfycbwuj8N_-Atb9VX7Bkux3ILIh5IHGriM6pvr4VpU9PMbXNvdIVWc81LeXy4Ztbq-IVCraA/exec", {
      method: "POST",
      body: sheetData,
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to write to sheet" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}