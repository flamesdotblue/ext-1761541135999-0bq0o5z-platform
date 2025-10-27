import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialFeed from './components/SocialFeed';
import ChatSidebar from './components/ChatSidebar';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">{/* Top Navigation */}
      <Navbar />

      {/* Hero with Spline Animation */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-8 space-y-6">
          <SocialFeed />
        </section>
        <aside className="lg:col-span-4">
          <ChatSidebar />
        </aside>
      </main>

      <footer className="py-8 text-center text-sm text-slate-500">
        Built as a playful mashup of social and messaging vibes. Not affiliated with Instagram, WhatsApp, or imo.
      </footer>
    </div>
  );
}
