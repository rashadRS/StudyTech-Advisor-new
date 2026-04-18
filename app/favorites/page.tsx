'use client';

import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';
import { load, keys } from '@/lib/storage';
import { devices } from '@/data/devices';

export default function FavoritesPage() {
  const { lang } = useApp();
  const d = t(lang);
  const ids = load<string[]>(keys.favorites, []);
  const list = devices.filter((d) => ids.includes(d.id));
  return (
    <PageShell>
      <h1 className="text-3xl font-bold mb-6">{d.favorites.title}</h1>
      {list.length === 0 ? <div className="card p-6">{d.favorites.empty}</div> : <div className="grid gap-4">{list.map((device) => <div className="card p-5" key={device.id}>{device.brand} {device.model} - {d.common.myr} {device.price}</div>)}</div>}
    </PageShell>
  );
}
