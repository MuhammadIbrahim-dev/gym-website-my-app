"use client";
import React from "react";

const galleryItems = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80', alt: 'Gallery 1' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', alt: 'Gallery 2' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Gallery 3' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?auto=format&fit=crop&w=400&q=80', alt: 'Gallery 4' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', alt: 'Gallery 5' },
  { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4', alt: 'Gallery 6' },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <section className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Gallery</h1>
        <p className="text-lg md:text-2xl mb-6">Explore our gym, classes, and community in action.</p>
      </section>
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in-up">
        {galleryItems.map((item, i) => (
          <div key={i} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="w-full h-56 object-cover" />
            ) : (
              <video src={item.src} controls className="w-full h-56 object-cover" />
            )}
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