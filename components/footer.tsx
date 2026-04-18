import Link from 'next/link';
import { Logo } from '@/components/logo';
import { t } from '@/lib/i18n/dictionaries';
import { Language } from '@/lib/types';

export const Footer = ({ lang }: { lang: Language }) => {
  const d = t(lang);
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="container-page py-10 space-y-4">
        <Logo />
        <p className="text-sm text-slate-600 dark:text-slate-400">{d.footer.text}</p>
        <div className="flex gap-4 text-sm">
          <Link href="/about">{d.nav.about}</Link>
          <Link href="/faq">{d.nav.faq}</Link>
          <Link href="/contact">{d.nav.contact}</Link>
        </div>
      </div>
    </footer>
  );
};
