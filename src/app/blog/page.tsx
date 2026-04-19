import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Блог | Константин Альбертович, кризисный психолог',
  description: 'Статьи о кризисах, разводах, потерях, выгорании, острых состояниях и методе «Навигация в Хаосе». Без воды и утешений — конкретика.',
};

export default function BlogPage() {
  const articles = [
    {
      title: '«Навигация в Хаосе»: почему работает и как устроена',
      tag: 'Метод',
      desc: 'Четыре этапа — Якорение, Вербализация, Инвентаризация, Заземление. Почему в кризисе порядок шагов важнее любой техники.',
      date: 'Апрель 2026',
    },
    {
      title: 'Первые 72 часа после развода: карта действий',
      tag: 'Развод',
      desc: 'Что делать, когда разговор состоялся и дом рухнул. Не про чувства — про конкретику: документы, деньги, дети, сон. И почему именно 72 часа.',
      date: 'Апрель 2026',
    },
    {
      title: 'Почему «время лечит» — худший совет при потере',
      tag: 'Потеря',
      desc: 'Горе не проходит — встраивается. Разница принципиальная. И что делать, когда через полгода-год «уже должно было отпустить», а не отпустило.',
      date: 'Март 2026',
    },
    {
      title: 'Выгорание — это не усталость. Это поломка механизма восстановления',
      tag: 'Выгорание',
      desc: 'Почему «просто отдохните» не работает. В чём разница между усталостью и выгоранием на уровне физиологии. И как понять, что пора останавливаться — до того, как тело само остановит.',
      date: 'Март 2026',
    },
    {
      title: 'Экзистенциальный тупик: когда «нормальная жизнь» перестала насыщать',
      tag: 'Экзистенциальный тупик',
      desc: 'Вроде всё в порядке — работа, отношения, деньги. А жить не хочется. Не депрессия — а встреча с вопросом «зачем». И почему антидепрессантом его не заглушить.',
      date: 'Март 2026',
    },
    {
      title: 'Паническая атака прямо сейчас: инструкция по самопомощи',
      tag: 'Острые состояния',
      desc: 'Техника 5-4-3-2-1, дыхание 4-7-8, и что делать, когда эти техники не работают. Плюс — когда паническая атака это звонок психиатру, а не психологу.',
      date: 'Февраль 2026',
    },
    {
      title: 'Разница между горем и депрессией: когда нужен психиатр',
      tag: 'Потеря',
      desc: 'Горе — это здоровая реакция на утрату. Депрессия — это болезнь. Путать их опасно в обе стороны. Критерии, которые видны даже неспециалисту.',
      date: 'Февраль 2026',
    },
  ];

  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Блог</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
            Короткие тексты о кризисах, о методе, о том, как устроена психика в момент «всё пропало». Без воды, без эзотерики, без «возьмите себя в руки».
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-cols-3" style={{ gap: '24px' }}>
            {articles.map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '28px', cursor: 'default' }}>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-cta)', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.05em' }}>{item.tag}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', lineHeight: 1.4 }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '24px', flexGrow: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                <div style={{ color: '#aaa', fontSize: '14px', borderTop: '1px solid #eaeaea', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{item.date}</span>
                  <span style={{ fontSize: '13px', color: '#bbb' }}>скоро</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '60px', padding: '24px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '12px', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
              Тексты пишутся постепенно. Пока здесь — темы и аннотации. Полные статьи появятся по одной, без гонки. Если хотите, чтобы какая-то тема вышла раньше — напишите в <a href="https://t.me/SouL_See_You" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-cta)' }}>Telegram</a>, подвину в очереди.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
