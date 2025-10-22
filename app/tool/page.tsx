"use client";

import { useState } from "react";
import { Send, MessageCircle, FileText, Brain } from "lucide-react";
import ChatInterface from "./components/ChatInterface";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ToolPage() {
  const [reportData, setReportData] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmitReport = async () => {
    if (!reportData.trim()) return;

    setIsAnalyzing(true);
    
    try {
      // Send the report to OpenAI for initial analysis and question generation
      const response = await fetch("/api/analyze-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reportData }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze report");
      }

      const result = await response.json();
      
      // Initialize chat with AI's initial questions
      const initialMessage: Message = {
        role: "assistant",
        content: result.initialQuestions,
        timestamp: new Date(),
      };

      setMessages([initialMessage]);
      setHasStartedChat(true);
    } catch (error) {
      console.error("Error analyzing report:", error);
      alert("Error analyzing report. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSendMessage = async (userMessage: string) => {
    const newUserMessage: Message = {
      role: "user",
      content: userMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newUserMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, newUserMessage],
          reportData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const result = await response.json();
      
      const aiMessage: Message = {
        role: "assistant",
        content: result.message,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "I apologize, but I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const resetTool = () => {
    setReportData("");
    setHasStartedChat(false);
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                AI Report Analyzer
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Submit your report data and engage in an AI-powered conversation to uncover deeper insights
            </p>
          </div>

          {!hasStartedChat ? (
            /* Report Input Section */
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Submit Your Report Data
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Report Content
                  </label>
                  <textarea
                    value={reportData}
                    onChange={(e) => setReportData(e.target.value)}
                    placeholder="Paste your report data here... Include metrics, findings, observations, or any data you'd like to analyze and gain insights from."
                    className="w-full h-48 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    disabled={isAnalyzing}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {reportData.length} characters
                  </p>
                  <button
                    onClick={handleSubmitReport}
                    disabled={!reportData.trim() || isAnalyzing}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Start Analysis
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Chat Section */
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-indigo-600" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      AI Insights Chat
                    </h2>
                  </div>
                  <button
                    onClick={resetTool}
                    className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  >
                    New Analysis
                  </button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Explore your data through AI-powered questions and insights
                </p>
              </div>
              
              <ChatInterface
                messages={messages}
                onSendMessage={handleSendMessage}
                reportData={reportData}
              />
            </div>
          )}

          {/* Features Section */}
          {!hasStartedChat && (
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Smart Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AI analyzes your report data and generates relevant questions to explore insights.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Interactive Chat
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Engage in a natural conversation to dive deeper into your data insights.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  AI Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Discover patterns, trends, and actionable insights powered by AI analysis.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}