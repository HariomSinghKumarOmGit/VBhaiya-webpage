"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      router.push("/admin");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-ivory p-6">
      <div className="bg-white p-10 rounded-[28px] w-full max-w-md shadow-2xl">
        <div className="font-serif text-center text-2xl mb-8">inner<span className="text-gold">light</span> admin</div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-ink/20 rounded-xl px-4 py-3 bg-ivory-2 focus:outline-none focus:border-gold"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-ink/20 rounded-xl px-4 py-3 bg-ivory-2 focus:outline-none focus:border-gold"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-ink text-ivory rounded-xl py-3 mt-4 hover:bg-gold transition-colors font-medium"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
