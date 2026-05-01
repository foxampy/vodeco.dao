import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VODECO Spatial Interface',
  description: 'Immersive underwater-spatial DAO experience.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
