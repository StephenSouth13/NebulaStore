// src/components/cart/Cart.tsx
"use client";

import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();

  const handleCheckout = () => {
    // Chuyển sang trang thanh toán
    router.push("/checkout/payment");
  };

  return (
    <div className="cart-items">
      {/* Giỏ hàng - thay bằng logic map sản phẩm thực tế */}
      <p>Sản phẩm A x1 - 1.000.000đ</p>
      <p>Sản phẩm B x2 - 2.000.000đ</p>

      {/* Nút thanh toán */}
      <button className="checkout-button" onClick={handleCheckout}>
        Thanh toán
      </button>
    </div>
  );
}
