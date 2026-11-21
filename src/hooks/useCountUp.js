import { useEffect, useRef, useState } from 'react';

/**
 * 数字增长：进入视口后从 0 计数到目标值。
 * 目标值可含非数字字符（如 '20万'、'近亿'），仅对数字部分计数，保留前后缀。
 * 无 IntersectionObserver 或 reduced-motion 时直接显示终值。
 */
export function useCountUp(target, duration = 1400) {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const str = String(target ?? '');
    const match = str.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/);
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !match || typeof IntersectionObserver === 'undefined') {
      setDisplay(str);
      return undefined;
    }

    const prefix = match[1];
    const num = parseFloat(match[2]);
    const suffix = match[3];
    const isInt = !match[2].includes('.');
    let hasRun = false;
    let raf;

    const run = () => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        const current = num * eased;
        setDisplay(`${prefix}${isInt ? Math.round(current) : current.toFixed(1)}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(step);
        else setDisplay(str);
      };
      raf = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            hasRun = true;
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(raf); };
  }, [target, duration]);

  return { ref, display };
}

export default useCountUp;
