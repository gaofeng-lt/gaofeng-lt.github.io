import { useLanguage } from '../i18n/LanguageContext';
import { pick, t, cn } from '../utils/common';
import resume from '../data/resume';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/common/Reveal';

function ExperienceItem({ exp, index }) {
  const { lang } = useLanguage();
  const isPlaceholder = exp.emphasis === 'placeholder';
  const isSecondary = exp.emphasis === 'secondary';
  const isPrimary = exp.emphasis === 'primary';

  return (
    <Reveal delay={index * 0.06} className="relative pl-10 sm:pl-14">
      {/* 时间轴节点 */}
      <span
        className={cn(
          'absolute left-[11px] top-2 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full sm:left-[19px]',
          isPlaceholder ? 'bg-accent-magenta shadow-[0_0_16px_rgba(255,46,151,0.7)]'
            : isPrimary ? 'bg-accent-cyan shadow-[0_0_16px_rgba(0,229,255,0.6)]'
              : 'bg-text-secondary/50',
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#0A0E1A]" />
      </span>

      <div
        className={cn(
          'rounded-2xl p-5 sm:p-6 transition-all duration-300',
          isPlaceholder
            ? 'placeholder-pulse glass border border-dashed'
            : isPrimary
              ? 'glass glow-card border border-accent-cyan/20'
              : 'glass border border-white/[0.06] opacity-80 hover:opacity-100',
        )}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className={cn('text-lg font-bold sm:text-xl', isPlaceholder ? 'text-accent-magenta' : 'text-text-primary')}>
                {pick(exp.company, lang)}
              </h3>
              {isPlaceholder && (
                <span className="rounded-full border border-accent-magenta/40 bg-accent-magenta/10 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-accent-magenta">
                  {t('common.currently', lang)} · {t('common.toFill', lang)}
                </span>
              )}
              {isPrimary && (
                <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/5 px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent-cyan">
                  CORE
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-accent-purple">{pick(exp.role, lang)}</p>
          </div>
          <span className="shrink-0 rounded-lg bg-white/[0.04] px-3 py-1 font-mono text-xs text-text-secondary">
            {pick(exp.period, lang)}
          </span>
        </div>

        <ul className="mt-4 space-y-2">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-text-secondary">
              <span className={cn('mt-2 h-1.5 w-1.5 shrink-0 rounded-full', isPlaceholder ? 'bg-accent-magenta' : 'bg-accent-cyan/70')} />
              <span>{pick(h, lang)}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-x">
        <SectionTitle titleKey="sections.experienceTitle" subtitleKey="sections.experienceSubtitle" />
        <div className="relative">
          {/* 时间轴主线 */}
          <div className="absolute bottom-4 left-[11px] top-3 w-px bg-gradient-to-b from-accent-magenta via-accent-cyan to-transparent sm:left-[19px]" />
          <div className="space-y-6">
            {resume.experiences.map((exp, i) => <ExperienceItem key={i} exp={exp} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
