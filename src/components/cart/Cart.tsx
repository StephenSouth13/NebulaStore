// src/components/cart/Cart.tsx
"use client";

import { useRouter } from "next/navigation";

const fakeCart = [
  { id: 1, name: "Tai nghe Nebula X1", price: 1200000, quantity: 1 },
  { id: 2, name: "Chuột NebulaPro", price: 850000, quantity: 2 },
];

export default function Cart() {
  const router = useRouter();
  const total = fakeCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    router.push("/checkout/payment"); // Chuyển sang bước thanh toán
  };

  return (
    <div className="cart-list">
      {fakeCart.map((item) => (
        <div className="cart-item" key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <p>{item.quantity} x {item.price.toLocaleString()} đ</p>
          </div>
          <span>
            {(item.quantity * item.price).toLocaleString()} đ
          </span>
        </div>
      ))}
      <hr />
      <div className="cart-total">
        <strong>Tổng cộng:</strong>
        <span>{total.toLocaleString()} đ</span>
      </div>

      <button className="checkout-button" onClick={handleCheckout}>
        Tiến hành thanh toán
      </button>
    </div>
  );
}
