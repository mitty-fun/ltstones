"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'question',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // 在實際應用中，這裡會將表單數據發送到服務器
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // 這裡只是模擬表單提交
  };
  
  return (
    <div className="container">
      <section className="section">
        <h1 className="section-title">聯絡我們</h1>
        <p className="section-subtitle">有任何石材相關需求，歡迎與我們聯繫</p>
        
        <div className={styles.contactContainer}>
          {/* 聯絡資訊 */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Image 
                  src="/vercel.svg" 
                  alt="地址" 
                  width={25} 
                  height={25}
                />
              </div>
              <h3>地址</h3>
              <p>台北市XX區XX路00號</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Image 
                  src="/vercel.svg" 
                  alt="電話" 
                  width={25} 
                  height={25}
                />
              </div>
              <h3>電話</h3>
              <p>02-XXXX-XXXX</p>
              <p>0912-XXX-XXX</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Image 
                  src="/vercel.svg" 
                  alt="Email" 
                  width={25} 
                  height={25}
                />
              </div>
              <h3>Email</h3>
              <p>info@leistone.com.tw</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Image 
                  src="/vercel.svg" 
                  alt="熱門時時間" 
                  width={25} 
                  height={25}
                />
              </div>
              <h3>熱門時時間</h3>
              <p>週一至週五: 9:00 - 18:00</p>
              <p>週六: 10:00 - 16:00</p>
              <p>週日及國定假日休息</p>
            </div>
          </div>
          
          {/* 聯絡表單 */}
          <div className={styles.contactForm}>
            {submitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✔</div>
                <h3>表單已成功提交！</h3>
                <p>感謝您的訪問，我們的專業顧問將盡快與您聯繫。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">姓名 *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">電話 *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="type">詢問類型</label>
                  <select 
                    id="type" 
                    name="type" 
                    value={formData.type} 
                    onChange={handleChange}
                  >
                    <option value="question">一般問題</option>
                    <option value="quote">報價詢問</option>
                    <option value="project">專案合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">訊息內容 *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                    rows="5"
                  />
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  送出訊息
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* 地圖區塊 */}
      <section className={styles.mapSection}>
        <div className={styles.mapWrapper}>
          {/* 在實際應用中，這裡會嵌入 Google 地圖 */}
          <div className={styles.mapPlaceholder}>
            <span>這裡將顯示地圖</span>
          </div>
        </div>
      </section>
      
      {/* 常見問題快速連結 */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2>有問題嗎？檢視我們的常見問題</h2>
          <p>了解更多關於石材的常見問題與解答，幫助您做出最適合的選擇</p>
          <a href="/faq" className="btn">查看常見問題</a>
        </div>
      </section>
    </div>
  );
}