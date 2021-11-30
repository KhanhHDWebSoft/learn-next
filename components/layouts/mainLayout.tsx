import { LayoutProps } from '@/models/common';
import * as React from 'react';
import Footer from '../common/Footer/footer';
import Header from '../common/Header/header';

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
