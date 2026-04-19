import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Потеря и горе | Кризисный психолог',
  description: 'Помощь при утрате близкого, потере здоровья, ресурса, смысла. Как пройти через горе, не застрять в нём.',
};

export default function LossPage() {
  return (
    <>
      <div className="section" style={{ backgroundColor: 'var(--color-accent-life)', color: '#5a3a1a', padding: '80px 0' }}>
        <div className="container">
          <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9, marginBottom: '16px' }}>Кризисная помощь</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#5a3a1a' }}>Потеря и горе</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', lineHeight: 1.6 }}>
            Утрата близкого. Потеря здоровья. Разрушение бизнеса. Конец большого проекта, в который вы вложили годы. Горе — это не болезнь, которую лечат таблеткой. Это работа, через которую нужно пройти. И делать это в одиночку — жестоко к себе.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '60px' }}>

            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>С чем работаю</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {[
                  { title: 'Смерть близкого', text: 'родителя, супруга, ребёнка, друга — острое горе и отсроченное' },
                  { title: 'Тяжёлая болезнь', text: 'своя или близкого — как жить рядом со смертью, не теряя себя' },
                  { title: 'Потеря ребёнка', text: 'перинатальная утрата, выкидыш — горе, о котором не принято говорить' },
                  { title: 'Крах бизнеса или карьеры', text: 'то, во что вы вложили годы, ушло — и с ним ушла часть вас' },
                  { title: 'Конец отношений с родителями', text: 'когда продолжать невозможно, а чувство долга душит' },
                  { title: 'Застревание в горе', text: 'прошли годы, а боль не утихает — значит, работа не завершена' },
                  { title: 'Вина выжившего', text: '«почему я, а не он», «я мог предотвратить» — капкан, из которого не выбраться самому' },
                  { title: 'Невысказанное прощание', text: 'вы не успели сказать главное — и это слово осталось с вами навсегда' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-life)', marginTop: '8px', flexShrink: 0 }}></div>
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#c97a3a' }}>Честно о горе</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
                  Я не скажу вам «всё пройдёт». Не скажу «он(а) бы хотел(а), чтобы вы жили дальше». Эти фразы — обезболивающее с коротким эффектом.
                  <br/><br/>
                  Я помогу вам встретиться с горем, назвать его, пройти его этапы — и найти форму, в которой потеря становится частью жизни, а не её центром.
                </p>
              </div>

              <div className="card" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Как мы пойдём</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  По методу <Link href="/metody" style={{ color: 'var(--color-cta)', textDecoration: 'underline' }}>«Навигация в Хаосе»</Link> — в ритме, который выдержите именно вы:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { step: '1', label: 'Якорение', desc: 'я выдерживаю вашу боль, не прячусь за фразами' },
                    { step: '2', label: 'Вербализация', desc: 'мы проговариваем то, что никто другой не готов слушать' },
                    { step: '3', label: 'Инвентаризация', desc: 'что осталось? как жить дальше? — честные ответы' },
                    { step: '4', label: 'Заземление', desc: 'возвращение к жизни, где горе не исчезает, но обретает место' },
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '14px', fontSize: '1rem' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#c97a3a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 'bold' }}>{item.step}</div>
                      <div>
                        <strong>{item.label}</strong>
                        <div style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '80px', textAlign: 'center', maxWidth: '800px', margin: '80px auto 0' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Горе не «проходит». Оно встраивается.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '40px', lineHeight: 1.7 }}>
              Ваша задача — не забыть, а научиться нести это. Моя — помочь вам не сломаться по дороге.
            </p>
            <Link href="/zapis" className="btn" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Записаться на консультацию
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
