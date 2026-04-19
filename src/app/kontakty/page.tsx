import { Metadata } from 'next';
import Link from 'next/link';
import { Send, MapPin, Clock, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Контакты | Константин Альбертович, кризисный психолог',
  description: 'Связаться с кризисным психологом Константином Альбертовичем. Telegram, запись на консультацию, Ростов-на-Дону и онлайн.',
};

export default function ContactsPage() {
  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Контакты</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
            Самый быстрый способ — написать в Telegram или оставить заявку. Отвечаю в течение дня.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="grid grid-cols-2" style={{ gap: '24px' }}>

            <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Send size={28} color="#229ED9" />
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Telegram</h3>
              <p style={{ color: 'var(--color-text-light)', margin: 0, lineHeight: 1.6 }}>
                Напишите в мессенджер — так быстрее всего согласовать время и формат.
              </p>
              <a
                href="https://t.me/SouL_See_You"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ alignSelf: 'flex-start', marginTop: '8px' }}
              >
                Написать в Telegram
              </a>
            </div>

            <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={28} color="var(--color-cta)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Запись на консультацию</h3>
              <p style={{ color: 'var(--color-text-light)', margin: 0, lineHeight: 1.6 }}>
                Короткая форма — опишите в двух словах ситуацию, свяжусь с вами в ответ.
              </p>
              <Link
                href="/zapis"
                className="btn btn-secondary"
                style={{ alignSelf: 'flex-start', marginTop: '8px' }}
              >
                Оставить заявку
              </Link>
            </div>

            <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={28} color="var(--color-accent-life)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Телефон</h3>
              <p style={{ color: 'var(--color-text-light)', margin: 0, lineHeight: 1.6 }}>
                Звонок или СМС — если удобнее голосом.
              </p>
              <a
                href="tel:+79954364645"
                className="btn btn-secondary"
                style={{ alignSelf: 'flex-start', marginTop: '8px' }}
              >
                +7 995 436-46-45
              </a>
            </div>

            <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={28} color="var(--color-accent-women)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Email</h3>
              <p style={{ color: 'var(--color-text-light)', margin: 0, lineHeight: 1.6 }}>
                Для развёрнутых писем и документов.
              </p>
              <a
                href="mailto:apinyan.kostya@yandex.ru"
                className="btn btn-secondary"
                style={{ alignSelf: 'flex-start', marginTop: '8px', wordBreak: 'break-all' }}
              >
                apinyan.kostya@yandex.ru
              </a>
            </div>

            <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', gridColumn: '1 / -1' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={28} color="var(--color-accent-fears)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', margin: '0 0 8px' }}>Где работаю</h3>
                  <p style={{ color: 'var(--color-text-light)', margin: 0, lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--color-text-main)' }}>Очно:</strong> Ростов-на-Дону, адрес уточняется при записи. Возможен выезд по запросу.<br />
                    <strong style={{ color: 'var(--color-text-main)' }}>Онлайн:</strong> Zoom / Telegram-видео / по согласованию — для клиентов из других городов и стран.<br />
                    <strong style={{ color: 'var(--color-text-main)' }}>Формат:</strong> 50–60 минут, обычно 1 раз в неделю.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
