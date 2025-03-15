import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { promises as fs } from 'fs';
import path from 'path';

// 獲取所有石材商品
async function getStoneProducts() {
  const itemsDirectory = path.join(process.cwd(), 'public/items');
  const filenames = await fs.readdir(itemsDirectory);
  
  const stoneProducts = filenames.map((filename) => {
    // 從檔名解析商品資訊 (例如：A01-行雲流水-Bianco Lasa.png)
    const nameParts = filename.replace('.png', '').split('-');
    const code = nameParts[0];
    const chineseName = nameParts[1];
    const englishName = nameParts[2] || '';
    
    return {
      id: code,
      code,
      chineseName,
      englishName,
      imagePath: `/items/${filename}`,
      size: '320cm × 160cm', // 所有石材的標準尺寸
      filename
    };
  });
  
  // 依據分類排序
  return stoneProducts.sort((a, b) => a.code.localeCompare(b.code));
}

export default async function ProductsPage() {
  const products = await getStoneProducts();
  
  // 將產品按系列分組 (A系列、B系列、C系列等)
  const groupedProducts = products.reduce((groups, product) => {
    const seriesKey = product.code.charAt(0);
    if (!groups[seriesKey]) {
      groups[seriesKey] = [];
    }
    groups[seriesKey].push(product);
    return groups;
  }, {});
  
  return (
    <div className="container">
      <section className="section">
        <h1 className="section-title">商品型錄</h1>
        <p className="section-subtitle">精選優質石材，提供多樣化選擇滿足您的需求</p>
        
        {/* 分類導航 */}
        <div className={styles.categoryNav}>
          {Object.keys(groupedProducts).map(series => (
            <a key={series} href={`#series-${series}`} className={styles.categoryLink}>
              {series}系列
            </a>
          ))}
        </div>
        
        {/* 依分類顯示產品 */}
        {Object.entries(groupedProducts).map(([series, seriesProducts]) => (
          <div key={series} id={`series-${series}`} className={styles.seriesSection}>
            <h2 className={styles.seriesTitle}>{series}系列</h2>
            <div className={styles.productsGrid}>
              {seriesProducts.map((product, index) => (
                <div key={index} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <Image 
                      src={product.imagePath} 
                      alt={product.chineseName} 
                      width={350} 
                      height={250} 
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.productInfo}>
                    <h3>{product.chineseName}</h3>
                    <p className={styles.productCode}>{product.code} {product.englishName}</p>
                    <p className={styles.productSize}>尺寸: {product.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      
      {/* 諮詢區域 */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactWrapper}>
            <div className={styles.contactText}>
              <h2>尋找適合的石材？</h2>
              <p>我們的專業顧問可以協助您選擇最適合的石材和加工方式，提供個人化建議與免費估價。</p>
              <Link href="/contact" className="btn">
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}