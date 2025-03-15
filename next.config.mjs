/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 設置為靜態構建輸出
  basePath: process.env.NODE_ENV === 'production' ? '/ltstones' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ltstones/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true, // 靜態構建需要未經優化的圖像
  },
  // 其他配置...
};

export default nextConfig;
