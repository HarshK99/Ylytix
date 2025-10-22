import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export async function POST(request: NextRequest) {
  try {
    const { messages, reportData } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    // Convert our messages to OpenAI format
    const openaiMessages = [
      {
        role: "system" as const,
        content: `You are an expert data analyst and business consultant helping a user understand their report data and uncover actionable insights. 

Context - Original Report Data:
${reportData}

Your role:
- Ask insightful follow-up questions based on the user's responses
- Provide specific, actionable insights and recommendations
- Help identify patterns, trends, and opportunities in the data
- Be conversational but professional
- Focus on practical business implications
- When appropriate, suggest specific metrics to track or actions to take

Always reference the original report data when relevant and help the user dig deeper into areas that could drive business value.`
      },
      ...messages.map((msg: Message) => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: openaiMessages,
      max_tokens: 1000,
      temperature: 0.7,
    });

    const message = completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Could you please rephrase your question?";

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Error in chat:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
}