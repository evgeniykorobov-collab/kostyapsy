import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, MessageCircle, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Спасибо за заявку — Константин Альбертович',
  description: 'Заявка получена. Я свяжусь с вами в течение 24 часов.',
  robots: { index: false, follow: false },
};

export default function SpasiboPage() {
  return (
    <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        <div className="card" style={{ padding: '60px 40px', textAlign: 'center' }}>
          <div
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '50%',
              backgroundColor: 'rgba(34, 197, 94, 0.12)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '28px',
            }}
          >
            <Check size={44} color="#16a34a" strokeWidth={2.5} />
          </div>

          <h1 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Заявка отправлена</h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '32px', lineHeight: 1.6 }}>
            Спасибо за доверие. Я свяжусь с вами в течение <strong style={{ color: 'var(--color-text-main)' }}>24 часов</strong> для подтверждения записи и согласования времени.
          </p>

          <div
            style={{
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '32px',
              textAlign: 'left',
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: '14px', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
              Если ситуация острая или нужно связаться раньше
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:+79954364645" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-text-main)', textDecoration: 'none' }}>
                <Phone size={18} color="var(--color-cta)" />
                <span>+7 995 436 46 45</span>
              </a>
              <a href="https://t.me/SouL_See_You" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-text-main)', textDecoration: 'none' }}>
                <MessageCircle size={18} color="var(--color-cta)" />
                <span>Telegram</span>
              </a>
              <a href="mailto:apinyan.kostya@yandex.ru" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-text-main)', textDecoration: 'none' }}>
                <Mail size={18} color="var(--color-cta)" />
                <span>apinyan.kostya@yandex.ru</span>
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-secondary" style={{ padding: '12px 24px' }}>
              На главную
            </Link>
            <Link href="/blog" className="btn" style={{ padding: '12px 24px' }}>
              Читать блог
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
