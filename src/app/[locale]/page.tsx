import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero';
import { HighlightsSection } from '@/components/sections/highlights';
import { ServicesSection } from '@/components/sections/services';
import { AmericanSection } from '@/components/sections/american';
import { CoverageSection } from '@/components/sections/coverage';
import { FAQSection } from '@/components/sections/faq';
import { ResourcesSection } from '@/components/sections/resources';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';

export default function LocaleHomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-glass-pattern opacity-70" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 space-y-10">
          <HeroSection />
          <HighlightsSection />
          <ServicesSection />
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
