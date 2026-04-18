'use client';

import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { learnTopics } from '@/data/content';
import { t } from '@/lib/i18n/dictionaries';

export default function LearnPage() {
  const { lang } = useApp();
  const d = t(lang);
  const topics = learnTopics[lang];
  const headers = lang === 'ar' ? ['ما هو', 'لماذا مهم', 'من يحتاجه', 'المستوى الموصى', 'مثال طالب', 'خطأ شائع'] : ['What it is', 'Why it matters', 'Who needs more', 'Recommended levels', 'Real student example', 'Common mistake'];
  return (
    <PageShell>
      <h1 className="text-3xl font-bold mb-6">{d.learn.title}</h1>
      <div className="grid gap-4">
        {topics.map((topic) => (
          <article key={topic[0]} className="card p-6">
            <h2 className="text-xl font-semibold mb-3">{topic[0]}</h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              {headers.map((h, i) => <div key={h}><p className="font-medium">{h}</p><p className="text-slate-600 dark:text-slate-300">{topic[i + 1]}</p></div>)}
            </div>
          </article>
        ))}
      </div>
      <section className="mt-8 card p-6"><h3 className="font-semibold mb-2">{d.learn.mistakesTitle}</h3><p>1) {lang === 'ar' ? 'التركيز على الشكل فقط' : 'Focusing only on design'} 2) {lang === 'ar' ? 'تجاهل الترقية المستقبلية' : 'Ignoring future upgradability'} 3) {lang === 'ar' ? 'إهمال الضمان' : 'Skipping warranty checks'}</p></section>
      <section className="mt-8 card p-6"><h3 className="font-semibold mb-2">{d.learn.specsMajorTitle}</h3><p>{lang === 'ar' ? 'علوم حاسوب: 16GB RAM + CPU قوي. الهندسة/العمارة: GPU مخصص. الأعمال: بطارية طويلة ووزن خفيف.' : 'CS: 16GB RAM + strong CPU. Engineering/Architecture: dedicated GPU. Business: long battery and lightweight.'}</p></section>
      <section className="mt-8 card p-6"><h3 className="font-semibold mb-2">{d.learn.osTitle}</h3><p>{lang === 'ar' ? 'Windows مرن ومتوافق مع أغلب البرامج، macOS ممتاز للاستقرار والبطارية والتكامل.' : 'Windows is flexible with broad software support, while macOS excels in stability, battery, and ecosystem integration.'}</p></section>
    </PageShell>
  );
}
