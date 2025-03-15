import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">磊石石材</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">首頁</Link>
        </li>
        <li>
          <Link href="/about">關於我們</Link>
        </li>
        <li>
          <Link href="/products">商品型錄</Link>
        </li>
        <li>
          <Link href="/cases">案例分享</Link>
        </li>
        <li>
          <Link href="/faq">常見問題</Link>
        </li>
        <li>
          <Link href="/calculator">線上估價</Link>
        </li>
        <li>
          <Link href="/contact">聯絡我們</Link>
        </li>
      </ul>
    </nav>
  );
}