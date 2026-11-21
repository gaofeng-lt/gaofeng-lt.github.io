/**
 * ============================================================
 *  唯一数据源 · 用户只需修改本文件即可个性化整站
 *  所有可替换内容中英成对：{ zh, en }
 *  ============================================================
 *  TODO 清单（待高峰补充）：
 *   1. experiences[0] 腾讯音乐：职位名称、工作职责/项目/技能
 *   2. contact.github / linkedin / website：真实链接（未提供，留空则隐藏图标）
 *   3. avatar：真实照片（当前为抽象 SVG）
 *   4. projects[].link：真实项目链接（内部项目可留空，按钮自动隐藏）
 *   5. about.stats / skills[].level 数值可按实际微调
 *   6. ShopeeFood 截止月份（原文"至今"与 2026 入职腾讯音乐重叠）
 * ============================================================
 */
export const resume = {
  hero: {
    name: { zh: '高峰', en: 'Gao Feng' },
    title: { zh: '前端开发工程师', en: 'Frontend Engineer' },
    tagline: {
      zh: '专注前端工程与跨端业务，用标准化与性能体验驱动产品',
      en: 'Focused on frontend engineering and cross-platform products, driven by standardization and performance',
    },
    intro: {
      zh: '多年一线前端开发经验，深耕 React + TypeScript 与跨端国际化，具备从 0 到 1 搭建业务页面与大型系统重构能力，注重编码标准化与性能优化。',
      en: 'Years of hands-on frontend experience with React + TypeScript and cross-platform i18n; experienced in building pages from scratch and refactoring large systems, with a focus on coding standards and performance.',
    },
    location: { zh: '中国', en: 'China' },
    typewriterWords: [
      { zh: 'React + TypeScript', en: 'React + TypeScript' },
      { zh: '前端工程化', en: 'Frontend Engineering' },
      { zh: 'Node 中间层', en: 'Node Middleware' },
      { zh: '跨端与国际化', en: 'Cross-platform & i18n' },
    ],
  },
  avatar: '/avatar.svg',

  about: {
    paragraphs: [
      {
        zh: '注重前端开发标准化，编码习惯良好，有兜底思维；熟悉 JavaScript 语言，对 V8 垃圾回收、JS 面向对象与运行机制有一定了解。',
        en: 'Values frontend standardization, solid coding habits and defensive thinking; familiar with JavaScript internals including V8 garbage collection, OOP and runtime mechanisms.',
      },
      {
        zh: '具备 Node 中间层与后端 API 开发能力，熟悉 SSR、SEO；熟悉 React + TypeScript，能应用 Vue 开发，熟悉 webpack、git；并学习机器学习技术，能对实际问题建模与调优。',
        en: 'Capable of Node middleware and backend API development, familiar with SSR/SEO; proficient in React + TypeScript and Vue, comfortable with webpack and git; also applies machine learning to model and tune real-world problems.',
      },
    ],
    stats: [
      { value: '4', label: { zh: '覆盖东南亚国家', en: 'Southeast Asian Markets' } },
      { value: '20万', label: { zh: '拼好饭日均单量', en: 'Daily Group-buy Orders' } },
      { value: '近亿', label: { zh: '需求日曝光量', en: 'Daily Impressions' } },
    ],
  },

  experiences: [
    // ===== ① 当前职位：预留占位，易填充 =====
    // TODO: 补充腾讯音乐的技能与工作经验，替换下方 role / highlights
    {
      company: { zh: '腾讯音乐', en: 'Tencent Music' },
      role: { zh: '（当前职位）内容待补充', en: '(Current Role) To be filled' },
      period: { zh: '2026 – 至今', en: '2026 – Present' },
      emphasis: 'placeholder',
      highlights: [
        {
          zh: '内容待补充：工作职责、项目与技能（在 resume.js 中替换本条）',
          en: 'To be filled: responsibilities, projects and skills (replace this entry in resume.js)',
        },
      ],
    },
    // ===== ② 重点经历：ShopeeFood =====
    {
      company: { zh: 'ShopeeFood', en: 'ShopeeFood' },
      role: { zh: '前端开发工程师', en: 'Frontend Engineer' },
      period: { zh: '2024.08 – 2026（截至月份待确认）', en: '2024.08 – 2026 (end month TBD)' },
      emphasis: 'primary',
      highlights: [
        {
          zh: '参与官网、buyer app、admin 后台全流程开发，具备跨端、国际化经验；业务覆盖东南亚四国，千万级 DAU',
          en: 'Full-lifecycle development across official site, buyer app and admin console; cross-platform and i18n experience serving 10M+ DAU across four Southeast Asian markets',
        },
        {
          zh: '负责“拼好饭”业务，日均单量 20 万，从 0 到 1 设计开发流量域页面',
          en: 'Owned the group-buy meal business with 200K daily orders; designed and built traffic-domain pages from scratch',
        },
        {
          zh: '负责 Rate、Address、Voucher、Banner 等业务，所开发需求日曝光量近亿',
          en: 'Delivered Rate, Address, Voucher and Banner features with nearly 100M daily impressions',
        },
        {
          zh: '具备首页 FPS、CPU 峰值、减包等性能优化经验',
          en: 'Optimized homepage FPS, CPU peaks and bundle size',
        },
        {
          zh: '工作覆盖需求性、修复性、配合性开发与重构，有 owner 意识',
          en: 'Broad scope across feature, fix, collaboration and refactoring work, with strong ownership',
        },
      ],
    },
    // ===== ② 重点经历：Shopee（商业化准星）=====
    {
      company: { zh: 'Shopee', en: 'Shopee' },
      role: { zh: '前端开发工程师', en: 'Frontend Engineer' },
      period: { zh: '2023.09 – 2024.02', en: '2023.09 – 2024.02' },
      emphasis: 'primary',
      highlights: [
        {
          zh: '负责商业化准星系列四套代码的维护与开发，解决微前端跨域等技术问题',
          en: 'Maintained and developed four codebases of the commercialization suite; resolved micro-frontend cross-origin issues',
        },
        {
          zh: '负责车载屏自营系统开发，交付完整需求 15+，可独立负责单一模块',
          en: 'Developed the in-vehicle self-operated system; delivered 15+ full requirements and independently owned a module',
        },
        {
          zh: '实现老平台、老功能迁移；负责营销后台系统及优惠管理模块需求开发',
          en: 'Migrated legacy platforms/features; developed the marketing admin system and owned the coupon management module',
        },
        {
          zh: '封装业务通用组件，优化代码质量，累计消除冗余代码 1 万+ 行',
          en: 'Built reusable business components, improving code quality and removing 10K+ lines of redundant code',
        },
      ],
    },
    // ===== ③ 实习：合并 1 条，弱化 =====
    {
      company: { zh: '其他实习经历', en: 'Other Internships' },
      role: { zh: '实习 · 前端开发', en: 'Frontend Intern' },
      period: { zh: '2023.05 – 2023.08', en: '2023.05 – 2023.08' },
      emphasis: 'secondary',
      highlights: [
        { zh: '滴滴 · 网约车车载屏 web 开发（React + AntDesign）', en: 'DiDi · In-vehicle web development (React + AntDesign)' },
        { zh: '同程旅行 · 旅游度假营销平台（Vue + ElementUI + JSX）', en: 'Tongcheng Travel · Vacation marketing platform (Vue + ElementUI + JSX)' },
        { zh: '数新官网 CMS · 官网改版/SEO/Nuxt + React + Koa（从 0 到 1）', en: 'Shuxin Website CMS · revamp/SEO/Nuxt + React + Koa (from scratch)' },
      ],
    },
  ],

  projects: [
    {
      name: 'ShopeeFood · 拼好饭流量域',
      desc: { zh: '从 0 到 1 设计开发流量域页面，支撑日均 20 万单的拼好饭业务', en: 'Built traffic-domain pages from scratch for the group-buy meal business with 200K daily orders' },
      stack: ['React', 'TypeScript', '国际化'],
      link: '', // TODO: 替换为真实链接（内部项目可留空，按钮自动隐藏）
    },
    {
      name: '商业化准星系统',
      desc: { zh: '四套代码维护与开发，解决微前端跨域问题，完成老平台迁移', en: 'Maintained four codebases, resolved micro-frontend cross-origin issues and migrated legacy platforms' },
      stack: ['React', '微前端', '组件封装'],
      link: '', // TODO: 替换为真实链接
    },
    {
      name: 'ShopeeFood 跨端国际化',
      desc: { zh: '覆盖官网、buyer app、admin 后台，服务东南亚四国千万级 DAU', en: 'Cross-platform delivery across web/app/admin serving 10M+ DAU in four Southeast Asian markets' },
      stack: ['React', 'TypeScript', 'i18n'],
      link: '', // TODO: 替换为真实链接
    },
    {
      name: '营销后台 · 优惠管理',
      desc: { zh: '负责营销后台优惠管理模块，封装通用组件，消除冗余代码 1 万+ 行', en: 'Owned the coupon management module; built reusable components and removed 10K+ redundant code lines' },
      stack: ['React', 'TypeScript', '工程化'],
      link: '', // TODO: 替换为真实链接
    },
  ],

  // 技能：视觉重点（用户指定技能靠前 + 高权重）
  skills: [
    { category: { zh: '前端核心', en: 'Frontend Core' }, items: [
      { name: 'React + TypeScript', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'Vue', level: 80 },
    ]},
    { category: { zh: 'JavaScript 深入', en: 'JavaScript Internals' }, items: [
      { name: 'V8 GC', level: 85 },
      { name: 'OOP 面向对象', level: 85 },
      { name: 'Runtime 运行机制', level: 85 },
    ]},
    { category: { zh: 'Node 与服务端', en: 'Node & Server' }, items: [
      { name: 'Node 中间层', level: 82 },
      { name: '后端 API', level: 80 },
      { name: 'SSR / SEO', level: 78 },
    ]},
    { category: { zh: '工程化与协作', en: 'Tooling & Workflow' }, items: [
      { name: 'webpack', level: 78 },
      { name: 'git', level: 85 },
      { name: '前端标准化', level: 88 },
    ]},
    { category: { zh: '机器学习', en: 'Machine Learning' }, items: [
      { name: '建模 Modeling', level: 72 },
      { name: '模型调优 Tuning', level: 70 },
    ]},
  ],

  education: [
    { school: { zh: '江苏师范大学', en: 'Jiangsu Normal University' }, major: { zh: '管理科学与工程', en: 'Management Science and Engineering' }, degree: { zh: '硕士', en: 'Master' }, period: '2021.09 – 2024.06' },
    { school: { zh: '江苏科技大学', en: 'Jiangsu University of Science and Technology' }, major: { zh: '计算机科学与技术', en: 'Computer Science and Technology' }, degree: { zh: '本科', en: 'Bachelor' }, period: '2017.09 – 2021.06' },
  ],

  contact: {
    email: '1037086827@qq.com',
    phone: '18362899262',
    github: '', // TODO: 用户补充真实 GitHub 链接（简历未提供，勿编造）
    linkedin: '', // TODO: 用户补充真实 LinkedIn 链接（简历未提供，勿编造）
    website: '', // TODO: 用户补充个人站点/博客（可选）
  },
};

export default resume;
