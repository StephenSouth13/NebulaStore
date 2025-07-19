"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "./success.css";

export default function OrderSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/"); // về Trang Chủ sau vài giây
    }, 8000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="success-page">
      <div className="success-box">
        <div className="checkmark-circle">
          <div className="background"></div>
          <div className="checkmark"></div>
        </div>
        <h1>🎉 Đơn hàng đã được xác nhận!</h1>
        <p>Cảm ơn bạn đã mua hàng tại <strong>NebulaStore</strong>!</p>
        <p>Bạn sẽ được chuyển về Trang chủ trong giây lát...</p>
      </div>
    </main>
  );
}
