import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function CasesPage() {
  // 案例資料（實際應用中可能會從API或資料庫獲取）
  const projectCases = [
    {
      id: 1,
      title: '台北豪宅廚房改造',
      category: '住宅',
      description: '為台北市信義區高級住宅打造精緻廚房，使用頂級大理石廚房檯面，完美結合實用性與美觀。',
      image: '/images/cases/case-1-kitchen.png', // 西班牙進口行雲流水大理石 Bianco Lasa
      featured: true,
    },
    {
      id: 2,
      title: '現代風商業空間',
      category: '商業',
      description: '為知名精品店設計石材地板與牆面，運用大理石與花崗岩相互搭配，創造典雅奢華空間。',
      image: '/images/cases/case-2-commercial.png', // 西班牙進口黃金雕刻白 Marvel Gold
      featured: true,
    },
    {
      id: 3,
      title: '飯店大廳翻新',
      category: '商業',
      description: '為五星級飯店大廳進行石材鋪設，使用進口大理石，提升整體質感與氛圍。',
      image: '/images/cases/case-3-hotel.png', // 西班牙進口聖羅蘭黑金 St.Laurent
      featured: true,
    },
    {
      id: 4,
      title: '現代簡約風住宅牆面',
      category: '住宅',
      description: '為新北市住宅客廳打造大理石電視牆，簡約設計搭配精緻石材，創造精緻居家空間。',
      image: '/images/cases/case-4-residential.png', // 西班牙進口雕刻白 Kalos Bianco
      featured: false,
    },
    {
      id: 5,
      title: '辦公室接待區石材應用',
      category: '商業',
      description: '企業總部接待區石材地板與前台設計，運用高質感石英石，展現品牌專業形象。',
      image: '/images/cases/case-5-office.png', // 西班牙進口銀彩石英石 Supergrey
      featured: false,
    },
    {
      id: 6,
      title: '豪宅衛浴空間',
      category: '住宅',
      description: '為高級住宅設計豪華衛浴空間，使用進口大理石，打造猶如星級飯店的浴室體驗。',
      image: '/images/cases/case-6-bathroom.png', // 西班牙進口森林之花 Fior di Bosco
      featured: false,
    },
    {
      id: 7,
      title: '餐廳石材裝修',
      category: '商業',
      description: '知名連鎖餐廳石材地板與牆面設計，使用耐磨石材，兼顧美觀與實用性。',
      image: '/images/cases/case-7-restaurant.png', // 西班牙進口坦柏拉 Tambora
      featured: false,
    },
    {
      id: 8,
      title: '住宅廚房洽面',
      category: '住宅',
      description: '為新成屋設計廚房檯面，選用耐用的石英石，完美結合現代設計風格與實用性。',
      image: '/images/cases/case-8-kitchen-counter.png', // 西班牙進口香草天空 Colossal Cream
      featured: false,
    },
  ];

  // 篩選出特色案例
  const featuredCases = projectCases.filter(project => project.featured);
  
  return (
    <div className="container">
      {/* 頂部橫幅 */}
      <section className={styles.casesHero}>
        <div className={styles.heroContent}>
          <h1>案例分享</h1>
          <p>探索我們為客戶打造的石材應用案例，精緻工藝與專業設計的結合</p>
        </div>
      </section>
      
      {/* 特色案例 */}
      <section className="section">
        <h2 className="section-title">特色案例</h2>
        <p className="section-subtitle">精選優質案例，展現我們的專業施工與設計能力</p>
        
        <div className={styles.featuredGrid}>
          {featuredCases.map((project) => (
            <div key={project.id} className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={350}
                  style={{ objectFit: 'cover', width: '100%', height: '350px' }}
                />
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.category}>{project.category}</span>
                <h3>{project.title}</h3>
                <p className={styles.featuredDescription}>{project.description}</p>
                <Link href={`#case-${project.id}`} className={styles.readMore}>
                  了解更多 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 所有案例 */}
      <section className={`section ${styles.allCasesSection}`}>
        <h2 className="section-title">全部案例</h2>
        
        <div className={styles.casesGrid}>
          {projectCases.map((project) => (
            <div key={project.id} id={`case-${project.id}`} className={styles.caseCard}>
              <div className={styles.caseImage}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={200}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <span className={styles.caseCategory}>{project.category}</span>
              </div>
              <div className={styles.caseContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 服務流程 */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className="section-title">我們的服務流程</h2>
          <p className="section-subtitle">專業團隊為您提供從諮詢到完工的全程服務</p>
          
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <Image src="/images/cases/process/step-1.svg" alt="需求諮詢" width={40} height={40} className={styles.stepIcon} />
              <h3>需求諮詢</h3>
              <p>了解客戶需求與預算，提供初步建議與方案。</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <Image src="/images/cases/process/step-2.svg" alt="方案設計" width={40} height={40} className={styles.stepIcon} />
              <h3>方案設計</h3>
              <p>根據需求提供詳細設計方案與石材選擇建議。</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <Image src="/images/cases/process/step-3.svg" alt="施工規劃" width={40} height={40} className={styles.stepIcon} />
              <h3>施工規劃</h3>
              <p>確定方案後安排專業團隊進行現場測量與施工規劃。</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <Image src="/images/cases/process/step-4.svg" alt="精準施工" width={40} height={40} className={styles.stepIcon} />
              <h3>精準施工</h3>
              <p>專業師傅進行石材裁切、加工與安裝，確保施工品質。</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>05</div>
              <Image src="/images/cases/process/step-5.svg" alt="品質驗收" width={40} height={40} className={styles.stepIcon} />
              <h3>品質驗收</h3>
              <p>嚴格檢查施工品質，確保符合客戶需求與標準。</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 客戶評價 */}
      <section className="section">
        <h2 className="section-title">客戶評價</h2>
        <p className="section-subtitle">聽聽我們的客戶怎麼說</p>
        
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>"磊石石材的施工品質非常專業，從選材到安裝都非常用心，為我們打造了一個完美的廚房檯面。"</p>
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                {/* 實際應用中可放置客戶照片，此處使用占位符 */}
                <div className={styles.imagePlaceholder}></div>
              </div>
              <div className={styles.authorInfo}>
                <h4>張先生</h4>
                <p>台北市 - 住宅客戶</p>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>"我們餐廳的石材地板由磊石石材施工，不僅美觀更兼具實用性，至今已經使用三年依然如新。"</p>
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                <div className={styles.imagePlaceholder}></div>
              </div>
              <div className={styles.authorInfo}>
                <h4>李經理</h4>
                <p>連鎖餐廳 - 商業客戶</p>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>"磊石石材的設計團隊非常專業，為我們提供了最適合的石材選擇與搭配建議，效果超乎我們的預期。"</p>
            </div>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}>
                <div className={styles.imagePlaceholder}></div>
              </div>
              <div className={styles.authorInfo}>
                <h4>王小姐</h4>
                <p>新北市 - 住宅客戶</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 聯絡我們 */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactContent}>
            <h2>準備開始您的石材專案？</h2>
            <p>立即聯絡我們，讓專業團隊為您提供量身定製的解決方案</p>
            <Link href="/contact" className="btn">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}