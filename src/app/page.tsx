import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from './data/products';
import ProductCard from '../../components/ProductCard';
import { PhoneButton, ZaloButton } from '../../components/ContactButtons';
import { PHONE_NUMBER, SITE_URL } from './data/site';
import PriceText from '../../components/PriceText';

// Năm nhóm đậu của dòng giới thiệu: [id sản phẩm, vị trí ảnh]. Ô đầu là ô lớn.
const HERO_PICKS: Array<[string, number]> = [
  ['dau-den', 1],
  ['dau-xanh-hat', 1],
  ['dau-do', 0],
  ['dau-nanh', 1],
  ['dau-trang-bi', 1],
];

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

export default function HomePage() {
  const heroCells = HERO_PICKS.flatMap(([id, index]) => {
    const product = PRODUCTS.find((p) => p.id === id);
    return product ? [{ product, src: product.images[index] ?? product.images[0] }] : [];
  });

  return (
    <main id="main">
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <h1>Chuyên các loại đậu, giá cạnh tranh</h1>
            <p className="lead">Kho sỉ và lẻ: đậu xanh, đen, đỏ, nành, trắng.</p>
            <div className="hero__actions">
              <ZaloButton className="btn btn--ink">Báo giá Zalo trực tiếp</ZaloButton>
              <PhoneButton className="btn">Hotline: {PHONE_NUMBER}</PhoneButton>
            </div>
          </div>

          <div className="mosaic">
            {heroCells.map(({ product, src }, i) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className={i === 0 ? 'mosaic__cell mosaic__cell--lead' : 'mosaic__cell'}
              >
                <Image
                  src={src}
                  alt={product.name}
                  width={i === 0 ? 800 : 400}
                  height={i === 0 ? 800 : 400}
                  sizes={i === 0 ? '(min-width: 60rem) 28vw, 100vw' : '(min-width: 60rem) 14vw, 50vw'}
                  className="mosaic__img"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                />
                <span className="mosaic__plate">
                  <span className="mosaic__name">{product.name}</span>
                  <span className="mosaic__price"><PriceText value={product.priceRange} /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BẢNG GIÁ CÁC LOẠI ĐẬU */}
      <section className="section" aria-labelledby="board-title">
        <div className="wrap">
          <div className="head">
            <h2 id="board-title">Danh Mục Các Loại Đậu</h2>
            <p>Bấm vào sản phẩm để xem chi tiết</p>
          </div>

          <div className="board">
            <div className="board__head" aria-hidden="true">
              <span>Sản phẩm</span>
              <span>Khoảng giá</span>
            </div>
            <ul className="board__list">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ĐIỀU KIỆN MUA HÀNG */}
      <section className="section section--before-band" aria-labelledby="terms-title">
        <div className="wrap">
          <div className="head">
            <h2 id="terms-title">Chính Sách Mua Hàng</h2>
          </div>

          <div className="terms">
            <div className="terms__cell terms__cell--a">
              <p className="terms__fig">10kg</p>
              <p className="terms__label">Bán sỉ tối thiểu từ 10kg</p>
            </div>
            <div className="terms__cell terms__cell--b">
              <p className="terms__fig">50kg</p>
              <p className="terms__label">Nhận giao hàng tận nơi đơn từ 50kg trở lên</p>
            </div>
            <div className="terms__cell terms__cell--c">
              <p className="terms__fig">COD</p>
              <p className="terms__label">Thanh toán khi nhận hàng (COD)</p>
            </div>
            <div className="terms__cell terms__cell--d">
              <p className="terms__fig terms__fig--s">Kiểm tra hàng trước khi thanh toán</p>
              <p className="terms__label">Đơn hàng gần hỗ trợ giao tận nơi</p>
            </div>
          </div>
        </div>
      </section>

      {/* LIÊN HỆ BÁO GIÁ */}
      <section className="band" aria-labelledby="quote-title">
        <div className="wrap band__grid">
          <h2 id="quote-title">Nhận báo giá sỉ tại kho</h2>
          <div className="band__acts">
            <ZaloButton className="btn btn--ink">Báo giá Zalo trực tiếp</ZaloButton>
            <PhoneButton className="btn">Gọi ngay hotline</PhoneButton>
          </div>
        </div>
      </section>

      {/* NÚT CHAT NỔI */}
      <div className="fab">
        <ZaloButton className="btn">Chat Zalo</ZaloButton>
      </div>
    </main>
  );
}
