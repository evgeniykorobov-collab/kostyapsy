import { Metadata } from 'next';
import Link from 'next/link';
import { LifeBuoy, Compass, Anchor, Lightbulb, Sparkles, Mail, ArrowRight, Clock } from 'lucide-react';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Блог | Константин Альбертович, кризисный психолог',
  description: 'Пять рубрик: «Аптечка первой помощи», «Архитектура чувств», «Навигация в Хаосе», «Маяк в пути», «Вкус жизни». Без воды и эзотерики — только то, что работает.',
};

type Topic = string;
type Rubric = {
  num: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  iconColor: string;
  title: string;
  subtitle: string;
  forWhom: string;
  topics: Topic[];
};

export default function BlogPage() {
  const rubrics: Rubric[] = [
    {
      num: '01',
      icon: LifeBuoy,
      iconColor: 'var(--color-accent-ras)',
      title: 'Аптечка первой помощи',
      subtitle: 'Скорая психологическая помощь',
      forWhom: 'Для тех, кому больно прямо сейчас. Чёткие инструкции, как пережить ближайшие 24–48 часов.',
      topics: [
        'Что делать в первые 24 часа после того, как вас бросили — пошаговая инструкция выживания',
        'Паническая атака: 5 шагов, чтобы вернуть контроль над телом',
        '«Меня уволили». Экстренный финансовый и эмоциональный план на неделю',
        'Как отличить усталость от депрессии — простой чек-лист для самодиагностики',
        'Что сказать себе, когда кажется, что выхода нет — фразы-якоря',
        'Как уснуть, когда мысли крутятся',
      ],
    },
    {
      num: '02',
      icon: Compass,
      iconColor: 'var(--color-accent-women)',
      title: 'Архитектура чувств',
      subtitle: 'Перевод с языка Хаоса',
      forWhom: 'Для тех, кто чувствует внутри «кашу», но не может подобрать слов.',
      topics: [
        'Словарь кризисных состояний: чем тревога отличается от страха, а тоска — от печали',
        '«Я не знаю, чего хочу» — инструкция по сборке себя заново',
        'Почему мы боимся тишины и как она лечит',
        'Гнев, который мы прячем: как распознать подавленную агрессию и направить её в дело',
        'Обида как способ управления: разбираем механизм и учимся выходить из игры',
        'Эмоциональное выгорание — не модный диагноз, а реальный сбой системы',
      ],
    },
    {
      num: '03',
      icon: Anchor,
      iconColor: 'var(--color-cta)',
      title: 'Навигация в Хаосе',
      subtitle: 'Авторский метод',
      forWhom: 'Для тех, кто готов не страдать, а действовать. Здесь — «кухня» метода.',
      topics: [
        'Почему «просто успокоиться» не работает — и что делать вместо этого',
        'Метод 4 шагов: как я работаю с клиентом в остром кризисе (Якорение, Вербализация, Инвентаризация, Заземление)',
        'План Б: как создать личную систему безопасности на случай жизненного шторма',
        'Границы личности: как я учу клиентов говорить «нет» и не сгорать от вины',
        'Почему юмор — серьёзный инструмент в кризисной терапии',
        'Свобода и Структура: как совместить жажду перемен с необходимостью стабильности',
      ],
    },
    {
      num: '04',
      icon: Lightbulb,
      iconColor: 'var(--color-accent-talents)',
      title: 'Маяк в пути',
      subtitle: 'Личное и вдохновляющее',
      forWhom: 'Для постоянных читателей, которым важно чувствовать человека, а не функцию.',
      topics: [
        'Мой путь: от шторма к Маяку — личная история о том, как рождался специалист',
        'Письмо себе в 20 лет: что я знаю о кризисах сейчас, чего не знал тогда',
        'Ресурсы, которые спасают меня: книги, фильмы, места, люди',
        'Почему помогать тем, у кого нет денег — часть моей миссии. Манифест о бесплатной помощи',
        'Одиночество профессионала: как я сам справляюсь с чужим грузом',
      ],
    },
    {
      num: '05',
      icon: Sparkles,
      iconColor: 'var(--color-accent-life)',
      title: 'Вкус жизни',
      subtitle: 'Возвращение в тело и реальность',
      forWhom: 'Для тех, кто устал от психологии и хочет простых, земных способов почувствовать себя живым.',
      topics: [
        'Заземление: 5 простых практик, чтобы вернуться в тело, когда сознание улетает в панику',
        'Еда как терапия: почему важно есть вкусно, даже когда жить не хочется',
        'Прогулки спасения: как ходьба пешком восстанавливает нейронные связи',
        'Тактильный голод: что делать, если не хватает прикосновений',
        'Маленькие радости большого кризиса: учимся замечать свет в темноте',
        'Зачем заваривать чай по всем правилам, когда мир рушится',
      ],
    },
  ];

  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Блог</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
            Пять рубрик. От «больно прямо сейчас» — до «как вернуться к вкусу жизни». Без воды, без эзотерики, без «возьмите себя в руки».
          </p>
        </div>
      </div>

      {/* Published articles */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '32px', textAlign: 'center' }}>Опубликованные статьи</h2>

          <div className="grid grid-cols-2" style={{ gap: '24px' }}>
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '28px',
                  textDecoration: 'none',
                  color: 'inherit',
                  height: '100%',
                  cursor: 'pointer',
                }}
              >
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: a.rubricColor, fontWeight: 600, marginBottom: '12px' }}>
                  {a.rubricLabel}
                </div>
                <h3 style={{ fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '12px', color: 'var(--color-text-main)' }}>
                  {a.title}
                </h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.55, marginBottom: '20px', flex: 1 }}>
                  {a.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '14px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-light)', fontSize: '13px' }}>
                    <Clock size={13} /> {a.readMinutes} мин
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-cta)', fontSize: '14px', fontWeight: 600 }}>
                    Читать <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rubric map */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>

          <h2 style={{ fontSize: '1.6rem', marginBottom: '12px', textAlign: 'center' }}>Карта рубрик</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Тексты пишутся постепенно. Здесь — план движения.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {rubrics.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.num} className="card rubric-card" style={{ padding: '40px', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px', alignItems: 'start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '14px', color: '#bbb', fontWeight: 600, letterSpacing: '0.1em' }}>{r.num}</div>
                    <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={32} color={r.iconColor} />
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', color: r.iconColor, fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>{r.subtitle}</div>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', lineHeight: 1.2 }}>{r.title}</h2>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: '24px', lineHeight: 1.6, fontStyle: 'italic' }}>{r.forWhom}</p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {r.topics.map((t, i) => (
                        <li key={i} style={{ display: 'flex', gap: '12px', color: 'var(--color-text-main)', fontSize: '0.97rem', lineHeight: 1.55 }}>
                          <span style={{ color: r.iconColor, fontWeight: 600, flexShrink: 0, minWidth: '22px' }}>{i + 1}.</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '60px', padding: '32px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '16px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={28} color="var(--color-cta)" />
              </div>
              <div>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-cta)', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em' }}>Бонус-форматы</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Что появится сверх рубрик</h3>
                <ul style={{ paddingLeft: '20px', color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
                  <li><strong style={{ color: 'var(--color-text-main)' }}>«Вопрос недели»</strong> — раз в неделю разбираю одно письмо читателя (анонимно), формат мини-консультации.</li>
                  <li><strong style={{ color: 'var(--color-text-main)' }}>Чек-листы и PDF</strong> — «План эвакуации при панике», «Словарь чувств за 5 минут». Скачать и сохранить в телефон.</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
              Если хотите, чтобы какая-то тема вышла раньше — напишите в <a href="https://t.me/SouL_See_You" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-cta)' }}>Telegram</a>, подвину в очереди.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
