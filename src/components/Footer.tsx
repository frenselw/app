export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 text-sm font-bold text-white">
              拼
            </span>
            <span className="font-medium text-gray-600">拼音学堂</span>
          </div>
          <p className="text-sm text-gray-400">
            让学习拼音变得简单有趣 · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
