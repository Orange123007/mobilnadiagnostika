'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '@/lib/translation-context';

export function ResourcesSection() {
  const { dictionary } = useTranslation();

  return (
    <section id="resources" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="section-title">{dictionary.resources.title}</h2>
          <p className="section-description">{dictionary.resources.description}</p>
        </div>
        <div className="card-grid">
          {dictionary.resources.items.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-glass"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/40">
                {dictionary.resources.tagLabel}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{resource.title}</h3>
              <p className="text-sm text-slate-600 dark:text-white/70">{resource.description}</p>
              <Link
                href={resource.href}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 dark:hover:text-white"
              >
                {dictionary.resources.actionLabel}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
