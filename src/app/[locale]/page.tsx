import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero';
import { HighlightsSection } from '@/components/sections/highlights';
import { SegmentsSection } from '@/components/sections/segments';
import { ServicesSection } from '@/components/sections/services';
import { AmericanSection } from '@/components/sections/american';
import { ElectroSection } from '@/components/sections/electro';
import { CoverageSection } from '@/components/sections/coverage';
import { FAQSection } from '@/components/sections/faq';
import { ResourcesSection } from '@/components/sections/resources';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';

export default function LocaleHomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-glass-pattern opacity-60 transition-opacity duration-500 dark:opacity-80" aria-hidden />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 space-y-16 pb-16">
          <HeroSection />
          <SegmentsSection />
          <HighlightsSection />
          <ServicesSection />
          <ElectroSection />
          <AmericanSection />
          <CoverageSection />
          <FAQSection />
          <ResourcesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <ChatWidget />
    </div>
  );
}
