import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk, Vollkorn } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { GOOGLE_ADS_ID, SITE_URL } from './data/site';
import { buildOrganizationJsonLd } from './lib/seo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';

const vollkorn = Vollkorn({
  subsets: ['latin', 'vietnamese'],
  weight: '600',
  display: 'swap',
  variable: '--font-vollkorn',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-hanken',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kho Nông Sản Đậu - Chuyên Các Loại Đậu Sỉ & Lẻ',
    template: '%s | Kho Nông Sản Đậu',
  },
  description: 'Chuyên cung cấp đậu xanh, đậu đen xanh lòng, đậu đỏ, đậu nành, đậu trắng giá tốt tại kho.',
  keywords: ['đậu xanh', 'đậu đen', 'đậu đỏ', 'đậu nành', 'đậu trắng', 'nông sản sỉ lẻ', 'kho đậu', 'đậu sỉ'],
  authors: [{ name: 'Kho Nông Sản Đậu' }],
  creator: 'Kho Nông Sản Đậu',
  publisher: 'Kho Nông Sản Đậu',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: SITE_URL,
    siteName: 'Kho Nông Sản Đậu',
    title: 'Kho Nông Sản Đậu - Chuyên Các Loại Đậu Sỉ & Lẻ',
    description: 'Chuyên cung cấp đậu xanh, đậu đen xanh lòng, đậu đỏ, đậu nành, đậu trắng giá tốt tại kho.',
    images: [{ url: '/products/dau-xanh-hat.png', width: 1024, height: 1024, alt: 'Đậu xanh hạt tại Kho Nông Sản Đậu' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@khonongsan',
    creator: '@khonongsan',
    title: 'Kho Nông Sản Đậu - Chuyên Các Loại Đậu Sỉ & Lẻ',
    description: 'Chuyên cung cấp đậu xanh, đậu đen xanh lòng, đậu đỏ, đậu nành, đậu trắng giá tốt tại kho.',
    images: ['/products/dau-xanh-hat.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'vXvE3Jcchqa1qQ-uNbd0_dDFjk9M1Tvrbr09wMfXIrQ',
  },
  other: {
    'format-detection': 'telephone=no',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F6F1E0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${vollkorn.variable} ${hanken.variable}`}>
      <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="afterInteractive" />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
        </Script>
        <a className="skip" href="#main">Bỏ qua đến nội dung</a>
        <JsonLd data={buildOrganizationJsonLd()} />

        <Header />

        {/* NỘI DUNG TRANG WEB */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
