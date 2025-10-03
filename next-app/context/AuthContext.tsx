"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type User = { name: string; email?: string } | null;

type AuthContextValue = {
  user: User;
  login: (u: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("ugc_user") : null;
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) localStorage.setItem("ugc_user", JSON.stringify(user));
      else localStorage.removeItem("ugc_user");
    } catch {}
  }, [user]);

  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
