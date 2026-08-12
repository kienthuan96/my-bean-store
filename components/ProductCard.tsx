import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '../src/app/data/products';
import { ZaloButton } from './ContactButtons';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl border border-[#ECE5D8] overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <Link
          href={`/products/${product.id}`}
          className="block relative h-52 bg-[#FA7F2] overflow-hidden group"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          <p className="text-[#6B5A4B] text-xs mt-2 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>
        </div>
      </div>

      <div className="p-4 pt-0 flex gap-2">
        <Link
          href={`/products/${product.id}`}
          className="flex-1 bg-[#F7F2E7] hover:bg-[#EBE3D3] text-[#3E2B1E] text-xs font-bold py-2.5 rounded-lg text-center transition border border-[#E0D7C5]"
        >
          Xem Chi Tiết
        </Link>
        <ZaloButton className="flex-1 bg-[#B8421D] hover:bg-[#9C3516] text-white text-xs font-bold py-2.5 rounded-lg text-center transition border border-[#7A2B13]">
          Nhận Báo Giá
        </ZaloButton>
      </div>
    </div>
  );
}
