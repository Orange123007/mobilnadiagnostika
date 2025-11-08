'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '@/lib/translation-context';

export function FAQSection() {
  const { dictionary } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="section-title">{dictionary.faq.title}</h2>
          <p className="section-description mx-auto text-slate-600 dark:text-white/70">{dictionary.faq.description}</p>
        </div>
        <div className="space-y-4">
          {dictionary.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70 p-6 text-slate-700 shadow-md backdrop-blur-xl transition dark:border-white/10 dark:bg-white/5 dark:text-white/80"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between text-left"
                  type="button"
                >
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden text-sm text-slate-600 dark:text-white/70"
                >
                  <p className="mt-4 leading-relaxed">{item.answer}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
