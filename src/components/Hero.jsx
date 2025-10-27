import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[60vh] md:h-[70vh] w-full">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

      <div className="absolute inset-x-0 bottom-6 md:bottom-10 flex justify-center">
        <div className="pointer-events-auto max-w-3xl text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-rose-600 to-orange-500">
            One place for your social and chats
          </h1>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
            A playful blend of stories, reels, and instant messaging inspired by your favorite apps.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
              Start Exploring
            </button>
            <button className="px-5 py-2.5 rounded-full border border-slate-300 bg-white text-slate-800 text-sm font-medium hover:bg-slate-50">
              Open Messages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
