"use client"

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedClient({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // redirect to login with an unauthorized flag
      router.push(`/login?unauthorized=1`);
    }
  }, [user, router]);

  if (!user) return null;

  return <>{children}</>;
}
