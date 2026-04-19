import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Острые состояния и паника | Кризисный психолог',
  description: 'Экстренная помощь при панических атаках, острой тревоге, депрессивных эпизодах, суицидальных мыслях. Возврат в безопасность.',
};

export default function AcuteStatesPage() {
  return (
    <>
      <div className="section" style={{ backgroundColor: 'var(--color-accent-ras)', color: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9, marginBottom: '16px' }}>Экстренная помощь</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#fff' }}>Острые состояния и паника</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', opacity: 0.95, lineHeight: 1.6 }}>
            Когда земля уходит из-под ног прямо сейчас. Когда в груди стучит так, что кажется — сердце остановится. Когда мысли чёрные и страшные, и вы не знаете, выдержите ли до утра.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          <div className="card" style={{ backgroundColor: '#FEF3C7', border: '2px solid #F59E0B', maxWidth: '1000px', margin: '0 auto 60px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#92400E' }}>⚠️ Если есть мысли о самоубийстве прямо сейчас</h3>
            <p style={{ color: '#78350F', lineHeight: 1.7, margin: 0, fontSize: '1rem' }}>
              Позвоните на бесплатный круглосуточный телефон доверия: <strong>8 (800) 2000-122</strong> (дети/подростки) или <strong>051</strong> (Москва, психологическая помощь). Если состояние критическое — <strong>112</strong>. Я работаю с острыми состояниями, но если прямо сейчас стоит вопрос жизни и смерти — нужна немедленная помощь, а не запись на следующую неделю.
            </p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '60px' }}>

            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>С чем работаю</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {[
                  { title: 'Панические атаки', text: 'внезапный приступ страха с телесными симптомами — от удушья до ощущения смерти' },
                  { title: 'Острая тревога', text: 'не можете ни сидеть, ни лежать, ни работать — тело в постоянной готовности к катастрофе' },
                  { title: 'Депрессивный эпизод', text: 'вы перестали чувствовать вкус, смысл, радость — всё стало плоским и серым' },
                  { title: 'Навязчивые мысли', text: 'одни и те же страшные образы крутятся в голове часами, отнимая все силы' },
                  { title: 'Бессонница на фоне стресса', text: 'не можете уснуть, уснули — и просыпаетесь в 4 утра с колотящимся сердцем' },
                  { title: 'Диссоциация', text: 'ощущение «это не со мной», «я смотрю со стороны» — реакция психики на перегрузку' },
                  { title: 'Флешбэки после травмы', text: 'события возвращаются как будто прямо сейчас, с теми же ощущениями и страхом' },
                  { title: 'Суицидальные мысли', text: '«если меня не станет, всем будет легче» — это не правда, но это голос, который звучит' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-ras)', marginTop: '8px', flexShrink: 0 }}></div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', marginBottom: '4px', fontWeight: 600 }}>{item.title}</h4>
                      <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '0.95rem' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div className="card" style={{ border: '1px solid #eaeaea', boxShadow: 'none' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-accent-ras)' }}>Первая сессия — экстренная</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
                  При острых состояниях я стараюсь взять на консультацию в ближайшие 24–48 часов. Первая задача — не «анализировать», а <strong>остановить обвал</strong>.
                  <br/><br/>
                  Вы получите конкретные техники, которые работают в момент приступа. Протокол на ближайшие 72 часа. Ощущение, что вы не одни в этом.
                </p>
              </div>

              <div className="card" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Взаимодействие с психиатром</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
                  При острых состояниях иногда нужна медикаментозная поддержка. Я не выписываю лекарств — это делает психиатр. Но если вижу, что она нужна, скажу об этом прямо и могу рекомендовать специалиста.
                  <br/><br/>
                  Психотерапия + фармакология не противоречат друг другу — они усиливают эффект. Стыдиться таблеток при острой депрессии так же странно, как стыдиться гипса при переломе.
                </p>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '80px', textAlign: 'center', maxWidth: '800px', margin: '80px auto 0' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Если невыносимо — это не навсегда</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '40px', lineHeight: 1.7 }}>
              У острого состояния есть начало и конец. Моя задача — не дать вам застрять в середине и показать дорогу к выходу.
            </p>
            <Link href="/zapis" className="btn" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Записаться срочно
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
