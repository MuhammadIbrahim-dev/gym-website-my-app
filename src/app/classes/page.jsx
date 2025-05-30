"use client";
import React from "react";

const classTypes = [
  { name: "HIIT", desc: "High-Intensity Interval Training for fat loss and endurance." },
  { name: "Yoga", desc: "Flexibility, balance, and mindfulness sessions." },
  { name: "Strength", desc: "Build muscle and power with expert guidance." },
  { name: "Cardio", desc: "Heart-pumping workouts for all levels." },
  { name: "Functional", desc: "Improve daily movement and athleticism." },
  { name: "Spin", desc: "High-energy cycling classes with music." },
];

export default function Classes() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <section className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Our Classes</h1>
        <p className="text-lg md:text-2xl mb-6">Find your perfect class and elevate your fitness journey.</p>
      </section>
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
        {classTypes.map((c, i) => (
          <div key={i} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-bold mb-2 text-yellow-400">{c.name}</h2>
            <p className="text-gray-200">{c.desc}</p>
          </div>
        ))}
      </section>
      <section className="max-w-4xl mx-auto text-center animate-fade-in-up mb-16">
        <h2 className="text-2xl font-bold mb-2 text-yellow-400">Book Your Class</h2>
        <p className="mb-4">Reserve your spot in any class with our easy online booking system.</p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold shadow-lg hover:scale-105 transition-transform duration-300">Book Now</button>
      </section>
      <section className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-2 text-yellow-400">Meet Our Trainers</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {[1,2,3].map(i => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 shadow-lg w-48 hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 mb-4 animate-pulse" />
              <h3 className="font-bold text-lg mb-1">Trainer {i}</h3>
              <p className="text-sm text-gray-300">Specialist in {classTypes[i%classTypes.length].name}</p>
            </div>
          ))}
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