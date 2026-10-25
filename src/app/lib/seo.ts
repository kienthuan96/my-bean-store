import type { Product } from '../data/products';
import { ADDRESS, BRAND_NAME, EMAIL, PHONE_NUMBER, SITE_URL } from '../data/site';

/** "40.000đ - 45.000đ / kg" -> { lowPrice: "40000", highPrice: "45000" } */
export function parsePriceRange(priceRange: string): { lowPrice: string; highPrice: string } {
  const [low, high] = priceRange.split(' - ');
  const lowPrice = low ? low.replace(/\D/g, '') : '0';
  const highPrice = high ? high.replace(/\D/g, '') : lowPrice;
  return { lowPrice, highPrice };
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-192x192.png`,
    image: `${SITE_URL}/products/dau-xanh-hat.png`,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressCountry: ADDRESS.country,
    },
  };
}

export function buildProductJsonLd(product: Product, productUrl: string) {
  const { lowPrice, highPrice } = parsePriceRange(product.priceRange);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images[0],
    description: product.fullDesc,
    url: productUrl,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    category: 'Nông Sản - Đậu Các Loại',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'VND',
      lowPrice,
      highPrice,
    },
  };
}

export function buildBreadcrumbJsonLd(product: Product, productUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: product.name,
        item: productUrl,
      },
    ],
  };
}
