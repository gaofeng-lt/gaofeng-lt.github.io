import { FiMail, FiPhone } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { t } from '../utils/common';
import resume from '../data/resume';
import SectionTitle from '../components/common/SectionTitle';
import Reveal from '../components/common/Reveal';
import SocialLinks from '../components/common/SocialLinks';

export default function ContactSection() {
  const { lang } = useLanguage();
  const { email, phone } = resume.contact;

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-x">
        <SectionTitle titleKey="sections.contactTitle" subtitleKey="sections.contactSubtitle" align="center" />
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-text-secondary sm:text-xl">{t('sections.contactLead', lang)}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {email && (
              <a
                href={`mailto:${email}`}
                className="breathe inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple px-7 py-3 font-semibold text-[#0A0E1A] shadow-[0_0_30px_rgba(0,229,255,0.25)] transition-transform hover:scale-105"
              >
                <FiMail size={18} />
                {t('common.emailMe', lang)}
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-text-primary transition-colors hover:border-accent-cyan/50"
              >
                <FiPhone size={17} />
                {t('common.callMe', lang)}
              </a>
            )}
          </div>

          <p className="mt-6 font-mono text-sm text-accent-cyan">{email}</p>
          <SocialLinks className="mt-6 justify-center" size={20} />
        </Reveal>
      </div>
    </section>
  );
}
