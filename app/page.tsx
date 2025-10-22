"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ExamplesSection from "./components/ExamplesSection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";

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
        <HeroSection />
        <ExamplesSection />
        <ContactSection 
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}