import { notFound } from "next/navigation";
import { ChatWidget } from "@/components/chat-widget";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AmericanSection } from "@/components/sections/american";
import { ContactSection } from "@/components/sections/contact";
import { CoverageSection } from "@/components/sections/coverage";
import { ElectroSection } from "@/components/sections/electro";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { HighlightsSection } from "@/components/sections/highlights";
import { ResourcesSection } from "@/components/sections/resources";
import { SegmentsSection } from "@/components/sections/segments";
import { ServicesSection } from "@/components/sections/services";

const SUPPORTED_LOCALES = ["bg", "en"] as const;

type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

type PageProps = {
  params: { locale: string };
};

export default function LocalePage({ params }: PageProps) {
  const { locale } = params;

  if (!SUPPORTED_LOCALES.includes(locale as SupportedLocale)) {
    notFound();
  }

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

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}
