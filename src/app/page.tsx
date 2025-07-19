"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "./home/home.css";

export default function HomePage() {
  return (
    <main className="home-wrapper">
      <div className="stars" />
      <div className="cosmic-overlay">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="home-title"
        >
          Chào mừng đến với <span>NebulaStore</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="home-subtitle"
        >
          Khám phá thế giới công nghệ hiện đại giữa không gian vũ trụ 🌌
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="home-buttons"
        >
          <Link href="/san-pham" className="btn-primary">
            🚀 Mua ngay
          </Link>
          <Link href="/gioi-thieu" className="btn-secondary">
            🌠 Về chúng tôi
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
