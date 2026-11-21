import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { pick } from '../utils/common';
import resume from '../data/resume';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/common/Reveal';

function SkillBar({ item, delay }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setValue(item.level); return undefined; }
    let raf;
    let done = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !done) {
          done = true;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start - delay) / 1100, 1);
            if (p < 0) { raf = requestAnimationFrame(step); return; }
            setValue(Math.round(item.level * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(raf); };
  }, [item.level, delay]);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-text-primary">{item.name}</span>
        <span className="font-mono text-xs text-accent-cyan">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple shadow-[0_0_12px_rgba(0,229,255,0.5)] transition-[width] duration-75"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { lang } = useLanguage();
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-x">
        <SectionTitle titleKey="sections.skillsTitle" subtitleKey="sections.skillsSubtitle" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resume.skills.map((group, gi) => (
            <Reveal key={gi} delay={(gi % 3) * 0.08}>
              <div className="glass glow-card h-full rounded-2xl border border-accent-cyan/15 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/[0.06] font-mono text-xs text-accent-cyan">
                    {String(gi + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-bold text-text-primary">{pick(group.category, lang)}</h3>
                </div>
                <div className="space-y-4">
                  {group.items.map((item, ii) => (
                    typeof item.level === 'number'
                      ? <SkillBar key={ii} item={item} delay={ii * 90} />
                      : (
                        <span key={ii} className="inline-block rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-text-secondary">
                          {item.name}
                        </span>
                      )
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
