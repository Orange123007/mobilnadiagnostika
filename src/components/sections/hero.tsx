'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '@/lib/translation-context';

export function HeroSection() {
  const { dictionary } = useTranslation();

  return (
    <section className="relative overflow-hidden py-24" id="hero">
      <div className="blur-overlay" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-button text-xs uppercase tracking-[0.3em] text-white"
        >
          {dictionary.hero.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="hero-gradient bg-clip-text text-balance text-4xl font-semibold text-transparent md:text-6xl"
        >
          {dictionary.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl text-lg text-slate-300"
        >
          {dictionary.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="glass-button bg-primary/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-primary"
          >
            {dictionary.hero.ctas.primary}
          </Link>
          <Link
            href="#american"
            className="glass-button px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
          >
            {dictionary.hero.ctas.secondary}
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-white/40"
        >
          {dictionary.hero.trustedBy}
        </motion.p>
      </div>
    </section>
  );
}
