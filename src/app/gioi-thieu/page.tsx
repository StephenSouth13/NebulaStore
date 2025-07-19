"use client";
import "./gioi-thieu.css";

export default function GioiThieuPage() {
  return (
    <main className="about-page">
      <div className="stars" />

      <section className="about-section">
        <h1>Giới Thiệu NebulaStore</h1>
        <p>
          NebulaStore là nơi kết nối công nghệ và cảm xúc vũ trụ. Chúng tôi mang đến trải nghiệm mua sắm độc đáo với giao diện đậm chất không gian, sản phẩm chất lượng, và dịch vụ tận tâm.
        </p>
      </section>

      <section className="about-section">
        <h2>Sứ mệnh của chúng tôi</h2>
        <ul>
          <li>🌠 Mang công nghệ đến gần hơn với người dùng</li>
          <li>🚀 Tạo ra trải nghiệm mua sắm đầy cảm hứng</li>
          <li>🪐 Khơi gợi trí tưởng tượng thông qua thiết kế vũ trụ</li>
        </ul>
      </section>
    </main>
  );
}
