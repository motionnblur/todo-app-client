import React from "react";

export default function page() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="w-full h-[9vh] bg-gray-900"></div>
      <div className="w-full h-full flex flex-row">
        <div className="h-full w-[20vh] bg-gray-900"></div>
        <div className="h-full w-full bg-gray-800"></div>
      </div>
    </main>
  );
}
