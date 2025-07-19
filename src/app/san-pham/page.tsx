"use client";

import { useEffect, useState } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilter from "@/components/product/ProductFilter";
import ProductSort from "@/components/product/ProductSort";
import productsData from "@/data/products.json"; // 👈 Load JSON file

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  sale?: boolean;
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("Tất cả");
  const [sort, setSort] = useState("none");

  useEffect(() => {
    setProducts(productsData);
  }, []);

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
          categories={[
            "Tất cả",
            "Âm thanh",
            "Phụ kiện",
            "Máy tính",
            "Thiết bị",
            "Trang trí",
            "Lưu trữ",
            "Hiển thị"
          ]}
        />
        <ProductSort selected={sort} onChange={setSort} />
      </div>
      <ProductGrid products={filtered} />
    </main>
  );
}
