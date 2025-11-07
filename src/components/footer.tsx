import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { useTranslation } from '@/lib/translation-context';

export function Footer() {
  const { dictionary, locale } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40">Mobilna Diagnostika</div>
          <p className="text-sm text-white/60">{dictionary.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
          <Link href={`/${locale}#services`} className="hover:text-white">
            {dictionary.nav.services}
          </Link>
          <Link href={`/${locale}#resources`} className="hover:text-white">
            {dictionary.nav.knowledge}
          </Link>
          <Link href={`/${locale}#contact`} className="hover:text-white">
            {dictionary.nav.contact}
          </Link>
          <ThemeToggle />
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-white/30">{dictionary.footer.rights}</div>
    </footer>
  );
}
