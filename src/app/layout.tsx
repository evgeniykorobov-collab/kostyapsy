import type { Metadata } from 'next';
import { Lora, Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import JsonLd from '@/components/JsonLd';

const lora = Lora({ subsets: ['cyrillic', 'latin'], variable: '--font-lora' });
const inter = Inter({ subsets: ['cyrillic', 'latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Страхи и таланты | Кризисный психолог Константин Альбертович',
  description: 'Кризисный психолог. Помогаю, когда «всё пропало» — и возвращаю вкус жизни. Авторский метод «Навигация в Хаосе». Развод, потеря, выгорание, экзистенциальный тупик.',
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
      </body>
    </html>
  );
}
