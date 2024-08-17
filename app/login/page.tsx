import React from "react";

export default function page() {
  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-52 h-80 bg-slate-300 rounded-xl mb-14 flex flex-col p-3">
          <div className="w-full h-12 flex items-center justify-center text-black text-2xl">
            Login
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <input></input>
          </div>
          <div className="w-full h-24"></div>
        </div>
      </div>
    </main>
  );
}
