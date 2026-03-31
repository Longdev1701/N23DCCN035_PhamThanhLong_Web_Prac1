import Link from "next/link";
import { notFound } from "next/navigation";

async function loadProductDetail(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) {
    notFound();
  }

  return response.json();
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await loadProductDetail(id);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          Back to products
        </Link>
      </div>

      <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="flex items-center justify-center border-b border-slate-200 bg-slate-50 p-6 sm:p-10 lg:border-b-0 lg:border-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.title}
              className="h-72 w-full max-w-sm object-contain sm:h-96"
            />
          </div>

          <div className="space-y-6 p-6 sm:p-8 lg:p-10">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                {product.category}
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {product.title}
              </h1>
              <p className="text-lg font-semibold text-emerald-600 sm:text-2xl">
                ${product.price}
              </p>
            </div>

            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              {product.description}
            </p>

            <div className="flex flex-col gap-3 rounded-3xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-900">
                  Product ID: #{product.id}
                </p>
                <p className="text-sm text-slate-500">
                  Rating: {product.rating?.rate ?? "N/A"} / 5
                </p>
              </div>

              <button
                type="button"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
