"use client";

import Link from "next/link";
import "./footer.css";
import { Mail, Phone, MapPin, Github, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-logo">NebulaStore</h2>
          <p className="footer-description">
            Nền tảng mua sắm công nghệ vũ trụ hiện đại.
          </p>
          <div className="footer-contact">
            <p><Mail size={16} /> stephensouth1307@gmail.com</p>
            <p><Phone size={16} /> 0979 137 018</p>
            <p><MapPin size={16} /> Ho Chi Minh City, Vietnam</p>
            <p><Github size={16} /> <a href="https://github.com/StephenSouth13" target="_blank">StephenSouth13</a></p>
          </div>
        </div>

        <div className="footer-column">
          <h4>Liên kết</h4>
          <ul>
            <li><Link href="/privacy">Chính sách bảo mật</Link></li>
            <li><Link href="/terms">Điều khoản dịch vụ</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/gop-y">Góp ý</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Nhận tin</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Nhập email của bạn" />
            <button type="submit">Gửi</button>
          </form>
          <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="https://github.com/StephenSouth13" target="_blank"><Github size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} NebulaStore. All rights reserved.
      </div>
    </footer>
  );
}
