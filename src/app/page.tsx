import Link from 'next/link';
import { PRODUCTS, PHONE_NUMBER, ZALO_LINK } from './data/products';

export default function HomePage() {
  return (
    <main className="min-h-screen pb-20 bg-[#FFFDF9]">
      {/* BANNER XANH LÁ MẠ */}
      <section className="bg-[#5B7B3A] text-[#FFFDF7] py-12 px-4 text-center shadow-sm relative overflow-hidden border-b-4 border-[#49642D]">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block bg-[#F2EB9C] text-[#3D5224] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest border border-[#DDD376] shadow-sm">
            KHO NÔNG SẢN SỈ & LẺ
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold mt-3 tracking-wide text-[#FFFFFF] drop-shadow-sm">
            Chuyên Các Loại Đậu - Giá Cả Cạnh Tranh
          </h1>
          <p className="text-[#F2F7E9] text-sm sm:text-base mt-2 font-serif">
            Đậu xanh • Đậu đen • Đậu đỏ • Đậu nành • Đậu trắng
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-[#A07C4A] hover:bg-[#8A683B] text-white font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow border border-[#7D5E34] transition"
            >
              💬 Báo Giá Zalo Trực Tiếp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-[#B8421D] hover:bg-[#9C3516] text-white font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow border border-[#7A2B13] transition"
            >
              📞 Hotline: {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* KHU VỰC DANH MỤC SẢN PHẨM (NỀN SÁNG TƯƠI SẠCH SẼ) */}
      <section className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex justify-between items-end mb-6 border-b border-[#E8E1D3] pb-3">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2B1E] flex items-center gap-2">
            🌾 Danh Mục Các Loại Đậu
          </h2>
          <span className="text-xs text-[#8A7966] italic">*Bấm vào sản phẩm để xem chi tiết</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#ECE5D8] overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <Link href={`/products/${product.id}`} className="block relative h-52 bg-[#FA7F2] overflow-hidden group">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  {/* NHÃN VÙNG MIỀN */}
                  <span className="absolute top-3 left-3 bg-[#8C7147] text-[#FFFDF7] text-[11px] font-bold px-2.5 py-1 rounded shadow border border-[#6E5734] flex items-center gap-1">
                    🏷️ {product.origin}
                  </span>
                </Link>

                <div className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-serif font-bold text-[#3E2B1E] hover:text-[#B8421D] transition">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-[#B8421D] font-sans font-bold text-base mt-1 lining-nums tabular-nums">
                    {product.priceRange}
                  </p>
                  <p className="text-[#6B5A4B] text-xs mt-2 line-clamp-2 leading-relaxed">{product.shortDesc}</p>
                </div>
              </div>

              <div className="p-4 pt-0 flex gap-2">
                <Link
                  href={`/products/${product.id}`}
                  className="flex-1 bg-[#F7F2E7] hover:bg-[#EBE3D3] text-[#3E2B1E] text-xs font-bold py-2.5 rounded-lg text-center transition border border-[#E0D7C5]"
                >
                  Xem Chi Tiết
                </Link>
                <a
                  href={ZALO_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-[#B8421D] hover:bg-[#9C3516] text-white text-xs font-bold py-2.5 rounded-lg text-center transition border border-[#7A2B13]"
                >
                  Nhận Báo Giá
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={ZALO_LINK}
          target="_blank"
          rel="noreferrer"
          className="bg-white text-[#3E2B1E] font-bold px-4 py-3 rounded-full shadow-xl hover:bg-[#FAF7F2] flex items-center gap-2 border-2 border-[#B8421D] text-sm animate-bounce"
        >
          💬 Chat Zalo
        </a>
      </div>
    </main>
  );
}