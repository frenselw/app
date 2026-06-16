# 拼音学堂 — 中文拼音学习网站

> 一个互动式的中文拼音学习网站，帮助零基础学习者循序渐进地掌握声母、韵母、整体认读音节和声调。

---

## 📋 专案简介

「拼音学堂」是一个专为中文拼音初学者设计的学习网站。网站提供四大学习模块，涵盖拼音的完整知识体系，并内建语音发音功能与互动测验，让学习变得更轻松有趣。

### 核心特色

| 特色         | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| 🎙️ 语音发音  | 使用浏览器内建的 Web Speech API，点击即可听到标准中文发音    |
| 📚 四大模块  | 声母（23个）、韵母（24个）、整体认读音节（16个）、声调（5种）|
| 🎯 互动测验  | 随机出题、即时反馈、进度追踪、分数统计                      |
| 📱 响应式设计 | 支援桌面与移动设备，随时随地学习                            |
| 🎨 视觉引导  | 每个模块使用专属配色，帮助记忆与区分                        |

---

## 🛠️ 技术栈

| 技术              | 版本    | 用途                          |
| ----------------- | ------- | ----------------------------- |
| **Next.js**       | 16.2.9  | React 全端框架（App Router）  |
| **TypeScript**    | 5.x     | 型别安全的开发体验            |
| **Tailwind CSS**  | v4      | 实用优先的 CSS 框架           |
| **React**         | 19.2.4  | UI 建构库                     |
| **Web Speech API**| 内建    | 浏览器原生语音合成（TTS）     |
| **Prisma**        | 7.8.0   | 型别安全的 ORM（预留扩展用）  |
| **PostgreSQL**    | —       | 关联式资料库（预留扩展用）    |

---

## 📁 专案结构

```
elegant-clock-3/
├── src/
│   ├── app/                          # Next.js App Router 页面
│   │   ├── layout.tsx                # 全局 Layout（Navbar + Footer）
│   │   ├── page.tsx                  # 首页（Hero + 模块导览 + 统计）
│   │   ├── globals.css               # 全局样式与 Tailwind 设定
│   │   ├── learn/
│   │   │   ├── page.tsx              # 学习总览页
│   │   │   ├── initials/page.tsx     # 声母学习页
│   │   │   ├── finals/page.tsx       # 韵母学习页
│   │   │   ├── syllables/page.tsx    # 整体认读音节学习页
│   │   │   └── tones/page.tsx        # 声调学习页
│   │   ├── quiz/
│   │   │   └── page.tsx              # 互动测验页
│   │   └── history/
│   │       └── page.tsx              # 测验记录页（成绩历史与逐题复习）
│   │
│   ├── components/                   # 可重用元件
│   │   ├── Navbar.tsx                # 导览列（含移动端选单）
│   │   ├── Footer.tsx                # 页脚
│   │   ├── PronounceButton.tsx       # 发音按钮（Web Speech API）
│   │   └── PinyinCard.tsx            # 拼音卡片（展示拼音、范例字、词组）
│   │
│   ├── data/
│   │   └── pinyin.ts                 # 拼音资料库与测验出题引擎
│   │
│   ├── lib/
│   │   ├── prisma.ts                 # Prisma Client 单例（预留扩展用）
│   │   └── quiz-history.ts           # 测验记录工具库（localStorage 储存 / 统计）
│   │
│   └── generated/                    # Prisma 自动生成的程式码
│       └── prisma/
│
├── prisma/
│   └── schema.prisma                 # 资料库 Schema 定义
│
├── public/                           # 静态资源
├── .env                              # 环境变数
├── next.config.ts                    # Next.js 设定
├── tsconfig.json                     # TypeScript 设定
├── docs/
│   └── project.md                   # 测验记录功能开发 Checklist
├── package.json                      # 专案依赖与脚本
└── README.md                         # 专案说明
```

---

## 📖 功能模块详解

### 1. 🏠 首页（`/`）

- **Hero 区域**：渐层背景搭配装饰拼音字元（ā, é, ǐ, ò），醒目的标题与行动按钮
- **四大学习模块卡片**：快速导览到各学习单元
- **数据统计区**：展示各分类的数量（声母 23、韵母 24、整体认读 16、声调 5）

### 2. 📚 学习总览页（`/learn`）

- 以步骤化方式呈现学习路径（Step 1 → Step 4）
- 每个模块卡片包含图标、标题、说明与学习重点列表
- 底部设有「开始测验」的行动呼吁区

### 3. 🔤 声母学习页（`/learn/initials`） — 翠绿色主题

- 展示全部 **23 个声母**（b, p, m, f, d, t, n, l, g, k, h, j, q, x, zh, ch, sh, r, z, c, s, y, w）
- 每张卡片包含：拼音字元、范例字（含发音）、词组（含发音）、记忆口诀
- 前后导航：返回总览 / 前往韵母

### 4. 🎵 韵母学习页（`/learn/finals`） — 天蓝色主题

- 展示全部 **24 个韵母**，分为三大类：
  - **单韵母**（6个）：a, o, e, i, u, ü
  - **复韵母**（9个）：ai, ei, ui, ao, ou, iu, ie, üe, er
  - **鼻韵母**（9个）：an, en, in, un, ün, ang, eng, ing, ong
- 每类独立分区展示，帮助学习者系统化记忆

### 5. 📖 整体认读音节页（`/learn/syllables`） — 紫色主题

- 展示全部 **16 个整体认读音节**（zhi, chi, shi, ri, zi, ci, si, yi, wu, yu, ye, yue, yuan, yin, yun, ying）
- 强调不需拼读、直接整体记忆的学习特点

### 6. 🎶 声调学习页（`/learn/tones`） — 琥珀色主题

- **经典「ma」对比区**：并排展示 mā, má, mǎ, mà，直观感受四声差异
- **五种声调详细卡片**：
  - 第一声（ˉ）调值 55 — 高平调
  - 第二声（ˊ）调值 35 — 上扬调
  - 第三声（ˇ）调值 214 — 先降后升
  - 第四声（ˋ）调值 51 — 下降调
  - 轻声（无符号） — 轻短柔和
- 每个声调卡片附有手势提示，帮助记忆

### 7. ✏️ 互动测验页（`/quiz`）

- **随机出题**：每次测验随机生成 **8 道题目**
  - 5 道声母配对题（根据词组选出对应的声母）
  - 3 道声调辨别题（辨识声调类型）
- **互动机制**：
  - 进度条即时显示答题进度
  - 答题后即时显示正确/错误反馈（绿色=正确、红色=错误）
  - 每题附有详细说明
  - 得分即时累计
- **结果页面**：
  - SVG 圆环图表显示得分比例
  - 答题明细一览（✓/✕）
  - 依分数显示鼓励讯息
  - 提供「再来一次」、「去复习」与「查看记录」按钮

### 8. 📊 测验记录页（`/history`）

记录使用者每次测验的成绩与逐题作答明细，方便追踪学习进度与复习错题。

**技术决策：使用浏览器 `localStorage`（非资料库）**
- 免设定、即开即用、无需后端 API
- 资料仅存在当前浏览器，换装置 / 清快取会消失
- 未来可无痛迁移至 Prisma + PostgreSQL（串接帐号系统时）

**功能特色：**

- **自动记录**：测验完成时自动储存（含每题的题目、选项、正确答案、你的答案、解释）
- **统计摘要**（4 格卡片）：
  - 📝 测验次数
  - 📈 平均分数
  - 🏆 最佳成绩
  - 🆕 最近成绩
- **记录列表**：每笔显示分数圆圈、正确 / 错误数、日期时间
- **展开逐题明细**：点击记录可展开查看：
  - ✅/❌ 正确或错误标记
  - 题目内容、正确答案、你的答案（答错时显示）
  - 💡 解释说明
  - 答题概况（✓/✕ 一览）
- **记录管理**：删除单笔记录 / 清除全部记录（含确认对话框）
- **记录上限**：最多保留 50 笔，超过自动截断

---

## 🎨 设计规范

### 配色系统

| 模块         | Tailwind 色系 | 代表色        | 用途                     |
| ------------ | ------------- | ------------- | ------------------------ |
| 声母         | `emerald`     | 🟢 翠绿       | 拼音的开头辅音           |
| 韵母         | `sky`         | 🔵 天蓝       | 拼音的母音部分           |
| 整体认读音节 | `violet`      | 🟣 紫色       | 整体记忆的特殊音节       |
| 声调         | `amber`       | 🟡 琥珀       | 声调变化                 |
| 主题色       | `emerald/teal`| 🟢 渐层       | 首页 Hero、按钮、导览列  |

### 字体

- **Noto Sans TC**（思源黑体繁体中文）— 透过 `next/font/google` 载入
- 支援完整的中文字元渲染，确保拼音声调符号（ˉˊˇˋ）正确显示

---

## 🚀 快速开始

### 环境需求

- **Node.js** ≥ 18.18.0（推荐 v20+）
- **npm** ≥ 9

### 安装与运行

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器
# 访问 http://localhost:3000
```

### 可用脚本

| 指令             | 说明                             |
| ---------------- | -------------------------------- |
| `npm run dev`    | 启动开发服务器（Turbopack）      |
| `npm run build`  | 建置生产版本                     |
| `npm run start`  | 启动生产服务器                   |
| `npm run lint`   | 执行 ESLint 程式码检查           |
| `npm run db:push`| 同步 Schema 至资料库（Prisma）   |

---

## 🧩 核心元件说明

### `PronounceButton`

发音按钮元件，使用浏览器的 **Web Speech API**（`window.speechSynthesis`）播放中文语音。

```
Props:
  - text: string       // 要发音的文字
  - size: "sm"|"md"|"lg"  // 按钮大小
  - className?: string    // 自定义样式
```

- 语言设定：`zh-CN`
- 语速：`0.8`（稍慢，适合学习）
- 状态显示：闲置时 🔈、播放中 🔊

### `PinyinCard`

拼音展示卡片，呈现单个拼音单元的完整资讯。

```
Props:
  - item: PinyinItem    // 拼音资料
  - color: "emerald"|"sky"|"violet"|"amber"  // 主题色
```

### `generateQuiz()`

测验出题引擎，位于 `src/data/pinyin.ts`。

- 从声母资料中随机生成 5 道配对题
- 从声调资料中随机生成 3 道辨别题
- 每题提供 4 个选项与详细说明
- 每次调用结果不同，确保测验的多样性

### 测验记录工具库（`src/lib/quiz-history.ts`）

使用浏览器 `localStorage` 储存与读取测验记录，SSR 安全（含可用性检查）。

```
API:
  - saveQuizRecord(score, total, answers)  // 储存一笔记录
  - getQuizHistory()                        // 取得所有记录（最新在前）
  - getQuizStats()                          // 统计摘要（次数 / 平均 / 最佳 / 最近）
  - deleteQuizRecord(id)                    // 删除单笔记录
  - clearQuizHistory()                      // 清除全部记录
  - formatDate(iso)                         // ISO 日期格式化
```

- 记录上限：最多 50 笔，超过自动截断
- 每笔记录包含完整题目快照，可在事后复习

---

## 📊 资料结构

### `PinyinItem`（拼音项目）

```typescript
interface PinyinItem {
  pinyin: string;        // 拼音（如 "b"）
  example: string;       // 范例字（如 "波"）
  examplePinyin: string; // 范例字拼音（如 "bō"）
  word: string;          // 词组（如 "玻璃"）
  wordPinyin: string;    // 词组拼音（如 "bō li"）
  tip?: string;          // 记忆口诀（可选）
}
```

### `ToneItem`（声调项目）

```typescript
interface ToneItem {
  name: string;         // 名称（如 "第一声"）
  symbol: string;       // 符号（如 "ˉ"）
  value: string;        // 调值（如 "55"）
  example: string;      // 范例字（如 "妈"）
  examplePinyin: string;// 范例拼音（如 "mā"）
  description: string;  // 描述
  gesture: string;      // 手势提示
}
```

### `QuizQuestion`（测验题目）

```typescript
interface QuizQuestion {
  question: string;    // 题目
  options: string[];   // 4 个选项
  answer: number;      // 正确答案的索引（0-3）
  explanation: string; // 说明
}
```

### `QuizRecord`（测验记录）

```typescript
interface QuizRecord {
  id: string;                      // 唯一 ID
  date: string;                    // ISO 日期字串
  score: number;                   // 答对题数
  total: number;                   // 总题数
  percentage: number;              // 正确率（0-100）
  answers: QuizAnswerRecord[];     // 逐题明细
}

interface QuizAnswerRecord {
  question: string;       // 题目
  options: string[];      // 选项
  correctAnswer: number;  // 正确答案索引
  selectedAnswer: number; // 使用者选择索引
  explanation: string;    // 解释
  isCorrect: boolean;     // 是否答对
}
```

---

## 🔮 未来展望

- [ ] 增加拼音拼写练习（拼读组合练习）
- [ ] 将测验记录迁移至 Prisma + PostgreSQL（搭配帐号系统，跨装置同步）
- [ ] 新增「错题本」：自动汇整历史错题供集中复习
- [ ] 增加更多题型的测验（听力辨识、填空等）
- [ ] 支援繁简体切换
- [ ] 加入语音辨识功能，让学习者练习发音并即时纠正
- [ ] 新增学习成就系统与徽章奖励
- [ ] 测验记录匯出 / 匯入（JSON 格式），方便跨装置转移
- [ ] 图表化学习曲线（折线图显示成绩趋势）

---

## 📄 授权资讯

本专案仅供学习用途。拼音学习资料参考自中国教育部《汉语拼音方案》。

---

*让学习拼音变得简单有趣 · 拼音学堂 © 2026*
