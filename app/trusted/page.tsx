'use client';

import Link from 'next/link';
import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';
import { devices } from '@/data/devices';

export default function TrustedPage() {
  const { lang } = useApp();
  const d = t(lang);
  return (
    <PageShell>
      <h1 className="text-3xl font-bold">{d.trusted.title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{d.trusted.intro}</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">{d.trusted.badges.map((b) => <div key={b} className="card p-4 text-center font-medium">{b}</div>)}</div>
      <section className="mt-8 card p-6"><h2 className="font-semibold text-xl">{d.trusted.partner}</h2><p className="mt-2">BBTech Shop</p></section>
      <section className="mt-8 grid md:grid-cols-3 gap-4">
        {devices.slice(0, 3).map((device) => <div key={device.id} className="card p-4"><h3 className="font-semibold">{device.brand} {device.model}</h3><p className="text-sm mt-2">{d.common.myr} {device.price}</p></div>)}
      </section>
      <div className="mt-8"><a href="https://www.bbtech.shop/" target="_blank" className="rounded-xl bg-primary-600 px-5 py-3 text-white">{d.common.browseNow}</a></div>
      <section className="mt-8 card p-6"><p>{d.trusted.contact}</p></section>
      <section className="mt-8 card p-6"><h3 className="font-semibold mb-3">{d.nav.faq}</h3>{d.faq.items.map((item) => <div key={item.q} className="mb-3"><p className="font-medium">{item.q}</p><p className="text-sm text-slate-600 dark:text-slate-300">{item.a}</p></div>)}<Link href="/faq" className="text-primary-600">{d.nav.faq}</Link></section>
    </PageShell>
  );
}
