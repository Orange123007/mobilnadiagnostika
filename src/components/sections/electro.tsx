'use client';

import { BatteryCharging, Cpu, Radar, ShieldCheck } from 'lucide-react';
import { useTranslation } from '@/lib/translation-context';

const iconMap = {
  battery: BatteryCharging,
  shield: ShieldCheck,
  chip: Cpu,
  radar: Radar
} as const;

export function ElectroSection() {
  const { dictionary } = useTranslation();
  const electro = dictionary.electro;

  return (
    <section id="electro" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="section-title">{electro.title}</h2>
          <p className="section-description">{electro.description}</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {electro.cards.map((card) => {
              const iconKey = card.icon as keyof typeof iconMap;
              const Icon = iconMap[iconKey] ?? BatteryCharging;
              return (
                <div
                  key={card.title}
                  className="glass-panel flex flex-col gap-4 border-white/20 bg-white/80 p-6 text-slate-900 shadow-xl dark:border-white/10 dark:bg-slate-900/70 dark:text-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-semibold leading-tight">{card.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-white/70">{card.description}</p>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-white/60">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="glass-panel flex flex-col gap-4 p-6 text-slate-900 dark:text-white">
            <h3 className="text-base font-semibold uppercase tracking-widest text-slate-600 dark:text-white/60">KPIs</h3>
            <div className="grid gap-4">
              {electro.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-sm text-slate-700 transition dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/40">{metric.label}</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
