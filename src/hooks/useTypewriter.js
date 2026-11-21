import { useState, useEffect } from 'react';
import { pick } from '../utils/common';

/**
 * 打字机轮播：逐字输入 → 停顿 → 回退 → 切换下一个词。
 * prefers-reduced-motion 时直接显示第一个词。
 * @param {Array<{zh:string,en:string}>} words 轮播词表（双语）
 * @param {'zh'|'en'} lang 当前语言
 * @returns {string} 当前显示文本
 */
export default function useTypewriter(words = [], lang = 'zh') {
  const strings = (words ?? []).map((word) => pick(word, lang)).filter(Boolean);
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  // 语言切换时重置到第一个词。
  useEffect(() => {
    setIndex(0);
    setDisplay('');
    setDeleting(false);
  }, [lang]);

  useEffect(() => {
    if (strings.length === 0) {
      setDisplay('');
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setDisplay(strings[0]);
      return undefined;
    }

    const current = strings[index % strings.length];
    let delay = deleting ? 45 : 95;

    if (!deleting && display === current) {
      delay = 1600;
      const timer = window.setTimeout(() => setDeleting(true), delay);
      return () => window.clearTimeout(timer);
    }
    if (deleting && display === '') {
      delay = 400;
      const timer = window.setTimeout(() => {
        setDeleting(false);
        setIndex((previous) => (previous + 1) % strings.length);
      }, delay);
      return () => window.clearTimeout(timer);
    }

    const next = deleting ? current.slice(0, display.length - 1) : current.slice(0, display.length + 1);
    const timer = window.setTimeout(() => setDisplay(next), delay);
    return () => window.clearTimeout(timer);
  }, [display, deleting, index, lang]);

  return display;
}
