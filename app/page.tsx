'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { homeContent } from '@/data/content';
import { t } from '@/lib/i18n/dictionaries';

export default function HomePage() {
  const { lang } = useApp();
  const d = t(lang);
  const local = homeContent[lang];
  return (
    <PageShell>
      <section className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{d.home.heroTitle}</h1>
          <p className="text-slate-600 dark:text-slate-300">{d.home.heroSubtitle}</p>
          <div className="flex gap-3">
            <Link href="/quiz" className="rounded-xl bg-primary-600 px-5 py-3 text-white shadow-premium">{d.common.startQuiz}</Link>
            <Link href="/learn" className="rounded-xl border px-5 py-3">{d.common.learnBasics}</Link>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-2">{d.home.problemTitle}</h3>
          <p className="text-slate-600 dark:text-slate-300">{d.home.problemText}</p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-4">
        {[d.nav.learn, d.nav.quiz, d.nav.trusted].map((item, i) => (
          <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="card p-6 font-medium">{item}</motion.div>
        ))}
      </section>

      <section className="mt-16 card p-8">
        <h2 className="text-2xl font-semibold mb-4">{d.home.whyTitle}</h2>
        <ul className="grid gap-2 md:grid-cols-3">
          {d.home.whyItems.map((item) => <li key={item} className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3">{item}</li>)}
        </ul>
      </section>

      <section className="mt-16 card p-8">
        <h2 className="text-2xl font-semibold">{d.home.malaysiaTitle}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{d.home.malaysiaText}</p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">{d.home.testimonialsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {local.testimonials.map((tst) => <div key={tst.name} className="card p-5"><p>{tst.text}</p><p className="mt-3 text-sm text-slate-500">{tst.name}</p></div>)}
        </div>
      </section>

      <section className="mt-16 card p-8">
        <h2 className="text-2xl font-semibold mb-4">{d.home.faqPreviewTitle}</h2>
        <div className="space-y-3">
          {d.faq.items.map((item) => <div key={item.q}><p className="font-medium">{item.q}</p><p className="text-slate-600 dark:text-slate-300">{item.a}</p></div>)}
        </div>
      </section>
    </PageShell>
  );
}
