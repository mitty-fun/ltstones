import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function AboutPage() {
  const teamMembers = [
    {
      name: '張經理',
      position: '公司負責人',
      bio: '擁有超過20年的石材產業經驗，專精於高端石材的選材與應用，多次帶領團隊完成重大工程專案。',
      image: '/vercel.svg', // 將來替換為團隊成員照片
    },
    {
      name: '李經理',
      position: '銷售總監',
      bio: '專注於客戶需求分析與方案規劃，命中率高，與多家石材廠商合作，為陕盡最優質的選擇。',
      image: '/vercel.svg',
    },
    {
      name: '王設計師',
      position: '主任設計師',
      bio: '擁有建築室內設計背景，專精於將石材的蕩色與紋理實現客座的設計願景，經常與知名室內設計師合作。',
      image: '/vercel.svg',
    },
  ];

  const milestones = [
    {
      year: '2005',
      title: '公司成立',
      description: '立通石材在台北成立，專營高品質石材選材與施工。',
    },
    {
      year: '2010',
      title: '業務擴展',
      description: '擴展生產工廠，引進先進加工設備，提供客戶更多樣化的加工服務。',
    },
    {
      year: '2015',
      title: '從人手到技術',
      description: '引進自動化切割設備，提升精度與效率，成為業内領導者。',
    },
    {
      year: '2020',
      title: '直接執導小型專案',
      description: '開始直接執行小型建築專案，提供專業高品質石材施工支援。',
    },
    {
      year: '2023',
      title: '拓展與國外品牌合作',
      description: '與西班牙及義大利頭等石材品牌建立絕佳合作關係，為違盡頂尖石材。',
    },
  ];

  const values = [
    {
      title: '貭積質量',
      description: '我們堅持選擇最高品質的石材，確保專案的每個細節都經得起時間考驗。',
      icon: '/vercel.svg',
    },
    {
      title: '專業技術',
      description: '我們擁有蓄積多年的石材加工技術，不斷創新與提升技術水平。',
      icon: '/vercel.svg',
    },
    {
      title: '客戶至上',
      description: '我們重視客戶需求，提供量身設計與專業建議，確保客戶滿意。',
      icon: '/vercel.svg',
    },
    {
      title: '唯美設計',
      description: '我們賽重細節與設計美學，讓每個專案都成為獨一無二的藝術品。',
      icon: '/vercel.svg',
    },
  ];

  return (
    <div className="container">
      {/* 關於我們 */}
      <section className="section">
        <h1 className="section-title">關於磊石石材</h1>
        <p className="section-subtitle">專業石材加工顧問，為您打造獨特空間</p>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              磊石石材成立於2005年，多年來致力於提供高品質的石材產品與專業的加工服務。我們直接與歐洲頂尖石材產地合作，引進最優質的大理石、花崗岩、石英石等各式石材。
            </p>
            <p>
              我們擁有一支專業的團隊，內部成員皆擁有豐富的石材加工與施工經驗。我們與建築師、室內設計師及營造業者密切合作，為客戶提供從選材、設計到施工的全方位服務。
            </p>
            <p>
              磊石石材掌握先進的切割與制作技術，輛創高效率的加工流程與品質控管系統，確保專案完工品質。不論是高端廚房檯面、精緻電視牆面或者豪華浴室石材，我們都能為您量身打造獨一無二的空間。
            </p>
          </div>
          <div className={styles.aboutImageWrapper}>
            <div className={styles.aboutImage}>
              {/* 需要替換為公司照片 */}
              <div className={styles.imagePlaceholder}>
                <span>公司外觀照片</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 公司歷程 */}
      <section className={`section ${styles.timelineSection}`}>
        <h2 className="section-title">公司歷程</h2>
        <div className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineYear}>{milestone.year}</div>
              <div className={styles.timelineContent}>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 核心價值 */}
      <section className="section">
        <h2 className="section-title">核心價值</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Image src={value.icon} alt={value.title} width={40} height={40} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* 核心團隊 */}
      <section className={`section ${styles.teamSection}`}>
        <h2 className="section-title">核心團隊</h2>
        <p className="section-subtitle">認識我們的專業團隊，為您提供優質服務</p>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.memberImage}>
                <Image src={member.image} alt={member.name} width={200} height={200} />
              </div>
              <h3>{member.name}</h3>
              <p className={styles.position}>{member.position}</p>
              <p className={styles.bio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* 合作對象 */}
      <section className={`section ${styles.partnersSection}`}>
        <h2 className="section-title">合作品牌</h2>
        <p className="section-subtitle">我們與奮齊辭擊的石材品牌合作，提供高品質產品</p>
        
        <div className={styles.partnersGrid}>
          {/* 需要替換為合作品牌標誌 */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={styles.partnerLogo}>
              <div className={styles.logoPlaceholder}>
                <span>合作品牌 {i}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA 區塊 */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>準備開始您的石材專案？</h2>
          <p>聯絡我們的專業團隊，共同創造美好空間</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn">
              立即連繫
            </Link>
            <Link href="/products" className="btn btn-secondary">
              石材巾錄
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}