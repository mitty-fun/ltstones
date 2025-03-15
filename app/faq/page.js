import styles from './page.module.css';
import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      category: '石材種類',
      questions: [
        {
          question: '哪種石材最適合廚房檯面使用？',
          answer: '廚房檯面常用的石材有花崗岩、大理石和石英石。花崗岩耐酸耐熱耐磨，極具耐用性；大理石外觀優雅但需要定期維護；石英石硝度高，耐磨耐刮，是高端檯面的選擇。我們會根據您的使用習慣和需求提供專業建議。'
        },
        {
          question: '電視牆應該選擇哪種石材？',
          answer: '電視牆常用石材包括大理石、石英石、板岩等。選擇時考慮因素包括：紋理美觀度、家庭裝修風格搭配、維護難易度等。我們的大板石材特別適合打造強烈視覺效果的電視牆。'
        },
        {
          question: '石材的紅色豪華度如何分級？',
          answer: '石材的紅色豪華度主要由材質、紋理、色群和活力度決定。我們的石材分為普通級、高級級和頂級石材。頂級石材通常來自特定礦區，擁有全球稀有的紋理和色澤，傳達喜戦的豪華感。'
        },
        {
          question: '西班牙石材與其他石材有何不同？',
          answer: '西班牙石材以其獨特的紋理、高密度及優越的品質著稱。相較於其他石材，西班牙石材通常具有更精緻的紋理變化、更低的水份吸收率及更強的硯度，非常適合高品質廚房檯面、精品浴室和豪華商業空間用途。'
        },
      ]
    },
    {
      category: '施工與安裝',
      questions: [
        {
          question: '石材安裝需要多長時間？',
          answer: '石材安裝時間因專案大小及複雜度而異。專案時間要考慮下材上模盤、預切割、現場安裝、織縫處理等階段。普通廚房檯面約需1-2天，大型高複雜需求可能需在3-5天。我們會在施工前提供詳細的時間規劃。'
        },
        {
          question: '石材與原州面的間隔要怎麼處理？',
          answer: '石材與原州面的間隔處理方式有多種，常見的包括使用石材專用膏質、安裝輕重巾引、引一過減震機替結構等。我們會根據您的石材類型及安裝環境選擇最適合的間隔處理方式，確保石材穩定牌牢後期不變形。'
        },
        {
          question: '石材的織縫間隔如何處理才最自然？',
          answer: '石材織縫的職業處理需要考慮紋理、類專業艇技術。高品質的織縫處理必須先進行精準切梯，再使用色彩匹配的填織劑，最後進行磨光處理。我們的專業技師會根據石材種類及紋理進行精緻的織縫處理，讓接織處幾乎看不出痕跡。'
        },
      ]
    },
    {
      category: '維護與清潔',
      questions: [
        {
          question: '石材需要多長時間做一次保養？',
          answer: '石材保養频率與種類及使用習慣相關。大理石與花崗岩建議2年保養一次，石英石則可3-5年保養一次。從處日常維護來說，廚房檯面建議每年訂太一次，才能確保石材的長期豐豐吾度。我們提供專業的石材清潔與保養服務。'
        },
        {
          question: '石材受污染如何去除？',
          answer: '石材污漏去除方法因污漏階段差異。輕微污染可用專業石材清潔劑與中性肥皂清潔；標詞污染可能需要石材專用汤劑或清潔粉亮劑；严重污染則可能需要專業施工人員從託。不同石材的清潔方式不同，建議就專海污染先咨詢專業人員。'
        },
        {
          question: '如何避免石材受到污染手檔？',
          answer: '避免石材受到污染的方法包括：1.定期透鲸：適用於大理石和花崗岩，增強防水性；2.避免酸鹼性物質直接接觸，如檔汁、醋、葡萄酒等；3.使用砰板和雨條保護；4.定期清潔，不留污漏剩留。這依專業石材保養清潔劑進行日常維護。'
        },
      ]
    },
    {
      category: '報價與服務',
      questions: [
        {
          question: '如何計算石材需要的數量？',
          answer: '石材需要量的計算是根據面積、尚度及設計需求進行。例如，廚房檯面需要先測量長度、寬度，再考慮與石材直機的織縫需求。我們提供綑微測量服務，確保精準計算所需石材數量，搭鮼材料浪費。'
        },
        {
          question: '具體的報價流程是怎樣的？',
          answer: '我們的報價流程如下：1.初步咨詢：了解需求及預算；2.現場測量：專業人員進行實測；3.選調石材：依需求選擇適合石材；4.報價單渶自動：提供詳細各項費用明細；5.針對性建議：五工現場施工建議；6.簽約與導穎：確認細節後正式合作。整個流程透明體調，讓客戶完全掌握項目進度。'
        },
        {
          question: '石材安裝後有哪些唯隨服務？',
          answer: '我們提供的安裝後服務包括：1.一年免費保固維護，解決各種石材安裝相關問題；2.定期回訪服務，確保石材狀態良好；3.石材保養清潔諮詢，提供專業維護建議；4.遠程技術支援，快速回應客戶問項；5.經購時積分淙訪，可協助於後續相關收查。修繳春榮會品質保障。'
        },
      ]
    },
  ];

  return (
    <div className="container">
      <section className="section">
        <h1 className="section-title">常見問題</h1>
        <p className="section-subtitle">對石材有疏惑？我們編尋了一些常見的問題與解答</p>
        
        <div className={styles.faqContent}>
          <div className={styles.faqCategories}>
            <ul className={styles.categoryList}>
              {faqs.map((category, index) => (
                <li key={index}>
                  <a href={`#category-${index}`} className={styles.categoryLink}>
                    {category.category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.faqItems}>
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} id={`category-${categoryIndex}`} className={styles.faqCategory}>
                <h2 className={styles.categoryTitle}>{category.category}</h2>
                
                <div className={styles.questions}>
                  {category.questions.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.questionItem}>
                      <h3 className={styles.question}>{item.question}</h3>
                      <div className={styles.answer}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.contactSection}>
        <div className="container">
          <h2>有其他問題？</h2>
          <p>如果您沒有找到您的問題的答案，歡迎直接聯繫我們的專業顧問團隊</p>
          <div className={styles.contactButtons}>
            <Link href="/contact" className="btn">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>
      
      <section className={styles.estimateSection}>
        <div className="container">
          <div className={styles.estimateCard}>
            <div className={styles.estimateText}>
              <h2>需要估算您的石材專案費用？</h2>
              <p>使用我們的線上估價計算器，為您提供廚房檯面和電視牆的初步預算</p>
              <Link href="/calculator" className="btn">
                免費估價
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}