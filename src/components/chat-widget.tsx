'use client';

import { MessageCircle } from 'lucide-react';

export function ChatWidget() {
  return (
    <a
      href="viber://chat?number=%2B359888000000"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-2xl backdrop-blur-xl transition hover:bg-primary/80"
    >
      <MessageCircle className="h-5 w-5" />
      Viber
    </a>
  );
}
