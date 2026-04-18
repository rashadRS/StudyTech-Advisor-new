'use client';

import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';
import { Logo } from '@/components/logo';

export const Navbar = () => {
  const { lang, setLang, theme, toggleTheme, user, signout } = useApp();
  const d = t(lang);
  const links = [
    ['/', d.nav.home], ['/learn', d.nav.learn], ['/quiz', d.nav.quiz], ['/trusted', d.nav.trusted], ['/about', d.nav.about], ['/faq', d.nav.faq], ['/contact', d.nav.contact]
  ];
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 dark:bg-slate-950/90 dark:border-slate-800 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Link href="/"><Logo /></Link>
        <div className="hidden gap-4 lg:flex text-sm">
          {links.map(([href, label]) => <Link key={href} href={href} className="hover:text-primary-600">{label}</Link>)}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="rounded-lg border px-2 py-1">{lang === 'ar' ? 'EN' : 'AR'}</button>
          <button onClick={toggleTheme} className="rounded-lg border p-2">{theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
          {user ? (
            <>
              <Link href="/dashboard" className="rounded-lg bg-primary-600 px-3 py-1 text-white">{user.name}</Link>
              <button onClick={signout} className="rounded-lg border px-3 py-1">{d.nav.signout}</button>
            </>
          ) : (
            <>
              <Link href="/signin" className="rounded-lg border px-3 py-1">{d.nav.signin}</Link>
              <Link href="/signup" className="rounded-lg bg-primary-600 px-3 py-1 text-white">{d.nav.signup}</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
