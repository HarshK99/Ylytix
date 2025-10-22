import Link from "next/link";
import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-indigo-400" />
              <span className="text-xl font-bold">Ylytix</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transform your data into actionable insights with AI-powered analysis. 
              Stop just reporting, start insighting.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/tool" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                AI Analyzer
              </Link>
              <Link 
                href="#about" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@ylytix.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Gurugram, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ylytix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}