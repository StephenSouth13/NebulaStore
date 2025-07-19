import "./ProductCard.css";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={`/placeholder.svg?text=${product.name}`} alt={product.name} />
        {product.sale && <span className="badge">Sale</span>}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()} đ</p>
      </div>
    </div>
  );
}
