import { motion, useReducedMotion } from 'framer-motion';
import { FiMapPin, FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import useTypewriter from '../hooks/useTypewriter';
import { pick, t, smoothScrollTo } from '../utils/common';
import resume from '../data/resume';
import SocialLinks from '../components/common/SocialLinks';

export default function HeroSection() {
  const { lang } = useLanguage();
  const reduce = useReducedMotion();
  const typed = useTypewriter(resume.hero.typewriterWords, lang);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-[var(--nav-height)]">
      <div className="container-x relative z-10 py-20">
        <motion.div variants={reduce ? undefined : container} initial={reduce ? undefined : 'hidden'} animate={reduce ? undefined : 'show'}>
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/[0.06] px-4 py-1.5 font-mono text-xs tracking-wider text-accent-cyan">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-cyan" />
              {pick(resume.hero.title, lang)}
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-text-primary">{pick(resume.hero.name, lang)}</span>
            <span className="text-gradient">.</span>
          </motion.h1>

          <motion.div variants={item} className="mt-5 flex min-h-[44px] items-center text-xl font-semibold text-accent-cyan sm:text-2xl">
            <span className="font-mono">{typed}</span>
            <span className="type-caret" style={{ height: '1.2em' }} />
          </motion.div>

          <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {pick(resume.hero.tagline, lang)}
          </motion.p>

          <motion.p variants={item} className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary/80">
            {pick(resume.hero.intro, lang)}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex items-center gap-2 text-sm text-text-secondary">
            <FiMapPin className="text-accent-purple" />
            {pick(resume.hero.location, lang)}
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => smoothScrollTo('about')}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-text-secondary transition-colors hover:text-accent-cyan"
      >
        <span className="text-xs tracking-widest">{t('common.scrollDown', lang)}</span>
        <span className="scroll-bob"><FiChevronDown size={20} /></span>
      </button>
    </section>
  );
}
