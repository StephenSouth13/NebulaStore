"use client";
import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    console.log("Submitted:", formData);
    // Gửi dữ liệu tới backend ở đây
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Họ và tên"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Xác nhận mật khẩu"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <button type="submit">Đăng ký</button>
    </form>
  );
}
