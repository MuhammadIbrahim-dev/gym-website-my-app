"use client";
import React from "react";
import Banner from "./Components/Banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Banner />
      <section className="max-w-6xl mx-auto py-16 px-4 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center">Why Choose MyGym?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 text-center">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Luxury Facilities</h3>
            <p className="text-gray-200">Enjoy premium equipment, spa amenities, and a pristine environment.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 text-center">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Expert Trainers</h3>
            <p className="text-gray-200">Our certified trainers are dedicated to your success and transformation.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 text-center">
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Vibrant Community</h3>
            <p className="text-gray-200">Join a supportive, motivating community that celebrates every achievement.</p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto text-center py-12 animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">Start Your Fitness Journey Today</h2>
        <p className="mb-6">Sign up now and experience the ultimate in fitness luxury, innovation, and support.</p>
        <a href="/signup" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold shadow-lg hover:scale-105 transition-transform duration-300">Join Now</a>
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
