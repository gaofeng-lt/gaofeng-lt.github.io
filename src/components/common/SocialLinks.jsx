import { FaGithub, FaLinkedinIn, FaEnvelope, FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import resume from '../../data/resume';

/** 社交图标组：空链接自动隐藏，避免死链 */
export default function SocialLinks({ contact = resume.contact, size = 18, className = '' }) {
  const items = [
    { key: 'github', href: contact.github ? `https://${contact.github.replace(/^https?:\/\//, '')}` : '', Icon: FaGithub, label: 'GitHub' },
    { key: 'linkedin', href: contact.linkedin ? `https://${contact.linkedin.replace(/^https?:\/\//, '')}` : '', Icon: FaLinkedinIn, label: 'LinkedIn' },
    { key: 'email', href: contact.email ? `mailto:${contact.email}` : '', Icon: FaEnvelope, label: 'Email' },
    { key: 'phone', href: contact.phone ? `tel:${contact.phone}` : '', Icon: FaPhoneAlt, label: 'Phone' },
    { key: 'website', href: contact.website ? `https://${contact.website.replace(/^https?:\/\//, '')}` : '', Icon: FaGlobe, label: 'Website' },
  ].filter((item) => item.href);

  if (!items.length) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ key, href, Icon, label }) => (
        <a
          key={key}
          href={href}
          aria-label={label}
          title={label}
          target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/60 hover:text-accent-cyan hover:shadow-[0_0_22px_rgba(0,229,255,0.28)]"
        >
          <Icon size={size} className="transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}
