import Logo from './Logo';
import { PhoneButton, ZaloButton } from './ContactButtons';
import { PHONE_NUMBER } from '../src/app/data/site';

export default function Header() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        {/* LOGO BÊN TRÁI */}
        <Logo />

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
