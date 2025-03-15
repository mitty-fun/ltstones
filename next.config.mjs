/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 設置為靜態構建輸出
  images: {
    unoptimized: true, // 靜態構建需要未經優化的圖像
  },
  // 其他配置...
};

export default nextConfig;
