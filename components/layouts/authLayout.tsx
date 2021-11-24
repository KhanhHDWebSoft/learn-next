import { LayoutProps } from '@/models/common';
import * as React from 'react';

export function Authlayout ({children}: LayoutProps) {
  return (
    <div>
      <p>auth</p>
      {children}
    </div>
  );
}
