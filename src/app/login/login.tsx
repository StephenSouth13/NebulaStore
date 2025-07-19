"use client";

import LoginForm from "@/components/auth/LoginForm";
import "./login.css";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <h1>Đăng nhập vào NebulaStore</h1>
      <LoginForm />
    </main>
  );
}
