import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Развод и расставание | Кризисный психолог',
  description: 'Помощь в момент развода и расставания. Как пережить разрыв, собрать себя заново, не остаться в руинах. Авторский метод «Навигация в Хаосе».',
};

export default function DivorcePage() {
  return (
    <>
      <div className="section" style={{ backgroundColor: 'var(--color-accent-women)', color: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9, marginBottom: '16px' }}>Кризисная помощь</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#fff' }}>Развод и расставание</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', opacity: 0.95, lineHeight: 1.6 }}>
            Дом, в котором вы жили годами, рухнул за один разговор. Не работают ни «время лечит», ни советы подруг, ни коньяк по вечерам. Нужен проводник, который был на этом дне и знает короткую дорогу обратно.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '60px' }}>

            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>С чем конкретно работаю</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {[
                  { title: 'Шок первых дней', text: 'когда не можете есть, спать, работать — тело отказывается жить' },
                  { title: 'Ярость и желание мстить', text: 'мысли крутятся по кругу, вы проигрываете сценарии разговора по сто раз в день' },
                  { title: 'Чувство вины', text: '«это я всё испортил(а)», «надо было раньше увидеть» — самобичевание вместо действий' },
                  { title: 'Страх одиночества', text: '«больше никогда никого не встречу», «я не справлюсь одна/один»' },
                  { title: 'Разрушенная идентичность', text: '«кто я теперь — без него/неё, без этой семьи, без этой жизни?»' },
                  { title: 'Дети между двух огней', text: 'как говорить с детьми, как не сделать их оружием, как сохранить им маму и папу' },
                  { title: 'Ипотека, раздел, быт', text: 'когда голова не работает, а решения принимать надо уже завтра' },
                  { title: 'Возврат к жизни', text: 'как заново научиться хотеть, радоваться, доверять — после предательства' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-women)', marginTop: '8px', flexShrink: 0 }}></div>
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-accent-women)' }}>Что вы получите</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
                  Не размытое «всё наладится», а конкретный пошаговый маршрут. Что сделать в ближайшие 72 часа. Что — в течение недели. Что — в течение месяца.
                  <br/><br/>
                  Вы перестанете тратить энергию на бесконечное переживание одних и тех же мыслей. Начнёте видеть контуры новой жизни — ещё до того, как пройдёт боль.
                </p>
              </div>

              <div className="card" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Как я работаю с разводом</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  По авторскому методу <Link href="/metody" style={{ color: 'var(--color-cta)', textDecoration: 'underline' }}>«Навигация в Хаосе»</Link>:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { step: '1', label: 'Якорение', desc: 'поле, в котором можно наконец выдохнуть и не контролировать лицо' },
                    { step: '2', label: 'Вербализация', desc: 'назвать чудовищ по именам — хаос становится задачей' },
                    { step: '3', label: 'Инвентаризация', desc: 'разбор завалов и пошаговый план' },
                    { step: '4', label: 'Заземление', desc: 'возвращение к вкусу жизни, к своему маленькому Эдему' },
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '14px', fontSize: '1rem' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-accent-women)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 'bold' }}>{item.step}</div>
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
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Развод — это не конец</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '40px', lineHeight: 1.7 }}>
              Это точка, в которой старая жизнь закончилась, а новая ещё не началась. Между ними — мост. Я помогу вам пройти его, не свалившись в пропасть.
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
