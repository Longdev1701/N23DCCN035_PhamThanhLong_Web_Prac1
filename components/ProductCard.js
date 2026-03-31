import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) {
    return null;
  }

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <Link
        href={`/product/${product.id}`}
        className="block border-b border-slate-100 bg-slate-50 p-6"
      >
        {/* Keep a plain img here for the step-by-step exercise before image optimization. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto h-48 w-full object-contain"
        />
      </Link>

      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {product.category}
          </p>
          <Link href={`/product/${product.id}`} className="block">
            <h3 className="line-clamp-2 min-h-12 text-lg font-semibold text-slate-900 transition hover:text-sky-700">
              {product.title}
            </h3>
          </Link>
          <p className="line-clamp-3 text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-2xl font-bold text-emerald-600">
            ${product.price}
          </span>
          <Link
            href={`/product/${product.id}`}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            View detail
          </Link>
        </div>
      </div>
    </article>
  );
}
