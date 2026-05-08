"use client";

import { useState } from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import { loginUser } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      setLoading(true);

      const response = await loginUser(data);

      localStorage.setItem("token", response.token);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginForm
      onSubmit={handleLogin}
      loading={loading}
    />
  );
}