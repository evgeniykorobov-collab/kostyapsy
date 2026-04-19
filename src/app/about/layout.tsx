import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О специалисте | Константин Альбертович',
  description: 'Кризисный психолог. Авторский метод «Навигация в Хаосе»: Якорение → Вербализация → Инвентаризация → Заземление. Работаю там, где «всё пропало».',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
