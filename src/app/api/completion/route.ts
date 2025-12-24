// src/app/api/completion/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// 1. Initialize Google Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    // 2. Select the Model (Gemini Pro is comparable to GPT-3.5/4)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 3. Generate Content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 4. Return JSON
    return NextResponse.json({ text });

  } catch (error) {
    console.error('Gemini Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate text' },
      { status: 500 }
    );
  }
}