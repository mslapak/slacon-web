// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,      // Ujistěte se, že máte v .env.local
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    // volání nového SDK
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: message }
      ],
    });

    const reply = res.choices?.[0]?.message?.content || "Omlouvám se, nepochopil jsem to.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: error.message || String(error) }, { status: 500 });
  }
}
