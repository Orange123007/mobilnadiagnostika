'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '@/lib/translation-context';

export function AmericanSection() {
  const { dictionary } = useTranslation();

  return (
    <section id="american" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="glass-panel p-10"
          >
            <h2 className="section-title mb-6">{dictionary.american.title}</h2>
            <p className="text-base text-slate-600 dark:text-white/80">{dictionary.american.description}</p>
            <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-white/70">
              {dictionary.american.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary dark:bg-primary/40">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary"
            >
              {dictionary.american.cta}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-slate-900/10 bg-gradient-to-br from-primary/10 via-primary/5 to-white/40 p-10 text-slate-900 shadow-2xl transition dark:border-white/10 dark:from-primary/20 dark:via-primary/5 dark:to-transparent dark:text-white"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,178,255,0.25),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(0,178,255,0.3),_transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">USA Imports</span>
                <h3 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
                  AI-Driven Auction Intelligence
                </h3>
                <p className="mt-4 text-sm text-slate-600 dark:text-white/70">
                  Copilot dashboard с live данни за търгове, изчисляване на landed cost и прогнозни ремонти.
                </p>
              </div>
              <div className="grid gap-4 text-sm text-slate-600 dark:text-white/70">
                <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-md transition dark:border-white/10 dark:bg-white/5">
                  <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/50">Telemetry</div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">
                    Remote OBD | Crash data | Battery SOH
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-md transition dark:border-white/10 dark:bg-white/5">
                  <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/50">Reports</div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">Carfax, AutoCheck, OEM recalls</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
