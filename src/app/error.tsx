'use client';

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-center text-white">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold uppercase tracking-[0.3em]">Възникна грешка</h1>
        <button
          className="glass-button px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em]"
          onClick={() => reset()}
          type="button"
        >
          Опитайте отново
        </button>
      </div>
    </div>
  );
}
