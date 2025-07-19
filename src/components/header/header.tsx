"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";

const navItems = [
  { label: "Trang Chủ", href: "/" },
  { label: "Sản Phẩm", href: "/san-pham" },
  { label: "Giới Thiệu", href: "/gioi-thieu" },
  { label: "Liên Hệ", href: "/lien-he" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = 2; // placeholder

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link href="/" className="logo" aria-label="NebulaStore Home">
            🌌 <span>NebulaStore</span>
          </Link>

          <nav className="nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="right-section">
            <Link href="/cart" className="cart-icon" aria-label="Giỏ hàng">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>

            <Link href="/login" className="auth-link">
              Đăng nhập
            </Link>
            <Link href="/signup" className="auth-link">
              Đăng ký
            </Link>

            <button
              className="theme-toggle"
              aria-label="Chuyển chế độ sáng/tối"
              aria-pressed="false"
              onClick={() => {
                // Future logic for dark mode
              }}
            >
              🌓
            </button>

            <button
              className="menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-link ${pathname === item.href ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link href="/cart" className="mobile-link">
              🛒 Giỏ hàng ({cartCount})
            </Link>
            <Link href="/login" className="mobile-link">
              Đăng nhập
            </Link>
            <Link href="/signup" className="mobile-link">
              Đăng ký
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
