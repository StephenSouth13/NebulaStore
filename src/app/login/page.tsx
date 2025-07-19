"use client";

import LoginForm from "@/components/auth/LoginForm";
import "./login.css";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="login-container">
        <h1>Đăng nhập vào NebulaStore</h1>
        <LoginForm />
      </div>
    </main>
  );
}
