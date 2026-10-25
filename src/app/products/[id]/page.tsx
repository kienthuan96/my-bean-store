import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PRODUCTS } from '../../data/products';
import { PHONE_NUMBER, SITE_URL } from '../../data/site';
import { buildBreadcrumbJsonLd, buildProductJsonLd } from '../../lib/seo';
import JsonLd from '../../../../components/JsonLd';
import PriceText from '../../../../components/PriceText';
import { PhoneButton, ZaloButton } from '../../../../components/ContactButtons';

interface PageProps {
  params: Promise<{ id: string }>;
}

function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};

  return {
    title: `${product.name} - Báo Giá Sỉ & Lẻ Mới Nhất`,
    description: `${product.fullDesc} Giá ${product.priceRange}. Liên hệ Zalo/Gọi để nhận báo giá sỉ tại kho.`,
    keywords: [product.name, product.origin, 'đậu sỉ', 'đậu lẻ', 'báo giá đậu'],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${SITE_URL}/products/${product.id}`,
    },
    openGraph: {
      type: 'website',
      locale: 'vi_VN',
      url: `${SITE_URL}/products/${product.id}`,
      siteName: 'Kho Nông Sản Đậu',
      title: `${product.name} - Giá Tốt Tại Kho`,
      description: product.shortDesc,
      images: [{ url: product.images[0], width: 800, height: 600 }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@khonongsan',
      creator: '@khonongsan',
      title: `${product.name} - Giá Tốt Tại Kho`,
      description: product.shortDesc,
      images: [product.images[0]],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  const productUrl = `${SITE_URL}/products/${product.id}`;

  return (
    <main id="main">
      <JsonLd data={buildProductJsonLd(product, productUrl)} />
      <JsonLd data={buildBreadcrumbJsonLd(product, productUrl)} />

      {/* BREADCRUMB */}
      <nav className="crumbs" aria-label="Đường dẫn">
        <ol className="wrap crumbs__list">
          <li><Link href="/">Trang chủ</Link></li>
          <li aria-hidden="true">/</li>
          <li className="crumbs__here" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <section className="offer">
        <div className="wrap offer__grid">

          {/* CỘT 1: HÌNH ẢNH SẢN PHẨM */}
          <div className="offer__photos">
            <div className="frame frame--main">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={800}
                height={600}
                sizes="(max-width: 960px) 100vw, 45vw"
                priority
              />
            </div>

            {product.images.length > 1 && (
              <div className="thumbs">
                {product.images.map((img, idx) => (
                  <div className="frame" key={idx}>
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      width={200}
                      height={200}
                      sizes="(max-width: 960px) 25vw, 11vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CỘT 2: THÔNG TIN & NÚT LIÊN HỆ */}
          <div className="offer__info">
            <p className="offer__origin">Xuất xứ: {product.origin}</p>

            <h1>{product.name}</h1>

            <div className="priceplate">
              <p className="priceplate__label">Khoảng giá tham khảo:</p>
              <p className="priceplate__price"><mark><PriceText value={product.priceRange} /></mark></p>
              <p className="priceplate__note">Giá thay đổi theo biến động thị trường & số lượng mua</p>
            </div>

            <div className="offer__acts">
              <ZaloButton className="btn btn--ink btn--wide">Chat Zalo nhận báo giá số lượng lớn</ZaloButton>
              <PhoneButton className="btn btn--wide">Gọi ngay hotline: {PHONE_NUMBER}</PhoneButton>
            </div>
          </div>

        </div>
      </section>

      <section className="brief" aria-label="Mô tả và chính sách">
        <div className="wrap brief__grid">
          <p className="offer__desc">{product.fullDesc}</p>

          <dl className="facts">
            <div className="facts__row">
              <dt>Chính sách sỉ</dt>
              <dd>Bán sỉ từ 10kg trở lên</dd>
            </div>
            <div className="facts__row">
              <dt>Điều kiện giao</dt>
              <dd>Nhận giao tận nơi cho đơn từ 50kg</dd>
            </div>
            <div className="facts__row">
              <dt>Phạm vi</dt>
              <dd>Khách ở gần hỗ trợ giao ngay, ở xa thương lượng phương thức vận chuyển</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* QUY CÁCH & CÔNG DỤNG */}
      <section className="section detail-section" aria-label="Quy cách và ứng dụng">
        <div className="wrap">
          <div className="detail">
            <div className="detail__cell">
              <h2>Quy Cách & Chất Lượng</h2>
              <ul className="detail__list">
                {product.specs.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="detail__cell">
              <h2>Ứng Dụng Thực Tế</h2>
              <ul className="detail__list">
                {product.uses.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="back">
            <Link href="/">Quay lại xem tất cả các loại đậu</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
