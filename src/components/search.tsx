'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from 'cmdk';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { useTranslation } from '@/lib/translation-context';

export function SiteSearch() {
  const { dictionary } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return dictionary.search.items;
    }
    return dictionary.search.items.filter((item) =>
      [item.title, item.description, item.category].some((field) => field.toLowerCase().includes(q))
    );
  }, [dictionary.search.items, query]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 shadow-lg backdrop-blur-xl transition hover:bg-white/20"
      >
        <Search className="h-4 w-4" />
        <span className="hidden md:inline">{dictionary.nav.searchPlaceholder}</span>
        <kbd className="rounded bg-white/20 px-2 py-1 text-[10px] uppercase tracking-widest text-white/60">Ctrl K</kbd>
      </button>
      <Transition show={isOpen} as={Fragment} appear>
        <Dialog onClose={setIsOpen} className="relative z-[100]" open={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-950/70 backdrop-blur" />
          </Transition.Child>
          <div className="fixed inset-0 flex items-start justify-center p-4 md:p-24">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-2xl">
                <Command
                  loop
                  className="bg-transparent text-white"
                  filter={() => 1}
                >
                  <div className="flex items-center border-b border-white/10 px-4">
                    <CommandInput
                      placeholder={dictionary.nav.searchPlaceholder}
                      value={query}
                      onValueChange={setQuery}
                      className="flex-1 bg-transparent py-4 text-base placeholder:text-white/50"
                    />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-xs uppercase tracking-widest text-white/50"
                      type="button"
                    >
                      ESC
                    </button>
                  </div>
                  <CommandList>
                    <CommandEmpty>
                      <div className="px-6 py-8 text-center text-sm text-white/60">{dictionary.search.empty}</div>
                    </CommandEmpty>
                    <CommandGroup className="max-h-80 overflow-y-auto p-2">
                      {filteredItems.map((item) => (
                        <CommandItem key={item.id} onSelect={() => setIsOpen(false)}>
                          <Link
                            href={item.href}
                            className="flex w-full flex-col gap-1 rounded-2xl px-4 py-3 hover:bg-white/10"
                          >
                            <span className="text-sm font-semibold">{item.title}</span>
                            <span className="text-xs text-white/70">{item.description}</span>
                            <span className="text-[10px] uppercase tracking-widest text-white/40">{item.category}</span>
                          </Link>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
