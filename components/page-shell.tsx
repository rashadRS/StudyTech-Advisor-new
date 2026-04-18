'use client';

import { ReactNode } from 'react';
import { useApp } from '@/components/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const PageShell = ({ children }: { children: ReactNode }) => {
  const { lang } = useApp();
  return (
    <>
      <Navbar />
      <main className="container-page py-10">{children}</main>
      <Footer lang={lang} />
    </>
  );
};
