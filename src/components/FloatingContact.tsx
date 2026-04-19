'use client';
import { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000 }}>
      {open && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          animation: 'fadeIn 0.2s ease',
        }}>
          <a
            href="https://t.me/SouL_See_You"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              fontSize: '14px',
              fontWeight: 500,
              color: '#333',
              whiteSpace: 'nowrap',
              transition: 'transform 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Send size={18} color="#229ED9" />
            Telegram
          </a>
          <a
            href="tel:+79954364645"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              fontSize: '14px',
              fontWeight: 500,
              color: '#333',
              whiteSpace: 'nowrap',
              transition: 'transform 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Phone size={18} color="var(--color-accent-life)" />
            +7 995 436-46-45
          </a>
          <a
            href="/zapis"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              fontSize: '14px',
              fontWeight: 500,
              color: '#333',
              whiteSpace: 'nowrap',
              transition: 'transform 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <MessageCircle size={18} color="var(--color-cta)" />
            Оставить заявку
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Закрыть меню связи' : 'Написать'}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-cta)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
          transition: 'transform 0.2s, background-color 0.2s',
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
        }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
