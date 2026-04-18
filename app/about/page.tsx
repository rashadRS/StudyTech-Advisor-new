'use client';
import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';

export default function AboutPage() {
  const { lang } = useApp();
  const d = t(lang);
  return <PageShell><h1 className="text-3xl font-bold">{d.about.title}</h1><p className="mt-4 card p-6">{d.about.intro}</p></PageShell>;
}
