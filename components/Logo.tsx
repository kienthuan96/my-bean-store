import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      {/* Icon Hạt Đậu & Mầm Cây */}
      <div className="w-10 h-10 bg-emerald-800 text-amber-300 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Mầm cây hạt đậu */}
          <path d="M7 20h10" />
          <path d="M10 20c0-3.5 2.5-6 2.5-10" />
          <path d="M12.5 10C10 8 7 8 5 10c0 4 5 7 7.5 0Z" fill="#FCD34D" stroke="none" />
          <path d="M12.5 10C15 8 18 8 20 10c0 4-5 7-7.5 0Z" fill="#34D399" stroke="none" />
        </svg>
      </div>

      {/* Tên Thương Hiệu */}
      <div className="flex flex-col">
        <span className="text-lg font-black tracking-tight text-gray-900 group-hover:text-emerald-800 transition">
          NÔNG SẢN
        </span>
      </div>
    </Link>
  );
}