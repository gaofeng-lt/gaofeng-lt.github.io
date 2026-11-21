# 个人简历官网 PRD（v2 · 内容方案更新）

## 0. 文档信息与本次变更

| 项 | 内容 |
|---|---|
| 文档版本 | **v2.0**（覆盖 v1.0） |
| 产品经理 | 许清楚（Xu） |
| 上游输入 | 真实简历 `resume_raw.txt` + 团队负责人内容调整要求 |
| 变更性质 | **仅内容方案变更**（数据填充、内容权重、预留板块），技术架构/模块结构/配色/动效维持不变 |
| 项目名 / 技术栈 | `resume_site` / Vite + React + MUI + Tailwind CSS + Framer Motion |

**本次变更摘要（结论优先）**

| # | 变更点 | 说明 |
|---|---|---|
| C1 | 全部示例数据（张亦弛）替换为**高峰真实简历数据** | 中英成对填入 `src/data/resume.js` |
| C2 | 工作经历内容权重重分配 | **Shopee 两段重点做实**；**实习合并 1 条弱化**；**腾讯音乐预留占位置顶** |
| C3 | 技能模块升级为视觉重点 | 按用户指定技能重分组，进度条体现重点 |
| C4 | 联系方式改真实值 | 邮箱 `1037086827@qq.com`、电话 `18362899262`；GitHub/LinkedIn/Website 用占位不编造 |
| C5 | 教育背景更新为真实院校 | 江苏师范大学（硕）、江苏科技大学（本） |
| C6 | 新增字段清单 | 列明腾讯音乐技能/经验、GitHub/LinkedIn、头像等需用户补充项 |

**明确保持不变（不推翻架构师设计）**：6 大单页模块结构与顺序、深色科技感配色 token、全部动效方案（粒子/打字机/滚动进入/进度条/滚动高亮）、Context + i18n 数据流、组件分层、5 个实现任务（T01–T05）的划分。本次仅对 `src/data/resume.js` 的数据内容与 `Experience`/`Contact` 接口做**向后兼容的可选字段增量**（见 §7.1，已同步架构师）。

---

## 1. 产品目标（3 条，维持不变）

| # | 目标 | 衡量标准 |
|---|---|---|
| G1 | **建立专业在线形象**：以网站结构化呈现高峰的工作经历、项目与技能，替代传统简历 | 6 大模块内容完整呈现，链接可一键分享 |
| G2 | **打造"酷炫"差异化体验**：深色科技感 + 流畅动效，传递前端工程与业务落地能力 | 首屏有粒子/光效，滚动有过渡动画，视觉风格统一 |
| G3 | **零成本快速上线且易维护**：免费部署拿到可访问链接，内容集中管理、一处替换即可个性化 | 有可访问 URL；所有文案/数据来自单一数据文件，替换无需改结构 |

---

## 2. 目标用户与使用场景（维持不变）

| 维度 | 说明 |
|---|---|
| 核心访问者 | 招聘方 HR、技术面试官、潜在合作方/客户、技术同行 |
| 内容维护者 | 高峰本人（在 `resume.js` 补充真实信息、更新履历） |
| 场景 1 | 面试/投递前，招聘方打开链接快速了解候选人履历 |
| 场景 2 | 社交名片、简历署名中分享官网链接 |
| 场景 3 | 技术会议/线下交流，通过链接或二维码展示 |
| 场景 4 | 高峰补充腾讯音乐内容后重新部署，链接保持有效 |

---

## 3. 用户故事（维持不变）

1. 作为**招聘方 HR**，我希望打开一个链接即可快速浏览候选人的经历、项目与技能，以便在面试前快速评估匹配度。
2. 作为**技术面试官**，我希望重点看到 Shopee 项目的业务规模与技术难点，以便判断候选人的工程深度。
3. 作为**英文读者/海外招聘方**，我希望一键切换到英文，以便无障碍阅读全部内容。
4. 作为**高峰本人**，我希望在单一数据文件里补充腾讯音乐内容、替换占位链接即可更新网站，以便无需改动组件结构。
5. 作为**移动/桌面访问者**，我希望页面响应式且能通过导航快速跳转到目标模块，以便高效获取信息。

---

## 4. 需求池（技术项维持不变；内容项按 v2 调整）

| 编号 | 需求 | 优先级 | 说明 |
|---|---|---|---|
| R01 | 单页 6 大模块内容完整呈现 | P0 | **v2：使用真实简历数据完整填充，不留空白区** |
| R02 | 深色科技感基础视觉：深色背景 + 霓虹强调色 + 统一排版 | P0 | 维持 v1，见架构 §8.2 主题 token |
| R03 | 顶部锚点导航，点击平滑滚动定位到各 section | P0 | 维持 v1 |
| R04 | 中英双语一键切换（i18n） | P0 | 维持 v1 |
| R05 | 响应式适配（桌面/平板/手机） | P0 | 维持 v1 |
| R06 | 数据结构化、集中可替换 | P0 | **v2：真实数据收敛到 `src/data/resume.js`，中英成对** |
| R07 | 首屏 Hero：姓名 + 头衔 + 打字机 + 简介 + 社交入口 + 滚动提示 | P0 | **v2：姓名=高峰，头衔=前端开发工程师** |
| R08 | 滚动进入动画（fade/slide in） | P1 | 维持 v1 |
| R09 | 粒子/光效背景，鼠标轻微交互 | P1 | 维持 v1 |
| R10 | Hero 打字机循环文字 | P1 | **v2：词表改为真实技能（React+TS / 前端工程化 / Node 中间层 / 跨端国际化）** |
| R11 | 技能项进度条 / 熟练度动画 | P1 | **v2：升级为视觉重点，见 §7.4** |
| R12 | 项目卡片 hover 光晕 + 滚动高亮当前导航项 | P1 | 维持 v1 |
| R13 | 加载动画、技能雷达图、PDF 下载、访问统计 | P2 | 维持 v1，首版不做 |
| **R14** | **内容权重：Shopee 重点展示、实习弱化为 1 条、腾讯音乐占位置顶** | **P0** | **v2 新增，见 §6** |
| **R15** | **技能模块视觉重点强化** | **P1** | **v2 新增，见 §7.4** |
| **R16** | **腾讯音乐预留占位板块（明显、易填充）** | **P0** | **v2 新增，见 §7.2** |
| **R17** | **联系方式展示真实邮箱与电话** | **P0** | **v2 新增，`contact.phone` 为接口增量** |

---

## 5. UI 设计稿描述（模块结构 / 配色 / 动效维持 v1，仅更新内容权重）

**全局配色基调**：维持架构 §8.2（主背景 `#0A0E1A`、霓虹青 `#00E5FF`、霓虹紫 `#7C4DFF`、品红 `#FF2E97`、正文 `#E6EDF7`），不变。

**全局布局**：维持 v1（固定玻璃态顶栏 + 语言切换在右 + 6 section 纵向串联 + 页脚），不变。

### Section 清单（仅"内容"列按 v2 更新）

| # | Section | 布局与视觉元素（不变） | 动效（不变） | **v2 内容重点** |
|---|---|---|---|---|
| 1 | **首页 Hero** | 全屏；姓名 + 头衔 + 打字机 + 简介 + 社交图标 + 滚动提示 + 粒子背景 | 粒子漂浮、打字机、淡入上浮 | 高峰 / 前端开发工程师；打字机词表用真实技能 |
| 2 | **关于我** | 左头像视觉块 + 右简介段落 + 关键数字 + 教育背景 | 淡入、数字计数 | 数字用真实业务成果（4 国 / 20 万单 / 近亿曝光）；教育换真实院校 |
| 3 | **工作经历** | 垂直发光时间轴，条目依次滑入 | 节点点亮、依次滑入 | **3 层：腾讯音乐占位（置顶醒目）→ Shopee 两段（重点详实）→ 实习（合并 1 条弱化）** |
| 4 | **项目作品** | 响应式卡片网格 + 技术栈标签 + hover 光晕 | 交错淡入、霓虹描边 | 4 张 Shopee 业务卡片（链接占位） |
| 5 | **技能** | 分组标签云 + 进度条 | 进度条增长 | **升级为视觉重点：5 组，用户指定技能靠前 + 高权重** |
| 6 | **联系方式** | 居中引导语 + 邮箱 CTA + 社交图标组 | 呼吸光效、hover 微动 | 真实邮箱为主 CTA，**新增电话入口**；GitHub/LinkedIn/Website 占位隐藏待补 |

> 语言切换开关位置（顶部导航右侧，全局生效）与所有动效参数维持不变。

---

## 6. 内容方案：模块权重重新分配（本次核心变更一）

### 6.1 全局权重总表

| 模块 | 权重 | 内容策略 |
|---|---|---|
| 首页 Hero | 高 | 真实姓名/头衔/技能词表，第一印象 |
| 关于我 | 中 | 真实业务数字 + 真实教育背景 |
| **工作经历** | **最高** | **Shopee 做实、腾讯音乐占位、实习弱化（见 6.2）** |
| 项目作品 | 中高 | Shopee 业务项目 4 张卡，链接占位 |
| **技能** | **最高（视觉重点）** | **按用户指定技能重分组 + 进度条强化（见 §7.4）** |
| 联系方式 | 中 | 真实邮箱/电话，社交占位 |

### 6.2 工作经历三层结构

| 层级 | 条目 | `emphasis` 值 | 展示策略 |
|---|---|---|---|
| ① 当前职位（置顶占位） | 腾讯音乐 · 2026–至今 | `placeholder` | 醒目虚线/脉冲占位卡，标注"内容待补充"，易填充；置时间轴顶部 |
| ② 重点经历（做实） | ShopeeFood FE · 2024.08–2026 | `primary` | 大卡片、霓虹描边、highlights 全展开（5 条） |
| ② 重点经历（做实） | Shopee · 2023.09–2024.02 | `primary` | 大卡片、霓虹描边、highlights 全展开（4 条） |
| ③ 实习（弱化） | 滴滴 / 同程旅行 / 数新官网 CMS | `secondary` | **合并为 1 条**紧凑小条，highlights 三行简短列出公司+技术栈 |

**说明**：实习合并为单条 Experience（`company="其他实习经历 / Other Internships"`，`highlights` 三行）即可实现"简短列表、弱化呈现"，无需改动组件结构；`emphasis` 为向后兼容可选字段，用于视觉分级（缺省按普通条目渲染）。

---

## 7. 真实数据填充方案 · `src/data/resume.js`（本次核心变更二）

### 7.1 接口增量（对架构 §3.1 的向后兼容扩展，已同步架构师）

| 字段 | 类型 | 默认值行为 | 用途 | 是否必须 |
|---|---|---|---|---|
| `contact.phone` | `string` | 缺省不渲染电话 | 展示真实电话 `18362899262` | **必须**（用户要求） |
| `experiences[].emphasis` | `'primary' \| 'secondary' \| 'placeholder'`（可选） | 缺省 = 普通时间轴条目 | 工作经历视觉分级（重点/弱化/占位） | 建议（实现视觉重点） |

> 其余数据结构（Localized、`hero`/`about`/`projects`/`skills`/`education`/`contact` 等）完全沿用架构 §3.1，不改动。

### 7.2 腾讯音乐预留占位板块设计

| 项 | 设计 |
|---|---|
| 位置 | 时间轴**第一条**（最新），在 Shopee 之前 |
| 数据表达 | 一条 `emphasis: 'placeholder'` 的 Experience |
| 文案（放 `resume.js`） | 仅放简历内容：company=`{zh:'腾讯音乐',en:'Tencent Music'}`；role=`{zh:'（当前职位）内容待补充',en:'(Current Role) To be filled'}`；period=`{zh:'2026 – 至今',en:'2026 – Present'}`；highlights 一条占位提示 |
| 角标文案（放 `translations.js`） | "NOW / 待补充 / TO FILL" 为**界面固定文案**，由 `emphasis='placeholder'` 触发统一渲染，不写进 `resume.js`（与架构 §8.7 一致）；用户补全该条后，需将 `emphasis` 由 `placeholder` 改为 `primary`（或移除该字段），角标即自动消失，共用文案无需改 |
| 视觉表现 | 虚线霓虹描边 / 轻微脉冲发光 / "待补充"角标（文案取自 `translations.js`），与正式经历明显区分 |
| 易填充 | 只需改这条 Experience 的 `role`/`highlights` 即可补全；数据文件内用注释 `// TODO: 补充腾讯音乐技能与工作经验` 标注 |
| 与 Shopee 时间衔接 | ShopeeFood 原文"至今"与腾讯音乐 2026 入职冲突 → ShopeeFood 截止月**待用户确认**（见 §9 Q1） |

### 7.3 `src/data/resume.js` 完整数据（中英成对，可直接替换）

```js
/** @type {import('./types').ResumeData} —— 用户只改本文件的值 */
export const resume = {
  hero: {
    name:     { zh: '高峰', en: 'Gao Feng' },
    title:    { zh: '前端开发工程师', en: 'Frontend Engineer' },
    tagline:  { zh: '专注前端工程与跨端业务，用标准化与性能体验驱动产品', en: 'Focused on frontend engineering and cross-platform products, driven by standardization and performance' },
    intro:    { zh: '多年一线前端开发经验，深耕 React + TypeScript 与跨端国际化，具备从 0 到 1 搭建业务页面与大型系统重构能力，注重编码标准化与性能优化。', en: 'Years of hands-on frontend experience with React + TypeScript and cross-platform i18n; experienced in building pages from scratch and refactoring large systems, with a focus on coding standards and performance.' },
    location: { zh: '中国', en: 'China' },
    typewriterWords: [
      { zh: 'React + TypeScript', en: 'React + TypeScript' },
      { zh: '前端工程化',        en: 'Frontend Engineering' },
      { zh: 'Node 中间层',       en: 'Node Middleware' },
      { zh: '跨端与国际化',      en: 'Cross-platform & i18n' },
    ],
  },
  avatar: '/avatar.svg', // TODO: 可替换为高峰真实照片

  about: {
    paragraphs: [
      { zh: '注重前端开发标准化，编码习惯良好，有兜底思维；熟悉 JavaScript 语言，对 V8 垃圾回收、JS 面向对象与运行机制有一定了解。', en: 'Values frontend standardization, solid coding habits and defensive thinking; familiar with JavaScript internals including V8 garbage collection, OOP and runtime mechanisms.' },
      { zh: '具备 Node 中间层与后端 API 开发能力，熟悉 SSR、SEO；熟悉 React + TypeScript，能应用 Vue 开发，熟悉 webpack、git；并学习机器学习技术，能对实际问题建模与调优。', en: 'Capable of Node middleware and backend API development, familiar with SSR/SEO; proficient in React + TypeScript and Vue, comfortable with webpack and git; also applies machine learning to model and tune real-world problems.' },
    ],
    stats: [
      { value: '4',    label: { zh: '覆盖东南亚国家', en: 'Southeast Asian Markets' } },
      { value: '20万', label: { zh: '拼好饭日均单量', en: 'Daily Group-buy Orders' } },
      { value: '近亿', label: { zh: '需求日曝光量',   en: 'Daily Impressions' } },
    ],
  },

  experiences: [
    // ===== ① 当前职位：预留占位，易填充 =====
    // TODO: 补充腾讯音乐的技能与工作经验：替换下方 role / highlights；
    //       补全后将 emphasis 由 'placeholder' 改为 'primary'（或删除该字段），角标自动消失
    {
      company:   { zh: '腾讯音乐', en: 'Tencent Music' },
      role:      { zh: '（当前职位）内容待补充', en: '(Current Role) To be filled' },
      period:    { zh: '2026 – 至今', en: '2026 – Present' },
      emphasis:  'placeholder',
      highlights: [
        { zh: '内容待补充：工作职责、项目与技能（在数据文件 resume.js 中替换本条）', en: 'To be filled: responsibilities, projects and skills (replace this entry in resume.js)' },
      ],
    },
    // ===== ② 重点经历：ShopeeFood =====
    {
      company:   { zh: 'ShopeeFood', en: 'ShopeeFood' },
      role:      { zh: '前端开发工程师', en: 'Frontend Engineer' },
      period:    { zh: '2024.08 – 2026（截至月份待确认）', en: '2024.08 – 2026 (end month TBD)' },
      emphasis:  'primary',
      highlights: [
        { zh: '参与官网、buyer app、admin 后台全流程开发，具备跨端、国际化经验；业务覆盖东南亚四国，千万级 DAU', en: 'Full-lifecycle development across official site, buyer app and admin console; cross-platform and i18n experience serving 10M+ DAU across four Southeast Asian markets' },
        { zh: '负责“拼好饭”业务，日均单量 20 万，从 0 到 1 设计开发流量域页面', en: 'Owned the group-buy meal business with 200K daily orders; designed and built traffic-domain pages from scratch' },
        { zh: '负责 Rate、Address、Voucher、Banner 等业务，所开发需求日曝光量近亿', en: 'Delivered Rate, Address, Voucher and Banner features with nearly 100M daily impressions' },
        { zh: '具备首页 FPS、CPU 峰值、减包等性能优化经验', en: 'Optimized homepage FPS, CPU peaks and bundle size' },
        { zh: '工作覆盖需求性、修复性、配合性开发与重构，有 owner 意识', en: 'Broad scope across feature, fix, collaboration and refactoring work, with strong ownership' },
      ],
    },
    // ===== ② 重点经历：Shopee（商业化准星）=====
    {
      company:   { zh: 'Shopee', en: 'Shopee' },
      role:      { zh: '前端开发工程师', en: 'Frontend Engineer' },
      period:    { zh: '2023.09 – 2024.02', en: '2023.09 – 2024.02' },
      emphasis:  'primary',
      highlights: [
        { zh: '负责商业化准星系列四套代码的维护与开发，解决微前端跨域等技术问题', en: 'Maintained and developed four codebases of the commercialization suite; resolved micro-frontend cross-origin issues' },
        { zh: '负责车载屏自营系统开发，交付完整需求 15+，可独立负责单一模块', en: 'Developed the in-vehicle self-operated system; delivered 15+ full requirements and independently owned a module' },
        { zh: '实现老平台、老功能迁移；负责营销后台系统及优惠管理模块需求开发', en: 'Migrated legacy platforms/features; developed the marketing admin system and owned the coupon management module' },
        { zh: '封装业务通用组件，优化代码质量，累计消除冗余代码 1 万+ 行', en: 'Built reusable business components, improving code quality and removing 10K+ lines of redundant code' },
      ],
    },
    // ===== ③ 实习：合并 1 条，弱化 =====
    {
      company:   { zh: '其他实习经历', en: 'Other Internships' },
      role:      { zh: '实习 · 前端开发', en: 'Frontend Intern' },
      period:    { zh: '2023.05 – 2023.08', en: '2023.05 – 2023.08' },
      emphasis:  'secondary',
      highlights: [
        { zh: '滴滴 · 网约车车载屏 web 开发（React + AntDesign）', en: 'DiDi · In-vehicle web development (React + AntDesign)' },
        { zh: '同程旅行 · 旅游度假营销平台（Vue + ElementUI + JSX）', en: 'Tongcheng Travel · Vacation marketing platform (Vue + ElementUI + JSX)' },
        { zh: '数新官网 CMS · 官网改版/SEO/Nuxt + React + Koa（从 0 到 1）', en: 'Shuxin Website CMS · revamp/SEO/Nuxt + React + Koa (from scratch)' },
      ],
    },
  ],

  projects: [
    {
      name:  'ShopeeFood · 拼好饭流量域',
      desc:  { zh: '从 0 到 1 设计开发流量域页面，支撑日均 20 万单的拼好饭业务', en: 'Built traffic-domain pages from scratch for the group-buy meal business with 200K daily orders' },
      stack: ['React', 'TypeScript', '国际化'],
      link:  'https://example.com/pinhaofan', // TODO: 替换为真实链接或隐藏
    },
    {
      name:  '商业化准星系统',
      desc:  { zh: '四套代码维护与开发，解决微前端跨域问题，完成老平台迁移', en: 'Maintained four codebases, resolved micro-frontend cross-origin issues and migrated legacy platforms' },
      stack: ['React', '微前端', '组件封装'],
      link:  'https://example.com/zhunxing', // TODO: 替换为真实链接或隐藏
    },
    {
      name:  'ShopeeFood 跨端国际化',
      desc:  { zh: '覆盖官网、buyer app、admin 后台，服务东南亚四国千万级 DAU', en: 'Cross-platform delivery across web/app/admin serving 10M+ DAU in four Southeast Asian markets' },
      stack: ['React', 'TypeScript', 'i18n'],
      link:  'https://example.com/shopeefood', // TODO: 替换为真实链接或隐藏
    },
    {
      name:  '营销后台 · 优惠管理',
      desc:  { zh: '负责营销后台优惠管理模块，封装通用组件，消除冗余代码 1 万+ 行', en: 'Owned the coupon management module; built reusable components and removed 10K+ redundant code lines' },
      stack: ['React', 'TypeScript', '工程化'],
      link:  'https://example.com/marketing-admin', // TODO: 替换为真实链接或隐藏
    },
  ],

  // ===== 技能：视觉重点，用户指定技能靠前 + 高权重（见 7.4）=====
  skills: [
    { category: { zh: '前端核心', en: 'Frontend Core' }, items: [
      { name: 'React + TypeScript', level: 92 },
      { name: 'JavaScript',         level: 90 },
      { name: 'Vue',                level: 80 },
    ]},
    { category: { zh: 'JavaScript 深入', en: 'JavaScript Internals' }, items: [
      { name: 'V8 垃圾回收 / V8 GC', level: 85 },
      { name: '面向对象 / OOP',        level: 85 },
      { name: '运行机制 / Runtime',    level: 85 },
    ]},
    { category: { zh: 'Node 与服务端', en: 'Node & Server' }, items: [
      { name: 'Node 中间层',   level: 82 },
      { name: '后端 API',      level: 80 },
      { name: 'SSR / SEO',     level: 78 },
    ]},
    { category: { zh: '工程化与协作', en: 'Tooling & Workflow' }, items: [
      { name: 'webpack', level: 78 },
      { name: 'git',     level: 85 },
      { name: '前端标准化 / Standards', level: 88 },
    ]},
    { category: { zh: '机器学习', en: 'Machine Learning' }, items: [
      { name: '建模 / Modeling',   level: 72 },
      { name: '模型调优 / Tuning', level: 70 },
    ]},
  ],

  education: [
    { school: { zh: '江苏师范大学', en: 'Jiangsu Normal University' }, major: { zh: '管理科学与工程', en: 'Management Science and Engineering' }, degree: { zh: '硕士', en: 'Master' }, period: '2021.09 – 2024.06' },
    { school: { zh: '江苏科技大学', en: 'Jiangsu University of Science and Technology' }, major: { zh: '计算机科学与技术', en: 'Computer Science and Technology' }, degree: { zh: '本科', en: 'Bachelor' }, period: '2017.09 – 2021.06' },
  ],

  contact: {
    email:    '1037086827@qq.com',
    phone:    '18362899262',      // 接口增量：真实电话
    github:   '', // TODO: 用户补充真实 GitHub 链接（简历未提供，勿编造）
    linkedin: '', // TODO: 用户补充真实 LinkedIn 链接（简历未提供，勿编造）
    website:  '', // TODO: 用户补充个人站点/博客（可选）
  },
};

export default resume;
```

### 7.4 技能模块视觉重点方案

| 手段 | 做法 |
|---|---|
| 分组顺序 | 用户指定技能靠前：前端核心 → JavaScript 深入 → Node 与服务端 → 工程化 → 机器学习 |
| 独立分组 | "JavaScript 深入（V8 GC/面向对象/运行机制）"单独成组，凸显深度 |
| 进度条权重 | React+TS(92) / JavaScript(90) / 前端标准化(88) 高于其他；进入视口增长动画（架构 R11 已有） |
| 版面强化 | 技能 section 分组卡片加大、霓虹进度条加粗；保持深色配色 token 不变 |
| 兼容性 | 无 `level` 的项退化为标签云（架构 SkillsSection 已支持） |

> 注：`level` 数值为依据简历自评给出的**建议值**，非用户精确自评，已在 §8 列入待确认。

---

## 8. 需用户后续补充的字段清单（本次核心变更三）

> 以下为**当前占位或待确认**项。真实邮箱/电话/教育/工作与项目内容已填入，无需再补；其余请高峰补充后替换 `resume.js` 对应值。

| 字段名 | 当前值 | 需补充/确认内容 | 用途 | 所在模块 | 优先级 |
|---|---|---|---|---|---|
| `experiences[0].role` | （当前职位）内容待补充 | **腾讯音乐职位名称** | 职位展示 | 工作经历 | P0 |
| `experiences[0].highlights[]` | 内容待补充… | **腾讯音乐的工作经验、项目、职责成果** | 履历主体 | 工作经历 | P0 |
| `skills`（腾讯音乐相关） | 暂未单列 | **腾讯音乐用到的技能/技术栈**（如新增技能组请一并给出） | 技能展示 | 技能 | P0 |
| `contact.github` | `''`（空占位） | **真实 GitHub 链接** | 社交入口 | Hero、联系方式 | P0 |
| `contact.linkedin` | `''`（空占位） | **真实 LinkedIn 链接** | 社交入口 | Hero、联系方式 | P1 |
| `contact.website` | `''`（空占位） | 个人站点/博客（可选） | 社交入口 | 联系方式 | P2 |
| `avatar` | `/avatar.svg` | **真实头像照片**（或确认使用抽象 SVG） | 头像视觉块 | 关于我 | P1 |
| `projects[].link`（4 条） | `example.com/...` | 真实项目链接；内部项目若不便公开，请确认"隐藏链接按钮" | 项目跳转 | 项目作品 | P1 |
| `experiences[1].period` | `2024.08 – 2026（待确认）` | **ShopeeFood 离职/入职腾讯音乐的准确月份** | 时间轴准确性 | 工作经历 | P0 |
| `skills[].items[].level` | 建议值 70–92 | 熟练度数值是否需要按本人情况微调 | 进度条 | 技能 | P1 |
| `hero.tagline / intro / about.paragraphs` | PM 基于简历撰写 | 措辞是否符合本人表达习惯 | 简介文案 | Hero、关于我 | P1 |

**实现约定**：空字符串（如 `github:''`）时，组件应**隐藏对应社交图标**，避免出现无效链接——请工程师在 `SocialLinks.jsx` 中按 `value ? 渲染 : 跳过` 处理（向后兼容，不改变结构）。

---

## 9. 待确认问题（不阻塞开发）

| # | 问题 | 影响 | 建议/默认 |
|---|---|---|---|
| Q1 | ShopeeFood 的准确截止月份？原文"2024.08–至今"与"2026 入职腾讯音乐"存在时间重叠 | 时间轴准确性 | 默认标注"2024.08–2026（待确认）"，请高峰给准确月份 |
| Q2 | 腾讯音乐的具体职位与工作内容何时可提供？ | 占位板块转正时机 | 先以上述占位方案上线，内容到位后仅改 `experiences[0]` |
| Q3 | GitHub / LinkedIn 是否提供？ | 社交图标完整性 | 未提供则隐藏，不编造 |
| Q4 | 项目链接是否公开？ | 项目卡片跳转 | 内部项目默认隐藏链接按钮 |
| Q5 | 头像使用真实照片还是抽象 SVG？ | 关于我视觉 | 默认 `/avatar.svg` 抽象视觉块 |
| Q6 | 部署平台（CloudStudio / Vercel / Netlify）？ | 上线链接 | 维持架构 A2：默认免费静态托管 |

> 以上均不阻塞：工程师可按 §7.3 数据 + 占位方案先行实现，真实信息到位后仅替换 `resume.js`，无需改组件。

---

> **交付衔接**：本 v2 仅变更内容数据。架构师确认 §7.1 两个字段增量后，工程师按 T01→T05 实现时直接采用 §7.3 数据即可；QA 阶段部署拿链接。
