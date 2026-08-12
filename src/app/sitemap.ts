import { PRODUCTS } from './data/products';
import { SITE_URL } from './data/site';

export default async function sitemap() {
  const productUrls = PRODUCTS.map((product) => ({
    url: `${SITE_URL}/products/${product.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...productUrls,
  ];
}