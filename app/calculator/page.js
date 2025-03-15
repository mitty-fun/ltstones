"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function CalculatorPage() {
  const [formData, setFormData] = useState({
    applications: [],  // 多選
    surface: '亮面',   // 單選
    stoneType: '',     // 單選，從型錄中選擇
    length: '',        // 長度
    width: '',         // 寬度
    name: '',          // 姓名
    phone: ''          // 電話
  });
  
  const [stoneOptions, setStoneOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  
  // 應用方面選項
  const applicationOptions = [
    "廚房檯面", "電視牆", "中島", "地板", "衛浴", "其他"
  ];
  
  // 石材表面選項
  const surfaceOptions = ["亮面", "霧面"];
  
  // 模擬獲取石材型錄數據
  useEffect(() => {
    // 在實際應用中，這裡可能是從API獲取數據
    // 這裡我們模擬從型錄頁面獲取的石材選項
    const mockStoneOptions = [
      "行雲流水-Bianco Lasa",
      "細紋雕刻白-Crystallo",
      "雕刻白-Kalos Bianco",
      "銀彩石英石-Supergrey",
      "黃金雕刻白-Marvel Gold",
      "冰白石-Basic Ice",
      "香草天空-Colossal Cream",
      "珍珠石英石-Travertino Pearl",
      "雪山灰-Kaledonia",
      "雷霆-Thundra",
      "森林之花-Fior di Bosco",
      "坦柏拉-Tambora",
      "聖羅蘭黑金-St.Laurent",
      "協奏曲-Concerto",
      "工業鐵鏽-Rust Iron",
      "鎏金-Essential Gold",
      "香榭羽絨-Patagonia"
    ];
    
    setStoneOptions(mockStoneOptions);
  }, []);
  
  // 處理表單欄位變更
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      // 處理多選應用方面
      if (checked) {
        setFormData({
          ...formData,
          applications: [...formData.applications, value]
        });
      } else {
        setFormData({
          ...formData,
          applications: formData.applications.filter(app => app !== value)
        });
      }
    } else {
      // 處理其他一般欄位
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  // 表單提交處理
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 在實際應用中，這裡會將表單數據發送到服務器
    console.log('Form submitted:', formData);
    
    // 設置提交成功狀態
    setSubmitted(true);
  };
  
  return (
    <div className="container">
      <section className="section">
        <h1 className="section-title">線上估價</h1>
        <p className="section-subtitle">填寫表單，獲取專業石材應用估價與建議</p>
        
        <div className={styles.estimateFormContainer}>
          {submitted ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h2>您的估價請求已成功提交！</h2>
              <p>感謝您的詢問，我們的專業顧問將盡快與您聯繫，提供詳細的石材應用估價與建議。</p>
              <Link href="/" className="btn">
                返回首頁
              </Link>
            </div>
          ) : (
            <form className={styles.estimateForm} onSubmit={handleSubmit}>
              {/* 應用方面 (多選) */}
              <div className={styles.formGroup}>
                <label>應用方面 (可多選)</label>
                <div className={styles.checkboxGroup}>
                  {applicationOptions.map((option) => (
                    <div key={option} className={styles.checkboxItem}>
                      <input
                        type="checkbox"
                        id={`app-${option}`}
                        name="applications"
                        value={option}
                        checked={formData.applications.includes(option)}
                        onChange={handleChange}
                      />
                      <label htmlFor={`app-${option}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 石材表面 (單選) */}
              <div className={styles.formGroup}>
                <label>石材表面</label>
                <div className={styles.radioGroup}>
                  {surfaceOptions.map((option) => (
                    <div key={option} className={styles.radioItem}>
                      <input
                        type="radio"
                        id={`surface-${option}`}
                        name="surface"
                        value={option}
                        checked={formData.surface === option}
                        onChange={handleChange}
                      />
                      <label htmlFor={`surface-${option}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 詢價花色 (單選，從型錄中選擇) */}
              <div className={styles.formGroup}>
                <label htmlFor="stoneType">詢價花色</label>
                <select
                  id="stoneType"
                  name="stoneType"
                  value={formData.stoneType}
                  onChange={handleChange}
                  required
                >
                  <option value="">請選擇石材花色</option>
                  {stoneOptions.map((stone) => (
                    <option key={stone} value={stone}>
                      {stone}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* 尺寸欄位 */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="length">長度 (cm)</label>
                  <input
                    type="number"
                    id="length"
                    name="length"
                    value={formData.length}
                    onChange={handleChange}
                    placeholder="輸入長度"
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="width">寬度 (cm)</label>
                  <input
                    type="number"
                    id="width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    placeholder="輸入寬度"
                    required
                  />
                </div>
              </div>
              
              {/* 聯絡資訊 */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">姓名</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="您的姓名"
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">電話</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="您的聯絡電話"
                    required
                  />
                </div>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                提交估價請求
              </button>
            </form>
          )}
        </div>
        
        <div className={styles.disclaimer}>
          <p>注意: 此估價請求表單將由專業顧問進行評估，我們會在收到您的請求後盡快聯繫您提供詳細的報價與建議。</p>
        </div>
      </section>
      
      {/* 服務流程區塊 */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <h2 className="section-title">估價服務流程</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>提交估價請求</h3>
              <p>填寫線上表單，提供您的需求與基本資訊。</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>專業評估</h3>
              <p>我們的石材專家會評估您的需求並準備詳細報價。</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>報價與建議</h3>
              <p>顧問將與您聯繫，提供報價與專業應用建議。</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>現場丈量</h3>
              <p>確認合作後，專業人員進行現場精確丈量。</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA區塊 */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>需要詳細評估與專業建議？</h2>
          <p>除了線上估價外，我們也提供現場諮詢服務，為您量身打造完美的石材應用方案。</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn">
              直接聯繫顧問
            </Link>
            <Link href="/products" className="btn btn-secondary">
              瀏覽石材型錄
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}