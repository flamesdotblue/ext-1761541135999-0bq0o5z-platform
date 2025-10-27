import React, { useMemo, useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from 'lucide-react';

const samplePosts = [
  {
    id: '1',
    user: { name: 'Ava Chen', avatar: 'https://i.pravatar.cc/100?img=5' },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    caption: 'Coffee + code + good vibes.',
    likes: 1284,
    comments: 72,
    time: '2h',
  },
  {
    id: '2',
    user: { name: 'Noah Patel', avatar: 'https://i.pravatar.cc/100?img=12' },
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    caption: 'Golden hour on the coast.',
    likes: 980,
    comments: 34,
    time: '5h',
  },
  {
    id: '3',
    user: { name: 'Luna Diaz', avatar: 'https://i.pravatar.cc/100?img=32' },
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop',
    caption: 'City lights and late nights.',
    likes: 2103,
    comments: 140,
    time: '1d',
  },
];

export default function SocialFeed() {
  const [liked, setLiked] = useState({});
  const posts = useMemo(() => samplePosts, []);

  return (
    <div className="space-y-6">
      {/* Stories-like strip */}
      <div className="w-full overflow-x-auto">
        <div className="flex items-center gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <button key={i} className="flex-shrink-0 w-20">
              <div className="relative mx-auto w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-orange-400">
                <div className="w-full h-full rounded-full bg-white p-[2px]">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src={`https://i.pravatar.cc/100?img=${i + 1}`}
                    alt="story avatar"
                  />
                </div>
              </div>
              <p className="text-center text-xs mt-1 text-slate-600 truncate">Story {i + 1}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Composer */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
        <div className="flex gap-3">
          <img src="https://i.pravatar.cc/100?img=68" alt="me" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <input
                className="w-full bg-slate-100/80 border border-slate-200 rounded-full px-4 py-2 text-sm outline-none"
                placeholder="Share a moment..."
              />
              <button className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm">Post</button>
            </div>
            <div className="mt-2 flex items-center gap-3 text-slate-500 text-xs">
              <span className="inline-flex items-center gap-1"><Smile className="w-4 h-4" /> Feeling</span>
              <span className="inline-flex items-center gap-1">#hashtag</span>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <article key={post.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <header className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <img src={post.user.avatar} alt={post.user.name} className="w-9 h-9 rounded-full" />
              <div>
                <p className="text-sm font-medium">{post.user.name}</p>
                <p className="text-xs text-slate-500">{post.time} ago</p>
              </div>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-full" aria-label="More">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </header>

          <div className="aspect-[4/5] bg-slate-100">
            <img src={post.image} alt="post" className="w-full h-full object-cover" />
          </div>

          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLiked((l) => ({ ...l, [post.id]: !l[post.id] }))}
                  className={`p-2 rounded-full hover:bg-slate-100 ${liked[post.id] ? 'text-rose-500' : ''}`}
                  aria-label="Like"
                >
                  <Heart className="w-5 h-5" fill={liked[post.id] ? 'currentColor' : 'none'} />
                </button>
                <button className="p-2 rounded-full hover:bg-slate-100" aria-label="Comment">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-slate-100" aria-label="Share">
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <button className="p-2 rounded-full hover:bg-slate-100" aria-label="Save">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-2 text-sm font-medium">
              {new Intl.NumberFormat().format(post.likes + (liked[post.id] ? 1 : 0))} likes
            </p>
            <p className="mt-1 text-sm"><span className="font-medium">{post.user.name}</span> {post.caption}</p>
            <button className="mt-1 text-xs text-slate-500">View all {post.comments} comments</button>
          </div>
        </article>
      ))}
    </div>
  );
}
