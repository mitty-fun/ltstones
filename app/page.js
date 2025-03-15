import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const services = [
    {
      title: "西班牙進口大板磚",
      description: "優質大板磚，多種紋理選擇，適合各種室內裝修需求",
      icon: "/globe.svg",
    },
    {
      title: "各式貼面石材",
      description: "多樣化貼面石材，提供客製化設計與施工方案",
      icon: "/file.svg",
    },
    {
      title: "專業加工服務",
      description: "精準切割、拋光、倒角等專業加工，打造完美成品",
      icon: "/window.svg",
    },
    {
      title: "石材規劃顧問",
      description: "專業團隊提供石材選擇、搭配、施工等全方位諮詢",
      icon: "/globe.svg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>磊石石材 - 專業石材加工顧問</h1>
          <p>提供優質石材與專業施工，為您打造獨一無二的空間</p>
          <div className={styles.ctas}>
            <Link href="/products" className="btn">
              瀏覽商品
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">我們的服務</h2>
          <p className="section-subtitle">專業石材加工顧問，為您提供全方位的石材服務</p>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Image src={service.icon} alt={service.title} width={40} height={40} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>關於立通石材</h2>
              <p>
                立通石材成立多年，專注於高品質石材的進口、銷售與加工。我們與西班牙、義大利等頂級石材產地直接合作，確保每一塊石材的品質與獨特性。
              </p>
              <p>
                我們的專業團隊擁有豐富的經驗，能夠提供從選材、設計到施工的全方位服務，滿足客戶的各種需求。
              </p>
              <Link href="/about" className="btn">
                了解更多
              </Link>
            </div>
            <div className={styles.aboutImage}>
              {/* 請替換為適當的石材工廠或展示空間圖片 */}
              <div className={styles.placeholderImage}>
                <span>石材工廠圖片</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">精選商品</h2>
          <p className="section-subtitle">多樣化的石材選擇，滿足不同風格需求</p>
          <div className={styles.productsGrid}>
            {/* 顯示4個石材產品預覽 */}
            {["A01-行雲流水-Bianco Lasa.png", "A04-銀彩石英石-Supergrey.png", "B01-森林之花-Fior di Bosco.png", "C01-鎏金-Essential Gold.png"].map((item, index) => (
              <div key={index} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image 
                    src={`/items/${item}`} 
                    alt={item.replace(".png", "").split("-").slice(1).join("-")} 
                    width={300} 
                    height={200} 
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3>{item.replace(".png", "").split("-").slice(1).join("-")}</h3>
                <p>尺寸: 320cm × 160cm</p>
              </div>
            ))}
          </div>
          <div className={styles.centerButton}>
            <Link href="/products" className="btn">
              查看更多商品
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <h2 className="section-title">服務流程</h2>
          <p className="section-subtitle">簡單四步驟，打造您的完美空間</p>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>諮詢選材</h3>
              <p>專業顧問協助您選擇適合的石材種類與規格</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>丈量規劃</h3>
              <p>專業人員現場丈量，提供最佳施工方案</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>加工製作</h3>
              <p>精準加工每一塊石材，確保完美契合</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>安裝完工</h3>
              <p>專業團隊安裝，確保施工品質與美觀</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>準備開始您的石材專案？</h2>
            <p>立即聯絡我們，獲取專業建議與免費估價</p>
            <Link href="/contact" className="btn">
              立即諮詢
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
