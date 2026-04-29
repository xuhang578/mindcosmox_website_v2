# 心屿星河官网项目说明

本文档记录当前项目的关键信息，供后续 Codex / 开发协作者快速接手。后续修改默认以当前版本为基准继续迭代。

## 项目概览

- 项目名称：心屿星河
- 项目类型：单页企业展示官网 / Landing Page
- 品牌定位：自然疗愈与身心恢复服务品牌
- 主要受众：个人用户、亲子家庭、企业组织、文旅场地、公园、营地、酒店、合作方与投资人
- 当前远程仓库：`https://github.com/xuhang578/mindcosmox_website_v2`
- 当前本地目录：`D:\Projects_xu\mindcosmox\codex\website_v2`

## 技术栈

- React
- Vite
- Tailwind CSS
- lucide-react
- framer-motion
- 无后端
- 无复杂路由
- 单页滚动式结构

## 运行方式

安装依赖：

```powershell
npm.cmd install
```

本地开发：

```powershell
npm.cmd run dev
```

开发服务固定端口：

```text
http://localhost:5188
```

生产构建：

```powershell
npm.cmd run build
```

构建产物目录：

```text
dist/
```

## 重要文件

- `src/App.jsx`
  - 页面结构、文案、数据数组、动画组件、导航、各区块布局。
  - 主要内容都集中在这个文件里。
- `src/index.css`
  - 当前视觉系统的核心。
  - 包含全局变量、导航、首屏、区块、卡片、流程、联系区、响应式样式。
- `src/main.jsx`
  - React 入口文件。
- `src/assets/`
  - 当前前台使用的图片资产目录。
  - `brand-logo-horizontal.png`：顶部导航左上角横版品牌 logo。
  - `hero-anft-training-bg.jpg`：首页 Hero 虚化背景图，已压缩为网页背景版本。
  - `anft-logo.jpg`：ANFT Certified Guide 圆形标识，用于 ANFT 介绍区。
- `index.html`
  - Vite HTML 入口。
  - 注意保持中文 meta 和 title 为 UTF-8。
- `tailwind.config.js`
  - Tailwind 扩展色板、字体、阴影。
- `postcss.config.js`
  - Tailwind/PostCSS 配置。
- `.gitignore`
  - 已排除 `node_modules/`、`dist/`、临时浏览器目录、参考图、备份和截图。

## 当前设计方向

当前版本参考了 `ref_png/p1-p8` 的视觉语言，整体方向如下：

- 高端、安静、克制、自然
- 大面积留白
- 居中品牌首屏
- 首页使用线下培训合影作为虚化背景，需要保持可辨识但不干扰标题可读性
- 顶部导航左侧使用横版品牌 logo，桌面端当前 logo 高度上限约 50px
- 宋体/衬线大标题
- 森林绿、米白、雾蓝、浅灰为主
- 浅灰绿背景和柔和雾感
- 胶囊按钮
- 大圆角卡片
- 低对比细线与轻柔边框
- 深绿色流程段
- 整体比例已按用户反馈缩小过一轮，当前版本不要再无意识放大字号和按钮

## 页面结构

当前页面主要区块：

1. 顶部导航
   - 横版品牌 logo
   - 关于 / 服务 / 体验 / 合作 / 联系
   - 预约体验按钮

2. Hero 首屏
   - 主标题：心屿星河
   - 英文副标：NATURAL HEALING & RECOVERY
   - 简短介绍
   - 预约体验 / 商务合作按钮
   - 细线轨迹、星点、雾感背景
   - 背景图：`src/assets/hero-anft-training-bg.jpg`

3. ANFT 与关系式森林疗愈
   - 新增在 Hero 之后、About 之前。
   - 左侧：ANFT logo 与简短说明。
   - 右侧：两栏介绍，分别为 ANFT 与关系式森林疗愈。
   - 核心文案：
     - “ANFT 的关系式森林疗愈是国际权威的森林疗愈体系”
     - “关系式森林疗愈是 ANFT 独创的一套标准化的森林疗愈体系”
     - “ANFT是美国自然与森林疗愈协会（Association of Nature and Forest Therapy Guides and Programs）的简称，是权威的国际自然与森林疗愈向导培训体系。”

4. 心屿星河与 ANFT
   - 独立区块，位于 ANFT 介绍之后、About 之前。
   - 排版参考 About：左侧大标题与灰色说明文字，右侧竖向关键词卡。
   - 四个卡片：独家授权、标准化服务、全球资源网络、本土化体验。

5. About
   - 标题：在城市之外，找回身心的秩序
   - 品牌说明
   - 三个关键词卡片：自然连接、情绪恢复、温柔陪伴

6. Services
   - 四个服务卡片：城市森林浴、企业疗愈活动、亲子自然体验、文旅场地合作

7. Why Us
   - 四个优势：专业方法、低门槛体验、多场景落地、持续优化

8. Experience
   - 标题：一次森林浴如何发生
   - 六步流程：抵达自然空间、慢速行走、感官邀请、安静停留、围坐分享、温柔收束
   - 当前为深绿色背景，参考图风格

9. Gallery
   - 六个渐变占位卡片

10. Cooperation
   - 四个合作场景胶囊卡片

11. Contact
   - 联系说明
   - 邮箱：`contact@mindcosmosx.com`
   - 地址：深圳市南山区招商街道水湾B区A1栋
   - 电话：`18311312508`
   - 两个二维码占位：
     - “预约体验”对应小程序二维码
     - “获取合作方案”对应客服二维码
   - 两个按钮均为深色底、无箭头

## 内容与品牌限制

官网前台不要强调科技公司属性。避免出现或突出以下方向：

- AI
- 大模型
- 数据资产
- 微表情识别
- 语音语调分析
- 用户画像
- 算法
- 监测
- 识别
- 训练模型

允许使用的温和表达：

- 持续优化体验
- 重视用户反馈
- 保护隐私
- 专业、温和、可持续

文案风格要求：

- 克制
- 温柔
- 专业
- 不鸡汤
- 不玄学
- 不医疗化
- 不像普通心理咨询网站
- 不像普通户外团建网站

## 编码注意事项

- 项目中文内容应保持 UTF-8。
- Windows PowerShell 的 `Get-Content` 可能把中文显示成乱码，这是终端解码问题，不一定代表文件内容损坏。
- 修改含中文的文件时，不要随意转码。
- 如果需要检查中文，优先通过浏览器页面或明确的 UTF-8 读取方式确认。

## Git / GitHub 状态

- 本地分支：`main`
- 远程：`origin https://github.com/xuhang578/mindcosmox_website_v2.git`
- 已推送到 GitHub。
- 仓库应保持私有。
- 当前 `.gitignore` 已排除不应上传的生成物和参考资料。
- 最近一次已推送提交：`008f3ee Update website content and branding`

## 不应提交的内容

以下目录或文件不要提交：

- `node_modules/`
- `dist/`
- `.edge-tmp*/`
- `_backups/`
- `ref_png/`
- `mobile-preview.png`
- `*.log`

## 常用检查

构建检查：

```powershell
npm.cmd run build
```

检查禁用词：

```powershell
rg "AI|大模型|数据资产|微表情|语音语调|用户画像|算法|监测|识别|训练模型" src index.html
```

查看 Git 状态：

```powershell
git status --short --branch
```

## 后续修改原则

- 默认在当前 `scaled-proportion` 版本基础上继续迭代。
- 不要回退到早期视觉版本，除非用户明确要求。
- 优先保持参考图方向：更安静、更轻、更有留白。
- Hero 背景图已做压缩，避免直接提交原始大图。
- 顶部 logo 尺寸经过多轮微调，桌面端当前高度约 50px，不要无意识放大到撑满导航栏。
- ANFT 相关内容强调“关系式森林疗愈”“独家授权”“国际权威体系”，但仍保持官网整体克制表达。
- 调整视觉时优先改 `src/index.css`。
- 调整文案、区块结构、图标和数据数组时优先改 `src/App.jsx`。
- 尽量保持单页、无后端、无复杂路由。
- 修改完成后至少运行一次 `npm.cmd run build`。
