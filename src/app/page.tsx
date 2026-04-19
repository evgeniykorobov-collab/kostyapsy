'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeartCrack, Waves, Flame, Compass, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '120px 0', 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <motion.div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '120%',
          backgroundImage: 'url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: heroY,
          opacity: opacity,
          zIndex: -1
        }} />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.95) 100%)',
          zIndex: -1
        }} />

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}
          >
            <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', fontWeight: 600 }}>
              Кризисный психолог. Помогаю, когда «всё пропало» — и возвращаю вкус жизни.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-main)', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.6, fontWeight: 500 }}>
              Переводчик с языка Боли на язык Жизни. Работаю с острыми состояниями — развод, потеря, выгорание, экзистенциальный тупик. Авторский метод «Навигация в Хаосе».
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/zapis" className="btn" style={{ padding: '16px 32px', fontSize: '18px', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}>
                Записаться на консультацию
              </Link>
              <Link href="/about" className="btn btn-secondary glass" style={{ padding: '16px 32px', fontSize: '18px' }}>
                О специалисте
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Кому я помогаю */}
      <section className="section section-bg-secondary">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>С чем я работаю</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>

            {[
              {
                href: '/uslugi/razvod',
                img: 'https://picsum.photos/id/10/800/400',
                alt: 'Туман над лесом',
                icon: HeartCrack,
                iconColor: 'var(--color-accent-women)',
                borderColor: 'rgba(184, 169, 201, 0.3)',
                title: 'Развод и расставание',
                text: 'Когда дом, в котором вы жили годами, рухнул за один разговор. Пошаговый выход, а не «всё наладится».',
              },
              {
                href: '/uslugi/poterya',
                img: 'https://picsum.photos/id/29/800/400',
                alt: 'Приглушённый свет',
                icon: Waves,
                iconColor: 'var(--color-accent-life)',
                borderColor: 'rgba(255, 218, 185, 0.5)',
                title: 'Потеря и горе',
                text: 'Утрата близкого, здоровья, дела. Не «пройдёт», но научиться нести это — можно. Вместе.',
              },
              {
                href: '/uslugi/vygoranie',
                img: 'https://picsum.photos/id/13/800/400',
                alt: 'Выжженное поле',
                icon: Flame,
                iconColor: 'var(--color-accent-fears)',
                borderColor: 'rgba(143, 188, 143, 0.3)',
                title: 'Выгорание и увольнение',
                text: 'Поломка механизма восстановления. Не «просто отдохни» — а разобрать, что именно вы жжёте вместо себя.',
              },
              {
                href: '/uslugi/ekzistencialnyj-tupik',
                img: 'https://picsum.photos/id/28/800/400',
                alt: 'Тихий рассвет',
                icon: Compass,
                iconColor: 'var(--color-accent-talents)',
                borderColor: 'rgba(218, 165, 32, 0.3)',
                title: 'Экзистенциальный тупик',
                text: '«А зачем всё это?» — правильный вопрос. Не заглушаем антидепрессантом, а ищем ваш собственный ответ.',
              },
              {
                href: '/uslugi/ostrye-sostoyaniya',
                img: 'https://picsum.photos/id/11/800/400',
                alt: 'Абстрактные формы',
                icon: AlertTriangle,
                iconColor: 'var(--color-accent-ras)',
                borderColor: 'rgba(127, 179, 216, 0.3)',
                title: 'Острые состояния и паника',
                text: 'Панические атаки, острая тревога, навязчивые мысли. Экстренная консультация в 24–48 часов.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.href} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * (i + 1) }} className="card" style={{ padding: 0, width: 'calc(33.333% - 16px)', minWidth: '300px', maxWidth: '380px' }}>
                  <div style={{ height: '180px', width: '100%', position: 'relative' }}>
                    <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: '-20px', left: '24px', width: '64px', height: '64px', borderRadius: '16px', backgroundColor: '#fff', border: `1px solid ${item.borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', zIndex: 2 }}>
                      <Icon size={32} color={item.iconColor} />
                    </div>
                  </div>
                  <div style={{ padding: '40px 32px 32px', display: 'flex', flexDirection: 'column', height: 'calc(100% - 180px)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>{item.title}</h3>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: '24px', flexGrow: 1 }}>{item.text}</p>
                    <Link href={item.href} style={{ color: 'var(--color-cta)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'gap 0.3s' }}>Подробнее <ArrowRight size={16} /></Link>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Почему ко мне обращаются */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>Почему ко мне обращаются</h2>
          <div className="grid grid-cols-3">
            <div style={{ textAlign: 'center', padding: '0 20px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <CheckCircle2 size={40} color="var(--color-cta)" />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Я был на дне</h3>
              <p style={{ color: 'var(--color-text-light)' }}>Не «знаю по учебникам», а прошёл сам — развод, потерю, тупик. Поэтому знаю короткую дорогу обратно.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '0 20px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <CheckCircle2 size={40} color="var(--color-accent-women)" />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Конкретика, не утешение</h3>
              <p style={{ color: 'var(--color-text-light)' }}>Не «всё наладится», а пошаговый маршрут. Что делать в ближайшие 72 часа, что — в течение недели.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '0 20px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <CheckCircle2 size={40} color="var(--color-accent-fears)" />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Авторский метод</h3>
              <p style={{ color: 'var(--color-text-light)' }}>«Навигация в Хаосе» — четыре этапа, проверенные на людях в самых тяжёлых точках жизни.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Как проходит первая встреча & Формат */}
      <section className="section section-bg-secondary">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Как проходит первая встреча</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { n: '1', title: 'Якорение', text: 'Поле, в котором можно наконец выдохнуть и не контролировать лицо. Я выдерживаю — вы можете не делать вид.' },
                { n: '2', title: 'Вербализация', text: 'Называем чудовищ по именам. То, что было хаосом, становится задачей.' },
                { n: '3', title: 'Инвентаризация', text: 'Разбор завалов и пошаговый план. Что делать сегодня, завтра, через неделю.' },
                { n: '4', title: 'Заземление', text: 'Возвращение к вкусу жизни — к вашему маленькому Эдему, не к прежней колее.' }
              ].map(step => (
                <div key={step.n} style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-cta)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '18px' }}>
                    {step.n}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', fontWeight: 600 }}>{step.title}</h4>
                    <p style={{ color: 'var(--color-text-light)', margin: 0 }}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/zapis" className="btn" style={{ marginTop: '40px' }}>Записаться на первую консультацию</Link>
          </div>
          
          <div>
            <div className="card" style={{ position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '30px' }}>Формат работы</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>
                  <strong style={{ width: '40%', color: 'var(--color-text-main)' }}>Очные консультации:</strong>
                  <span style={{ width: '60%', color: 'var(--color-text-light)' }}>Москва (возможен выезд по запросу)</span>
                </li>
                <li style={{ display: 'flex', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>
                  <strong style={{ width: '40%', color: 'var(--color-text-main)' }}>Онлайн:</strong>
                  <span style={{ width: '60%', color: 'var(--color-text-light)' }}>Zoom / Telegram / по согласованию</span>
                </li>
                <li style={{ display: 'flex', borderBottom: '1px solid #eaeaea', paddingBottom: '16px' }}>
                  <strong style={{ width: '40%', color: 'var(--color-text-main)' }}>Длительность:</strong>
                  <span style={{ width: '60%', color: 'var(--color-text-light)' }}>50–60 минут</span>
                </li>
                <li style={{ display: 'flex' }}>
                  <strong style={{ width: '40%', color: 'var(--color-text-main)' }}>Частота:</strong>
                  <span style={{ width: '60%', color: 'var(--color-text-light)' }}>обычно 1 раз в неделю</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Блог (Последние статьи) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Блог</h2>
            <Link href="/blog" style={{ color: 'var(--color-cta)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Все статьи <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-3">
            {[1, 2, 3].map(item => (
              <div key={item} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '24px' }}>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-cta)', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.05em' }}>Статья {item}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', lineHeight: 1.4 }}>Пример названия статьи: Как справиться с тревогой перед выступлениями</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '24px', flexGrow: 1, fontSize: '0.95rem' }}>Краткое превью статьи, которое раскрывает суть материала и завлекает пользователя прочитать об этом подробнее...</p>
                <div style={{ color: '#aaa', fontSize: '14px', borderTop: '1px solid #eaeaea', paddingTop: '16px' }}>15 Марта, 2026</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
