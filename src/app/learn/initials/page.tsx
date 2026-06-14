import Link from "next/link";
import { initials } from "@/data/pinyin";
import PinyinCard from "@/components/PinyinCard";

export const metadata = {
  title: "声母学习 — 拼音学堂",
};

export default function InitialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400">
        <Link href="/learn" className="hover:text-emerald-500">
          学习中心
        </Link>
        <span>/</span>
        <span className="font-medium text-gray-600">声母</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-4xl shadow-sm">
            🔤
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              声母
              <span className="ml-3 text-lg font-normal text-gray-400">
                Initials · {initials.length} 个
              </span>
            </h1>
          </div>
        </div>
        <div className="rounded-xl bg-emerald-50 p-5">
          <h2 className="mb-2 font-semibold text-emerald-800">📖 什么是声母？</h2>
          <p className="text-sm leading-relaxed text-emerald-700">
            声母是汉字音节开头的辅音部分。普通话共有 23 个声母。
            声母不能单独成音节，必须和韵母结合才能拼出汉字的读音。
            点击每个卡片上的 🔈 按钮可以听到标准发音。
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {initials.map((item) => (
          <PinyinCard key={item.pinyin} item={item} color="emerald" />
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          ← 返回学习中心
        </Link>
        <Link
          href="/learn/finals"
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-600"
        >
          下一步：韵母 →
        </Link>
      </div>
    </div>
  );
}
