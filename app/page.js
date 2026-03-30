import ProductsCard from "@/components/ProductsCard";

async function loadProductAPI() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  } catch (error) {
    console.error("loadProductAPI error:", error);
    return [];
  }
}

export default async function HomePage() {
  const products = await loadProductAPI();

  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Product Demo
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Product list practice
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          Start from this blank frame, then add each feature in 5 separate git
          commits.
        </p>
      </div>

      <ProductsCard products={products} />
    </section>
  );
}
