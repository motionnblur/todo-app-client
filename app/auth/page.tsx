"use client";

import React, { useEffect } from "react";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export default function page() {
  useEffect(() => {
    auth()
      .then((isAuthenticated) => {
        console.log(isAuthenticated);
      })
      .catch((error) => {
        console.error("Authentication error:", error);
      });
  }, []);
  return <div>page</div>;
}
