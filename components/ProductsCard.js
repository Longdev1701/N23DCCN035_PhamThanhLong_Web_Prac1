import ProductCard from "./ProductCard";

export default function ProductsCard({ products }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Products
          </h2>
          <p className="text-sm leading-6 text-slate-500">
            All products from Fake Store API.
          </p>
        </div>
        <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
          {products.length} items
        </span>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-sm leading-6 text-slate-500 md:col-span-2 xl:col-span-3">
            Chua co du lieu san pham. Commit 1 se them load API.
          </div>
        )}
      </div>
    </section>
  );
}
