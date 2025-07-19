"use client";

import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  sale?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    addToCart({ ...product, quantity: 1 });
    window.location.href = "/cart"; // hoặc dùng next/router để chuyển trang
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()} đ</p>
      <button onClick={handleBuyNow}>Mua hàng</button>
    </div>
  );
}
