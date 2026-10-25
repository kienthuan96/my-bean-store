import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Kho Nông Sản Đậu, trang chủ">
      {/* Icon Hạt Đậu & Mầm Cây */}
      <span className="logo__mark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Mầm cây hạt đậu */}
          <path d="M7 20h10" />
          <path d="M10 20c0-3.5 2.5-6 2.5-10" />
          <path className="logo__leaf-sun" d="M12.5 10C10 8 7 8 5 10c0 4 5 7 7.5 0Z" />
          <path className="logo__leaf-green" d="M12.5 10C15 8 18 8 20 10c0 4-5 7-7.5 0Z" />
        </svg>
      </span>

      {/* Tên Thương Hiệu */}
      <span className="logo__name">NÔNG SẢN</span>
    </Link>
  );
}
