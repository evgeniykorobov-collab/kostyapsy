import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '60px 0 30px', marginTop: 'auto' }}>
      <div className="container">
        <div className="grid grid-cols-4" style={{ gap: '40px', marginBottom: '40px' }}>
          
          {/* Brand & Rights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link href="/" style={{ fontFamily: 'var(--font-lora)', fontSize: '24px', fontWeight: 600 }}>
              Страхи и таланты
            </Link>
            <p style={{ color: 'var(--color-text-light)', fontSize: '14px', lineHeight: 1.5 }}>
              Константин Альбертович — кризисный психолог. Переводчик с языка Боли на язык Жизни. Авторский метод «Навигация в Хаосе».
            </p>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Навигация</h4>
            <Link href="/about" className="footer-link">О специалисте</Link>
            <Link href="/metody" className="footer-link">Методы работы</Link>
            <Link href="/biblioteka" className="footer-link">Библиотека</Link>
            <Link href="/nauka" className="footer-link">Научная база</Link>
            <Link href="/blog" className="footer-link">Блог</Link>
          </div>

          {/* Services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Услуги</h4>
            <Link href="/uslugi/razvod" className="footer-link">Развод и расставание</Link>
            <Link href="/uslugi/poterya" className="footer-link">Потеря и горе</Link>
            <Link href="/uslugi/vygoranie" className="footer-link">Выгорание и увольнение</Link>
            <Link href="/uslugi/ekzistencialnyj-tupik" className="footer-link">Экзистенциальный тупик</Link>
            <Link href="/uslugi/ostrye-sostoyaniya" className="footer-link">Острые состояния и паника</Link>
          </div>

          {/* Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Контакты</h4>
            <a href="https://t.me/SouL_See_You" target="_blank" rel="noopener noreferrer" className="footer-link">Telegram: @SouL_See_You</a>
            <Link href="/zapis" className="footer-link">Запись на консультацию</Link>
          </div>

        </div>
        
        <div style={{ borderTop: '1px solid #ddd', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', color: 'var(--color-text-light)', fontSize: '14px' }}>
          <div>&copy; 2026 Страхи и таланты. Все данные конфиденциальны.</div>
          <Link href="/privacy-policy" className="footer-link">Политика конфиденциальности</Link>
        </div>
      </div>

    </footer>
  );
}
