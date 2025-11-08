import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AppThemeProvider } from '@/components/theme-provider';
import { LanguageSetter } from '@/components/language-setter';
import { getDictionary, getLocales } from '@/lib/get-dictionary';
import { TranslationProvider } from '@/lib/translation-context';

export const dynamicParams = false;

export function generateStaticParams() {
  return getLocales().map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const dictionary = getDictionary(params.locale);
  return {
    title: dictionary.hero.title,
    description: dictionary.hero.subtitle
  };
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locales = getLocales();
  const locale = locales.find((loc) => loc === params.locale);

  if (!locale) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <AppThemeProvider>
      <LanguageSetter locale={locale} />
      <TranslationProvider value={{ dictionary, locale }}>{children}</TranslationProvider>
    </AppThemeProvider>
  );
}
