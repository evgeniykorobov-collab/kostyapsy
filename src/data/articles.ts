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
    slug: 'chislo-dushi-5',
    title: '14 июня — день, когда пришёл Ветер. Моя Нумерология Души 5',
    excerpt: 'Пятёрка — это Меркурий, Ветер, Кризис как Образ Жизни. Почему я работаю в самых острых состояниях — и как Число Души 5 делает это идеальной профессией для меня.',
    rubric: 'mayak',
    rubricLabel: 'Маяк в пути',
    rubricColor: 'var(--color-accent-talents)',
    date: '2026-04-24',
    readMinutes: 8,
  },
  {
    slug: 'kak-ya-stal-mayakom',
    title: 'Письмо моему брату. И всем, кто потерял родных',
    excerpt: 'Мой брат погиб на СВО. Я пишу это, чтобы вы, кто потерял близких, знали: я понимаю. Не из книг — из жизни.',
    rubric: 'mayak',
    rubricLabel: 'Маяк в пути',
    rubricColor: 'var(--color-accent-talents)',
    date: '2026-04-20',
    readMinutes: 4,
  },
  {
    slug: 'pole-moey-lyubvi',
    title: 'Поле моей любви: что вы почувствуете, обратившись ко мне',
    excerpt: 'Не метод, а пространство. Безусловное принятие, слова, структура и возвращение к себе — то, что происходит между нами до и после любой техники.',
    rubric: 'mayak',
    rubricLabel: 'Маяк в пути',
    rubricColor: 'var(--color-accent-talents)',
    date: '2026-04-20',
    readMinutes: 6,
  },
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
    title: 'Чай с мятой после катастрофы. Как вернуть себе способность чувствовать радость',
    excerpt: 'Три упражнения заземления: чай с мятой, босиком по полу и техника 5-4-3-2-1. Для тех, кто забыл, каково это — быть живым.',
    rubric: 'vkus',
    rubricLabel: 'Вкус жизни',
    rubricColor: 'var(--color-accent-life)',
    date: '2026-04-15',
    readMinutes: 4,
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
