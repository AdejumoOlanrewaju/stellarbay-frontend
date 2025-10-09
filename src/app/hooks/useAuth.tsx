// src/app/context/AuthContext.tsx
"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"

type AuthContextType = {
  isAuthenticated: boolean
  user: any
  login: (tokens: { access: string; refresh: string }) => Promise<void>
  logout: () => void
  accessToken: string | null
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)

  // Load from localStorage on startup
  useEffect(() => {
    const storedAccess = localStorage.getItem("accessToken")
    const storedRefresh = localStorage.getItem("refreshToken")
    const storedUser = localStorage.getItem("user")

    if (storedAccess && storedRefresh) {
      setAccessToken(storedAccess)
      setRefreshToken(storedRefresh)
      if (storedUser) {
        setUser(JSON.parse(storedUser))
        setIsAuthenticated(true)
      } else {
        fetchProfile(storedAccess)
      }
    }
  }, [])

  // ✅ Login using tokens
  const login = async (tokens: { access: string; refresh: string }) => {
    const { access, refresh } = tokens
    setAccessToken(access)
    setRefreshToken(refresh)
    localStorage.setItem("accessToken", access)
    localStorage.setItem("refreshToken", refresh)
    await fetchProfile(access)
  }

  // ✅ Fetch profile from Django API
  const fetchProfile = async (token: string) => {
    try {
      const res = await fetch("https://stellarbayapi.onrender.com/api/profile/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) throw new Error("Failed to fetch user profile")

      const profile = await res.json()
      console.log(profile)
      setUser(profile)
      setIsAuthenticated(true)
      localStorage.setItem("user", JSON.stringify(profile))
    } catch (error) {
      console.error("Profile fetch error:", error)
      logout()
    }
  }

  // ✅ Logout
  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setAccessToken(null)
    setRefreshToken(null)
    localStorage.clear()
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, accessToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
