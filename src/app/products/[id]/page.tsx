import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PRODUCTS, PHONE_NUMBER, ZALO_LINK, SITE_URL } from '../../data/products';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);
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
      title: `${product.name} - Giá Tốt Tại Kho`,
      description: product.shortDesc,
      images: [product.images[0]],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const productUrl = `${SITE_URL}/products/${product.id}`;

  const priceParts = product.priceRange.split(' - ');
  const lowPrice = priceParts[0] ? priceParts[0].replace(/\D/g, '') : '0';
  const highPrice = priceParts[1] ? priceParts[1].replace(/\D/g, '') : lowPrice;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images[0],
    description: product.fullDesc,
    url: productUrl,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'VND',
      lowPrice: lowPrice,
      highPrice: highPrice,
    },
  };

  const breadcrumbJsonLd = {
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
        name: 'Sản phẩm',
        item: `${SITE_URL}/products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen pb-24 bg-[#FFFDF9] text-[#3E2B1E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* BREADCRUMB */}
      <div className="bg-[#F7F2E7] border-b border-[#ECE5D8] py-3 px-4 shadow-sm">
        <div className="max-w-4xl mx-auto text-xs text-[#8A7966] flex items-center gap-2">
          <Link href="/" className="hover:text-[#B8421D] font-medium transition">Trang chủ</Link>
          <span>/</span>
          <span className="text-[#3E2B1E] font-bold font-serif">{product.name}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-[#ECE5D8] p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* CỘT 1: HÌNH ẢNH SẢN PHẨM */}
            <div>
              <div className="rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#ECE5D8]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {product.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      width={200}
                      height={200}
                      className="rounded-lg h-20 w-full object-cover border border-[#ECE5D8]"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* CỘT 2: THÔNG TIN & NÚT LIÊN HỆ */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#8C7147] text-[#FFFDF7] text-xs font-bold px-3 py-1 rounded shadow-sm border border-[#6E5734]">
                  🏷️ Xuất xứ: {product.origin}
                </span>

                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#3E2B1E] mt-3">
                  {product.name}
                </h1>
                
                <div className="mt-4 p-4 bg-[#FFFBF3] rounded-xl border border-[#ECE5D8]">
                  <span className="text-xs text-[#8A7966] font-semibold uppercase tracking-wider">
                    Khoảng giá tham khảo:
                  </span>
                  <p className="text-2xl sm:text-3xl font-sans font-extrabold text-[#B8421D] mt-0.5 lining-nums tabular-nums tracking-tight">
                    {product.priceRange}
                  </p>
                  <p className="text-[11px] text-[#8A7966] mt-1 italic">
                    *Giá thay đổi theo biến động thị trường & số lượng mua
                  </p>

                  <div className="mt-3 space-y-1.5 text-xs text-[#5A4839]">
                    <p className="flex items-center gap-1.5 font-medium">
                      <span>📦</span> <b>Chính sách sỉ:</b> Bán sỉ từ 10kg trở lên
                    </p>
                    <p className="flex items-center gap-1.5 font-medium">
                      <span>🚚</span> <b>Điều kiện giao:</b> Nhận giao tận nơi cho đơn từ 50kg
                    </p>
                    <p className="flex items-center gap-1.5 font-medium">
                      <span>📍</span> <b>Phạm vi:</b> Khách ở gần hỗ trợ giao ngay, ở xa thương lượng phương thức vận chuyển
                    </p>
                  </div>
                </div>

                <p className="text-[#5A4839] text-sm mt-4 leading-relaxed">
                  {product.fullDesc}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#A07C4A] hover:bg-[#8A683B] text-white font-bold py-3 px-4 rounded-xl text-center block shadow border border-[#7D5E34] transition text-sm sm:text-base"
                >
                  💬 Chat Zalo Nhận Báo Giá Số Lượng Lớn
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full bg-[#B8421D] hover:bg-[#9C3516] text-white font-bold py-3 px-4 rounded-xl text-center block shadow border border-[#7A2B13] transition text-sm sm:text-base"
                >
                  📞 Gọi Ngay Hotline: {PHONE_NUMBER}
                </a>
              </div>
            </div>

          </div>

          {/* QUY CÁCH & CÔNG DỤNG */}
          <div className="mt-8 pt-6 border-t border-[#ECE5D8] grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FFFDF9] p-4 rounded-xl border border-[#ECE5D8]">
              <h3 className="font-serif font-bold text-[#3E2B1E] text-base mb-3 flex items-center gap-2">
                📋 Quy Cách & Chất Lượng
              </h3>
              <ul className="space-y-2 text-sm text-[#5A4839]">
                {product.specs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B8421D] font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFFDF9] p-4 rounded-xl border border-[#ECE5D8]">
              <h3 className="font-serif font-bold text-[#3E2B1E] text-base mb-3 flex items-center gap-2">
                💡 Ứng Dụng Thực Tế
              </h3>
              <ul className="space-y-2 text-sm text-[#5A4839]">
                {product.uses.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B8421D] font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-block text-[#B8421D] hover:text-[#833217] text-sm font-serif font-bold underline transition"
          >
            ← Quay lại xem tất cả các loại đậu
          </Link>
        </div>
      </div>
    </main>
  );
}