import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

const STORAGE_KEY = 'resume-lang';
const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'zh' || saved === 'en') return saved;
  } catch { /* localStorage 不可用时忽略 */ }
  try {
    const nav = navigator.language?.toLowerCase() || '';
    return nav.startsWith('zh') ? 'zh' : 'en';
  } catch {
    return 'zh';
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);
  const scrollYRef = useRef(0);

  // 切换语言：记录滚动位置 → 更新 → 下一帧恢复，避免跳回顶部
  const setLanguage = useCallback((next) => {
    if (next !== 'zh' && next !== 'en') return;
    scrollYRef.current = window.scrollY;
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* 忽略 */ }
    setLangState(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(lang === 'zh' ? 'en' : 'zh');
  }, [lang, setLanguage]);

  useEffect(() => {
    // 语言变化后，等 DOM 更新完成再恢复滚动位置
    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: scrollYRef.current, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(id);
  }, [lang]);

  // 设置 <html lang> 属性
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLanguage, toggleLanguage }),
    [lang, setLanguage, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export default LanguageContext;
