"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./checkout.css";

export default function CheckoutPage() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      setError("Vui lòng nhập địa chỉ giao hàng.");
      return;
    }
    localStorage.setItem("shipping_address", address);
    router.push("/shipping");
  };

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <h1>Thông tin giao hàng</h1>
        <form onSubmit={handleSubmit} className="checkout-form">
          <label htmlFor="address">Địa chỉ nhận hàng:</label>
          <textarea
            id="address"
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Đường Vũ Trụ, Quận Galaxy, Thành phố Nebula"
          />
          {error && <p className="error-msg">{error}</p>}
          <button type="submit">Tiếp tục đến giao hàng</button>
        </form>
      </div>
    </main>
  );
}
