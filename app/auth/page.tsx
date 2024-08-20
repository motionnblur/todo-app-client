"use client";

import React, { useEffect } from "react";
import { auth } from "./auth";

export default function page() {
  useEffect(() => {
    auth();
  }, []);
  return <div>page</div>;
}
