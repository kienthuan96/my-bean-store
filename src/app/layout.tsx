import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kho Sỉ & Lẻ Nông Sản Đậu Quê - Đậu Xanh, Đen, Đỏ, Nành, Trắng',
  description:
    'Chuyên cung cấp các loại đậu nông sản sạch: Đậu xanh, đậu đen xanh lòng, đậu đỏ, đậu nành, đậu trắng. Hạt mẩy, phơi khô tự nhiên, giá tại kho. Bấm nhận báo giá Zalo hôm nay!',
  openGraph: {
    title: 'Sỉ & Lẻ Các Loại Đậu Nông Sản Sạch - Giá Cập Nhật Theo Ngày',
    description: 'Đậu xanh, đậu đen, đậu đỏ, đậu nành, đậu trắng. Bấm để xem bảng giá và liên hệ Zalo trực tiếp!',
    images: ['/images/banner-dau.jpg'],
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-amber-50/30 text-gray-800 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}