import { Metadata } from 'next';
import Link from 'next/link';
import { Anchor, MessageSquare, ClipboardList, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Методы работы: «Навигация в Хаосе» | Кризисный психолог',
  description: 'Авторский метод «Навигация в Хаосе» — четыре этапа выхода из кризиса: Якорение, Вербализация, Инвентаризация, Заземление. А также вспомогательные инструменты: КПТ, экзистенциальный подход, майндфулнес, ведическая психология.',
};

export default function MethodsPage() {
  const stages = [
    {
      icon: Anchor,
      num: '1',
      title: 'Якорение',
      subtitle: 'Когда вас несёт — первое, что нужно, это твёрдая земля под ногами',
      text: 'Я создаю пространство, в котором можно перестать притворяться сильным. Не обязательно «собраться», не нужно «хорошо выглядеть», не требуется готовых формулировок. Просто выдохнуть. Я выдерживаю — вы можете не делать вид. Это фундамент: без него любая техника — просто слова, которые отскакивают от брони.',
      what: 'Что вы получите: ощущение, что есть хоть одно место, где вас не оценивают и не спасают — просто слышат.',
    },
    {
      icon: MessageSquare,
      num: '2',
      title: 'Вербализация',
      subtitle: 'Пока чудовище безымянно — оно правит. Как только названо — становится задачей',
      text: 'Мы подбираем точные слова для того, что внутри. Не «плохо» и «тяжело», а конкретно: что именно болит, чего боюсь, на кого злюсь, что ушло. Это не болтовня — это работа. Правильно названное переживание перестаёт быть бесформенным ужасом и становится тем, с чем можно что-то делать.',
      what: 'Что вы получите: хаос в голове превращается в список, с которым можно работать.',
    },
    {
      icon: ClipboardList,
      num: '3',
      title: 'Инвентаризация',
      subtitle: 'Разбор завалов и пошаговый план — что оставляем, что меняем, что отрезаем',
      text: 'Ревизия: что из вашей жизни — ваше настоящее, а что — чужие ожидания, старые роли, уже не работающие договорённости. Что отнимает энергию. Что её даёт. Какие решения надо принять в ближайшие 72 часа, какие — в течение месяца. Конкретика, а не «подумайте об этом».',
      what: 'Что вы получите: пошаговый маршрут, где каждый шаг — ваш, а не «как принято».',
    },
    {
      icon: Sun,
      num: '4',
      title: 'Заземление',
      subtitle: 'Возвращение к вкусу жизни — к вашему маленькому Эдему',
      text: 'Смыслы, которые не переведены в тело и повседневность, — просто красивые мысли. Мы возвращаем их в жизнь: в тело, в ритм, в радости, в отношения, в дело. Горе не исчезает — встраивается. Тревога не обнуляется — становится сигналом, которому вы умеете отвечать. Вы снова чувствуете вкус.',
      what: 'Что вы получите: не «как было до кризиса», а новую форму жизни — в которой вы больше, чем раньше.',
    },
  ];

  const supporting = [
    {
      title: 'Когнитивно-поведенческая терапия (КПТ)',
      text: 'Работа с автоматическими мыслями и поведенческими паттернами. Особенно эффективна при панических атаках, навязчивостях, социальной тревоге — там, где нужны конкретные техники, работающие в момент приступа.',
    },
    {
      title: 'Экзистенциальный подход',
      text: 'Для разговоров о смысле, свободе, одиночестве, конечности. Когда вопрос не «как перестать тревожиться», а «зачем я живу и кто я».',
    },
    {
      title: 'Майндфулнес и телесные практики',
      text: 'Возвращение в тело, в «здесь и сейчас». Дыхательные техники и осознанность снижают остроту тревоги и помогают выйти из кругов навязчивых мыслей.',
    },
    {
      title: 'Ведическая психология (по запросу)',
      text: 'Для тех, кому это близко, — работа с опорой на ведические категории (дхарма, гуны, планетарные влияния). Не как мистика, а как дополнительный язык для разговора о характере и жизненных задачах. Никого не заставляю — только если вам это важно.',
    },
    {
      title: 'Краткосрочная терапия, фокусированная на решении',
      text: 'Когда времени мало и запрос чёткий — не копаемся в прошлом, а ищем, что уже работает, и усиливаем это.',
    },
    {
      title: 'Работа с травмой',
      text: 'Бережная, в темпе вашей психики. Без «копания ран» ради копания — только с конкретной целью распаковать застрявший ресурс и вернуть его в жизнь.',
    },
  ];

  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-cta)', marginBottom: '16px', fontWeight: 600 }}>Авторский метод</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: 1.15 }}>«Навигация в Хаосе»</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', lineHeight: 1.6, marginBottom: '12px' }}>
            Четыре этапа выхода из кризиса. Не философия и не «работа над собой» на годы — конкретная карта для тех, у кого прямо сейчас земля ушла из-под ног.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
            Я сам прошёл каждый из этих этапов — не только как специалист, но и как человек. Поэтому знаю короткую дорогу.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.num} className="card" style={{ padding: '40px', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={32} color="var(--color-cta)" />
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', fontWeight: 600, letterSpacing: '0.1em' }}>ЭТАП {stage.num}</div>
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '6px' }}>{stage.title}</h2>
                    <p style={{ fontSize: '1rem', color: 'var(--color-cta)', fontWeight: 500, marginBottom: '16px', lineHeight: 1.5 }}>
                      {stage.subtitle}
                    </p>
                    <p style={{ color: 'var(--color-text-main)', lineHeight: 1.7, marginBottom: '20px' }}>
                      {stage.text}
                    </p>
                    <div style={{ padding: '16px 20px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '10px', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                      <strong>→ </strong>{stage.what}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-bg-secondary">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>Вспомогательные инструменты</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              «Навигация в Хаосе» — это каркас. Внутри него я использую инструменты, подбирая их под вас и ваш запрос. Никаких догматов — только то, что работает именно в вашей ситуации.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            {supporting.map((method, i) => (
              <div key={i} className="card" style={{ padding: '28px', display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: '#fff' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-cta)' }}></div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{method.title}</h3>
                  <p style={{ color: 'var(--color-text-light)', margin: 0, lineHeight: 1.6 }}>{method.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="card" style={{ padding: '50px', backgroundColor: 'var(--color-cta)', color: '#fff' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#fff' }}>Как мы подберём метод</h2>
            <p style={{ fontSize: '1.1rem', margin: '0 auto 30px', maxWidth: '600px', opacity: 0.95, lineHeight: 1.6 }}>
              На первой встрече мы вместе разберёмся, где именно вы сейчас и что больше всего болит. «Навигация в Хаосе» задаёт маршрут — конкретные техники подбираем под вашу ситуацию. Если по ходу работы нужно сменить подход — меняем.
            </p>
            <Link href="/zapis" className="btn" style={{ backgroundColor: '#fff', color: 'var(--color-cta)', padding: '16px 40px', fontSize: '1.1rem' }}>
              Записаться на первую консультацию
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
