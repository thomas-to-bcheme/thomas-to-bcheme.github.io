import { GoogleGenerativeAI } from "@google/generative-ai";
import AiSystemInformation from "@/data/AiSystemInformation"

// 1. Initialize Google SDK
// Ensure GOOGLE_API_KEY is set in your .env.local file
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export async function POST(req: Request) {
  try {
    // 2. Parse Input
    const { messages } = await req.json();

    // 3. Transform Messages for Google
    // Google needs: { role: 'user' | 'model', parts: [{ text: '...' }] }
    const history = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    // 4. Initialize Model (Using the fixed version '001')
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3-flash-preview", // <--- Ensure this is a colon ':', not equals '='
      systemInstruction: AiSystemInformation 
    });

    const chat = model.startChat({
      history: history.slice(0, -1),
    });

    // 5. Send Message
    const lastMessage = history[history.length - 1].parts[0].text;
    const result = await chat.sendMessageStream(lastMessage);

    // 6. Manual Stream Response
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            controller.enqueue(encoder.encode(chunkText));
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: 'Server Error' }), { status: 500 });
  }
}