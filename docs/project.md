# 測驗記錄功能 — 開發 Checklist

> 功能名稱：測驗記錄（Quiz History）
> 建立日期：2026-06-16
> 狀態：✅ 已完成

---

## 📋 功能概述

在使用者完成每次測驗後，自動將成績與逐題作答明細儲存到瀏覽器 `localStorage`，並提供獨立的歷史記錄頁面讓使用者回顧學習進度、檢視錯題與統計摘要。

**技術決策：使用 `localStorage`（非資料庫）**
- 優點：免設定、即開即用、無需後端 API
- 限制：資料僅存在當前瀏覽器，換裝置 / 清快取會消失
- 未來可無痛遷移至 Prisma + PostgreSQL（串接帳號系統時）

---

## ✅ 開發 Checklist

### 1. 資料層 — 記錄工具庫

- [x] 建立 `src/lib/quiz-history.ts`
- [x] 定義型別 `QuizAnswerRecord`（單題作答快照）
- [x] 定義型別 `QuizRecord`（一次完整測驗記錄）
- [x] 實作 `saveQuizRecord()` — 儲存一筆記錄
- [x] 實作 `getQuizHistory()` — 取得所有記錄（最新在前）
- [x] 實作 `getQuizStats()` — 統計摘要（次數 / 平均 / 最佳 / 最近）
- [x] 實作 `deleteQuizRecord()` — 刪除單筆記錄
- [x] 實作 `clearQuizHistory()` — 清除全部記錄
- [x] 實作 `formatDate()` — ISO 日期格式化為本地化字串
- [x] 加入 `localStorage` 可用性檢查（SSR 安全）
- [x] 設定記錄上限（最多 50 筆，超出自動截斷）
- [x] 產生唯一 ID（`Date.now()` + 隨機字串）

### 2. 測驗頁 — 自動儲存記錄

檔案：`src/app/quiz/page.tsx`

- [x] 新增 `selectedAnswers` state，追蹤每題的作答選擇
- [x] 新增 `hasSavedRef`（useRef），防止重複儲存
- [x] 在 `handleSelect` 中記錄使用者選擇的選項索引
- [x] 在 `startQuiz` 中重置 `selectedAnswers` 與 `hasSavedRef`
- [x] 新增 `useEffect`：測驗完成時自動組裝 `QuizAnswerRecord[]` 並儲存
- [x] 儲存條件守衛：`currentIndex >= questions.length` 且已答完所有題
- [x] 結果頁新增「📊 查看記錄」按鈕，連結至 `/history`

### 3. 歷史記錄頁

檔案：`src/app/history/page.tsx`

- [x] 建立 `/history` 路由頁面（Client Component）
- [x] `useEffect` 載入記錄與統計（mount 後才讀取 localStorage）
- [x] **空狀態畫面**：無記錄時顯示「還沒有測驗記錄」+ 引導按鈕
- [x] **載入狀態畫面**：SSR 安全的 `⏳ 載入中…` 佔位
- [x] **統計卡片區**（4 格）：
  - [x] 📝 測驗次數
  - [x] 📈 平均分數
  - [x] 🏆 最佳成績
  - [x] 🆕 最近成績
- [x] **記錄列表**：每筆顯示分數圓圈、正確/錯誤數、日期
- [x] **展開 / 收合**：點擊記錄可展開逐題明細
- [x] **逐題明細**：
  - [x] ✅/❌ 正確或錯誤標記
  - [x] 題目內容
  - [x] 正確答案
  - [x] 你的答案（答錯時顯示）
  - [x] 💡 解釋說明
- [x] **答題概況**：✓/✕ 一覽（對應每題）
- [x] **刪除單筆記錄**按鈕
- [x] **清除全部記錄**按鈕（含確認對話框）
- [x] 底部行動按鈕：「再測一次」、「去複習」

### 4. 導覽列

檔案：`src/components/Navbar.tsx`

- [x] `navLinks` 新增 `{ href: "/history", label: "記錄" }`
- [x] 桌面版導覽列顯示「記錄」連結
- [x] 行動版漢堡選單顯示「記錄」連結
- [x] 當前頁面高亮（active 狀態）

### 5. 驗證

- [x] `get_errors` 四個檔案皆無錯誤
- [x] `npx tsc --noEmit` 通過（型別安全）
- [x] 瀏覽器實測：完成測驗 → 記錄自動儲存
- [x] 瀏覽器實測：歷史記錄頁正確顯示統計與列表
- [x] 瀏覽器實測：展開記錄可檢視逐題明細
- [x] 瀏覽器實測：刪除 / 清除功能正常

---

## 📁 涉及檔案

| 檔案 | 操作 | 說明 |
| ---- | ---- | ---- |
| `src/lib/quiz-history.ts` | 🆕 新增 | 記錄工具庫（儲存 / 讀取 / 刪除 / 統計） |
| `src/app/history/page.tsx` | 🆕 新增 | 歷史記錄頁面 |
| `src/app/quiz/page.tsx` | ✏️ 修改 | 追蹤作答、自動儲存、新增查看記錄按鈕 |
| `src/components/Navbar.tsx` | ✏️ 修改 | 導覽列新增「記錄」連結 |

---

## 🗂️ 資料結構

### `QuizRecord`（一次完整測驗）

```typescript
interface QuizRecord {
  id: string;            // 唯一 ID
  date: string;          // ISO 日期字串
  score: number;         // 答對題數
  total: number;         // 總題數
  percentage: number;    // 正確率（0-100）
  answers: QuizAnswerRecord[]; // 逐題明細
}
```

### `QuizAnswerRecord`（單題作答快照）

```typescript
interface QuizAnswerRecord {
  question: string;       // 題目
  options: string[];      // 選項
  correctAnswer: number;  // 正確答案索引
  selectedAnswer: number; // 使用者選擇索引
  explanation: string;    // 解釋
  isCorrect: boolean;     // 是否答對
}
```

---

## 🔮 後續可擴充方向

- [ ] 將記錄遷移至 Prisma + PostgreSQL（搭配帳號系統）
- [ ] 新增「錯題本」：自動彙整歷史錯題供集中複習
- [ ] 學習成就系統：根據記錄解鎖徽章（如「連續 5 次 80 分以上」）
- [ ] 記錄匯出 / 匯入（JSON 格式），方便跨裝置轉移
- [ ] 圖表化學習曲線（折線圖顯示成績趨勢）

---

*拼音学堂 · 測驗記錄功能 Checklist · 2026*
