import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.text();
    const params = new URLSearchParams(body);

    const name = params.get("name");
    const phone = params.get("phone") || params.get("contact");
    const email = params.get("email");
    const state = params.get("state");
    const city = params.get("city");
    const description = params.get("description");
    const pageSource = params.get("pageSource") || params.get("pageUrl");
    const timestamp = params.get("timestamp");
    const source = params.get("source");

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sheetData = new URLSearchParams();
    sheetData.append("name", name);
    sheetData.append("phone", phone);
    sheetData.append("email", email);
    sheetData.append("state", state || "");
    sheetData.append("city", city || "");
    sheetData.append("description", description);
    sheetData.append("pageSource", pageSource);
    sheetData.append("timestamp", timestamp);
    sheetData.append("source", source);

    const googleScriptURL =
      "https://script.google.com/macros/s/AKfycbzHo9imgK0mxejZhOfSxypBNrBcEf3FA2BavP2g27BTRdXcu2BKR9mWjRWAbTRR2w9_/exec";

    const res = await fetch(googleScriptURL, {
      method: "POST",
      body: sheetData,
    });

    if (!res.ok) {
      console.error("Google Apps Script error:", await res.text());
      return NextResponse.json(
        { error: "Failed to write to sheet" },
        { status: 502 }
      );
    }

    try {
      await fetch("https://internal.lawfinity.in/api/sales/organic-factory-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          state: state || "",
          city: city || "",
          description,
          pageSource,
          timestamp,
          source,
        }),
      });
    } catch (error) {
      console.error("Webhook error:", error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
