import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты | Клинический психолог',
  description: 'Контакты для записи на консультацию. Телефон, мессенджеры, адрес кабинета и часы работы.',
};

export default function ContactsPage() {
  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Контакты</h1>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="grid grid-cols-2" style={{ gap: '60px', alignItems: 'start' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div className="card">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Связаться со мной</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1.1rem' }}>
                  <li><strong>Телефон:</strong> +7 (999) 123-45-67</li>
                  <li><strong>Telegram:</strong> @klimov_psy</li>
                  <li><strong>WhatsApp:</strong> +7 (999) 123-45-67</li>
                  <li><strong>Email:</strong> hello@klimov-psy.ru</li>
                </ul>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Часы работы</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
                  Пн-Пт: 10:00 — 20:00<br/>
                  Сб: 11:00 — 16:00<br/>
                  Вс: Выходной
                </p>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Социальные сети</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
                  <strong>Telegram-канал:</strong> <a href="#" style={{ color: 'var(--color-cta)' }}>t.me/klimov_notes</a><br/>
                  <strong>VK:</strong> <a href="#" style={{ color: 'var(--color-cta)' }}>vk.com/klimov_psy</a>
                </p>
              </div>
            </div>

            <div className="card" style={{ padding: '0', overflow: 'hidden', height: '100%' }}>
              <div style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Адрес кабинета</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '24px' }}>
                  г. Ростов-на-Дону<br/>
                  Бизнес-центр «Психология», 3 этаж, офис 305
                </p>
              </div>
              <div style={{ width: '100%', height: '400px', backgroundColor: '#eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#999' }}>Интерактивная карта (Яндекс/Google)</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
