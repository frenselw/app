import Link from "next/link";
import { finals } from "@/data/pinyin";
import PinyinCard from "@/components/PinyinCard";

export const metadata = {
  title: "韵母学习 — 拼音学堂",
};

// 按类别分组
const singleFinals = finals.slice(0, 6);   // 单韵母
const compoundFinals = finals.slice(6, 15); // 复韵母
const nasalFinals = finals.slice(15, 24);   // 鼻韵母

export default function FinalsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400">
        <Link href="/learn" className="hover:text-sky-500">
          学习中心
        </Link>
        <span>/</span>
        <span className="font-medium text-gray-600">韵母</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 text-4xl shadow-sm">
            🎵
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              韵母
              <span className="ml-3 text-lg font-normal text-gray-400">
                Finals · {finals.length} 个
              </span>
            </h1>
          </div>
        </div>
        <div className="rounded-xl bg-sky-50 p-5">
          <h2 className="mb-2 font-semibold text-sky-800">📖 什么是韵母？</h2>
          <p className="text-sm leading-relaxed text-sky-700">
            韵母是汉字音节中声母后面的元音部分。普通话共有 24 个韵母，
            分为三类：<strong>单韵母</strong>（6个）、<strong>复韵母</strong>（9个）和<strong>鼻韵母</strong>（9个）。
            韵母可以单独成音节。
          </p>
        </div>
      </div>

      {/* 单韵母 */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
          <span className="rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
            单韵母
          </span>
          <span className="text-sm font-normal text-gray-400">
            由一个元音组成 · {singleFinals.length} 个
          </span>
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {singleFinals.map((item) => (
            <PinyinCard key={item.pinyin} item={item} color="sky" />
          ))}
        </div>
      </section>

      {/* 复韵母 */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
          <span className="rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
            复韵母
          </span>
          <span className="text-sm font-normal text-gray-400">
            由两个元音组成 · {compoundFinals.length} 个
          </span>
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {compoundFinals.map((item) => (
            <PinyinCard key={item.pinyin} item={item} color="sky" />
          ))}
        </div>
      </section>

      {/* 鼻韵母 */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
          <span className="rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
            鼻韵母
          </span>
          <span className="text-sm font-normal text-gray-400">
            元音加鼻音结尾 · {nasalFinals.length} 个
          </span>
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {nasalFinals.map((item) => (
            <PinyinCard key={item.pinyin} item={item} color="sky" />
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
        <Link
          href="/learn/initials"
          className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          ← 上一步：声母
        </Link>
        <Link
          href="/learn/syllables"
          className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-600"
        >
          下一步：整体认读音节 →
        </Link>
      </div>
    </div>
  );
}
