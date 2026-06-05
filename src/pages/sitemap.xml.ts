import type { APIRoute } from 'astro';
import { SPOTS } from '../data/spots';

const site = 'https://kauaispots.com';

export const GET: APIRoute = () => {
  const urls = [
    { loc: site, priority: '1.0' },
    ...SPOTS.map((spot) => ({
      loc: `${site}/spots/${spot.id}`,
      priority: '0.8',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
