"use client";
import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <section className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">About MyGym</h1>
        <p className="text-lg md:text-2xl mb-6">Experience luxury, community, and transformation at MyGym.</p>
      </section>
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">Our Story</h2>
          <p className="mb-4">Founded with a passion for fitness and well-being, MyGym has become a sanctuary for those seeking excellence. Our state-of-the-art facility and world-class trainers empower every member to reach their full potential.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 text-yellow-400">Our Mission</h2>
          <p className="mb-4">To inspire and support our community in achieving their fitness goals through innovation, luxury, and a commitment to excellence.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto mb-16 animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 mb-4 animate-pulse" />
              <h3 className="font-bold text-lg mb-1">Trainer {i}</h3>
              <p className="text-sm text-gray-300">Specialist in strength, cardio, and transformation.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-2 text-yellow-400">The Luxury Experience</h2>
        <p className="mb-4">From our premium equipment to our spa-like amenities, every detail at MyGym is designed for your comfort and success. Join us and discover a new standard in fitness.</p>
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