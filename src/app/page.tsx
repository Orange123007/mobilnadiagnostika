import Link from 'next/link';

export default function IndexPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 p-6 text-center text-slate-100">
      <h1 className="text-3xl font-semibold">Mobilna Diagnostika</h1>
      <p className="max-w-md text-base text-slate-300">
        Зареждаме сайта на предпочитания език. Ако не бъдете пренасочени автоматично,
        продължете към българската версия.
      </p>
      <Link
        className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-white"
        href="/bg"
      >
        Отвори сайта
      </Link>
    </main>
  );
}
