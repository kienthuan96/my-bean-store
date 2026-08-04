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
  },
  twitter: {
    card: 'summary_large_image',
    site: '@khonongsan',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Kho Nông Sản Đậu',
              url: SITE_URL,
              telephone: PHONE_NUMBER,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '58 Trần Chánh Chiếu, phường Chợ Lớn',
                addressLocality: 'TP Hồ Chí Minh',
                addressCountry: 'VN',
              },
            }),
          }}
        />

        {/* THANH HEADER PHONG CÁCH NÔNG THÔN MỘC MẠC */}
        <header className="sticky top-0 z-50 bg-[#E6DCC4]/95 backdrop-blur-md border-b border-[#C8BBA2] px-4 py-3 shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* LOGO BÊN TRÁI */}
            <Logo />

            {/* NÚT LIÊN HỆ BÊN PHẢI */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-[#5C7053] hover:bg-[#4B5E43] text-[#F7F3EB] border border-[#48593E] text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm transition flex items-center gap-1.5"
              >
                💬 Chat Zalo
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="bg-[#A04222] hover:bg-[#8A371A] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg shadow transition flex items-center gap-1.5 border border-[#833217]"
              >
                📞 <span className="hidden sm:inline">Gọi:</span> {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </header>

        {/* NỘI DUNG TRANG WEB */}
        {children}

        {/* FOOTER ĐẤT NUNG MỘC MẠC */}
        <footer className="bg-[#9E3F20] text-[#FDFBF7] pt-10 pb-6 px-4 border-t-4 border-[#782D14]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 pb-4 border-b border-[#B85737]">
              <h3 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-wider text-[#FFE8D6]">
                THÔNG TIN LIÊN HỆ & CHÍNH SÁCH
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-sm">
              {/* CỘT 1: THÔNG TIN KHO */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-serif font-bold text-base text-[#FFE8D6]">
                  <span>🛖</span> KHO NÔNG SẢN ĐẬU
                </div>
                <p className="flex items-start gap-2 text-[#F2DDD0] text-xs leading-relaxed">
                  <span>📍</span> 58 Trần Chánh Chiếu, phường Chợ Lớn, TP Hồ Chí Minh
                </p>
                <p className="flex items-center gap-2 text-[#F2DDD0] text-xs">
                  <span>📞</span> Hotline: {PHONE_NUMBER}
                </p>
                <p className="flex items-center gap-2 text-[#F2DDD0] text-xs">
                  <span>✉️</span> Email: triplethuan96@gmail.com
                </p>
              </div>

              {/* CỘT 2: SẢN PHẨM NỔI BẬT */}
              <div>
                <h4 className="font-serif font-bold text-base text-[#FFE8D6] mb-3">
                  SẢN PHẨM NỔI BẬT
                </h4>
                <ul className="space-y-2 text-xs text-[#F2DDD0]">
                  <li className="hover:text-white cursor-pointer">• Đậu Xanh Hạt Mẩy</li>
                  <li className="hover:text-white cursor-pointer">• Đậu Đen Xanh Lòng</li>
                  <li className="hover:text-white cursor-pointer">• Đậu Đỏ Hạt Nhỏ</li>
                  <li className="hover:text-white cursor-pointer">• Gạo Sạch Mộc</li>
                  <li className="hover:text-white cursor-pointer">• Hạt Ngũ Cốc Dinh Dưỡng</li>
                </ul>
              </div>

              {/* CỘT 3: CHÍNH SÁCH */}
              <div>
                <h4 className="font-serif font-bold text-base text-[#FFE8D6] mb-3">
                  CHÍNH SÁCH MUA HÀNG
                </h4>
                <ul className="space-y-2 text-xs text-[#F2DDD0]">
                  <li>• Thanh toán khi nhận hàng (COD)</li>
                  <li>• Chính sách đổi trả linh hoạt</li>
                  <li>• Kiểm tra hàng trước khi thanh toán</li>
                  <li>• Bán sỉ tối thiểu từ 10kg</li>
                  <li>• Nhận giao hàng tận nơi đơn từ 50kg trở lên</li>
                  <li>• Đơn hàng gần hỗ trợ giao tận nơi</li>
                </ul>
              </div>

              {/* CỘT 4: MẠNG XÃ HỘI */}
              <div>
                <h4 className="font-serif font-bold text-base text-[#FFE8D6] mb-3">
                  THEO DÕI CHÚNG TÔI
                </h4>
                <div className="space-y-2">
                  <a href={ZALO_LINK} target="_blank" rel="noreferrer" className="block bg-[#833116] hover:bg-[#722A12] px-3 py-1.5 rounded text-xs text-center border border-[#B34D2C] transition">
                    💬 Zalo
                  </a>
                </div>
              </div>
            </div>

            {/* DÒNG BẢN QUYỀN */}
            <div className="pt-4 border-t border-[#B85737] text-center text-[11px] text-[#E8C2B3]">
              Bản quyền © 2026 Kho Nông Sản Đậu Sạch. Giấy phép kinh doanh số 60-01-23456 do Sở KH&ĐT Đắk Lắk cấp ngày 12/01/2023.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}