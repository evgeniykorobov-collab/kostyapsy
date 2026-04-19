import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Экзистенциальный тупик | Кризисный психолог',
  description: 'Когда всё есть, но нет ничего. Работа с потерей смысла, кризисом среднего возраста, ощущением «не на своём месте».',
};

export default function ExistentialPage() {
  return (
    <>
      <div className="section" style={{ backgroundColor: 'var(--color-accent-talents)', color: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9, marginBottom: '16px' }}>Кризисная помощь</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#fff' }}>Экзистенциальный тупик</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', opacity: 0.95, lineHeight: 1.6 }}>
            У вас всё «нормально». Работа, семья, квартира, машина. Но однажды утром вы смотрите на это и слышите внутри: «а зачем?». И больше не можете этого не слышать.
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
                  { title: 'Потеря смысла', text: '«зачем всё это?», «что я здесь делаю?» — вопросы, которые не уходят' },
                  { title: 'Кризис среднего возраста', text: 'ощущение «жизнь прошла мимо», «я не то выбрал» — в 35, 40, 50' },
                  { title: 'Чувство «не на своём месте»', text: 'внешне всё правильно, но внутри — чужое пальто' },
                  { title: 'Духовный кризис', text: 'прежняя картина мира рухнула, новая ещё не собралась' },
                  { title: 'Экзистенциальная тревога', text: 'страх смерти, конечности, бессмысленности — не невроз, а встреча с реальностью' },
                  { title: 'Одиночество в толпе', text: 'вокруг люди, но никто не видит — кто вы на самом деле' },
                  { title: 'Поиск своего пути', text: 'как отличить настоящее «своё» от «так принято»' },
                  { title: 'Вопросы веры и смерти', text: 'разговоры, которые не с кем вести в повседневной жизни' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-talents)', marginTop: '8px', flexShrink: 0 }}></div>
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-accent-talents)' }}>Это не депрессия</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
                  Это прорыв. Ваша душа перестала соглашаться на ту жизнь, которую вы ей предлагали. Антидепрессантом это не заглушишь — и не нужно.
                  <br/><br/>
                  Экзистенциальный кризис — это приглашение к разговору с самим собой, который вы откладывали много лет. Моя задача — не уговорить вас вернуться в прежнюю колею, а помочь дойти до следующей.
                </p>
              </div>

              <div className="card" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Путь</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  По методу <Link href="/metody" style={{ color: 'var(--color-cta)', textDecoration: 'underline' }}>«Навигация в Хаосе»</Link> с экзистенциальным и ведическим уклоном:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { step: '1', label: 'Якорение', desc: 'пространство, где можно задавать «опасные» вопросы' },
                    { step: '2', label: 'Вербализация', desc: 'отделяем настоящий голос души от голосов «надо» и «правильно»' },
                    { step: '3', label: 'Инвентаризация', desc: 'ревизия жизни: что моё, что чужое, от чего пора отказаться' },
                    { step: '4', label: 'Заземление', desc: 'перевод смыслов в конкретные шаги в жизни, а не в «возвышенные мысли»' },
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '14px', fontSize: '1rem' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-accent-talents)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 'bold' }}>{item.step}</div>
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
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>«А зачем?» — правильный вопрос.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '40px', lineHeight: 1.7 }}>
              Давайте найдём ваш ответ. Не общий, не из книжки — именно ваш.
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
