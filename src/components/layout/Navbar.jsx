import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../../i18n/LanguageContext';
import { pick, t, smoothScrollTo, cn } from '../../utils/common';
import resume from '../../data/resume';

const SECTIONS = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

export default function Navbar({ activeId = 'home' }) {
  const { lang, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    smoothScrollTo(id);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-[var(--nav-height)] transition-all duration-300',
        scrolled ? 'bg-[#0A0E1A]/85 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent',
      )}
    >
      <nav className="container-x flex h-full items-center justify-between">
        <button type="button" onClick={() => go('home')} className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-cyan/40 bg-accent-cyan/5 font-mono text-sm font-bold text-accent-cyan shadow-[0_0_18px_rgba(0,229,255,0.18)] transition-transform group-hover:scale-105">
            GF
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-text-primary sm:block">
            {pick(resume.hero.name, lang)}
          </span>
        </button>

        {/* 桌面菜单 */}
        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className={cn(
                'relative rounded-lg px-3.5 py-2 text-sm transition-colors',
                activeId === id ? 'text-accent-cyan' : 'text-text-secondary hover:text-text-primary',
              )}
            >
              {t(`nav.${id}`, lang)}
              {activeId === id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent-cyan shadow-[0_0_10px_#00E5FF]" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Switch language"
            className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 text-xs font-semibold transition-colors hover:border-accent-cyan/40"
          >
            <span className={cn('rounded-full px-2.5 py-1 transition-all', lang === 'zh' ? 'bg-accent-cyan text-[#0A0E1A]' : 'text-text-secondary')}>中</span>
            <span className={cn('rounded-full px-2.5 py-1 transition-all', lang === 'en' ? 'bg-accent-cyan text-[#0A0E1A]' : 'text-text-secondary')}>EN</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-text-secondary md:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* 移动端菜单 */}
      {open && (
        <div className="glass border-b border-white/10 md:hidden">
          <div className="container-x flex flex-col py-3">
            {SECTIONS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => go(id)}
                className={cn(
                  'rounded-lg px-3 py-2.5 text-left text-sm',
                  activeId === id ? 'bg-accent-cyan/10 text-accent-cyan' : 'text-text-secondary',
                )}
              >
                {t(`nav.${id}`, lang)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
