import type { Metadata } from 'next';
import { Lora, Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import CookieBanner from '@/components/CookieBanner';
import JsonLd from '@/components/JsonLd';

const lora = Lora({ subsets: ['cyrillic', 'latin'], variable: '--font-lora' });
const inter = Inter({ subsets: ['cyrillic', 'latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kostyapsy.ru'),
  title: 'Константин Альбертович — кризисный психолог | Навигация в Хаосе',
  description: 'Кризисный психолог. Помогаю, когда «всё пропало» — и возвращаю вкус жизни. Авторский метод «Навигация в Хаосе». Развод, потеря, выгорание, экзистенциальный тупик.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://kostyapsy.ru',
    siteName: 'Константин Альбертович — кризисный психолог',
    title: 'Константин Альбертович — кризисный психолог | Навигация в Хаосе',
    description: 'Помогаю, когда «всё пропало» — и возвращаю вкус жизни. Развод, потеря, выгорание, экзистенциальный тупик. Авторский метод «Навигация в Хаосе».',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Маяк в тумане — символ метода «Навигация в Хаосе»',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Константин Альбертович — кризисный психолог',
    description: 'Помогаю, когда «всё пропало». Авторский метод «Навигация в Хаосе».',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${lora.variable}`}>
        <div className="texture-overlay"></div>
        <JsonLd />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <CookieBanner />
      </body>
    </html>
  );
}
