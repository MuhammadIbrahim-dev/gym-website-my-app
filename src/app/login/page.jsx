"use client";
import React from "react";

export default function Login() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 shadow-lg animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center">Login to MyGym</h1>
        <form className="space-y-6">
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="password" placeholder="Password" className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <button type="submit" className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold shadow-lg hover:scale-105 transition-transform duration-300">Login</button>
        </form>
        <div className="text-center mt-4">
          <a href="/signup" className="text-yellow-400 hover:text-orange-500 transition-colors duration-300">Don&apos;t have an account? Sign up</a>
        </div>
      </div>
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