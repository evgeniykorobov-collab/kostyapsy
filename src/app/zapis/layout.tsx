import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Запись на консультацию | Страхи и таланты',
  description: 'Запишитесь на консультацию к клиническому психологу. Очно в Москве или онлайн. Первая встреча — знакомство без обязательств.',
};

export default function ZapisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
