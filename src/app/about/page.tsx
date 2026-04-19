'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Anchor, MessageSquare, ClipboardList, Sun, Check, X } from 'lucide-react';

export default function AboutPage() {
  const fadeIn = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  return (
    <>
      <div className="section section-bg-secondary" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Константин Альбертович</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--color-text-light)' }}>
            Кризисный психолог. Переводчик с языка Боли на язык Жизни.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div {...fadeIn} className="grid grid-cols-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ width: '100%', aspectRatio: '3/4', backgroundColor: '#eaeaea', borderRadius: '24px', overflow: 'hidden' }} className="glass">
                <img src="/kostya-portrait-v3-2026-04-19.png" alt="Константин Альбертович — кризисный психолог" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                Я не тот, кто «просто решил помогать людям». Я тот, кого жизнь собрала из деталей, предназначенных для работы в эпицентре бурь.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-light)' }}>
                Там, где другие выгорают за месяц, я обретаю ясность. Мой личный путь — проходить сквозь хаос и возвращаться со светом. Для моих клиентов это означает: вас не осудят за «слишком сильные» чувства. Я выдерживаю любую амплитуду, потому что знаю дорогу на дно и обратно.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '10px' }}>
                <div style={{ borderLeft: '3px solid var(--color-cta)', paddingLeft: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>3</div>
                  <div style={{ color: 'var(--color-text-light)' }}>Года практики</div>
                </div>
                <div style={{ borderLeft: '3px solid var(--color-cta)', paddingLeft: '16px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>1000+</div>
                  <div style={{ color: 'var(--color-text-light)' }}>Часов консультаций</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div {...fadeIn}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Образование</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '40px', maxWidth: '700px' }}>
              Квалификация кризисного психолога с расширенной специализацией по экстремальной психологии — 44 дисциплины программы: от диагностики острых состояний до арт-терапии и работы с ПТСР.
            </p>

            <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-cta)', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Диплом № 187468 · г. Москва
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
                «Кризисная психология. Экстремальная психология»
              </h3>
              <p style={{ margin: '0 0 10px', color: 'var(--color-text-main)' }}>
                С присвоением квалификации <strong>«Кризисный психолог»</strong>
              </p>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                АНО ДПО «Национальная академия дополнительного профессионального образования» (АНО ДПО «НАДПО»)
              </p>
            </div>

            <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-cta)', fontWeight: 600, marginBottom: '16px' }}>
              Ключевые блоки программы
            </div>

            <div className="grid grid-cols-2" style={{ gap: '20px' }}>
              {[
                { title: 'Кризисные состояния', items: ['Диагностика кризисных состояний', 'Виды возрастных кризисов', 'Психологическое сопровождение кризисов', 'Экстренная психологическая помощь'] },
                { title: 'Травма и ПТСР', items: ['Алгоритм работы с ПТСР', 'Психологическая диагностика ПТСР', 'Работа с пиковыми переживаниями', 'Посттравматическая депрессия'] },
                { title: 'Утрата, насилие, развод', items: ['Сопровождение в ситуации утраты', 'Семейные кризисы: измена, развод', 'Помощь в ситуации насилия'] },
                { title: 'Стресс и стабилизация', items: ['Методы стабилизации эмоционального состояния', 'Факторы психологического стресса', 'Техники доступа к внутренним и внешним ресурсам'] },
                { title: 'Арт-терапия', items: ['Общая характеристика метода', 'Работа с кризисными состояниями', 'Работа с психологической травмой'] },
                { title: 'Специальные темы', items: ['Детская психология в условиях кризиса', 'Стадии протекания горя', 'Дистанционное консультирование'] },
              ].map(block => (
                <div key={block.title} className="card" style={{ padding: '24px' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{block.title}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {block.items.map(item => (
                      <li key={item} style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.5, paddingLeft: '16px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-cta)' }}>·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section-bg-secondary">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div {...fadeIn}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Мой космический код</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '40px', maxWidth: '700px' }}>
              Почему я такой — и что это значит для вас.
            </p>

            <div className="grid grid-cols-2" style={{ gap: '24px' }}>
              <div className="card" style={{ padding: '28px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-cta)', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Крест Рая (36/6 | 12/11)</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Допуск в зону кризиса</h4>
                <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '0.95rem' }}>
                  Я рождён с допуском в зону эмоционального кризиса. Там, где другие выгорают за месяц, я обретаю ясность. Вас не осудят за «слишком сильные» чувства — я выдерживаю любую амплитуду, потому что знаю дорогу на дно и обратно.
                </p>
              </div>
              <div className="card" style={{ padding: '28px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-ras)', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Близнецы (Раху)</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Слышу за словами</h4>
                <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '0.95rem' }}>
                  Я слышу не только слова, но и то, что за ними. Перевожу язык паники на язык плана. Моя лёгкость и юмор — не ветреность, а профессиональный инструмент, снижающий накал. Со мной не страшно говорить о страшном.
                </p>
              </div>
              <div className="card" style={{ padding: '28px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-fears)', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Дева (Лагна) + Сатурн</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Внутренняя скала</h4>
                <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '0.95rem' }}>
                  Нечеловеческая выносливость и любовь к структуре. Когда ваш мир рушится, я становлюсь той временной стеной, на которую можно опереться, пока мы строим новое здание.
                </p>
              </div>
              <div className="card" style={{ padding: '28px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-women)', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Число 5 + Водолей (Луна)</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Свобода, не клетка</h4>
                <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '0.95rem' }}>
                  Рай — это свобода. Я никогда не создаю для клиента новую клетку из правил. Моя структура всегда имеет открытую дверь для полёта. Мы лечим душу, не запирая её в сейф.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div {...fadeIn} className="grid grid-cols-2" style={{ gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
            <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden' }} className="glass">
              <img src="/kostya-armchair-2026-04-19.png" alt="Константин в кресле консультанта" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-cta)', fontWeight: 600 }}>Как я работаю</div>
              <h3 style={{ fontSize: '2rem', lineHeight: 1.2 }}>Присутствие важнее техники</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-light)' }}>
                В кризисе первое, что нужно человеку — не совет, а поле, в котором можно не держать лицо. Я не спасаю, не оцениваю и не раздаю готовые рецепты. Я — тот, кто выдерживает вашу бурю рядом, пока вы вспоминаете, что у вас есть ноги, на которых можно стоять.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-light)' }}>
                Техники подключаются потом — и всегда под вас, не наоборот.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeIn}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Авторский метод: «Навигация в Хаосе»</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '50px', maxWidth: '700px' }}>
              Четыре этапа, через которые мы пройдём вместе.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                {
                  icon: <Anchor size={28} />,
                  color: 'var(--color-cta)',
                  title: '1. Якорение',
                  subtitle: 'Безопасность',
                  text: 'Вы попадаете в поле, которое не разрушится от силы вашей боли. Вы перестаёте тратить энергию на контроль лица и можете наконец выдохнуть.',
                },
                {
                  icon: <MessageSquare size={28} />,
                  color: 'var(--color-accent-ras)',
                  title: '2. Вербализация',
                  subtitle: 'Слова',
                  text: 'Мы назовём чудовищ по именам. «Это не просто конец, это конкретно страх одиночества в 42 года с ипотекой». Когда хаос назван — он превращается в задачу с известными параметрами.',
                },
                {
                  icon: <ClipboardList size={28} />,
                  color: 'var(--color-accent-fears)',
                  title: '3. Инвентаризация',
                  subtitle: 'План',
                  text: 'Вместе мы разложим вашу жизнь на атомы и соберём заново. Вы уйдёте от меня не с размытым «всё будет хорошо», а с чётким, пошаговым маршрутом на ближайшие 72 часа, неделю, месяц.',
                },
                {
                  icon: <Sun size={28} />,
                  color: 'var(--color-accent-talents)',
                  title: '4. Заземление',
                  subtitle: 'Вкус жизни',
                  text: 'После работы с болью мы возвращаемся в тело. Я напомню вам, ради чего мы всё это терпим: ради утреннего кофе, ради смеха, ради прикосновений. Я возвращаю людям их маленький Эдем, спрятанный за завалами.',
                },
              ].map(step => (
                <div key={step.title} className="card" style={{ padding: '32px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '16px',
                    backgroundColor: step.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    opacity: 0.9,
                  }}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{step.title}</h3>
                    <div style={{ fontSize: '0.9rem', color: step.color, fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {step.subtitle}
                    </div>
                    <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '1rem', lineHeight: 1.7 }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <motion.div {...fadeIn} style={{ width: '100%', aspectRatio: '3/2', borderRadius: '24px', overflow: 'hidden' }} className="glass">
            <img src="/kostya-working-v3-2026-04-19.png" alt="Константин за работой — пишет заметки" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </div>
      </section>

      <section className="section section-bg-secondary">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div {...fadeIn}>
            <div className="grid grid-cols-2" style={{ gap: '40px' }}>
              <div>
                <h2 style={{ fontSize: '2rem', marginBottom: '24px', color: 'var(--color-accent-fears)' }}>Я ваш человек, если:</h2>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Вам страшно, и вы не знаете, что делать дальше.',
                    'Вы устали от советов друзей и родственников.',
                    'Вам нужна не просто «жилетка», а карта местности и компас.',
                    'Вы цените интеллект, юмор и отсутствие пафоса в работе с душой.',
                    'Вы готовы работать. Я не волшебник, я — проводник. Дорогу придётся пройти ногами, но я знаю короткий путь и опасные обрывы.',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <Check size={20} color="var(--color-accent-fears)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '2rem', marginBottom: '24px', color: '#E11D48' }}>Я не подхожу, если:</h2>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Вы ждёте, что кто-то погладит вас по головке и решит все проблемы без вашего участия.',
                    'Вы хотите просто пожаловаться и ничего не менять.',
                    'Вы боитесь точных формулировок и предпочитаете туман вместо ясности.',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <X size={20} color="#E11D48" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.6, color: 'var(--color-text-light)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <motion.div {...fadeIn}>
            <blockquote style={{ fontSize: '1.3rem', lineHeight: 1.8, fontFamily: 'var(--font-lora)', fontStyle: 'italic', color: 'var(--color-text-main)', margin: '0 0 40px' }}>
              «Я пришёл в этот мир, чтобы быть мостом. Между бурей и тишиной. Между болью и словом. Между "я не справлюсь" и "я смогу".»
            </blockquote>
            <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem', marginBottom: '40px' }}>
              Я не спасатель. Я — Смотритель Маяка в Саду Хаоса. Моя вахта бессменна. Добро пожаловать на борт.
            </p>
            <Link href="/zapis" className="btn" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Записаться на консультацию
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
