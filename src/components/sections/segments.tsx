'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/translation-context';

export function SegmentsSection() {
  const { dictionary } = useTranslation();
  const showcase = dictionary.segmentsShowcase;

  return (
    <section id="segments" className="relative py-20">
      <div className="blur-overlay" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="section-title">{showcase.title}</h2>
          <p className="section-description">{showcase.description}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {showcase.cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-6 text-slate-900 shadow-xl backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/90 dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
            >
              <div>
                <h3 className="text-lg font-semibold leading-tight">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-600 transition group-hover:text-slate-800 dark:text-white/70 dark:group-hover:text-white">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-slate-500 dark:text-white/50">
                {card.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-slate-700 transition group-hover:border-slate-900/20 group-hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white/70 dark:group-hover:border-white/30"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-slate-400 transition group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
