import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { useTranslation } from '@/lib/translation-context';

export function Footer() {
  const { dictionary, locale } = useTranslation();

  return (
    <footer className="border-t border-slate-900/10 bg-white/80 py-10 text-slate-800 shadow-inner backdrop-blur-2xl transition dark:border-white/10 dark:bg-slate-950/80 dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/40">Mobilna Diagnostika</div>
          <p className="text-sm text-slate-600 dark:text-white/60">{dictionary.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-white/60">
          <Link href={`/${locale}#services`} className="transition hover:text-slate-900 dark:hover:text-white">
            {dictionary.nav.services}
          </Link>
          <Link href={`/${locale}#resources`} className="transition hover:text-slate-900 dark:hover:text-white">
            {dictionary.nav.knowledge}
          </Link>
          <Link href={`/${locale}#contact`} className="transition hover:text-slate-900 dark:hover:text-white">
            {dictionary.nav.contact}
          </Link>
          <ThemeToggle />
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-slate-500 dark:text-white/30">{dictionary.footer.rights}</div>
    </footer>
  );
}
