'use client'
import React, { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const slides = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    alt: 'Banner 1',
    title: 'Strength & Power',
    description: 'Build muscle and push your limits with our state-of-the-art equipment.'
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    alt: 'Banner 2',
    title: 'Cardio Zone',
    description: 'Boost your endurance with our modern cardio machines and energetic classes.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    alt: 'Banner 3',
    title: 'Personal Training',
    description: 'Achieve your goals faster with our expert personal trainers.'
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/movie.mp4',
    alt: 'Banner 4',
    title: 'Group Classes',
    description: 'Stay motivated and have fun in our high-energy group fitness classes.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?auto=format&fit=crop&w=800&q=80',
    alt: 'Banner 5',
    title: 'Functional Training',
    description: 'Improve your everyday performance with functional workouts.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80',
    alt: 'Banner 6',
    title: 'Yoga & Flexibility',
    description: 'Enhance your flexibility and find your balance with our yoga sessions.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    alt: 'Banner 7',
    title: 'Nutrition Guidance',
    description: 'Fuel your body right with our personalized nutrition plans.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    alt: 'Banner 8',
    title: 'Recovery Zone',
    description: 'Relax and recover with our premium recovery facilities.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    alt: 'Banner 9',
    title: 'Open 24/7',
    description: 'Work out on your schedule with 24/7 gym access.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
    alt: 'Banner 10',
    title: 'Community Spirit',
    description: 'Join a supportive community that motivates you to succeed.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1467934466021-f2425a1b1b6b?auto=format&fit=crop&w=800&q=80',
    alt: 'Banner 11',
    title: 'Cutting-Edge Tech',
    description: 'Experience the latest in fitness technology and equipment.'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    alt: 'Banner 12',
    title: 'Your Fitness Journey',
    description: 'Start your transformation today at MyGym!'
  },
];

const fallbackImg = '/banners/fallback.jpg'; // Place a fallback image in public/banners/

const Banner = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: { perView: 1 },
    duration: 1000,
  });

  // Autoplay effect
  useEffect(() => {
    let interval;
    if (instanceRef.current) {
      interval = setInterval(() => {
        instanceRef.current.next();
      }, 4000); // 4 seconds per slide
    }
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((slide, idx) => (
          <div
            className="keen-slider__slide flex items-center justify-center relative group"
            key={idx}
          >
            {/* Background: image or video */}
            {slide.type === 'image' ? (
              <img
                src={slide.src}
                alt={slide.alt}
                onError={e => { e.target.onerror = null; e.target.src = fallbackImg; }}
                className="absolute inset-0 w-full h-full object-cover brightness-75 scale-105 group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover brightness-75 scale-105 group-hover:scale-110 transition-transform duration-700"
              />
            )}
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-white/10 to-transparent blur-2xl opacity-60 pointer-events-none animate-pulse" />
            {/* Animated content */}
            <div className="relative z-10 text-center text-white animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-4">{slide.title}</h2>
              <p className="text-lg md:text-2xl font-medium drop-shadow mb-6">{slide.description}</p>
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold shadow-lg hover:scale-105 transition-transform duration-300">Join Now</button>
            </div>
          </div>
        ))}
      </div>
      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  );
};

export default Banner;
