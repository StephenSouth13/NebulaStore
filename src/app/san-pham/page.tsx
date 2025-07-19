"use client";

import { useState } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilter from "@/components/product/ProductFilter";
import ProductSort from "@/components/product/ProductSort";
import ProductCard from "@/components/product/ProductCard";
const initialProducts = [
  { id: 1, name: "Tai nghe không dây", price: 1200000, category: "Âm thanh", sale: true },
  { id: 2, name: "Chuột gaming RGB", price: 890000, category: "Phụ kiện", sale: false },
  { id: 3, name: "Laptop vũ trụ", price: 18000000, category: "Máy tính", sale: true },
  { id: 4, name: "Bàn phím cơ", price: 1450000, category: "Phụ kiện", sale: false },
  { id: 5, name: "Camera hành trình", price: 2200000, category: "Thiết bị", sale: true },
  { id: 6, name: "Đèn LED decor", price: 320000, category: "Trang trí", sale: false },
  { id: 7, name: "Ổ cứng SSD", price: 980000, category: "Lưu trữ", sale: false },
  { id: 8, name: "Màn hình 4K", price: 4900000, category: "Hiển thị", sale: true },
];

export default function ProductPage() {
  const [products, setProducts] = useState(initialProducts);
  const [category, setCategory] = useState("Tất cả");
  const [sort, setSort] = useState("none");

  const filtered = products
    .filter((p) => category === "Tất cả" || p.category === category)
    .sort((a, b) =>
      sort === "asc" ? a.price - b.price : sort === "desc" ? b.price - a.price : 0
    );

  return (
    <main className="product-page">
      <div className="product-controls">
        <ProductFilter
          selected={category}
          onChange={setCategory}
          categories={["Tất cả", "Âm thanh", "Phụ kiện", "Máy tính", "Thiết bị", "Trang trí", "Lưu trữ", "Hiển thị"]}
        />
        <ProductSort selected={sort} onChange={setSort} />
      </div>
      <ProductGrid products={filtered} />
    </main>
  );
}
