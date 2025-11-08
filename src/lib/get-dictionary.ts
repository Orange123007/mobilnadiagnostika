import { dictionaries, locales, type Dictionary, type Locale, searchItems } from '@/data/translations';

export function getDictionary(locale: string): Dictionary {
  if (locales.includes(locale as Locale)) {
    return {
      ...dictionaries[locale as Locale],
      search: {
        ...dictionaries[locale as Locale].search,
        items: searchItems[locale as Locale]
      }
    };
  }

  return {
    ...dictionaries.bg,
    search: {
      ...dictionaries.bg.search,
      items: searchItems.bg
    }
  };
}

export function getLocales() {
  return locales;
}
