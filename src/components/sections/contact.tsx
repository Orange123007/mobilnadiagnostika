'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/lib/translation-context';

export function ContactSection() {
  const { dictionary } = useTranslation();

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-10"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="section-title mb-6">{dictionary.cta.title}</h2>
              <p className="text-base text-white/70">{dictionary.cta.description}</p>
              <div className="mt-10 grid gap-4 text-sm text-white/80">
                <a
                  href="tel:+359888000000"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  +359 888 000 000
                </a>
                <a
                  href="mailto:contact@mobilnadiagnostika.bg"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  contact@mobilnadiagnostika.bg
                </a>
                <a
                  href="viber://chat?number=%2B359888000000"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Viber Chat
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/40">Име / Name</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/40">Телефон / Phone</label>
                  <input
                    type="tel"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                    placeholder=""
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/40">Имейл / Email</label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                  placeholder=""
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/40">Какъв автомобил?</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                  placeholder="BMW X5, Toyota Prius, Tesla Model Y..."
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/40">Описание</label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                  placeholder="Разкажете какъв тип диагностика или проверка е нужна"
                />
              </div>
              <button
                type="submit"
                className="glass-button inline-flex items-center gap-2 bg-primary/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary"
              >
                <Send className="h-4 w-4" />
                {dictionary.cta.button}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
