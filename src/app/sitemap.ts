import type { MetadataRoute } from 'next';

const BASE_URL = 'https://klimov-psy.ru';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: '/', priority: 1.0 },
    { url: '/about', priority: 0.9 },
    { url: '/zapis', priority: 0.9 },
    { url: '/uslugi/razvod', priority: 0.8 },
    { url: '/uslugi/poterya', priority: 0.8 },
    { url: '/uslugi/vygoranie', priority: 0.8 },
    { url: '/uslugi/ekzistencialnyj-tupik', priority: 0.8 },
    { url: '/uslugi/ostrye-sostoyaniya', priority: 0.8 },
    { url: '/metody', priority: 0.7 },
    { url: '/biblioteka', priority: 0.6 },
    { url: '/nauka', priority: 0.6 },
    { url: '/blog', priority: 0.7 },
    { url: '/kontakty', priority: 0.7 },
    { url: '/privacy-policy', priority: 0.3 },
  ];

  return pages.map(({ url, priority }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency: url === '/blog' ? 'weekly' : 'monthly',
    priority,
  }));
}
