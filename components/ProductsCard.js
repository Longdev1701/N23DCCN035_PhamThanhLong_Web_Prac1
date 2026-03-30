import ProductCard from "./ProductCard";

export default function ProductsCard({ products }) {
  return (
    <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Products</h2>
          <p className="text-sm text-slate-500">
            Empty wrapper for the next commits.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
          {products.length} items
        </span>
      </div>

      <div className="space-y-3">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-sm text-slate-500">
            Chua co du lieu san pham. Commit 1 se them load API.
          </div>
        )}
      </div>
    </section>
  );
}
