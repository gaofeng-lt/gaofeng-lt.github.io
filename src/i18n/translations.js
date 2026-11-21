/**
 * 界面固定文案语言包 —— 与用户简历内容无关。
 * 组件统一通过 t('path', lang) 取值；新增文案需同时补 zh / en。
 */
export const translations = {
  zh: {
    nav: {
      home: '首页', about: '关于我', experience: '工作经历',
      projects: '项目作品', skills: '技能', contact: '联系方式',
    },
    sections: {
      aboutTitle: '关于我', aboutSubtitle: 'WHO I AM',
      experienceTitle: '工作经历', experienceSubtitle: 'WHERE I HAVE BEEN',
      projectsTitle: '项目作品', projectsSubtitle: 'THINGS I HAVE BUILT',
      skillsTitle: '技能栈', skillsSubtitle: 'WHAT I WORK WITH',
      contactTitle: '让我们聊聊', contactSubtitle: 'LET US CONNECT', contactLead: '有想法或机会？随时联系我',
    },
    common: {
      scrollDown: '向下滚动', viewProject: '查看项目', emailMe: '给我发邮件',
      callMe: '拨打电话', backToTop: '返回顶部', copyright: '© 2026 高峰 · 保留所有权利',
      present: '至今', location: '所在地', currently: '当前', toFill: '待补充',
      education: '教育背景', yearsExp: '年经验', highlights: '工作要点',
    },
  },
  en: {
    nav: {
      home: 'Home', about: 'About', experience: 'Experience',
      projects: 'Projects', skills: 'Skills', contact: 'Contact',
    },
    sections: {
      aboutTitle: 'About Me', aboutSubtitle: 'WHO I AM',
      experienceTitle: 'Experience', experienceSubtitle: 'WHERE I HAVE BEEN',
      projectsTitle: 'Projects', projectsSubtitle: 'THINGS I HAVE BUILT',
      skillsTitle: 'Skills', skillsSubtitle: 'WHAT I WORK WITH',
      contactTitle: "Let's Talk", contactSubtitle: 'LET US CONNECT', contactLead: 'Have an idea or opportunity? Reach out anytime',
    },
    common: {
      scrollDown: 'Scroll Down', viewProject: 'View Project', emailMe: 'Email Me',
      callMe: 'Call Me', backToTop: 'Back to Top', copyright: '© 2026 Gao Feng · All rights reserved',
      present: 'Present', location: 'Location', currently: 'CURRENT', toFill: 'TO FILL',
      education: 'Education', yearsExp: 'yrs exp', highlights: 'Highlights',
    },
  },
};

export default translations;
