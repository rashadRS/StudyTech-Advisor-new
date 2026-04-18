import { devices } from '@/data/devices';
import { QuizAnswers, Recommendation } from '@/lib/types';

const majorWeights: Record<string, { perf: number; gpu: number; battery: number; portability: number; display: number; value: number }> = {
  cs: { perf: 3, gpu: 1, battery: 1, portability: 1, display: 1, value: 2 },
  engineering: { perf: 3, gpu: 3, battery: 1, portability: 1, display: 1, value: 1 },
  design: { perf: 2, gpu: 3, battery: 1, portability: 1, display: 3, value: 1 },
  business: { perf: 1, gpu: 0, battery: 3, portability: 3, display: 1, value: 3 },
  medicine: { perf: 2, gpu: 1, battery: 2, portability: 2, display: 1, value: 2 },
  architecture: { perf: 3, gpu: 3, battery: 1, portability: 1, display: 2, value: 1 }
};

export const recommendDevices = (answers: QuizAnswers): Recommendation[] => {
  const weights = majorWeights[answers.major] ?? majorWeights.medicine;
  const ranked = devices
    .filter((d) => d.price <= answers.budget + 1200)
    .map((d) => {
      let score = d.performanceScore * weights.perf + d.batteryScore * weights.battery + d.portabilityScore * weights.portability + d.displayScore * weights.display + d.valueScore * weights.value;
      if (answers.os !== 'any' && d.os.toLowerCase() !== answers.os) score -= 8;
      if (answers.preference === 'performance') score += d.performanceScore;
      if (answers.preference === 'value') score += d.valueScore;
      if (answers.heavySoftware === 'yes') score += d.performanceScore;
      if (answers.lifespan === 'long') score += d.batteryScore;
      const reason = `${d.brand} ${d.model} balances ${answers.major} needs with ${answers.preference} focus.`;
      return { device: d, score, reason };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const max = ranked[0]?.score || 1;
  return ranked.map((r) => ({ ...r, score: Math.round((r.score / max) * 100) }));
};
