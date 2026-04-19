export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Страхи и таланты',
    description: 'Кризисный психолог. Помощь в острых состояниях — развод, потеря, выгорание, экзистенциальный тупик. Авторский метод «Навигация в Хаосе».',
    url: 'https://klimov-psy.ru',
    telephone: '+79991234567',
    email: 'hello@klimov-psy.ru',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU',
    },
    openingHours: ['Mo-Fr 10:00-20:00', 'Sa 11:00-16:00'],
    priceRange: 'от 5000 руб.',
    areaServed: {
      '@type': 'Country',
      name: 'Россия',
    },
    serviceType: [
      'Кризисная психологическая помощь',
      'Авторский метод «Навигация в Хаосе»',
      'Работа с детьми с РАС',
      'Терапия тревожных расстройств',
      'Терапия депрессии',
      'Помощь при выгорании',
    ],
    founder: {
      '@type': 'Person',
      name: 'Константин Альбертович',
      jobTitle: 'Кризисный психолог',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
