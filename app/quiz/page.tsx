'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/page-shell';
import { useApp } from '@/components/providers';
import { t } from '@/lib/i18n/dictionaries';
import { recommendDevices } from '@/lib/recommend';
import { save, saveQuiz, saveResults, keys } from '@/lib/storage';
import { QuizAnswers } from '@/lib/types';

export default function QuizPage() {
  const { lang } = useApp();
  const d = t(lang);
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>({ major: 'cs', budget: 5000, usage: 'mixed', os: 'any', portability: 'medium', battery: 'medium', heavySoftware: 'no', preference: 'value', lifespan: 'long' });

  const questions = useMemo(() => [
    ['major', lang === 'ar' ? 'ما تخصصك؟' : 'What is your major?', ['cs', 'engineering', 'design', 'business', 'medicine', 'architecture']],
    ['budget', lang === 'ar' ? 'ما ميزانيتك (ر.م)؟' : 'Your budget (MYR)?', ['3500', '5000', '6500', '8000']],
    ['usage', lang === 'ar' ? 'نوع الاستخدام؟' : 'Usage type?', ['light', 'mixed', 'heavy']],
    ['os', lang === 'ar' ? 'تفضيل النظام؟' : 'OS preference?', ['any', 'windows', 'macos']],
    ['portability', lang === 'ar' ? 'أهمية خفة الوزن؟' : 'Portability importance?', ['low', 'medium', 'high']],
    ['battery', lang === 'ar' ? 'أهمية البطارية؟' : 'Battery importance?', ['low', 'medium', 'high']],
    ['heavySoftware', lang === 'ar' ? 'هل تستخدم برامج ثقيلة؟' : 'Heavy software usage?', ['yes', 'no']],
    ['preference', lang === 'ar' ? 'تفضل الأداء أم القيمة؟' : 'Performance or value?', ['performance', 'value']],
    ['lifespan', lang === 'ar' ? 'مدة استخدام الجهاز المتوقعة؟' : 'Expected device lifespan?', ['short', 'medium', 'long']]
  ] as const, [lang]);

  const progress = ((step + 1) / questions.length) * 100;

  const onNext = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else {
      setLoading(true);
      saveQuiz(answers);
      const rec = recommendDevices(answers);
      saveResults(rec.map((r) => r.device.id));
      save(keys.results + '-full', rec);
      setTimeout(() => router.push('/results'), 1500);
    }
  };

  const q = questions[step];
  return (
    <PageShell>
      <h1 className="text-3xl font-bold">{d.quiz.title}</h1>
      <p className="text-slate-600 dark:text-slate-300 mt-2">{d.quiz.helper}</p>
      <div className="mt-6 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800"><div className="h-2 rounded-full bg-primary-600 transition-all" style={{ width: `${progress}%` }} /></div>
      {loading ? <div className="card mt-8 p-10 text-center text-xl font-semibold">{d.common.analyzing}</div> : (
        <motion.div key={q[0]} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="card mt-8 p-8 space-y-4">
          <h2 className="text-xl font-semibold">{q[1]}</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {q[2].map((option) => (
              <button key={option} onClick={() => setAnswers((a) => ({ ...a, [q[0]]: q[0] === 'budget' ? Number(option) : option }))} className={`rounded-xl border p-3 ${String(answers[q[0] as keyof QuizAnswers]) === option ? 'bg-primary-600 text-white' : ''}`}>
                {option}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setStep((s) => Math.max(0, s - 1))} className="rounded-lg border px-4 py-2">{d.quiz.back}</button>
            <button onClick={onNext} className="rounded-lg bg-primary-600 px-4 py-2 text-white">{step === questions.length - 1 ? d.quiz.finish : d.quiz.next}</button>
          </div>
        </motion.div>
      )}
    </PageShell>
  );
}
