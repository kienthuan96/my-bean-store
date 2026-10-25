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
    <footer className="footer">
      <div className="wrap">
        <p className="footer__mast">Kho Nông Sản Đậu</p>
        <h2 className="footer__title">Thông tin liên hệ & chính sách</h2>

        <div className="footer__cells">
          {/* CỘT 1: THÔNG TIN KHO */}
          <div className="footer__cell footer__cell--contact">
            <address className="footer__address">
              <p>{ADDRESS_FULL}</p>
              <p>Hotline: {PHONE_NUMBER}</p>
              <p>Email: {EMAIL}</p>
            </address>
          </div>

          {/* CỘT 2: SẢN PHẨM NỔI BẬT */}
          <div className="footer__cell footer__cell--featured">
            <h3>Sản phẩm nổi bật</h3>
            <ul className="footer__list">
              {FEATURED_PRODUCTS.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: CHÍNH SÁCH */}
          <div className="footer__cell footer__cell--policy">
            <h3>Chính sách mua hàng</h3>
            <ul className="footer__list">
              {PURCHASE_POLICIES.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: MẠNG XÃ HỘI */}
          <div className="footer__cell footer__cell--social">
            <h3>Theo dõi chúng tôi</h3>
            <ZaloButton className="btn">Zalo</ZaloButton>
          </div>
        </div>

        {/* DÒNG BẢN QUYỀN */}
        <p className="footer__legal">Bản quyền © 2026 Kho Nông Sản Đậu Sạch.</p>
      </div>
    </footer>
  );
}
