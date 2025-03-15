import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.jpg" alt="磊石石材" width={180} height={60} style={{ objectFit: 'contain', height: 'auto' }} priority />
        </Link>
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