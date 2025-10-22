"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Brain, ArrowRight, MessageCircle, FileText, TrendingUp, BarChart3, Eye, Send } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon to schedule your 1:1 consultation.");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="font-sans min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main>
        {/* Hero Section - Left Image, Right Content */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left Side - Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 h-fit">
                    {/* Mock Dashboard/Analytics Image */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-indigo-600" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Analytics Dashboard</h3>
                      </div>
                      
                      {/* Mock Chart */}
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-end h-32 gap-2">
                          <div className="bg-indigo-500 rounded-t w-8" style={{height: '60%'}}></div>
                          <div className="bg-blue-500 rounded-t w-8" style={{height: '80%'}}></div>
                          <div className="bg-green-500 rounded-t w-8" style={{height: '40%'}}></div>
                          <div className="bg-purple-500 rounded-t w-8" style={{height: '90%'}}></div>
                          <div className="bg-pink-500 rounded-t w-8" style={{height: '70%'}}></div>
                        </div>
                      </div>
                      
                      {/* Mock Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3">
                          <div className="text-2xl font-bold text-indigo-600">45%</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Growth Rate</div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                          <div className="text-2xl font-bold text-green-600">$2.4M</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Revenue</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating AI Icon */}
                  <div className="absolute -top-4 -right-4 bg-indigo-600 rounded-full p-4 shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="order-1 lg:order-2">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Stop just <span className="text-gray-500">reporting</span>,<br />
                  start <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">INSIGHTING</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Transform your raw data into actionable business intelligence with AI-powered analysis that goes beyond surface-level metrics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/tool"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg"
                  >
                    Try AI Analyzer
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="#examples"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors font-medium text-lg"
                  >
                    See Examples
                    <Eye className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                The Difference Between Reporting and Insighting
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how AI transforms basic data reporting into actionable business insights
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-16">
              {/* Example 1 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    {/* Mock Sales Chart */}
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Q3 Sales Performance</h3>
                      <div className="relative">
                        <div className="flex justify-between items-end h-40 gap-3">
                          <div className="flex flex-col items-center gap-2">
                            <div className="bg-red-500 rounded-t w-8" style={{height: '45%'}}></div>
                            <span className="text-xs text-gray-600 dark:text-gray-400">Jul</span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="bg-yellow-500 rounded-t w-8" style={{height: '60%'}}></div>
                            <span className="text-xs text-gray-600 dark:text-gray-400">Aug</span>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="bg-green-500 rounded-t w-8" style={{height: '85%'}}></div>
                            <span className="text-xs text-gray-600 dark:text-gray-400">Sep</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">$847K</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">Total Revenue</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Reporting */}
                    <div className="border-l-4 border-gray-400 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">📊 Reporting</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Q3 sales increased from $234K in July to $412K in September, showing 76% quarter growth.
                      </p>
                    </div>

                    {/* Insighting */}
                    <div className="border-l-4 border-indigo-500 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🧠 Insighting</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        The August dip coincided with your main competitor's product launch. September's surge suggests your Q4 marketing campaign messaging around differentiation is working. <strong className="text-indigo-600">Recommendation:</strong> Double down on competitive positioning and allocate 30% more budget to the channels driving September's growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    {/* Mock Customer Metrics */}
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Engagement Metrics</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Email Open Rate</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{width: '24%'}}></div>
                            </div>
                            <span className="text-sm font-medium">24%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Click-through Rate</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{width: '31%'}}></div>
                            </div>
                            <span className="text-sm font-medium">3.1%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                            <span className="text-sm font-medium">8.5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:order-1 space-y-6">
                    {/* Reporting */}
                    <div className="border-l-4 border-gray-400 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">📊 Reporting</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Email open rate is 24%, click-through rate is 3.1%, and conversion rate is 8.5%.
                      </p>
                    </div>

                    {/* Insighting */}
                    <div className="border-l-4 border-indigo-500 pl-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🧠 Insighting</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Your funnel has a leak: low open rates but high conversion rates indicate subject line issues, not content problems. Your audience is highly engaged once they open. <strong className="text-indigo-600">Recommendation:</strong> A/B test subject lines with urgency and personalization - you could potentially 3x your revenue by fixing this single bottleneck.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book 1:1 Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Book a 1:1 consultation to see how AI can unlock insights in your specific business data.
              </p>

              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg flex items-center justify-center gap-2"
                  >
                    Book Free Consultation
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  No commitment required. We'll show you exactly how AI can work with your data.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Ylytix?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Brain className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  AI-Powered Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced algorithms identify patterns and correlations humans might miss.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Interactive Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chat with AI to explore your data from multiple angles and perspectives.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Actionable Results
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get specific, implementable recommendations that drive business growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
