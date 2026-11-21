import { useLanguage } from '../i18n/LanguageContext';
import { pick, t } from '../utils/common';
import { useCountUp } from '../hooks/useCountUp';
import resume from '../data/resume';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/common/Reveal';

function StatCard({ stat }) {
  const { lang } = useLanguage();
  const { ref, display } = useCountUp(stat.value);
  return (
    <div ref={ref} className="glass glow-card rounded-2xl px-5 py-6 text-center">
      <div className="font-mono text-3xl font-bold text-gradient sm:text-4xl">{display}</div>
      <div className="mt-2 text-xs text-text-secondary sm:text-sm">{pick(stat.label, lang)}</div>
    </div>
  );
}

export default function AboutSection() {
  const { lang } = useLanguage();
  return (
    <section id="about" className="section-pad relative">
      <div className="container-x">
        <SectionTitle titleKey="sections.aboutTitle" subtitleKey="sections.aboutSubtitle" />

        <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start">
          {/* 头像视觉块 */}
          <Reveal>
            <div className="relative mx-auto max-w-xs">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-accent-cyan/25 bg-gradient-to-br from-[#121A2E] to-[#0D1424] p-1 shadow-[0_0_50px_rgba(0,229,255,0.12)]">
                <div className="grid h-full w-full place-items-center rounded-[20px] bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.16),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(124,77,255,0.18),transparent_55%)]">
                  <span className="font-mono text-7xl font-extrabold text-gradient">GF</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-accent-purple/40 bg-[#121A2E] px-4 py-2 font-mono text-xs text-accent-purple shadow-xl">
                &lt;/&gt; Frontend
              </div>
            </div>
          </Reveal>

          {/* 简介 + 数字 + 教育 */}
          <div>
            <Reveal delay={0.08}>
              <div className="space-y-4 text-[15px] leading-8 text-text-secondary">
                {resume.about.paragraphs.map((p, i) => <p key={i}>{pick(p, lang)}</p>)}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                {resume.about.stats.map((stat, i) => <StatCard key={i} stat={stat} />)}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8">
                <h3 className="mb-4 font-mono text-xs tracking-[0.22em] text-accent-cyan uppercase">{t('common.education', lang)}</h3>
                <div className="space-y-3">
                  {resume.education.map((edu, i) => (
                    <div key={i} className="glass flex flex-wrap items-center justify-between gap-2 rounded-xl px-4 py-3">
                      <div>
                        <div className="font-semibold text-text-primary">{pick(edu.school, lang)}</div>
                        <div className="text-sm text-text-secondary">{pick(edu.major, lang)} · {pick(edu.degree, lang)}</div>
                      </div>
                      <span className="font-mono text-xs text-accent-purple">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
