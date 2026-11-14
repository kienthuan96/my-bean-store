import Logo from './Logo';
import { PhoneButton, ZaloButton } from './ContactButtons';
import { PHONE_NUMBER } from '../src/app/data/site';
import { PRODUCTS } from '../src/app/data/products';
import HeaderSearch, { type SearchItem } from './HeaderSearch';

// Tên gọi miền Bắc khách hay gõ (đỗ, lạc), để tìm vẫn ra.
function aliasesFor(name: string) {
  if (name.startsWith('Đậu Phộng')) return 'lạc';
  if (name.startsWith('Đậu')) return 'đỗ';
  return '';
}

const SEARCH_ITEMS: SearchItem[] = PRODUCTS.map((p) => ({
  id: p.id,
  name: p.name,
  price: p.priceRange,
  image: p.images[0],
  keywords: [aliasesFor(p.name), p.shortDesc, ...p.uses].join(' '),
}));

export default function Header() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        {/* LOGO BÊN TRÁI */}
        <Logo />

        {/* Ô TÌM ĐẬU */}
        <HeaderSearch items={SEARCH_ITEMS} />

        {/* NÚT LIÊN HỆ BÊN PHẢI */}
        <div className="nav__cells">
          <ZaloButton className="nav__cell">Chat Zalo</ZaloButton>
          <PhoneButton className="nav__cell nav__cell--ink">
            <span className="nav__call-label">Gọi:</span> {PHONE_NUMBER}
          </PhoneButton>
        </div>
      </div>
    </header>
  );
}
