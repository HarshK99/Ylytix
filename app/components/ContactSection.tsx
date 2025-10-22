"use client";

import { Send } from "lucide-react";

interface ContactSectionProps {
  formData: {
    name: string;
    email: string;
  };
  setFormData: (data: { name: string; email: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ContactSection({ formData, setFormData, handleSubmit }: ContactSectionProps) {
  return (
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
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Full Name"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Email Address"
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
              No commitment required. We&apos;ll show you exactly how AI can work with your data.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}