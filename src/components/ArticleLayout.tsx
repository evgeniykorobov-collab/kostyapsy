import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import type { Article } from '@/data/articles';

type Props = {
  article: Article;
  children: React.ReactNode;
};

export default function ArticleLayout({ article, children }: Props) {
  const date = new Date(article.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '50px 0 40px' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-light)', fontSize: '14px', marginBottom: '24px', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> К блогу
          </Link>

          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: article.rubricColor, fontWeight: 600, marginBottom: '14px' }}>
            {article.rubricLabel}
          </div>

          <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)', lineHeight: 1.2, marginBottom: '20px' }}>{article.title}</h1>

          <div style={{ display: 'flex', gap: '20px', color: 'var(--color-text-light)', fontSize: '14px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={14} /> {date}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} /> {article.readMinutes} мин чтения
            </span>
          </div>
        </div>
      </div>

      <article className="section" style={{ padding: '50px 0 60px' }}>
        <div className="container article-body" style={{ maxWidth: '720px' }}>
          {children}
        </div>
      </article>

      <section style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="card" style={{ padding: '36px', backgroundColor: 'var(--color-bg-secondary)', textAlign: 'center', border: 'none' }}>
            <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-light)', marginBottom: '12px', fontWeight: 600 }}>
              Если узнали себя
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', lineHeight: 1.3 }}>
              Эту статью можно перечитывать. Но если внутри уже невыносимо — не читайте, а напишите.
            </h3>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '24px', lineHeight: 1.6 }}>
              Первая консультация — это знакомство. Ни к чему не обязывает. Вы рассказываете, я слушаю, дальше решаете сами.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/zapis" className="btn" style={{ padding: '12px 28px' }}>
                Записаться
              </Link>
              <Link href="/blog" className="btn btn-secondary" style={{ padding: '12px 28px' }}>
                Другие статьи
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
