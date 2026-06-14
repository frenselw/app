import Link from "next/link";
import { tones } from "@/data/pinyin";
import PronounceButton from "@/components/PronounceButton";

export const metadata = {
  title: "声调学习 — 拼音学堂",
};

export default function TonesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400">
        <Link href="/learn" className="hover:text-amber-500">
          学习中心
        </Link>
        <span>/</span>
        <span className="font-medium text-gray-600">声调</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-4xl shadow-sm">
            🎶
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              声调
              <span className="ml-3 text-lg font-normal text-gray-400">
                Tones · {tones.length} 种
              </span>
            </h1>
          </div>
        </div>
        <div className="rounded-xl bg-amber-50 p-5">
          <h2 className="mb-2 font-semibold text-amber-800">
            📖 什么是声调？
          </h2>
          <p className="text-sm leading-relaxed text-amber-700">
            声调是汉字读音的高低变化。普通话有<strong>四个声调</strong>（第一声到第四声）和<strong>一个轻声</strong>。
            声调不同，意思完全不同！例如：「妈(mā)」「麻(má)」「马(mǎ)」「骂(mà)」四个字拼音相同，但声调不同，意思各异。
          </p>
        </div>
      </div>

      {/* Classic example */}
      <div className="mb-10 rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-8">
        <h2 className="mb-6 text-center text-xl font-bold text-gray-800">
          🔑 经典声调对比：ma 的四种读法
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tones.slice(0, 4).map((tone) => (
            <div
              key={tone.name}
              className="flex flex-col items-center rounded-xl bg-white p-4 shadow-sm"
            >
              <span className="text-5xl font-bold text-gray-800">
                {tone.example}
              </span>
              <span className="mt-2 text-xl font-medium text-amber-600">
                {tone.examplePinyin}
              </span>
              <span className="mt-1 text-xs text-gray-400">{tone.name}</span>
              <div className="mt-3">
                <PronounceButton text={tone.example} size="sm" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tone Detail Cards */}
      <div className="space-y-4">
        {tones.map((tone) => (
          <div
            key={tone.name}
            className="flex flex-col gap-4 rounded-2xl border-2 border-amber-100 bg-white p-6 shadow-sm transition-all hover:border-amber-300 hover:shadow-lg sm:flex-row sm:items-center"
          >
            {/* Symbol */}
            <div className="flex items-center gap-4 sm:w-64">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-5xl font-bold text-amber-600">
                {tone.symbol}
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {tone.name}
                </h3>
                <span className="text-sm text-gray-400">
                  调值 {tone.value}
                </span>
              </div>
            </div>

            {/* Example */}
            <div className="flex items-center gap-3 sm:w-40">
              <span className="text-4xl font-bold text-gray-800">
                {tone.example}
              </span>
              <div>
                <span className="block text-lg font-medium text-amber-600">
                  {tone.examplePinyin}
                </span>
              </div>
              <PronounceButton text={tone.example} size="sm" />
            </div>

            {/* Description */}
            <div className="flex-1">
              <p className="text-sm leading-relaxed text-gray-500">
                {tone.description}
              </p>
              <p className="mt-1 text-xs text-gray-400">{tone.gesture}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
        <Link
          href="/learn/syllables"
          className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          ← 上一步：整体认读音节
        </Link>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
        >
          ✏️ 前往测验 →
        </Link>
      </div>
    </div>
  );
}
