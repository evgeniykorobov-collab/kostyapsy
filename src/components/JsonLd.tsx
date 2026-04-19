export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Константин Альбертович — кризисный психолог',
    description: 'Кризисный психолог. Помощь в острых состояниях — развод, потеря, выгорание, экзистенциальный тупик. Авторский метод «Навигация в Хаосе».',
    url: 'https://kostyapsy.ru',
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
    founder: {
      '@type': 'Person',
      name: 'Константин Альбертович',
      jobTitle: 'Кризисный психолог',
    },
    sameAs: [
      'https://t.me/SouL_See_You',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
