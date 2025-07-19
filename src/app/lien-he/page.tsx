"use client";
import "./lien-he.css";

export default function LienHePage() {
  return (
    <main className="contact-page">
      <div className="stars" />

      <section className="contact-info">
        <h1>Liên Hệ Với Chúng Tôi</h1>
        <p>Email: <a href="mailto:stephensouth1307@gmail.com">stephensouth1307@gmail.com</a></p>
        <p>Điện thoại: 0979 137 018</p>
        <p>Địa chỉ: TP. Hồ Chí Minh, Việt Nam</p>
      </section>

      <section className="contact-form">
        <h2>Gửi Tin Nhắn</h2>
        <form>
          <input type="text" placeholder="Họ và tên" required />
          <input type="email" placeholder="Email của bạn" required />
          <textarea rows={5} placeholder="Nội dung tin nhắn..." required />
          <button type="submit">Gửi đi 🚀</button>
        </form>
      </section>
    </main>
  );
}
