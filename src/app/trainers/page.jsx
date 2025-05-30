"use client";
import React from "react";

const trainers = [
  { name: "Alex Strong", specialty: "Strength & Conditioning", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Mia Flex", specialty: "Yoga & Flexibility", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Chris Cardio", specialty: "Cardio & HIIT", img: "https://randomuser.me/api/portraits/men/65.jpg" },
  { name: "Sophie Spin", specialty: "Spin & Endurance", img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

export default function Trainers() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <section className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Meet Our Trainers</h1>
        <p className="text-lg md:text-2xl mb-6">Our expert trainers are here to guide and inspire you.</p>
      </section>
      <section className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 mb-16 animate-fade-in-up">
        {trainers.map((t, i) => (
          <div key={i} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center">
            <img src={t.img} alt={t.name} className="w-24 h-24 rounded-full mb-4 border-4 border-yellow-400 shadow-lg object-cover animate-pulse" />
            <h2 className="text-xl font-bold mb-1 text-yellow-400">{t.name}</h2>
            <p className="text-gray-200 mb-2">{t.specialty}</p>
            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.</p>
          </div>
        ))}
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