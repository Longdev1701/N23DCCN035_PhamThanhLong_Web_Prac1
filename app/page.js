import ProductCard from "@/components/ProductCard";


async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}
export default async function HomePage() {
    const products = await getProducts();
    console.log(products)

    return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    )
}