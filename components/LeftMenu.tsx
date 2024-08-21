import React from "react";

export default function LeftMenu() {
  return (
    <div className="h-full w-[28vh] bg-zinc-950 flex flex-col z-10">
      <div className="w-full h-full p-2 flex flex-col">
        <div className="w-full h-8 bg-slate-800 rounded-md mt-2 cursor-pointer flex justify-center items-center">
          Create todo
        </div>
        <div className="w-full h-8 bg-slate-800 rounded-md mt-2 cursor-pointer flex justify-center items-center">
          My todo list
        </div>
      </div>
    </div>
  );
}
