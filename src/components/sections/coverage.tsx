'use client';

import { MapPin } from 'lucide-react';
import { useTranslation } from '@/lib/translation-context';

export function CoverageSection() {
  const { dictionary } = useTranslation();

  return (
    <section id="coverage" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="section-title">{dictionary.coverage.title}</h2>
          <p className="section-description">{dictionary.coverage.description}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70 shadow-2xl transition dark:border-white/10 dark:bg-slate-950/60">
            <iframe
              title="Coverage map"
              src="https://www.google.com/maps/d/embed?mid=1eCLkIAvzk1lIo0NGdisz8Iky3UOwvxE&ehbc=2E312F"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
          <div className="glass-panel p-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{dictionary.coverage.label}</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-white/70">
              {dictionary.coverage.cities.map((city) => (
                <li key={city} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 shadow-sm dark:bg-white/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </span>
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
