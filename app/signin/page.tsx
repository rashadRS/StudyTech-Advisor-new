'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';

export default function SignInPage() {
  const { lang, signin } = useApp();
  const d = t(lang);
  const [status, setStatus] = useState('');
  const router = useRouter();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = signin(String(form.get('email')), String(form.get('password')));
    if (res.ok) { setStatus(d.auth.successSignin); setTimeout(() => router.push('/dashboard'), 600); }
    else setStatus(d.auth.invalid);
  };
  return <PageShell><form onSubmit={onSubmit} className="card max-w-lg mx-auto p-6 space-y-3"><h1 className="text-2xl font-bold">{d.auth.signinTitle}</h1><input name="email" required type="email" placeholder={d.auth.email} className="w-full rounded-lg border p-3 bg-transparent"/><input name="password" required type="password" placeholder={d.auth.password} className="w-full rounded-lg border p-3 bg-transparent"/><button className="rounded-lg bg-primary-600 px-4 py-2 text-white">{d.auth.submitSignin}</button>{status && <p>{status}</p>}</form></PageShell>;
}
