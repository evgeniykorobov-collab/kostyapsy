import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Выгорание и увольнение | Кризисный психолог',
  description: 'Помощь при эмоциональном выгорании, потере работы, профессиональном кризисе. Как вернуть себе энергию и найти новый путь.',
};

export default function BurnoutPage() {
  return (
    <>
      <div className="section" style={{ backgroundColor: 'var(--color-accent-fears)', color: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9, marginBottom: '16px' }}>Кризисная помощь</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#fff' }}>Выгорание и увольнение</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', opacity: 0.95, lineHeight: 1.6 }}>
            Вы пашете десять лет. Получаете повышения. Кажется, всё правильно — а внутри выжженная земля. Или наоборот: вас уволили, и вместе с должностью ушло ощущение, что вы — кто-то.
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
                  { title: 'Эмоциональное выгорание', text: 'просыпаетесь уже уставшим, работа не радует даже когда получается' },
                  { title: 'Потеря работы', text: 'увольнение, сокращение, крах своего дела — удар не только по кошельку' },
                  { title: 'Кризис смысла в профессии', text: '«чем я вообще занимаюсь?», «ради чего я это терплю?»' },
                  { title: 'Синдром самозванца', text: 'успехи кажутся случайностью, постоянный страх разоблачения' },
                  { title: 'Невозможность отдыхать', text: 'вы не умеете останавливаться — и за это расплачиваетесь здоровьем' },
                  { title: 'Токсичный коллектив', text: 'уходить страшно, оставаться невыносимо — как решиться' },
                  { title: 'Смена профессии после 30/40', text: 'можно ли начать заново — и не превратить это в авантюру' },
                  { title: 'Возврат в строй', text: 'после долгого отсутствия — декрета, болезни, выгорания' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-fears)', marginTop: '8px', flexShrink: 0 }}></div>
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-accent-fears)' }}>Выгорание — это не лень</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
                  Это поломка механизма восстановления. Сколько бы вы ни отдыхали, батарея больше не заряжается — потому что поломан сам аккумулятор.
                  <br/><br/>
                  «Просто отпуск» не помогает. Нужна работа с тем, что именно вы жжёте вместо себя — и почему вы на это согласились.
                </p>
              </div>

              <div className="card" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Что мы будем делать</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  По методу <Link href="/metody" style={{ color: 'var(--color-cta)', textDecoration: 'underline' }}>«Навигация в Хаосе»</Link>:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { step: '1', label: 'Якорение', desc: 'место, где можно быть уставшим и не притворяться' },
                    { step: '2', label: 'Вербализация', desc: 'что именно выгорает? какие потребности вы игнорируете?' },
                    { step: '3', label: 'Инвентаризация', desc: 'что в работе и жизни оставляем, что меняем, что отрезаем' },
                    { step: '4', label: 'Заземление', desc: 'возврат к своему телу, ритму, радостям — без которых вы не работоспособны' },
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '14px', fontSize: '1rem' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-accent-fears)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 'bold' }}>{item.step}</div>
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
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Вы не машина</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '40px', lineHeight: 1.7 }}>
              И починить вас «сервисом» в виде отпуска нельзя. Нужна перепрошивка отношения к работе, себе и отдыху. Начнём.
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
