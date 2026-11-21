# 高峰 · 个人简历官网

深色科技感单页简历站，中英双语，纯静态 SPA。

## 在线地址（正式）

**https://gaofeng-lt.github.io/**

通过 GitHub Pages 部署，永久免费、稳定可访问。仓库：`gaofeng-lt/gaofeng-lt.github.io`（public）。

> 如需绑定自己的域名，在仓库 Settings → Pages → Custom domain 中配置即可。

## 本地运行

```bash
cd ~/Desktop/agent/resume-site
npm install
npm run dev      # 开发预览 http://localhost:5173
npm run build    # 生产构建 → dist/
npm run preview  # 本地预览构建产物
```

## 修改简历内容（重要）

**只需编辑一个文件：`src/data/resume.js`**，改完重新构建部署即可。所有内容中英成对 `{ zh, en }`。

### 待补充的真实信息（当前为占位）

| 位置 | 字段 | 说明 |
|---|---|---|
| 工作经历第 1 条 | `experiences[0].role` / `.highlights` | **腾讯音乐**：职位名称、工作职责、项目、技能 |
| 联系方式 | `contact.github` / `.linkedin` / `.website` | 真实链接（当前留空，留空时图标自动隐藏） |
| 头像 | `avatar` | 当前为抽象 SVG（`public/avatar.svg`），可换真实照片 |
| 项目作品 | `projects[].link` | 真实项目链接（内部项目可留空，按钮自动隐藏） |
| 技能 | `skills[].level` | 熟练度数值（当前为建议值，可按实际微调） |
| 关键数字 | `about.stats` | 业务成果数字 |
| ShopeeFood | `experiences[1].period` | 截止月份（原文"至今"与 2026 入职腾讯音乐重叠，待确认） |
| 文案 | `hero.tagline` / `.intro` | 一句话简介与自我介绍措辞 |

> GitHub / LinkedIn 链接简历中未提供，未编造；填入后社交图标会自动出现。

## 内容设计说明

- **重点突出**：工作经历中 ShopeeFood（5 条亮点）+ Shopee 商业化准星（4 条亮点）标记为 `emphasis: 'primary'`，霓虹青色卡片；技能模块做成 5 组进度条视觉重点。
- **一笔带过**：滴滴、同程旅行、数新实习合并为 1 条 `emphasis: 'secondary'`，弱化显示。
- **预留板块**：腾讯音乐位于时间轴最顶部，`emphasis: 'placeholder'`，品红虚线霓虹描边 + "当前·待补充"角标，补全只需改 `experiences[0]` 一条。

## 技术栈

Vite 5 + React 18 + MUI 5 + Tailwind 3.4 + Framer Motion 11 + react-icons。粒子背景为原生 Canvas（移动端/减少动效时自动降级）。

## 设计文档

见 `docs/` 目录：PRD、架构设计、时序图、类图、原始简历文本。
