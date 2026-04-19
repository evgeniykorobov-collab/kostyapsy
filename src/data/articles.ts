export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  rubric: 'aptechka' | 'arkhitektura' | 'navigatsiya' | 'mayak' | 'vkus';
  rubricLabel: string;
  rubricColor: string;
  date: string;
  readMinutes: number;
};

export const articles: Article[] = [
  {
    slug: '24-chasa-posle-rasstavaniya',
    title: 'Первые 24 часа после расставания: пошаговая инструкция выживания',
    excerpt: 'Что не делать, что делать, как пережить ночь и почему решения первых трёх суток обычно плохие.',
    rubric: 'aptechka',
    rubricLabel: 'Аптечка первой помощи',
    rubricColor: 'var(--color-accent-ras)',
    date: '2026-04-19',
    readMinutes: 7,
  },
  {
    slug: 'slovar-krizisnykh-sostoyaniy',
    title: 'Словарь кризисных состояний: чем тревога отличается от страха, а тоска — от печали',
    excerpt: 'Четыре пары чувств, которые путают чаще всего. Названное — управляемо.',
    rubric: 'arkhitektura',
    rubricLabel: 'Архитектура чувств',
    rubricColor: 'var(--color-accent-women)',
    date: '2026-04-18',
    readMinutes: 6,
  },
  {
    slug: 'metod-4-shagov',
    title: 'Метод 4 шагов: как я работаю с человеком в остром кризисе',
    excerpt: 'Якорение, Вербализация, Инвентаризация, Заземление. Что и в каком порядке — и почему перепрыгнуть нельзя.',
    rubric: 'navigatsiya',
    rubricLabel: 'Навигация в Хаосе',
    rubricColor: 'var(--color-cta)',
    date: '2026-04-17',
    readMinutes: 8,
  },
  {
    slug: 'pismo-sebe-v-20-let',
    title: 'Письмо себе в 20 лет: что я знаю о кризисах сейчас',
    excerpt: 'Семь вещей, которые я бы сказал себе двадцатилетнему. Если читаете — оно уже не для двадцатилетнего.',
    rubric: 'mayak',
    rubricLabel: 'Маяк в пути',
    rubricColor: 'var(--color-accent-talents)',
    date: '2026-04-16',
    readMinutes: 5,
  },
  {
    slug: 'zazemlenie-5-praktik',
    title: 'Заземление: 5 практик, чтобы вернуться в тело, когда улетаете в панику',
    excerpt: 'Холодная вода, тяжесть на коленях, босиком по земле. Что работает физиологически, а не «через настрой».',
    rubric: 'vkus',
    rubricLabel: 'Вкус жизни',
    rubricColor: 'var(--color-accent-life)',
    date: '2026-04-15',
    readMinutes: 6,
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
