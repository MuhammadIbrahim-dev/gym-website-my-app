"use client";
import React from "react";

const plans = [
  { name: "Basic", price: "$39/mo", features: ["24/7 Access", "Locker Room", "Group Classes"] },
  { name: "Premium", price: "$69/mo", features: ["All Basic Features", "Personal Trainer", "Sauna & Spa", "Nutrition Plan"] },
  { name: "Elite", price: "$99/mo", features: ["All Premium Features", "Private Lounge", "Priority Booking", "Exclusive Events"] },
];

export default function Membership() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <section className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Membership Plans</h1>
        <p className="text-lg md:text-2xl mb-6">Choose your path to fitness luxury.</p>
      </section>
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
        {plans.map((plan, i) => (
          <div key={i} className="bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2 text-yellow-400">{plan.name}</h2>
            <div className="text-3xl font-extrabold mb-4">{plan.price}</div>
            <ul className="mb-6 text-gray-200">
              {plan.features.map((f, j) => <li key={j} className="mb-1">• {f}</li>)}
            </ul>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold shadow-lg hover:scale-105 transition-transform duration-300">Join Now</button>
          </div>
        ))}
      </section>
      <section className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-2 text-yellow-400">Why Choose MyGym?</h2>
        <p className="mb-4">Enjoy world-class amenities, expert trainers, and a vibrant community—all in a luxury setting designed for your success.</p>
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