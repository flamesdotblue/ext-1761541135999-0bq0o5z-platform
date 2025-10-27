import React from 'react';
import { Home, Search, Plus, MessageCircle, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-orange-400" />
          <span className="font-semibold tracking-tight text-slate-800">Social Blend</span>
        </div>

        <div className="hidden md:flex items-center max-w-md w-full mx-6">
          <div className="flex items-center gap-2 w-full bg-slate-100/80 border border-slate-200 rounded-full px-3 py-2">
            <Search className="w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search people, chats, or posts"
              className="bg-transparent w-full outline-none text-sm placeholder-slate-500"
            />
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-slate-100" aria-label="Home">
            <Home className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100" aria-label="New Post">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100" aria-label="Messages">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="p-1 rounded-full border border-slate-200 hover:border-slate-300" aria-label="Profile">
            <User className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
