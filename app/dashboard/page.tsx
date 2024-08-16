import React from "react";
import { User } from "react-feather";

export default function page() {
  const LeftMenu = () => {
    return <div className="h-full w-[28vh] bg-zinc-950"></div>;
  };
  const MainCanvas = () => {
    return <div className="h-full w-full bg-neutral-800"></div>;
  };
  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="w-full h-[8vh] bg-zinc-900 flex flex-row">
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
        <LeftMenu />
        <MainCanvas />
      </div>
    </main>
  );
}
