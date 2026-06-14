import Link from "next/link";
import { wholeSyllables } from "@/data/pinyin";
import PinyinCard from "@/components/PinyinCard";

export const metadata = {
  title: "整体认读音节 — 拼音学堂",
};

export default function SyllablesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400">
        <Link href="/learn" className="hover:text-violet-500">
          学习中心
        </Link>
        <span>/</span>
        <span className="font-medium text-gray-600">整体认读音节</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 text-4xl shadow-sm">
            📖
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              整体认读音节
              <span className="ml-3 text-lg font-normal text-gray-400">
                Whole Syllables · {wholeSyllables.length} 个
              </span>
            </h1>
          </div>
        </div>
        <div className="rounded-xl bg-violet-50 p-5">
          <h2 className="mb-2 font-semibold text-violet-800">
            📖 什么是整体认读音节？
          </h2>
          <p className="text-sm leading-relaxed text-violet-700">
            整体认读音节是指<strong>不需要拼读</strong>，直接整体记忆发音的音节。
            普通话共有 16 个整体认读音节，它们大多由声母加韵母组成，但发音时不需要分开拼读，
            而是作为一个整体来读。这些音节在日常生活中使用频率很高，需要熟练记忆。
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wholeSyllables.map((item) => (
          <PinyinCard key={item.pinyin} item={item} color="violet" />
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
        <Link
          href="/learn/finals"
          className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          ← 上一步：韵母
        </Link>
        <Link
          href="/learn/tones"
          className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-600"
        >
          下一步：声调 →
        </Link>
      </div>
    </div>
  );
}
