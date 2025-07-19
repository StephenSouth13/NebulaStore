"use client";

import { useEffect, useState } from "react";
import "./track.css";
import { useRouter } from "next/navigation";

export default function ShippingTrackerPage() {
  const [status, setStatus] = useState("Đang xác định vị trí...");
  const router = useRouter();

  useEffect(() => {
    const timer1 = setTimeout(() => setStatus("Đơn hàng đang được xử lý..."), 3000);
    const timer2 = setTimeout(() => setStatus("Đơn hàng đang được giao đến bạn 🚚"), 6000);
    const timer3 = setTimeout(() => router.push("/success"), 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <main className="track-page">
      <div className="track-container">
        <div className="loader"></div>
        <h1>{status}</h1>
        <p>Vui lòng đợi trong giây lát...</p>
      </div>
    </main>
  );
}
