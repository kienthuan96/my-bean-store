import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_URL } from './data/site';
import { buildOrganizationJsonLd } from './lib/seo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';

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
  },
  twitter: {
    card: 'summary_large_image',
    site: '@khonongsan',
    creator: '@khonongsan',
    title: 'Kho Nông Sản Đậu - Chuyên Các Loại Đậu Sỉ & Lẻ',
    description: 'Chuyên cung cấp đậu xanh, đậu đen xanh lòng, đậu đỏ, đậu nành, đậu trắng giá tốt tại kho.',
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
  themeColor: '#74834A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="antialiased text-[#3E2B1E] bg-[#EFE6D3] font-sans">
        <JsonLd data={buildOrganizationJsonLd()} />

        <Header />

        {/* NỘI DUNG TRANG WEB */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
