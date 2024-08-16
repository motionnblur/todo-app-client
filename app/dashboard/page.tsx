import React from "react";
import { User } from "react-feather";

export default function page() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="w-full h-[8vh] bg-gray-900 flex flex-row">
        <div className="h-full w-full p-1 flex items-center gap-4">
          <div className="h-10 w-10 bg-black rounded-full ml-4 cursor-pointer flex items-center justify-center">
            <User />
          </div>
          <div className="w-24 h-4/5 bg-black rounded-md flex justify-center items-center cursor-pointer ml-4">
            Dashboard
          </div>
          <div className="w-24 h-4/5 bg-black rounded-md flex justify-center items-center cursor-pointer">
            Settings
          </div>
        </div>
        <div className="h-full w-1/6 p-1 flex items-center"></div>
      </div>
      <div className="w-full h-full flex flex-row">
        <div className="h-full w-[20vh] bg-gray-600"></div>
        <div className="h-full w-full bg-gray-800"></div>
      </div>
    </main>
  );
}
