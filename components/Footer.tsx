import { ADDRESS_FULL, EMAIL, PHONE_NUMBER } from '../src/app/data/site';
import { ZaloButton } from './ContactButtons';

const FEATURED_PRODUCTS = [
  'Đậu Xanh Hạt Mẩy',
  'Đậu Đen Xanh Lòng',
  'Đậu Đỏ Hạt Nhỏ',
  'Gạo Sạch Mộc',
  'Hạt Ngũ Cốc Dinh Dưỡng',
];

const PURCHASE_POLICIES = [
  'Thanh toán khi nhận hàng (COD)',
  'Chính sách đổi trả linh hoạt',
  'Kiểm tra hàng trước khi thanh toán',
  'Bán sỉ tối thiểu từ 10kg',
  'Nhận giao hàng tận nơi đơn từ 50kg trở lên',
  'Đơn hàng gần hỗ trợ giao tận nơi',
];

export default function Footer() {
  return (
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
              <span>📍</span> {ADDRESS_FULL}
            </p>
            <p className="flex items-center gap-2 text-[#F2DDD0] text-xs">
              <span>📞</span> Hotline: {PHONE_NUMBER}
            </p>
            <p className="flex items-center gap-2 text-[#F2DDD0] text-xs">
              <span>✉️</span> Email: {EMAIL}
            </p>
          </div>

          {/* CỘT 2: SẢN PHẨM NỔI BẬT */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#FFE8D6] mb-3">SẢN PHẨM NỔI BẬT</h4>
            <ul className="space-y-2 text-xs text-[#F2DDD0]">
              {FEATURED_PRODUCTS.map((name) => (
                <li key={name} className="hover:text-white cursor-pointer">
                  • {name}
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: CHÍNH SÁCH */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#FFE8D6] mb-3">CHÍNH SÁCH MUA HÀNG</h4>
            <ul className="space-y-2 text-xs text-[#F2DDD0]">
              {PURCHASE_POLICIES.map((policy) => (
                <li key={policy}>• {policy}</li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: MẠNG XÃ HỘI */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#FFE8D6] mb-3">THEO DÕI CHÚNG TÔI</h4>
            <div className="space-y-2">
              <ZaloButton className="block bg-[#833116] hover:bg-[#722A12] px-3 py-1.5 rounded text-xs text-center border border-[#B34D2C] transition">
                💬 Zalo
              </ZaloButton>
            </div>
          </div>
        </div>

        {/* DÒNG BẢN QUYỀN */}
        <div className="pt-4 border-t border-[#B85737] text-center text-[11px] text-[#E8C2B3]">
          Bản quyền © 2026 Kho Nông Sản Đậu Sạch.
        </div>
      </div>
    </footer>
  );
}
