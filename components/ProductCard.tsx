import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '../src/app/data/products';
import { ZaloButton } from './ContactButtons';
import PriceText from './PriceText';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li className="board__row">
      <Link href={`/products/${product.id}`} className="board__thumb" tabIndex={-1} aria-hidden="true">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={440}
          height={330}
          sizes="220px"
          className="board__img"
        />
      </Link>

      <div className="board__main">
        <h3 className="board__name">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="board__desc">{product.shortDesc}</p>
        <p className="board__origin">{product.origin}</p>
      </div>

      <p className="board__price"><PriceText value={product.priceRange} /></p>

      <div className="board__acts">
        <Link href={`/products/${product.id}`} className="board__more">
          Xem chi tiết
        </Link>
        <ZaloButton className="btn">Nhận báo giá</ZaloButton>
      </div>
    </li>
  );
}
