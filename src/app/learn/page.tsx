import Link from "next/link";
import { initials, finals, wholeSyllables, tones } from "@/data/pinyin";

const modules = [
  {
    href: "/learn/initials",
    title: "声母",
    subtitle: "Initials",
    count: initials.length,
    description: "声母是汉字音节开头的辅音部分。学会 23 个声母，你就掌握了中文发音的第一步。",
    icon: "🔤",
    gradient: "from-emerald-400 to-teal-500",
    items: ["双唇音：b, p, m", "唇齿音：f", "舌尖音：d, t, n, l", "舌根音：g, k, h"],
  },
  {
    href: "/learn/finals",
    title: "韵母",
    subtitle: "Finals",
    count: finals.length,
    description: "韵母是汉字音节中声母后面的元音部分。包含单韵母、复韵母和鼻韵母。",
    icon: "🎵",
    gradient: "from-sky-400 to-blue-500",
    items: ["单韵母（6个）：a, o, e, i, u, ü", "复韵母（9个）：ai, ei, ui...", "鼻韵母（9个）：an, en, ang..."],
  },
  {
    href: "/learn/syllables",
    title: "整体认读音节",
    subtitle: "Whole Syllables",
    count: wholeSyllables.length,
    description: "整体认读音节不需要拼读，直接整体记忆发音，共 16 个。",
    icon: "📖",
    gradient: "from-violet-400 to-purple-500",
    items: ["zhi, chi, shi, ri", "zi, ci, si", "yi, wu, yu, ye, yue...", "yin, yun, yuan, ying"],
  },
  {
    href: "/learn/tones",
    title: "声调",
    subtitle: "Tones",
    count: tones.length,
    description: "声调是中文的灵魂。同一个音节，声调不同，意思完全不同！",
    icon: "🎶",
    gradient: "from-amber-400 to-orange-500",
    items: ["第一声（阴平）— 高平", "第二声（阳平）— 上升", "第三声（上声）— 降升", "第四声（去声）— 下降"],
  },
];

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          拼音学习中心
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          选择一个模块开始你的拼音学习之旅。建议按照顺序学习，由浅入深。
        </p>
      </div>

      {/* Learning Path */}
      <div className="mb-8 flex items-center justify-center gap-2 text-sm text-gray-400">
        <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-700">
          Step 1
        </span>
        <span>→</span>
        <span className="rounded-full bg-sky-100 px-3 py-1 font-medium text-sky-700">
          Step 2
        </span>
        <span>→</span>
        <span className="rounded-full bg-violet-100 px-3 py-1 font-medium text-violet-700">
          Step 3
        </span>
        <span>→</span>
        <span className="rounded-full bg-amber-100 px-3 py-1 font-medium text-amber-700">
          Step 4
        </span>
      </div>

      {/* Module Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        {modules.map((mod, index) => (
          <Link
            key={mod.href}
            href={mod.href}
            className="group flex flex-col rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 flex items-start justify-between">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${mod.gradient} text-4xl shadow-sm`}
              >
                {mod.icon}
              </div>
              <div className="flex flex-col items-end">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                  Step {index + 1}
                </span>
                <span className="mt-2 text-2xl font-bold text-gray-300">
                  {mod.count}
                </span>
              </div>
            </div>

            <div className="mb-3">
              <h2 className="text-2xl font-bold text-gray-900">{mod.title}</h2>
              <p className="text-sm text-gray-400">{mod.subtitle}</p>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-gray-500">
              {mod.description}
            </p>

            <ul className="mb-6 space-y-1.5">
              {mod.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-emerald-500 transition-transform group-hover:translate-x-1">
              进入学习 →
            </span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-10 text-center text-white shadow-lg">
        <h2 className="text-2xl font-bold">准备好检验学习成果了吗？</h2>
        <p className="mt-2 text-emerald-50">
          完成学习后，来挑战趣味测验吧！
        </p>
        <Link
          href="/quiz"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-emerald-600 shadow-md transition-all hover:bg-emerald-50"
        >
          ✏️ 前往测验
        </Link>
      </div>
    </div>
  );
}
