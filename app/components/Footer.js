import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>磊石石材</h3>
          <p>專業石材加工顧問</p>
          <p>西班牙進口大板磚、各式貼面石材</p>
          <p>專業加工服務、石材規劃顧問</p>
        </div>
        <div className={styles.section}>
          <h3>快速連結</h3>
          <ul>
            <li><Link href="/">首頁</Link></li>
            <li><Link href="/about">關於我們</Link></li>
            <li><Link href="/products">商品型錄</Link></li>
            <li><Link href="/cases">案例分享</Link></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>聯絡資訊</h3>
          <p>電話: 02-XXXX-XXXX</p>
          <p>Email: info@ltstone.com.tw</p>
          <p>地址: 台北市XX區XX路XX號</p>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} 磊石石材. 版權所有.
      </div>
    </footer>
  );
}