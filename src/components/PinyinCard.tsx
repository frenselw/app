import PronounceButton from "./PronounceButton";
import type { PinyinItem } from "@/data/pinyin";

interface PinyinCardProps {
  item: PinyinItem;
  /** 卡片色调 */
  color?: "emerald" | "sky" | "violet" | "amber";
}

const colorClasses = {
  emerald: "border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100",
  sky: "border-sky-200 hover:border-sky-400 hover:shadow-sky-100",
  violet: "border-violet-200 hover:border-violet-400 hover:shadow-violet-100",
  amber: "border-amber-200 hover:border-amber-400 hover:shadow-amber-100",
};

const accentClasses = {
  emerald: "bg-emerald-50 text-emerald-700",
  sky: "bg-sky-50 text-sky-700",
  violet: "bg-violet-50 text-violet-700",
  amber: "bg-amber-50 text-amber-700",
};

/**
 * 拼音卡片 — 展示单个拼音的详细资讯
 */
export default function PinyinCard({ item, color = "emerald" }: PinyinCardProps) {
  return (
    <div
      className={`group flex flex-col gap-4 rounded-2xl border-2 bg-white p-6 shadow-sm transition-all hover:shadow-lg ${colorClasses[color]}`}
    >
      {/* 拼音主体 */}
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex min-w-[3.5rem] items-center justify-center rounded-xl px-4 py-2 text-4xl font-bold ${accentClasses[color]}`}
        >
          {item.pinyin}
        </span>
        <PronounceButton text={item.pinyin} size="md" />
      </div>

      {/* 范例字 */}
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <span className="text-5xl font-bold text-gray-800">{item.example}</span>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">范例字</span>
          <span className="text-lg text-gray-600">{item.examplePinyin}</span>
        </div>
        <PronounceButton text={item.example} size="sm" className="ml-auto" />
      </div>

      {/* 范例词组 */}
      <div className="flex items-center gap-3">
        <span className="text-2xl font-medium text-gray-700">{item.word}</span>
        <span className="text-sm text-gray-400">{item.wordPinyin}</span>
        <PronounceButton text={item.word} size="sm" className="ml-auto" />
      </div>

      {/* 记忆口诀 */}
      {item.tip && (
        <div className="rounded-xl bg-gray-50 px-4 py-3">
          <p className="text-sm leading-relaxed text-gray-500">
            💡 {item.tip}
          </p>
        </div>
      )}
    </div>
  );
}
