import { Metadata } from 'next';
import Link from 'next/link';
import { Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Голоса с берега. Кейсы | Константин Альбертович',
  description: 'Реальные истории работы: острое горе, панические атаки, родитель в онкодиспансере, развод и потеря идентичности, супервизия для коллег. Что было — что сделано — что стало.',
};

type Case = {
  title: string;
  who: string;
  request: string;
  work: string;
  result: string;
};

type Voice = {
  text: string;
  who: string;
};

export default function KejsyPage() {
  const cases: Case[] = [
    {
      title: 'Острое горе, потеря партнёра',
      who: 'Женщина, 38 лет. Через месяц после внезапной потери супруга (СВО). Обратилась в состоянии ступора и бессонницы.',
      request: '«Я не знаю, как жить дальше. Я не сплю. Дети спрашивают про папу, а у меня нет слов».',
      work: '3 встречи («Час Маяка» + пакет «Маяк для Мамы»). Прошли Якорение (восстановили сон через тело), Вербализацию (нашли слова для разговора с детьми) и Инвентаризацию (аудит ресурсов семьи).',
      result: 'Клиентка смогла спать без медикаментов на 2-й встрече. К 3-й встрече впервые за месяц приготовила ужин с детьми и провела вечер без чувства вины перед памятью мужа. Сформулировали первые фразы для разговора о папе с младшим ребёнком.',
    },
    {
      title: 'Панические атаки и потеря контроля',
      who: 'Мужчина, 42 года. Успешный предприниматель. Три панические атаки за неделю на фоне краха бизнеса.',
      request: '«Я не могу дышать, когда думаю о деньгах. Я перестал выходить из дома».',
      work: '5 встреч («Архитектор Души»). Использован протокол соматического заземления и экспресс-рефрейминг страха банкротства. Внедрён ритуал «15 минут тишины» и дыхательные практики.',
      result: 'Купирование атаки на первой встрече (за 60 минут вернулись к ровному дыханию). К 5-й встрече мужчина вышел на переговоры с кредиторами и убрал лишних «советчиков», создав стальную личную границу.',
    },
    {
      title: 'Родитель в онкологическом диспансере',
      who: 'Мать, 35 лет. Ребёнок (7 лет) на втором курсе химии. Чувство вины («не уберегла») и полное истощение.',
      request: '«Я плохая мать. Я не чувствую ничего, кроме усталости. Как мне дать ему силы, если я пустая?»',
      work: '«Маяк для Мамы» (3 встречи). Применена техника «Кислородная маска», легализация злости, практика «5-4-3-2-1» для снятия острого стресса в больнице.',
      result: 'Снижение чувства вины (признание права на отдых). Внедрение «правила 15 минут» (ежедневный выход из палаты на воздух). Настройка честного, но бережного диалога с ребёнком о процедурах.',
    },
    {
      title: 'Развод и разрушение идентичности',
      who: 'Женщина, 45 лет. Муж ушёл после 20 лет брака. Осталась с чувством «меня больше нет, я никто».',
      request: '«Я не знаю, чего я хочу. Я всё делала для семьи. Кто я теперь?»',
      work: '«Архитектор Души» (10 встреч). Инвентаризация личности (отделение «я» от ролей жены и матери). Построение новой структуры дня, поиск личных смыслов через технику «Вкус жизни».',
      result: 'К 10-й встрече клиентка устроилась на работу мечты, о которой забыла 20 лет назад, и сменила имидж. Впервые за долгое время сказала: «Мне нравится моя жизнь».',
    },
    {
      title: 'Супервизия для психолога (выгорание)',
      who: 'Девушка, 29 лет, практикующий психолог. Столкнулась с чувством «я самозванец» после двух лет работы.',
      request: '«Я больше не могу слушать людей. Я чувствую отвращение к сессиям. Может, мне уйти из профессии?»',
      work: '2 супервизионные встречи. Разбор контрпереноса, очистка «контейнера», восстановление личных границ.',
      result: 'Возвращение в практику с новым расписанием (сокращение нагрузки) и разрешением говорить клиентам «нет».',
    },
  ];

  const voices: Voice[] = [
    {
      text: 'Я пришла с ощущением, что тону. Ушла — с чётким планом и пониманием, что земля под ногами всё-таки есть. Константин не «спасал» меня, он зажёг фонарь и показал, где мелко.',
      who: 'Анонимно, 38 лет',
    },
    {
      text: 'То, как он говорит о чувствах… Он называет их, и они перестают быть врагами. Я впервые за долгое время не побоялась заплакать при мужчине.',
      who: 'Анонимно, 46 лет',
    },
    {
      text: 'Я пришёл с паническими атаками. Думал, что схожу с ума. А он просто объяснил физиологию и дал упражнение. Никакой магии, только работающая структура. Через месяц я вернулся к нормальной жизни.',
      who: 'Анонимно, 35 лет',
    },
  ];

  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-cta)', marginBottom: '16px', fontWeight: 600 }}>Голоса с берега</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: 1.15 }}>Было — Сделано — Стало</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
            Реальные истории работы. Имена и детали изменены ради конфиденциальности — суть и динамика сохранены.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {cases.map((c, i) => (
              <div key={i} className="card" style={{ padding: '40px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-cta)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  Кейс №{i + 1}
                </div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '20px' }}>{c.title}</h2>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6, marginBottom: '20px', fontStyle: 'italic' }}>
                  {c.who}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent-fears)', fontWeight: 700, marginBottom: '6px' }}>
                      Было — запрос
                    </div>
                    <p style={{ color: 'var(--color-text-main)', margin: 0, lineHeight: 1.6 }}>{c.request}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-cta)', fontWeight: 700, marginBottom: '6px' }}>
                      Сделано — работа
                    </div>
                    <p style={{ color: 'var(--color-text-main)', margin: 0, lineHeight: 1.6 }}>{c.work}</p>
                  </div>
                  <div style={{ padding: '16px 20px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '10px' }}>
                    <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent-talents)', fontWeight: 700, marginBottom: '6px' }}>
                      Стало — результат
                    </div>
                    <p style={{ color: 'var(--color-text-main)', margin: 0, lineHeight: 1.6 }}>{c.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-secondary">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '32px', textAlign: 'center' }}>Живые голоса</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {voices.map((v, i) => (
              <div key={i} className="card" style={{ padding: '32px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Quote size={28} color="var(--color-cta)" />
                <p style={{ color: 'var(--color-text-main)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                  «{v.text}»
                </p>
                <div style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginTop: 'auto' }}>
                  — {v.who}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="card" style={{ padding: '50px', backgroundColor: 'var(--color-cta)', color: '#fff' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#fff' }}>Если моя работа помогла вам</h2>
            <p style={{ fontSize: '1.05rem', margin: '0 auto 24px', maxWidth: '600px', opacity: 0.95, lineHeight: 1.6 }}>
              Поделитесь этим. Ваши слова станут лучом для тех, кто ещё в темноте. Напишите мне в Telegram или на почту — я добавлю ваш голос с согласованной формулировкой и под псевдонимом.
            </p>
            <Link href="/kontakty" className="btn" style={{ backgroundColor: '#fff', color: 'var(--color-cta)', padding: '16px 32px', fontSize: '1.05rem' }}>
              Поделиться отзывом
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
