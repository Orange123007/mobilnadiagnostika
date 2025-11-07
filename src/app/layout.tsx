import type { Metadata } from 'next';
import { Manrope, Orbitron } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-manrope' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: {
    default: 'Мобилна Автодиагностика | Futuristic Auto Diagnostics',
    template: '%s | Мобилна Автодиагностика'
  },
  description:
    'Технологична мобилна автодиагностика до адрес. Покритие в България, специализирани услуги за европейски, японски и американски автомобили, електромобили и SUV.',
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={`${manrope.variable} ${orbitron.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 font-sans text-white">{children}</body>
    </html>
  );
}
