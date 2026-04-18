'use client';

import { FormEvent, useState } from 'react';
import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';

export default function ContactPage() {
  const { lang } = useApp();
  const d = t(lang);
  const [msg, setMsg] = useState('');
  const submit = (e: FormEvent) => { e.preventDefault(); setMsg(d.contact.success); };
  return (
    <PageShell>
      <h1 className="text-3xl font-bold">{d.contact.title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{d.contact.subtitle}</p>
      <form onSubmit={submit} className="card mt-6 p-6 space-y-3 max-w-xl">
        <input required className="w-full rounded-lg border p-3 bg-transparent" placeholder={d.contact.name} />
        <input required type="email" className="w-full rounded-lg border p-3 bg-transparent" placeholder={d.contact.email} />
        <textarea required className="w-full rounded-lg border p-3 bg-transparent" placeholder={d.contact.message} />
        <button className="rounded-lg bg-primary-600 px-4 py-2 text-white">{d.contact.send}</button>
        {msg && <p className="text-secondary-600">{msg}</p>}
      </form>
    </PageShell>
  );
}
