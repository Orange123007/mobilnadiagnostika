import type { Dictionary, Locale } from "@/lib/translation-context";
import bg from "@/locales/bg.json";
import en from "@/locales/en.json";

export type SearchItem = Dictionary["search"]["items"][number];

export const dictionaries: Record<Locale, Dictionary> = {
  bg,
  en
};

export const locales: Locale[] = ["bg", "en"];

export const searchItems: Record<Locale, SearchItem[]> = {
  bg: bg.search.items,
  en: en.search.items
};
