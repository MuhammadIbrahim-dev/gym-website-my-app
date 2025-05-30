"use client";
import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <section className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Contact Us</h1>
        <p className="text-lg md:text-2xl mb-6">We'd love to hear from you! Reach out with any questions or to book a tour.</p>
      </section>
      <section className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg mb-16 animate-fade-in-up">
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" rows={4} />
          <button type="submit" className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold shadow-lg hover:scale-105 transition-transform duration-300">Send Message</button>
        </form>
      </section>
      <section className="max-w-4xl mx-auto text-center animate-fade-in-up mb-12">
        <div className="mb-4">
          <div className="w-full h-56 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">[Map Placeholder]</div>
        </div>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-yellow-400 hover:text-orange-500 text-2xl transition-colors duration-300">&#x1F4F1;</a>
          <a href="#" className="text-yellow-400 hover:text-orange-500 text-2xl transition-colors duration-300">&#x1F4E7;</a>
          <a href="#" className="text-yellow-400 hover:text-orange-500 text-2xl transition-colors duration-300">&#x1F4F7;</a>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </main>
  );
} 