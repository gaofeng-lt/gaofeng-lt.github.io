import { useLanguage } from '../../i18n/LanguageContext';
import { t } from '../../utils/common';
import Reveal from './Reveal';

/** section 统一标题：霓虹小标题 + 主标题 + 装饰线 */
export default function SectionTitle({ titleKey, subtitleKey, align = 'left' }) {
  const { lang } = useLanguage();
  const isCenter = align === 'center';

  return (
    <Reveal className={`mb-12 ${isCenter ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
        <span className="h-px w-10 bg-gradient-to-r from-accent-cyan to-transparent" />
        <span className="font-mono text-xs tracking-[0.28em] text-accent-cyan uppercase">
          {t(subtitleKey, lang)}
        </span>
        {isCenter && <span className="h-px w-10 bg-gradient-to-l from-accent-cyan to-transparent" />}
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-text-primary">
        {t(titleKey, lang)}
      </h2>
      <div className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-magenta ${isCenter ? 'mx-auto' : ''}`} />
    </Reveal>
  );
}
