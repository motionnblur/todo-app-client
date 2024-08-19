"use client";
import React, { useState } from "react";

export default function page() {
  const [typePassword, setTypePassword] = useState<String>("password");

  const getPasswState = (): string => {
    if (typePassword === "password") return "text";
    return "password";
  };

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-52 h-80 bg-slate-300 rounded-xl mb-14 flex flex-col p-5">
          <div className="w-full h-12 flex items-center justify-center text-black text-xl">
            Login
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <input
              type="text"
              className="w-full h-10 rounded-md text-stone-900 p-2"
              placeholder=" Username"
            />
            <input
              type={`${typePassword}`}
              className="w-full h-10 rounded-md text-stone-900 p-2"
              placeholder=" Password"
            />
            <div className="w-full h-6 flex flex-row">
              <input
                type="checkbox"
                className="w-1/6 h-4 rounded-md cursor-pointer"
                onMouseUp={() => {
                  setTypePassword(getPasswState);
                }}
              />
              <div className="text-black text-xs ml-1">Show password</div>
            </div>
          </div>
          <div className="w-full h-32 flex justify-center items-center flex-col gap-1">
            <div className="w-full h-9 bg-cyan-500 rounded-xl flex items-center justify-center text-sl cursor-pointer">
              Login
            </div>
            <div className="text-black text-xs flex flex-row gap-1">
              Forgot
              <div className="text-sky-500 text-xs font-bold cursor-pointer">
                password
              </div>
              ?
            </div>
            <div className="text-sky-500 text-xs font-bold cursor-pointer">
              Sign up
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
