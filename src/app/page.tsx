import Link from 'next/link';
import { PRODUCTS, PHONE_NUMBER, ZALO_LINK } from './data/products';

export default function HomePage() {
  return (
    <main className="min-h-screen pb-24 bg-amber-50/30">
      {/* BANNER ĐẦU TRANG */}
      <section className="bg-emerald-800 text-white py-10 px-4 text-center shadow-md">
        <div className="max-w-3xl mx-auto">
          <span className="bg-emerald-700 text-emerald-100 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Kho Nông Sản Sỉ & Lẻ
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold mt-2">
            Chuyên Các Loại Đậu - Giá Cả Cạnh Tranh
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base mt-2">
            Đậu xanh • Đậu đen • Đậu đỏ • Đậu nành • Đậu trắng. Giao hàng toàn quốc.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow"
            >
              💬 Báo Giá Zalo Trực Tiếp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow"
            >
              📞 Hotline: {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* DANH SÁCH SẢN PHẨM */}
      <section className="max-w-5xl mx-auto px-4 mt-8">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">🌾 Danh Mục Các Loại Đậu</h2>
          <span className="text-xs text-gray-500">*Bấm vào sản phẩm để xem chi tiết</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <Link href={`/products/${product.id}`} className="block relative h-48 bg-gray-100 overflow-hidden group">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {product.origin}
                  </span>
                </Link>

                <div className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 hover:text-emerald-700 transition">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-emerald-700 font-bold text-base mt-1">{product.priceRange}</p>
                  <p className="text-gray-600 text-xs mt-2 line-clamp-2">{product.shortDesc}</p>
                </div>
              </div>

              <div className="p-4 pt-0 flex gap-2">
                <Link
                  href={`/products/${product.id}`}
                  className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold py-2.5 rounded-lg text-center transition"
                >
                  Xem Chi Tiết
                </Link>
                <a
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg text-center transition"
                >
                  Nhận Báo Giá
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <a
          href={ZALO_LINK}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white font-bold px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 flex items-center gap-2 animate-bounce text-sm"
        >
          💬 Chat Zalo
        </a>
      </div>
    </main>
  );
}