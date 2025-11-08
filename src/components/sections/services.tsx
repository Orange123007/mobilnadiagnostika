'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/translation-context';

export function ServicesSection() {
  const { dictionary } = useTranslation();

  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="section-title">{dictionary.services.title}</h2>
          <p className="section-description">{dictionary.services.description}</p>
        </div>
        <div className="card-grid">
          {dictionary.services.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-glass"
              id={index === 1 ? 'electro' : undefined}
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="text-sm text-slate-600 dark:text-white/70">{card.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-white/60">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
