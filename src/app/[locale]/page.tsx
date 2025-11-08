import { notFound } from "next/navigation";

const SUPPORTED = ["bg","en"];

export default function LocalePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  if (!SUPPORTED.includes(locale)) notFound();
  return (
    <main style={{padding:24}}>
      <h1>Home · {locale}</h1>
      <p>Работи ли /bg и /en?</p>
    </main>
  );
}

// за билд/SSG – генерирай /bg и /en
export function generateStaticParams() {
  return [{ locale: "bg" }, { locale: "en" }];
}
