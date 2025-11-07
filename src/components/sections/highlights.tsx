'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/translation-context';

export function HighlightsSection() {
  const { dictionary } = useTranslation();

  return (
    <section id="highlights" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="section-title">{dictionary.highlightsIntro.title}</h2>
          <p className="section-description">{dictionary.highlightsIntro.description}</p>
        </div>
        <div className="card-grid">
          {dictionary.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-glass"
            >
              <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
              <p className="text-sm text-white/70">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
