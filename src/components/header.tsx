'use client';

import { Globe, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';
import { SiteSearch } from './search';
import { useTranslation } from '@/lib/translation-context';
import { locales } from '@/data/translations';

export function Header() {
  const { dictionary, locale } = useTranslation();
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const localizedPath = (targetLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      return `/${targetLocale}`;
    }
    segments[0] = targetLocale;
    return `/${segments.join('/')}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/70 text-slate-900 shadow-lg backdrop-blur-2xl transition-colors dark:border-white/10 dark:bg-slate-950/70 dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-lg font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white"
        >
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/40 dark:text-white">
            MDX
          </span>
          <span className="hidden text-slate-800 sm:inline dark:text-white">Mobilna Diagnostika</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <button className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-white/80 dark:hover:text-white">
              {dictionary.nav.categories}
            </button>
            <div className="mega-menu">
              <div className="grid gap-6 md:grid-cols-3">
                {dictionary.megaMenu.segments.map((segment) => (
                  <div key={segment.title} className="flex flex-col gap-3">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-800 dark:text-white">
                        {segment.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-white/60">{segment.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {segment.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-sm text-slate-700 transition hover:border-slate-900/30 hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/40 dark:hover:bg-white/10"
                        >
                          <div className="font-medium text-slate-900 dark:text-white">{item.name}</div>
                          <div className="text-xs text-slate-600 dark:text-white/60">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="#services"
            className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-white/80 dark:hover:text-white"
          >
            {dictionary.nav.services}
          </Link>
          <Link
            href="#highlights"
            className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-white/80 dark:hover:text-white"
          >
            {dictionary.nav.usps}
          </Link>
          <Link
            href="#resources"
            className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-white/80 dark:hover:text-white"
          >
            {dictionary.nav.knowledge}
          </Link>
          <Link
            href="#contact"
            className="text-sm text-slate-700 transition hover:text-slate-900 dark:text-white/80 dark:hover:text-white"
          >
            {dictionary.nav.contact}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SiteSearch />
          <ThemeToggle />
          <div className="group relative">
            <button className="glass-button flex items-center gap-2 px-3 py-2" type="button">
              <Globe className="h-4 w-4" />
              <span className="text-xs uppercase tracking-widest text-slate-700 dark:text-white">
                {dictionary.nav.language}
              </span>
            </button>
            <div className="absolute right-0 top-full z-40 mt-2 hidden w-40 flex-col gap-1 rounded-2xl border border-slate-900/10 bg-white/80 p-2 text-sm text-slate-800 shadow-lg backdrop-blur-xl group-hover:flex dark:border-white/10 dark:bg-slate-900/80 dark:text-white">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={localizedPath(loc)}
                  className={`rounded-xl px-3 py-2 text-xs uppercase tracking-widest transition hover:bg-white/50 dark:hover:bg-white/10 ${
                    loc === locale
                      ? 'bg-white/60 text-slate-900 dark:bg-white/10 dark:text-white'
                      : 'text-slate-600 dark:text-white/70'
                  }`}
                >
                  {loc.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="glass-button p-2"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            type="button"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 border-t border-slate-900/10 bg-white/80 px-4 py-4 text-slate-800 backdrop-blur-2xl transition dark:border-white/10 dark:bg-slate-950/80 dark:text-white">
            <SiteSearch />
            <div className="grid gap-2 pt-4">
              <Link
                href="#services"
                className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-slate-700 transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              >
                {dictionary.nav.services}
              </Link>
              <Link
                href="#highlights"
                className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-slate-700 transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              >
                {dictionary.nav.usps}
              </Link>
              <Link
                href="#resources"
                className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-slate-700 transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              >
                {dictionary.nav.knowledge}
              </Link>
              <Link
                href="#contact"
                className="rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-slate-700 transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              >
                {dictionary.nav.contact}
              </Link>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40">
                {dictionary.nav.language}
              </span>
              <div className="flex gap-2">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={localizedPath(loc)}
                    className={`rounded-full border border-slate-900/10 px-3 py-1 text-xs uppercase tracking-widest transition hover:bg-white/60 dark:border-white/10 dark:hover:bg-white/10 ${
                      loc === locale
                        ? 'bg-white/70 text-slate-900 dark:bg-white/10 dark:text-white'
                        : 'text-slate-600 dark:text-white/60'
                    }`}
                  >
                    {loc.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
