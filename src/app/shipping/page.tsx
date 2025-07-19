"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./shipping.css";

export default function ShippingPage() {
  const router = useRouter();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [useGPS, setUseGPS] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Thông tin giao hàng:", { address, city, district, useGPS });

    // Giả lập GPS tracker
    if (useGPS) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log("GPS tọa độ:", pos.coords);
        router.push("/shipping/track");
      });
    } else {
      router.push("/shipping/track");
    }
  };

  return (
    <main className="shipping-page">
      <div className="shipping-container">
        <h1>Nhập địa chỉ giao hàng</h1>
        <form onSubmit={handleSubmit} className="shipping-form">
          <input
            type="text"
            placeholder="Địa chỉ cụ thể (ví dụ: 123 Nguyễn Văn Cừ)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Quận/Huyện"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Tỉnh/Thành phố"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label className="gps-check">
            <input
              type="checkbox"
              checked={useGPS}
              onChange={(e) => setUseGPS(e.target.checked)}
            />
            Dùng GPS định vị vị trí hiện tại
          </label>
          <button type="submit">Xác nhận & Tiếp tục</button>
        </form>
      </div>
    </main>
  );
}
