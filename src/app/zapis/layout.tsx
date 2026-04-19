import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Запись на консультацию | Константин Альбертович',
  description: 'Запишитесь на консультацию к кризисному психологу. Очно в Ростове-на-Дону или онлайн. Первая встреча — знакомство без обязательств.',
};

export default function ZapisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
