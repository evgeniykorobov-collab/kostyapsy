export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://kostyapsy.ru/#person',
        name: 'Апинян Константин Альбертович',
        jobTitle: 'Кризисный психолог',
        url: 'https://kostyapsy.ru/about',
        image: 'https://kostyapsy.ru/kostya-portrait-v3-2026-04-19.png',
        email: 'apinyan.kostya@yandex.ru',
        telephone: '+7-995-436-46-45',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ростов-на-Дону',
          addressCountry: 'RU',
        },
        knowsAbout: [
          'Кризисная психология',
          'Экстремальная психология',
          'Работа с ПТСР',
          'Работа с горем и потерей',
          'Работа с разводом и расставанием',
          'Выгорание',
          'Экзистенциальный кризис',
          'Стресс и стабилизация эмоционального состояния',
          'Арт-терапия',
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'diploma',
          name: 'Кризисная психология. Экстремальная психология — квалификация «Кризисный психолог»',
          identifier: '187468',
          recognizedBy: {
            '@type': 'EducationalOrganization',
            name: 'АНО ДПО «Национальная академия дополнительного профессионального образования» (АНО ДПО НАДПО)',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Москва',
              addressCountry: 'RU',
            },
          },
        },
        sameAs: [
          'https://t.me/SouL_See_You',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://kostyapsy.ru/#service',
        name: 'Константин Альбертович — кризисный психолог',
        description: 'Кризисный психолог. Помощь в острых состояниях — развод, потеря, выгорание, экзистенциальный тупик. Авторский метод «Навигация в Хаосе».',
        url: 'https://kostyapsy.ru',
        image: 'https://kostyapsy.ru/og-image.png',
        telephone: '+7-995-436-46-45',
        email: 'apinyan.kostya@yandex.ru',
        provider: { '@id': 'https://kostyapsy.ru/#person' },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ростов-на-Дону',
          addressCountry: 'RU',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Россия',
        },
        serviceType: [
          'Кризисная психологическая помощь',
          'Авторский метод «Навигация в Хаосе»',
          'Работа с разводом и расставанием',
          'Работа с потерей и горем',
          'Работа с выгоранием',
          'Экзистенциальный тупик',
          'Острые состояния и панические атаки',
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
