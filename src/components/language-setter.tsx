'use client';

import { useEffect } from 'react';
import type { Locale } from '@/data/translations';

export function LanguageSetter({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
