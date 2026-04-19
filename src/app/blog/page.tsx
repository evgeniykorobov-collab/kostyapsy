import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Блог | Клинический психолог',
  description: 'Статьи о психологии, страхах, тревоге и самореализации. Научный взгляд на психологические проблемы.',
};

export default function BlogPage() {
  const articles = [
    { title: 'Паническая атака: что это и что делать прямо сейчас', tag: 'Страхи и тревога', desc: 'Практическая инструкция по самопомощи во время панической атаки.', date: 'Март 2026' },
    { title: 'Мой ребёнок — аутист. Что дальше?', tag: 'Дети с РАС', desc: 'Гид для родителей после постановки диагноза. Первые шаги к адаптации.', date: 'Февраль 2026' },
    { title: 'Почему вы не можете "просто не тревожиться"', tag: 'Наука', desc: 'Нейробиология тревоги: как работает наш мозг в стрессовых ситуациях.', date: 'Январь 2026' },
    { title: 'Как понять, в чём ваш талант, если вам за 30', tag: 'Таланты', desc: 'Экзистенциальный подход к поиску себя и самореализации во взрослом возрасте.', date: 'Декабрь 2025' },
    { title: 'Послеродовая депрессия — не слабость. Что нужно знать', tag: 'Женское здоровье', desc: 'Для мам и их близких: как распознать и как поддержать.', date: 'Ноябрь 2025' },
    { title: 'Кризис среднего возраста: миф или реальность?', tag: 'Кризисы и выбор', desc: 'Что говорит наука о возрастных кризисах и переоценке ценностей.', date: 'Октябрь 2025' },
    { title: 'Страх публичных выступлений: 5 шагов от паники к уверенности', tag: 'Страхи и тревога', desc: 'Экспозиционные техники для работы со страхом сцены.', date: 'Сентябрь 2025' },
    { title: 'Почему детям с аутизмом важна ранняя помощь', tag: 'Дети с РАС', desc: 'Обзор научных исследований о раннем вмешательстве.', date: 'Август 2025' }
  ];

  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Блог</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {['Все статьи', 'Страхи и тревога', 'Таланты', 'Дети с РАС', 'Женское здоровье', 'Кризисы и выбор', 'Наука'].map((tag, i) => (
              <button key={i} style={{ 
                padding: '8px 16px', 
                borderRadius: '20px', 
                border: '1px solid #ddd', 
                backgroundColor: i === 0 ? 'var(--color-cta)' : '#fff',
                color: i === 0 ? '#fff' : 'var(--color-text-main)',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}>
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3">
            {articles.map((item, i) => (
              <Link href="#" key={i} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '24px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-cta)', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.05em' }}>{item.tag}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', lineHeight: 1.4 }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '24px', flexGrow: 1, fontSize: '0.95rem' }}>{item.desc}</p>
                <div style={{ color: '#aaa', fontSize: '14px', borderTop: '1px solid #eaeaea', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{item.date}</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
