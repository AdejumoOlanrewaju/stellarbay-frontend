"use client"
import React, { FormEvent, useState } from 'react'
import { Eye, EyeOff, Mail, Lock, Package, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [form, setForm] = useState({ username: "", email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name)
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        try {
            const res = await fetch("https://stellarbayapi.onrender.com/api/auth/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            })

            const data = await res.json()

            if (!res.ok) {
                setMessage(data.error || "Signup failed")
            } else {
                setMessage("Signup successful! You can now log in.")
                setTimeout(() => {
                    router.push("/login")
                }, 1500)
            }
        } catch (err) {
            console.error(err)
            setMessage("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className='login-page'>
            <div className="flex flex-col-reverse lg:flex-row lg:h-[calc(100vh-80px)]">
                <div className='hidden lg:block w-[40%]'>
                    <img className='w-full block object-cover h-[400px] md:h-full' src="https://images.unsplash.com/photo-1621972660772-6a0427d5e102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlbGwlMjBkcmVzc2VkJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                </div>

                <div className='login-form-container lg:w-[60%]'>
                    <div className="bg-white rounded-2xl p-8 max-w-[750px] w-[90%]">

                        <div className="text-center mb-8">
                            <div className="flex items-center group cursor-pointer logo justify-center mb-5">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg blur-sm opacity-40"></div>
                                    <Package className="h-20 w-20 text-black relative" strokeWidth={2.5} />
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h1>
                            <p className="text-slate-500">Sign in to your account to continue</p>
                        </div>

                        {/* Form */}
                        <form className="space-y-5">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                    Username
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        id="username"
                                        type="text"
                                        name="username"
                                        value={form.username}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                    Email address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4 text-slate-900 border-slate-300 rounded focus:ring-2 focus:ring-slate-900"
                                    />
                                    <span className="ml-2 text-sm text-slate-600">Remember me</span>
                                </label>
                                <a href="#" className="text-sm font-medium text-slate-900 hover:text-slate-700 transition">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Submit Button */}
                            <button
                                disabled={loading}
                                type="button"
                                className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition transform hover:scale-[1.02] active:scale-[0.98]"
                                onClick={handleSubmit}
                            >
                                {loading ? "Signing up..." : "Sign up"}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-slate-500">Or continue with</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="ml-2 text-sm font-medium text-slate-700">Google</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                <span className="ml-2 text-sm font-medium text-slate-700">GitHub</span>
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <p className="text-center text-sm text-slate-600 mt-6">
                            Already have an account?{' '}
                            <Link href="/login" className="font-medium text-slate-900 hover:text-slate-700 transition">
                                Sign In
                            </Link>
                        </p>

                        {message && <p className="mt-4 text-center">{message}</p>}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login
