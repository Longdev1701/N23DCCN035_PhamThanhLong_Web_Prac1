export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="text-lg font-bold tracking-tight text-slate-900">
            MyStore
          </p>
          <p className="text-xs text-slate-500">Navbar skeleton</p>
        </div>

        <button
          type="button"
          aria-label="Open cart"
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600"
        >
          Cart
        </button>

        <div className="flex w-full flex-wrap items-center gap-3 text-sm font-medium text-slate-500 sm:w-auto sm:justify-end">
          <span className="rounded-full bg-slate-100 px-3 py-2">Home</span>
          <span className="rounded-full bg-slate-100 px-3 py-2">Products</span>
        </div>
      </nav>
    </header>
  );
}
