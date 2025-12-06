"use client";

import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/config/firebaseConfig";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleSignupPasswordVisibility = () => setShowSignupPassword(!showSignupPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Sign-in failed", error);
    }
  };

  return (
    <main className="min-h-[80vh] bg-[var(--color-background)] text-[var(--color-text)] flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-md p-6 border border-[var(--color-secondary)] grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Login Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-english-serif text-[var(--color-primary)]">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-semibold">Email</label>
              <input type="email" placeholder="Enter your email" className="input-style" required />
            </div>
            <div className="relative">
              <label className="block mb-1 text-sm font-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input-style pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-8.5 text-sm text-gray-500 hover:text-[var(--color-accent)]"
              >
                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-primary)] text-white py-2 rounded hover:bg-[var(--color-accent)] transition font-english-serif"
            >
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="w-full border border-gray-300 py-2 rounded hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
          >
            Sign in with Google
          </button>
        </div>

        {/* Signup Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-english-serif text-[var(--color-primary)]">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-semibold">Full Name</label>
              <input type="text" placeholder="Enter your name" className="input-style" required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">Email</label>
              <input type="email" placeholder="Enter your email" className="input-style" required />
            </div>
            <div className="relative">
              <label className="block mb-1 text-sm font-semibold">Password</label>
              <input
                type={showSignupPassword ? "text" : "password"}
                placeholder="Create a password"
                className="input-style pr-10"
                required
              />
              <button
                type="button"
                onClick={toggleSignupPasswordVisibility}
                className="absolute  text-sm text-gray-500 hover:text-[var(--color-accent)]"
              >
                {showSignupPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
              </button>
            </div>
            <div className="relative">
              <label className="block mb-1 text-sm font-semibold">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="input-style pr-10"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-8.5 text-sm text-gray-500 hover:text-[var(--color-accent)]"
              >
                {showConfirmPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-primary)] text-white py-2 rounded hover:bg-[var(--color-accent)] transition font-english-serif"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}