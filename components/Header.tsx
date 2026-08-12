import Logo from './Logo';
import { PhoneButton, ZaloButton } from './ContactButtons';
import { PHONE_NUMBER } from '../src/app/data/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#E6DCC4]/95 backdrop-blur-md border-b border-[#C8BBA2] px-4 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* LOGO BÊN TRÁI */}
        <Logo />

        {/* NÚT LIÊN HỆ BÊN PHẢI */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ZaloButton className="bg-[#5C7053] hover:bg-[#4B5E43] text-[#F7F3EB] border border-[#48593E] text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm transition flex items-center gap-1.5">
            💬 Chat Zalo
          </ZaloButton>
          <PhoneButton className="bg-[#A04222] hover:bg-[#8A371A] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg shadow transition flex items-center gap-1.5 border border-[#833217]">
            📞 <span className="hidden sm:inline">Gọi:</span> {PHONE_NUMBER}
          </PhoneButton>
        </div>
      </div>
    </header>
  );
}
