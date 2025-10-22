export default function ExamplesSection() {
  return (
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
                    The August dip coincided with your main competitor&apos;s product launch. September&apos;s surge suggests your Q4 marketing campaign messaging around differentiation is working. <strong className="text-indigo-600">Recommendation:</strong> Double down on competitive positioning and allocate 30% more budget to the channels driving September&apos;s growth.
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
  );
}