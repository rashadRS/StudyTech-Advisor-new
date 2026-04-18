'use client';
import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';

export default function FAQPage() {
  const { lang } = useApp();
  const d = t(lang);
  return <PageShell><h1 className="text-3xl font-bold mb-6">{d.faq.title}</h1><div className="space-y-4">{d.faq.items.map((item) => <div key={item.q} className="card p-6"><p className="font-semibold">{item.q}</p><p className="mt-2 text-slate-600 dark:text-slate-300">{item.a}</p></div>)}</div></PageShell>;
}
