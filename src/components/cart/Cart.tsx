"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-list">
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>
                  {item.quantity} x {item.price.toLocaleString()} đ
                </p>
              </div>
              <span>{(item.quantity * item.price).toLocaleString()} đ</span>
            </div>
          ))}
          <hr />
          <div className="cart-total">
            <strong>Tổng cộng:</strong>
            <span>{total.toLocaleString()} đ</span>
          </div>
          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <Link href="/checkout">
              <button className="checkout-button">Tiến hành thanh toán</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
