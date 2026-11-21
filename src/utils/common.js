import translations from '../i18n/translations';

/** 双语文案取值：Localized 取 value[lang]；string 原样返回 */
export function pick(value, lang) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && (lang in value)) return value[lang] ?? value.zh ?? value.en ?? '';
  return '';
}

/** 界面文案取值：从 translations[lang] 按点路径取，如 t('nav.home', lang) */
export function t(path, lang) {
  const keys = path.split('.');
  let node = translations[lang] ?? translations.zh;
  for (const key of keys) {
    if (node && typeof node === 'object' && key in node) node = node[key];
    else return '';
  }
  return typeof node === 'string' ? node : '';
}

/** 锚点平滑滚动（尊重 reduced-motion） */
export function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

/** 轻量类名合并 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
