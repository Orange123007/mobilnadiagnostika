'use client';

import { createContext, createElement, useContext } from "react";
import type { ReactNode } from "react";
import type bg from "@/locales/bg.json";

export type Locale = "bg" | "en";
export type Dictionary = typeof bg;
type I18nValue = { locale: Locale; dictionary: Dictionary };

const TranslationContext = createContext<I18nValue>({ locale: "bg", dictionary: {} as Dictionary });

export function TranslationProvider({ value, children }: { value: I18nValue; children: ReactNode }) {
  return createElement(TranslationContext.Provider, { value }, children);
}

export function useTranslation() {
  return useContext(TranslationContext);
}
