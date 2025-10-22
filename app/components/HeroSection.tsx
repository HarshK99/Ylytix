import Link from "next/link";
import { Brain, ArrowRight, BarChart3, Eye } from "lucide-react";

export default function HeroSection() {
  return (
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
            <h1 className="font-bold text-gray-900 dark:text-white mb-6">
              <div className="text-3xl lg:text-4xl text-gray-500 mb-2">stop just reporting,</div>
              <div className="text-5xl lg:text-6xl">start <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">insighting</span></div>
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
  );
}