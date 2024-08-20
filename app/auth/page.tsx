"use client";

import React, { useEffect } from "react";
import { auth } from "./auth";
import { useRouter } from "next/navigation";

export default function page() {
  const { push } = useRouter();

  useEffect(() => {
    auth()
      .then((isAuthenticated) => {
        if (!isAuthenticated) {
          push("/login");
        }
      })
      .catch((error) => {
        console.error("Authentication error:", error);
      });
  }, []);
  return <div>page</div>;
}
