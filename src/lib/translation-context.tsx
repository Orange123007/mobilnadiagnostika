'use client';

import { createContext, useContext } from 'react';
import type { Dictionary, Locale } from '@/data/translations';

interface TranslationContextValue {
  dictionary: Dictionary;
  locale: Locale;
}

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined);

export function TranslationProvider({
  value,
  children
}: {
  value: TranslationContextValue;
  children: React.ReactNode;
}) {
  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}
