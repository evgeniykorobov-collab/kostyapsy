'use client';
import { useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function RecordPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    direction: '',
    format: '',
    comment: ''
  });
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/zapis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', contact: '', email: '', direction: '', format: '', comment: '' });
        setAgreed(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = { width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' };

  if (status === 'success') {
    return (
      <>
        <div className="section section-bg-secondary" style={{ padding: '60px 0 40px' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Запись на консультацию</h1>
          </div>
        </div>
        <section className="section">
          <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
            <div className="card" style={{ padding: '60px 40px' }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✓</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Заявка отправлена</h2>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '30px' }}>
                Спасибо! Я свяжусь с вами в течение 24 часов для подтверждения записи.
              </p>
              <button className="btn" onClick={() => setStatus('idle')} style={{ padding: '14px 32px' }}>
                Отправить ещё одну заявку
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Запись на консультацию</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
            Первая консультация — это знакомство. Вы расскажете о себе и своей ситуации, я помогу сформулировать запрос и предложу план работы. Это ни к чему не обязывает — вы сами решите, продолжать ли.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="grid grid-cols-2" style={{ gap: '60px', alignItems: 'start' }}>

            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Формат работы</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px', padding: 0 }}>
                <li style={{ display: 'flex', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>
                  <strong style={{ width: '40%', color: 'var(--color-text-main)' }}>Очные консультации:</strong>
                  <span style={{ width: '60%', color: 'var(--color-text-light)' }}>Ростов-на-Дону (возможен выезд по запросу)</span>
                </li>
                <li style={{ display: 'flex', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>
                  <strong style={{ width: '40%', color: 'var(--color-text-main)' }}>Онлайн:</strong>
                  <span style={{ width: '60%', color: 'var(--color-text-light)' }}>Zoom / Telegram-видео / по согласованию</span>
                </li>
                <li style={{ display: 'flex', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>
                  <strong style={{ width: '40%', color: 'var(--color-text-main)' }}>Длительность:</strong>
                  <span style={{ width: '60%', color: 'var(--color-text-light)' }}>50–60 минут</span>
                </li>
                <li style={{ display: 'flex' }}>
                  <strong style={{ width: '40%', color: 'var(--color-text-main)' }}>Стоимость:</strong>
                  <span style={{ width: '60%', color: 'var(--color-text-light)' }}>От 5 000 руб / сессия</span>
                </li>
              </ul>
            </div>

            <div className="card" style={{ padding: '40px' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Ваше имя *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Телефон или Telegram *</label>
                  <input required type="text" name="contact" value={formData.contact} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Направление</label>
                  <select name="direction" value={formData.direction} onChange={handleChange} style={{ ...inputStyle, backgroundColor: '#fff' }}>
                    <option value="">Выберите направление</option>
                    <option value="razvod">Развод и расставание</option>
                    <option value="poterya">Потеря и горе</option>
                    <option value="vygoranie">Выгорание и увольнение</option>
                    <option value="ekzistencia">Экзистенциальный тупик</option>
                    <option value="ostroe">Острые состояния / паника</option>
                    <option value="drugoe">Другое</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Удобный формат</label>
                  <select name="format" value={formData.format} onChange={handleChange} style={{ ...inputStyle, backgroundColor: '#fff' }}>
                    <option value="">Не имеет значения</option>
                    <option value="online">Онлайн</option>
                    <option value="offline">Очно</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Комментарий</label>
                  <textarea name="comment" value={formData.comment} onChange={handleChange} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
                </div>

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: 'var(--color-text-light)', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={e => setAgreed(e.target.checked)}
                    style={{ marginTop: '3px', width: '16px', height: '16px', flexShrink: 0 }}
                  />
                  <span>
                    Я даю согласие на обработку моих персональных данных в соответствии с{' '}
                    <a href="/privacy-policy" target="_blank" style={{ color: 'var(--color-cta)', textDecoration: 'underline' }}>
                      Политикой конфиденциальности
                    </a>
                  </span>
                </label>

                {status === 'error' && (
                  <div style={{ padding: '12px 16px', backgroundColor: '#FEE2E2', color: '#991B1B', borderRadius: '8px', fontSize: '0.9rem' }}>
                    Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь напрямую через Telegram.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn"
                  disabled={!agreed || status === 'sending'}
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '1.1rem',
                    marginTop: '10px',
                    opacity: (!agreed || status === 'sending') ? 0.5 : 1,
                    cursor: (!agreed || status === 'sending') ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? 'Отправка...' : 'Отправить заявку'}
                </button>

                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', textAlign: 'center', marginTop: '8px' }}>
                  Я свяжусь с вами в течение 24 часов для подтверждения записи. Все данные конфиденциальны.
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
