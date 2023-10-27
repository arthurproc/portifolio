import './globals.css';

// Splide slider imports
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

import type { Metadata } from 'next';
import { App } from '@portifolio/app/app';

export const metadata: Metadata = {
  title: 'Portifólio do Procópio',
  description: 'Meu portifólio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <App>
      {children}
    </App>
  );
}
