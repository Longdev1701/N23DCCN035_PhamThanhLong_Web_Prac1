export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-bold tracking-tight text-slate-900">
            MyStore
          </p>
          <p className="text-xs text-slate-500">Navbar skeleton</p>
        </div>

        <div className="hidden items-center gap-4 text-sm font-medium text-slate-500 sm:flex">
          <span>Home</span>
          <span>Products</span>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600"
        >
          Cart
        </button>
      </nav>
    </header>
  );
}
