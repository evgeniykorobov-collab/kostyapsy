import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Константин Альбертович — кризисный психолог',
    short_name: 'Кризисный психолог',
    description: 'Кризисный психолог Константин Альбертович. Помощь в острых состояниях, потерях, разводе, выгорании. Метод «Навигация в Хаосе».',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2c5f7f',
    lang: 'ru',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32 48x48',
        type: 'image/x-icon',
      },
      {
        src: '/kostya-portrait-v3-2026-04-19.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
