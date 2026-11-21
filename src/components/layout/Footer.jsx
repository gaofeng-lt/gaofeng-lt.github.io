import { FiArrowUp } from 'react-icons/fi';
import { useLanguage } from '../../i18n/LanguageContext';
import { t, smoothScrollTo } from '../../utils/common';

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0E1A]/60 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-secondary">{t('common.copyright', lang)}</p>
        <button
          type="button"
          onClick={() => smoothScrollTo('home')}
          className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-cyan"
        >
          {t('common.backToTop', lang)}
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 transition-colors hover:border-accent-cyan/50">
            <FiArrowUp size={16} />
          </span>
        </button>
      </div>
    </footer>
  );
}
