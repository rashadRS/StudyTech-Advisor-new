'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { keys, load, loadUsers, save, saveUsers } from '@/lib/storage';
import { Language, ThemeMode, User } from '@/lib/types';

const AppContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  user: User | null;
  signup: (u: User) => { ok: boolean; message: string };
  signin: (email: string, password: string) => { ok: boolean; message: string };
  signout: () => void;
} | null>(null);

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>('ar');
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setLangState(load<Language>(keys.lang, 'ar'));
    setTheme(load<ThemeMode>(keys.theme, 'light'));
    setUser(load<User | null>(keys.currentUser, null));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    save(keys.lang, lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    save(keys.theme, theme);
  }, [theme]);

  const value = useMemo(() => ({
    lang,
    setLang: (l: Language) => setLangState(l),
    theme,
    toggleTheme: () => setTheme((v) => (v === 'light' ? 'dark' : 'light')),
    user,
    signup: (u: User) => {
      const users = loadUsers();
      if (users.some((x) => x.email === u.email)) return { ok: false, message: 'exists' };
      const updated = [...users, u];
      saveUsers(updated);
      setUser(u);
      save(keys.currentUser, u);
      return { ok: true, message: 'ok' };
    },
    signin: (email: string, password: string) => {
      const matched = loadUsers().find((u) => u.email === email && u.password === password);
      if (!matched) return { ok: false, message: 'invalid' };
      setUser(matched);
      save(keys.currentUser, matched);
      return { ok: true, message: 'ok' };
    },
    signout: () => {
      setUser(null);
      save(keys.currentUser, null);
    }
  }), [lang, theme, user]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('AppContext missing');
  return ctx;
};
