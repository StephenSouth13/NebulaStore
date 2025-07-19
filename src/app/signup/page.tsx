// src/app/signup/page.tsx
"use client";
import SignupForm from "@/components/auth/SignupForm"
import "./signup.css";

export default function SignupPage() {
  return (
    <main className="signup-page">
      <div className="signup-container">
        <h1>Đăng ký tài khoản</h1>
        <SignupForm />
      </div>
    </main>
  );
}



