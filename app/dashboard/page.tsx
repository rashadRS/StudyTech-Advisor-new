'use client';

import Link from 'next/link';
import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';

export default function DashboardPage() {
  const { lang, user } = useApp();
  const d = t(lang);
  return (
    <PageShell>
      <h1 className="text-3xl font-bold">{d.dashboard.title}</h1>
      <p className="mt-2">{d.dashboard.welcome} {user?.name ?? '-'}</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <Link className="card p-5" href="/quiz">{d.common.startQuiz}</Link>
        <Link className="card p-5" href="/favorites">{d.nav.favorites}</Link>
        <Link className="card p-5" href="/profile">{d.nav.profile}</Link>
      </div>
    </PageShell>
  );
}
