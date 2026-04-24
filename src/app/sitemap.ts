import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';

const BASE_URL = 'https://kostyapsy.ru';

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
    { url: '/astro', priority: 0.7 },
    { url: '/chakry', priority: 0.7 },
    { url: '/blog', priority: 0.7 },
    { url: '/kontakty', priority: 0.7 },
    { url: '/privacy-policy', priority: 0.3 },
  ];

  const staticEntries = pages.map(({ url, priority }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency: (url === '/blog' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority,
  }));

  const articleEntries = articles.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}
