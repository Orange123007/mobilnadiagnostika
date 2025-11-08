// src/app/[locale]/page.tsx
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const SUPPORTED = ["bg","en"];

const Header       = dynamic(() => import("@/components/header"));
const Footer       = dynamic(() => import("@/components/footer"));
const Hero         = dynamic(() => import("@/components/sections/hero"));
const Services     = dynamic(() => import("@/components/sections/services"));
const Segments     = dynamic(() => import("@/components/sections/segments"));
const Electro      = dynamic(() => import("@/components/sections/electro"));
// ⛔ махни Mechanics засега
const HighPressure = dynamic(() => import("@/components/sections/highpressure"));
const American     = dynamic(() => import("@/components/sections/american"));
const Resources    = dynamic(() => import("@/components/sections/resources"));

export default function LocalePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  if (!SUPPORTED.includes(locale)) notFound();

  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Segments />
      <Electro />
      {/* <Mechanics /> */}
      <HighPressure />
      <American />
      <Resources />
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: "bg" }, { locale: "en" }];
}
