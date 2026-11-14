'use client';

import { useId, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ZaloButton } from './ContactButtons';

export interface SearchItem {
  id: string;
  name: string;
  price: string;
  image: string;
  keywords: string;
}

// Bỏ dấu tiếng Việt để khách gõ "dau xanh" vẫn ra "Đậu Xanh".
function plain(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/\s+/g, ' ')
    .trim();
}

type Gtag = (command: 'event', name: string, params?: Record<string, string>) => void;

// Ghi lại khách tìm chữ gì (xem trong Google Ads / Analytics), không tính là chuyển đổi.
function trackSearch(term: string) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === 'function' && term) gtag('event', 'search', { search_term: term });
}

export default function HeaderSearch({ items }: { items: SearchItem[] }) {
  const router = useRouter();
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  const indexed = useMemo(
    () => items.map((item) => ({ item, name: plain(item.name), all: plain(`${item.name} ${item.keywords}`) })),
    [items],
  );

  const q = plain(query);
  const results = useMemo(() => {
    if (!q) return [];
    const words = q.split(' ');
    return indexed
      .filter((row) => words.every((w) => row.all.includes(w)))
      .map((row) => ({
        item: row.item,
        // Trúng tên sản phẩm thì xếp trước, trúng công dụng (chè, bánh...) xếp sau.
        score: (row.name.includes(q) ? 0 : words.every((w) => row.name.includes(w)) ? 1 : 2),
      }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 6)
      .map((r) => r.item);
  }, [q, indexed]);

  const showPanel = open && q.length > 0;

  function go(item: SearchItem) {
    trackSearch(query.trim());
    setOpen(false);
    setQuery('');
    setActive(-1);
    inputRef.current?.blur();
    router.push(`/products/${item.id}`);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setActive((i) => (results.length ? (i + 1) % results.length : -1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (results.length ? (i <= 0 ? results.length - 1 : i - 1) : -1));
    } else if (e.key === 'Escape') {
      setOpen(false);
      setActive(-1);
    }
  }

  return (
    <form
      role="search"
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        const pick = results[active] ?? results[0];
        if (pick) go(pick);
        else trackSearch(query.trim());
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <label className="search__field">
        <span className="sr-only">Tìm loại đậu</span>
        <svg className="search__icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          className="search__input"
          placeholder="Tìm đậu: đậu xanh, mè đen…"
          value={query}
          autoComplete="off"
          enterKeyHint="search"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 && results[active] ? `${listId}-${active}` : undefined}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />
      </label>

      {showPanel && (
        <div className="search__panel">
          {results.length > 0 ? (
            <ul id={listId} role="listbox" className="search__list" aria-label="Kết quả tìm kiếm">
              {results.map((item, i) => (
                <li
                  key={item.id}
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={i === active}
                  className={`search__option${i === active ? ' is-active' : ''}`}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(item)}
                >
                  <Image className="search__thumb" src={item.image} alt="" width={44} height={44} />
                  <span className="search__name">{item.name}</span>
                  <span className="search__price">{item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div id={listId} className="search__empty">
              <p>
                Trên web chưa có “{query.trim()}”. Kho còn nhiều loại khác, nhắn hỏi để báo giá nhanh.
              </p>
              <ZaloButton className="nav__cell nav__cell--ink search__zalo">Hỏi kho qua Zalo</ZaloButton>
            </div>
          )}
        </div>
      )}
    </form>
  );
}
