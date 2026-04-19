'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'cookies-accepted-v1';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление об использовании cookies"
      style={{
        position: 'fixed',
        left: '16px',
        right: '16px',
        bottom: '16px',
        zIndex: 1001,
        maxWidth: '880px',
        margin: '0 auto',
        padding: '18px 22px',
        borderRadius: '14px',
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(14px)',
        border: '1px solid #eaeaea',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '16px',
        fontFamily: 'var(--font-inter)',
      }}
    >
      <p style={{ margin: 0, flex: '1 1 300px', fontSize: '14px', lineHeight: 1.55, color: 'var(--color-text-main)' }}>
        Сайт использует cookies и метрические сервисы для корректной работы и анализа посещаемости. Продолжая, вы соглашаетесь с{' '}
        <Link href="/privacy-policy" style={{ color: 'var(--color-cta)', textDecoration: 'underline' }}>
          Политикой конфиденциальности
        </Link>
        {' '}и обработкой персональных данных в соответствии с 152-ФЗ.
      </p>
      <button
        onClick={accept}
        className="btn"
        style={{ flexShrink: 0, padding: '12px 24px', fontSize: '15px', minHeight: '44px' }}
      >
        Принимаю
      </button>
    </div>
  );
}
