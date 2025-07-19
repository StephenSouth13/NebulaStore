// src/app/cart/page.tsx
"use client";
import Cart from "@/components/cart/Cart";
import "./cart.css";

export default function CartPage() {
  return (
    <main className="cart-page">
      <div className="cart-container">
        <h1>Giỏ hàng của bạn</h1>
        <Cart />
      </div>
    </main>
  );
}
