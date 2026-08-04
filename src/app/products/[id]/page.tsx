import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PRODUCTS, PHONE_NUMBER, ZALO_LINK } from '../../data/products';

interface PageProps {
  params: Promise<{ id: string }>;
}

// SEO DYNAMIC METADATA CHO TỪNG SẢN PHẨM
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === resolvedParams.id);
  if (!product) return {};

  return {
    title: `${product.name} - Báo Giá Sỉ & Lẻ Mới Nhất`,
    description: `${product.fullDesc} Giá khoảng ${product.priceRange}. Liên hệ Zalo/Gọi điện để nhận báo giá sỉ tại kho.`,
    openGraph: {
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

  // Schema.org Product cho Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'image': product.images[0],
    'description': product.fullDesc,
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'VND',
      'lowPrice': product.priceRange.split(' - ')[0].replace(/\D/g, ''),
      'highPrice': product.priceRange.split(' - ')[1].split(' ')[0].replace(/\D/g, ''),
    },
  };

  return (
    <main className="min-h-screen pb-24 bg-amber-50/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* thanh điều hướng (Breadcrumb) */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-4xl mx-auto text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-emerald-700 font-medium">Trang chủ</Link>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{product.name}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* CỘT 1: HÌNH ẢNH */}
            <div>
              <div className="rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {product.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="rounded-lg h-20 w-full object-cover border cursor-pointer hover:opacity-80"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* CỘT 2: THÔNG TIN & NÚT LIÊN HỆ */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
                  Xuất xứ: {product.origin}
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">{product.name}</h1>
                
                <div className="mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <span className="text-xs text-emerald-800 font-medium">Khoảng giá tham khảo:</span>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-700">{product.priceRange}</p>
                  <p className="text-[11px] text-emerald-600 mt-0.5">*Giá thay đổi theo biến động thị trường & số lượng mua</p>
                </div>

                <p className="text-gray-700 text-sm mt-4 leading-relaxed">{product.fullDesc}</p>
              </div>

              {/* KHU VỰC NÚT LIÊN HỆ (CTA) */}
              <div className="mt-6 space-y-3">
                <a
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-center block shadow transition text-sm sm:text-base"
                >
                  💬 Chat Zalo Nhận Báo Giá Số Lượng Lớn
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-center block shadow transition text-sm sm:text-base"
                >
                  📞 Gọi Ngay: {PHONE_NUMBER}
                </a>
              </div>
            </div>

          </div>

          {/* QUY CÁCH & CÔNG DỤNG */}
          <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">📋 Quy Cách & Chất Lượng</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {product.specs.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">💡 Ứng Dụng Thực Tế</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {product.uses.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-600">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* NÚT QUAY LẠI TRANG CHỦ */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-block text-emerald-700 hover:text-emerald-800 text-sm font-bold underline"
          >
            ← Quay lại xem tất cả các loại đậu
          </Link>
        </div>
      </div>
    </main>
  );
}