/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // 关闭 preflight，避免与 MUI CssBaseline 双重 reset 冲突
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        bg: { base: '#0A0E1A', deep: '#0D1424', card: '#121A2E' },
        glass: 'rgba(255,255,255,0.04)',
        accent: { cyan: '#00E5FF', purple: '#7C4DFF', magenta: '#FF2E97' },
        text: { primary: '#E6EDF7', secondary: '#8B9AB3' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    },
  },
  plugins: [],
};
