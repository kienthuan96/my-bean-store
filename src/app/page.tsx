import { PRODUCTS } from './data/products';
import { PHONE_NUMBER } from './data/site';
import ProductCard from '../../components/ProductCard';
import { PhoneButton, ZaloButton } from '../../components/ContactButtons';

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
            <ZaloButton className="bg-[#A07C4A] hover:bg-[#8A683B] text-white font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow border border-[#7D5E34] transition">
              💬 Báo Giá Zalo Trực Tiếp
            </ZaloButton>
            <PhoneButton className="bg-[#B8421D] hover:bg-[#9C3516] text-white font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow border border-[#7A2B13] transition">
              📞 Hotline: {PHONE_NUMBER}
            </PhoneButton>
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-5 right-5 z-40">
        <ZaloButton className="bg-white text-[#3E2B1E] font-bold px-4 py-3 rounded-full shadow-xl hover:bg-[#FAF7F2] flex items-center gap-2 border-2 border-[#B8421D] text-sm animate-bounce">
          💬 Chat Zalo
        </ZaloButton>
      </div>
    </main>
  );
}
