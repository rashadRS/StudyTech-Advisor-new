'use client';

import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';

export default function ProfilePage() {
  const { lang, user } = useApp();
  const d = t(lang);
  return (
    <PageShell>
      <h1 className="text-3xl font-bold">{d.profile.title}</h1>
      <div className="card mt-6 p-6 space-y-2">
        <p>{d.auth.name}: {user?.name ?? '-'}</p>
        <p>{d.auth.email}: {user?.email ?? '-'}</p>
        <p>{d.auth.university}: {user?.university ?? '-'}</p>
        <p>{d.auth.major}: {user?.major ?? '-'}</p>
      </div>
    </PageShell>
  );
}
