import { FiArrowUpRight } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { pick, t } from '../utils/common';
import resume from '../data/resume';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/common/Reveal';

export default function ProjectsSection() {
  const { lang } = useLanguage();
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-x">
        <SectionTitle titleKey="sections.projectsTitle" subtitleKey="sections.projectsSubtitle" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resume.projects.map((project, i) => (
            <Reveal key={i} delay={(i % 3) * 0.09}>
              <article className="glass glow-card flex h-full flex-col rounded-2xl border border-white/[0.06] p-6">
                <div className="mb-4 flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent-purple/30 bg-accent-purple/[0.07] font-mono text-sm font-bold text-accent-purple">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t('common.viewProject', lang)}
                      className="grid h-8 w-8 place-items-center rounded-lg text-text-secondary transition-colors hover:text-accent-cyan"
                    >
                      <FiArrowUpRight size={18} />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-bold text-text-primary">{project.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{pick(project.desc, lang)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((s, si) => (
                    <span key={si} className="rounded-md border border-accent-cyan/20 bg-accent-cyan/[0.05] px-2 py-1 font-mono text-[11px] text-accent-cyan">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
