// 测验记录工具库
// 文件：src/lib/quiz-history.ts
// 用途：使用 localStorage 储存与读取每次测验的结果

// ============================================
// 类型定义
// ============================================

/** 单题作答记录（快照） */
export interface QuizAnswerRecord {
  question: string;
  options: string[];
  correctAnswer: number;
  selectedAnswer: number;
  explanation: string;
  isCorrect: boolean;
}

/** 一次完整测验的记录 */
export interface QuizRecord {
  id: string;
  /** ISO 日期字串 */
  date: string;
  score: number;
  total: number;
  percentage: number;
  answers: QuizAnswerRecord[];
}

// ============================================
// 常数
// ============================================

const STORAGE_KEY = "pinyin-quiz-history";
const MAX_RECORDS = 50; // 最多保留 50 笔记录

// ============================================
// 工具函数
// ============================================

/** 产生唯一 ID */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/** 确认 localStorage 可用（SSR 安全） */
function isLocalStorageAvailable(): boolean {
  try {
    if (typeof window === "undefined") return false;
    const test = "__test__";
    window.localStorage.setItem(test, test);
    window.localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

// ============================================
// 公开 API
// ============================================

/** 储存一笔测验记录 */
export function saveQuizRecord(
  score: number,
  total: number,
  answers: QuizAnswerRecord[]
): QuizRecord | null {
  if (!isLocalStorageAvailable()) return null;

  const record: QuizRecord = {
    id: generateId(),
    date: new Date().toISOString(),
    score,
    total,
    percentage: Math.round((score / total) * 100),
    answers,
  };

  const history = getQuizHistory();
  history.unshift(record); // 最新的放最前面

  // 超过上限则截断
  if (history.length > MAX_RECORDS) {
    history.length = MAX_RECORDS;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    return null;
  }

  return record;
}

/** 取得所有测验记录（ newest first ） */
export function getQuizHistory(): QuizRecord[] {
  if (!isLocalStorageAvailable()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as QuizRecord[];
  } catch {
    return [];
  }
}

/** 清除所有测验记录 */
export function clearQuizHistory(): boolean {
  if (!isLocalStorageAvailable()) return false;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}

/** 删除指定一笔记录 */
export function deleteQuizRecord(id: string): boolean {
  if (!isLocalStorageAvailable()) return false;
  const history = getQuizHistory();
  const filtered = history.filter((r) => r.id !== id);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch {
    return false;
  }
}

/** 格式化日期为本地化字串 */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** 取得统计摘要 */
export function getQuizStats(): {
  totalAttempts: number;
  averageScore: number;
  bestScore: number;
  latestScore: number;
} {
  const history = getQuizHistory();
  if (history.length === 0) {
    return { totalAttempts: 0, averageScore: 0, bestScore: 0, latestScore: 0 };
  }
  const percentages = history.map((r) => r.percentage);
  return {
    totalAttempts: history.length,
    averageScore: Math.round(
      percentages.reduce((a, b) => a + b, 0) / percentages.length
    ),
    bestScore: Math.max(...percentages),
    latestScore: history[0].percentage,
  };
}
