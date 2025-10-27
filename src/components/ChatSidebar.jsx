import React, { useMemo } from 'react';
import { MessageCircle, Phone, Video, Search } from 'lucide-react';

const chats = [
  { id: 'c1', name: 'Team Design', avatar: 'https://i.pravatar.cc/100?img=21', last: 'Moodboard looks amazing! 🎨', time: '1m', online: true },
  { id: 'c2', name: 'Leo Park', avatar: 'https://i.pravatar.cc/100?img=14', last: 'Let’s jump on a quick call?', time: '7m', online: true },
  { id: 'c3', name: 'Maya Kapoor', avatar: 'https://i.pravatar.cc/100?img=47', last: 'Sending the reels now.', time: '12m', online: false },
  { id: 'c4', name: 'Weekend Crew', avatar: 'https://i.pravatar.cc/100?img=8', last: 'Brunch at 11?', time: '1h', online: false },
  { id: 'c5', name: 'Nadia', avatar: 'https://i.pravatar.cc/100?img=61', last: 'New playlist drop 🔥', time: '3h', online: true },
];

export default function ChatSidebar() {
  const list = useMemo(() => chats, []);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Chats</h3>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-slate-100" aria-label="Message">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100" aria-label="Call">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100" aria-label="Video">
              <Video className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 bg-slate-100/80 border border-slate-200 rounded-full px-3 py-2">
          <Search className="w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search chats"
            className="bg-transparent w-full outline-none text-sm placeholder-slate-500"
          />
        </div>
      </div>

      <ul className="divide-y divide-slate-100 max-h-[520px] overflow-y-auto">
        {list.map((c) => (
          <li key={c.id} className="p-4 hover:bg-slate-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={c.avatar} alt={c.name} className="w-11 h-11 rounded-full object-cover" />
                <span
                  className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${c.online ? 'bg-emerald-500' : 'bg-slate-300'}`}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium truncate">{c.name}</p>
                  <span className="text-xs text-slate-500 flex-shrink-0">{c.time}</span>
                </div>
                <p className="text-sm text-slate-600 truncate">{c.last}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
