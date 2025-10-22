import { Brain, MessageCircle, TrendingUp } from "lucide-react";

export default function FeaturesSection() {
  return (
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
  );
}