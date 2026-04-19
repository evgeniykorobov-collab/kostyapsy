import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <div style={{ fontSize: '8rem', fontFamily: 'var(--font-lora)', fontWeight: 600, color: 'var(--color-bg-secondary)', lineHeight: 1 }}>
          404
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px', marginTop: '-10px' }}>Страница не найдена</h1>
        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '40px' }}>
          Такой страницы не существует — она могла быть удалена или вы перешли по неверной ссылке.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn" style={{ padding: '14px 32px' }}>
            На главную
          </Link>
          <Link href="/zapis" className="btn btn-secondary" style={{ padding: '14px 32px' }}>
            Записаться на консультацию
          </Link>
        </div>
      </div>
    </section>
  );
}
