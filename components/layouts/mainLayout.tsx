import { LayoutProps } from '@/models/common';
import * as React from 'react';

export function MainLayout ({children}: LayoutProps) {
  return (
    <div>
      <p>main</p>
      {children}
    </div>
  );
}
