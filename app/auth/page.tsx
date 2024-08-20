"use client";

import React, { useEffect } from "react";

const url: string = "http://localhost:8080/user/auth";

export default function page() {
  useEffect(() => {
    fetch(url, {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status == 200) {
        alert("ok");
      }
    });
  }, []);
  return <div>page</div>;
}
