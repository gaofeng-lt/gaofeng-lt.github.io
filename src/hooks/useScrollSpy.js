import { useState, useEffect } from 'react';

/**
 * 滚动高亮：IntersectionObserver 观察 section id，返回可见度最高的 id。
 * 无 IntersectionObserver 时回退为 scroll 监听，默认第一项。
 * @param {string[]} ids 需要观察的 section id 列表
 * @returns {string} 当前激活的 section id
 */
export default function useScrollSpy(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    if (ids.length === 0) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      const handleScroll = () => {
        let best = ids[0];
        let bestTop = Number.POSITIVE_INFINITY;
        ids.forEach((id) => {
          const element = document.getElementById(id);
          if (!element) return;
          const top = Math.abs(element.getBoundingClientRect().top - 100);
          if (top < bestTop) {
            bestTop = top;
            best = id;
          }
        });
        setActiveId(best);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) ratios.set(entry.target.id, entry.intersectionRatio);
          else ratios.set(entry.target.id, 0);
        });
        let bestId = ids[0];
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestRatio > 0) setActiveId(bestId);
      },
      { rootMargin: '-20% 0px -45% 0px', threshold: [0, 0.15, 0.35, 0.6, 0.9] },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
