'use client';

import Image from 'next/image';
import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';
import { load, keys, save } from '@/lib/storage';
import { Recommendation } from '@/lib/types';
import { useMemo } from 'react';

export default function ResultsPage() {
  const { lang } = useApp();
  const d = t(lang);
  const recs = useMemo(() => load<Recommendation[]>(keys.results + '-full', []), []);

  const addFavorite = (id: string) => {
    const current = load<string[]>(keys.favorites, []);
    if (!current.includes(id)) save(keys.favorites, [...current, id]);
  };

  return (
    <PageShell>
      <h1 className="text-3xl font-bold">{d.results.title}</h1>
      <p className="text-slate-600 dark:text-slate-300 mt-2">{d.results.subtitle}</p>
      <div className="mt-8 grid gap-5">
        {recs.map(({ device, score, reason }) => (
          <article key={device.id} className="card p-6">
            <div className="grid md:grid-cols-[180px_1fr] gap-5 items-start">
              <Image src={device.image} alt={device.model} width={180} height={120} className="rounded-xl object-cover w-full h-32" />
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2"><h2 className="text-xl font-semibold">{device.brand} {device.model}</h2><span className="rounded-full bg-secondary-500/20 px-3 py-1 text-secondary-600">{score}%</span></div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{reason}</p>
                <p className="mt-3 text-sm">CPU: {device.cpu} • RAM: {device.ram} • Storage: {device.storage} • GPU: {device.gpu} • Battery: {device.battery}</p>
                <p className="mt-2 font-semibold">{d.common.myr} {device.price}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={device.buy_link} target="_blank" className="rounded-lg bg-primary-600 px-3 py-2 text-white">{d.common.viewProduct}</a>
                  <button className="rounded-lg border px-3 py-2">{d.common.compare}</button>
                  <button onClick={() => addFavorite(device.id)} className="rounded-lg border px-3 py-2">{d.common.save}</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
