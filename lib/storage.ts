import { QuizAnswers, User } from '@/lib/types';

export const keys = {
  lang: 'sta-lang',
  theme: 'sta-theme',
  users: 'sta-users',
  currentUser: 'sta-current-user',
  favorites: 'sta-favorites',
  quiz: 'sta-quiz',
  results: 'sta-results'
};

export const load = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try { return JSON.parse(raw) as T; } catch { return fallback; }
};

export const save = (key: string, value: unknown) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const saveQuiz = (answers: QuizAnswers) => save(keys.quiz, answers);
export const loadQuiz = () => load<QuizAnswers | null>(keys.quiz, null);
export const saveResults = (ids: string[]) => save(keys.results, ids);
export const loadResults = () => load<string[]>(keys.results, []);
export const loadUsers = () => load<User[]>(keys.users, []);
export const saveUsers = (users: User[]) => save(keys.users, users);
