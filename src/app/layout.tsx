import type { Metadata, Viewport } from 'next';
import './globals.css';
import { PHONE_NUMBER, ZALO_LINK, SITE_URL } from './data/products';
import Logo from '../../components/Logo';

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
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kho Nông Sản Đậu - Chuyên Các Loại Đậu Sỉ & Lẻ',
    description: 'Chuyên cung cấp đậu xanh, đậu đen xanh lòng, đậu đỏ, đậu nành, đậu trắng giá tốt tại kho.',
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'vXvE3Jcchqa1qQ-uNbd0_dDFjk9M1Tvrbr09wMfXIrQ',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#065f46',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="antialiased text-gray-900 bg-amber-50/20">
        {/* THANH HEADER CHỨA LOGO */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 shadow-sm">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            {/* LOGO BÊN TRÁI */}
            <Logo />

            {/* NÚT LIÊN HỆ BÊN PHẢI */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-3 py-2 rounded-lg hover:bg-blue-100 transition"
              >
                💬 Chat Zalo
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-lg shadow transition flex items-center gap-1.5"
              >
                📞 <span className="hidden sm:inline">Gọi:</span> {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </header>

        {/* NỘI DUNG TRANG WEB */}
        {children}
      </body>
    </html>
  );
}