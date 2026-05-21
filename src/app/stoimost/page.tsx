import { Metadata } from 'next';
import Link from 'next/link';
import { Anchor, Hammer, HeartHandshake, Headphones, Zap, Wind, MessageSquare, Compass, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Стоимость работы со мной | Константин Альбертович',
  description: 'Прозрачные цены на консультации кризисного психолога Константина Альбертовича. Час Маяка 12 000 ₽, пакетная работа «Архитектор Души», «Маяк для Мамы», супервизия для коллег, экспресс-форматы и бесплатный свет Маяка.',
};

type Tariff = {
  icon: typeof Sun;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  result?: string;
};

export default function StoimostPage() {
  const main: Tariff[] = [
    {
      icon: Anchor,
      title: '«Час Маяка»',
      subtitle: 'Разовая кризисная сессия',
      price: '12 000 ₽',
      description: '60 минут очно или онлайн. Вы выговоритесь — я переведу хаос в слова. Затем мы вместе составим план действий на ближайшие 72 часа.',
      result: 'Земля под ногами появилась снова, и есть конкретный список шагов.',
    },
    {
      icon: Hammer,
      title: '«Архитектор Души» — 5 встреч',
      subtitle: 'Базовая пересборка',
      price: '36 000 ₽',
      description: 'Встречи раз в неделю по 60 минут. Включает домашние задания и мою доступность в мессенджере между встречами.',
    },
    {
      icon: Hammer,
      title: '«Архитектор Души» — 10 встреч',
      subtitle: 'Полная архитектурная работа',
      price: '60 000 ₽',
      description: 'Полная пересборка фундамента личности. 10 встреч по 60 минут раз в неделю. Сопровождение в мессенджере, домашние задания.',
    },
  ];

  const special: Tariff[] = [
    {
      icon: HeartHandshake,
      title: '«Маяк для Мамы»',
      subtitle: 'Поддержка родителей тяжелобольных детей',
      price: '12 000 ₽',
      description: '3 встречи по 60 минут. Я сам держал небо над больничной койкой. Учимся дышать, не выгорать и говорить с ребёнком о страшном.',
      result: 'Вы вернёте себе право на слёзы, сон и надежду — без чувства вины.',
    },
    {
      icon: Headphones,
      title: 'Супервизия для коллег',
      subtitle: 'Когда вы держите других, кто держит вас?',
      price: '12 000 ₽',
      description: 'Разбор сложных случаев для психологов и помогающих практиков. 60 минут онлайн. Я подсвечу ваши слепые зоны, помогу не выгореть и найти выход в тупиковом кейсе. Без оценок, с уважением к вашему опыту.',
      result: 'Экономия вашего ресурса, навигация в тупиковом кейсе, возвращение в практику без выгорания.',
    },
  ];

  const express: Tariff[] = [
    {
      icon: Zap,
      title: '«Блиц-разбор»',
      subtitle: 'Голосовой ответ на ваш вопрос',
      price: '2 400 ₽',
      description: 'Вы присылаете ситуацию голосом или текстом (до 3 минут). Я записываю разбор на 10–15 минут: что происходит, где выход, первый шаг. Без видеосвязи, асинхронно.',
    },
    {
      icon: Wind,
      title: '«Экспресс-заземление»',
      subtitle: 'Короткая практика при панике',
      price: '2 400 ₽',
      description: '15 минут онлайн: дыхание, тело, якорение. Вы на грани, тревога зашкаливает — вернёмся в реальность и сможете действовать.',
    },
    {
      icon: MessageSquare,
      title: '«Вербализация»',
      subtitle: 'Называем то, что душит',
      price: '2 400 ₽',
      description: 'За 15 минут я помогу вам точно назвать, что с вами происходит, и это сразу снизит накал.',
    },
    {
      icon: Compass,
      title: '«Навигатор»',
      subtitle: 'Помощь в выборе пути',
      price: '1 200 ₽',
      description: 'Вы не знаете, какой формат помощи вам нужен: терапия, коучинг, врач, поддержка. Короткая беседа, где я сориентирую и дам честную рекомендацию.',
    },
  ];

  const renderCard = (t: Tariff, key: string | number) => {
    const Icon = t.icon;
    return (
      <div key={key} className="card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon size={28} color="var(--color-cta)" />
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-cta)', whiteSpace: 'nowrap' }}>
            {t.price}
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '1.4rem', margin: '0 0 4px' }}>{t.title}</h3>
          <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '0.95rem', fontStyle: 'italic' }}>
            {t.subtitle}
          </p>
        </div>
        <p style={{ color: 'var(--color-text-main)', margin: 0, lineHeight: 1.6 }}>
          {t.description}
        </p>
        {t.result && (
          <div style={{ padding: '14px 18px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '10px', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
            <strong>→ Результат: </strong>{t.result}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-cta)', marginBottom: '16px', fontWeight: 600 }}>Инвестиция в возвращение себя</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: 1.15 }}>Стоимость работы со мной</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-light)', lineHeight: 1.6, marginBottom: '12px' }}>
            Здесь нет «прейскуранта». Есть ваша инвестиция в себя. Я не продаю время — я создаю пространство, в котором вы перестаёте разрушаться и начинаете строить себя заново.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
            Это не услуга, это инициация. И у неё есть фиксированная стоимость, потому что я уважаю свой труд и ваш будущий результат.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '32px', textAlign: 'center' }}>Индивидуальные консультации</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            {main.map((t, i) => renderCard(t, i))}
          </div>
        </div>
      </section>

      <section className="section section-bg-secondary">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '12px', textAlign: 'center' }}>Специализированные программы</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            «Маяк для Мамы» — моя личная миссия. Я сам держал небо над больничной койкой. Я знаю этот коридор.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            {special.map((t, i) => renderCard(t, i))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '12px', textAlign: 'center' }}>Экспресс-помощь</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Точечные консультации 15 минут — когда не нужна полная сессия, но нужен мой взгляд.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {express.map((t, i) => renderCard(t, i))}
          </div>
        </div>
      </section>

      <section className="section section-bg-secondary">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '40px', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Sun size={28} color="var(--color-accent-talents)" />
              </div>
              <h2 style={{ fontSize: '1.7rem', margin: 0 }}>Бесплатный свет Маяка</h2>
            </div>
            <ul style={{ color: 'var(--color-text-main)', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li><strong>Одно место в неделю</strong> — индивидуальная встреча для тех, кто в острой нужде. Отбор по короткой честной анкете.</li>
              <li><strong>«Приём у Сатурна»</strong> — открытая онлайн-встреча раз в месяц с разбором 2–3 анонимных ситуаций. Вход свободный.</li>
              <li><strong>«Аптечка»</strong> — бесплатные памятки в моём <Link href="/blog" style={{ color: 'var(--color-cta)' }}>блоге</Link> для первой помощи.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="card" style={{ padding: '50px', backgroundColor: 'var(--color-cta)', color: '#fff' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#fff' }}>Готовы начать?</h2>
            <p style={{ fontSize: '1.1rem', margin: '0 auto 30px', maxWidth: '600px', opacity: 0.95, lineHeight: 1.6 }}>
              Выберите формат и напишите мне в Telegram, WhatsApp или заполните форму на странице записи. Я отвечу лично в течение 24 часов. Давайте зажигать ваш свет.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/zapis" className="btn" style={{ backgroundColor: '#fff', color: 'var(--color-cta)', padding: '16px 32px', fontSize: '1.05rem' }}>
                Заполнить форму
              </Link>
              <Link href="/kontakty" className="btn btn-secondary" style={{ backgroundColor: 'transparent', color: '#fff', borderColor: '#fff', padding: '16px 32px', fontSize: '1.05rem' }}>
                Все контакты
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
