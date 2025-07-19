import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
