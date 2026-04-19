import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О специалисте | Константин Альбертович',
  description: 'Клинический психолог. Образование, опыт, принципы работы. Доказательный подход, бережность, работа на результат.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
