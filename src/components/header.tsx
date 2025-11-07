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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2 text-lg font-bold uppercase tracking-[0.2em]">
          <span className="rounded-full bg-primary/40 px-3 py-1 text-xs font-semibold text-white">MDX</span>
          <span className="hidden sm:inline text-white">Mobilna Diagnostika</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <button className="text-sm text-white/80 transition hover:text-white">{dictionary.nav.categories}</button>
            <div className="mega-menu">
              <div className="grid gap-6 md:grid-cols-3">
                {dictionary.megaMenu.segments.map((segment) => (
                  <div key={segment.title} className="flex flex-col gap-3">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">{segment.title}</h3>
                      <p className="text-xs text-white/60">{segment.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {segment.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/40 hover:bg-white/10"
                        >
                          <div className="font-medium text-white">{item.name}</div>
                          <div className="text-xs text-white/60">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link href="#services" className="text-sm text-white/80 transition hover:text-white">
            {dictionary.nav.services}
          </Link>
          <Link href="#highlights" className="text-sm text-white/80 transition hover:text-white">
            {dictionary.nav.usps}
          </Link>
          <Link href="#resources" className="text-sm text-white/80 transition hover:text-white">
            {dictionary.nav.knowledge}
          </Link>
          <Link href="#contact" className="text-sm text-white/80 transition hover:text-white">
            {dictionary.nav.contact}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SiteSearch />
          <ThemeToggle />
          <div className="group relative">
            <button className="glass-button flex items-center gap-2 px-3 py-2" type="button">
              <Globe className="h-4 w-4" />
              <span className="text-xs uppercase tracking-widest">{dictionary.nav.language}</span>
            </button>
            <div className="absolute right-0 top-full z-40 mt-2 hidden w-40 flex-col gap-1 rounded-2xl border border-white/10 bg-slate-900/80 p-2 text-sm text-white shadow-lg backdrop-blur-xl group-hover:flex">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={localizedPath(loc)}
                  className={`rounded-xl px-3 py-2 text-xs uppercase tracking-widest transition hover:bg-white/10 ${
                    loc === locale ? 'bg-white/10 text-white' : 'text-white/70'
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
          <div className="space-y-2 border-t border-white/10 bg-slate-950/80 px-4 py-4 backdrop-blur-2xl">
            <SiteSearch />
            <div className="grid gap-2 pt-4">
              <Link href="#services" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                {dictionary.nav.services}
              </Link>
              <Link href="#highlights" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                {dictionary.nav.usps}
              </Link>
              <Link href="#resources" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                {dictionary.nav.knowledge}
              </Link>
              <Link href="#contact" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                {dictionary.nav.contact}
              </Link>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="text-xs uppercase tracking-widest text-white/40">{dictionary.nav.language}</span>
              <div className="flex gap-2">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={localizedPath(loc)}
                    className={`rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-widest transition hover:bg-white/10 ${
                      loc === locale ? 'bg-white/10 text-white' : 'text-white/60'
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
