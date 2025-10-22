import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { reportData } = await request.json();

    if (!reportData) {
      return NextResponse.json(
        { error: "Report data is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const prompt = `
You are an expert data analyst and business insights consultant. I have provided you with report data that needs analysis. Your job is to:

1. Analyze the key information, metrics, and patterns in the data
2. Generate 3-5 insightful questions that would help uncover deeper insights
3. Provide an initial assessment of what stands out in the data

Please format your response in a conversational way, starting with a brief analysis and then asking the follow-up questions.

Report Data:
${reportData}

Please provide your initial analysis and follow-up questions:`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert data analyst who helps users understand their report data by asking insightful questions and providing actionable insights. Be conversational, curious, and focus on actionable business insights."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const initialQuestions = completion.choices[0]?.message?.content || "I'd be happy to help analyze your report data. Could you tell me more about the specific metrics or areas you'd like to focus on?";

    return NextResponse.json({ initialQuestions });
  } catch (error) {
    console.error("Error analyzing report:", error);
    return NextResponse.json(
      { error: "Failed to analyze report" },
      { status: 500 }
    );
  }
}