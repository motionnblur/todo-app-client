"use client";

import React, { useEffect } from "react";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export default function page() {
  useEffect(() => {
    const res: boolean = auth();
    if (!res) redirect("/login");
  }, []);
  return <div>page</div>;
}
