"use client";

import LeftMenu from "@/components/LeftMenu";
import MainCanvas from "@/components/MainCanvas";
import React, { useEffect, useState } from "react";
import { AlignJustify, User } from "react-feather";

const getNameUrl: string = "http://localhost:8080/user/userName";

export default function page() {
  const [leftMenu, setLeftMenu] = useState<Boolean>(false);
  const [userName, setUserName] = useState<String>("user");

  const openLeftMenu = () => {
    setLeftMenu(!leftMenu);
  };

  useEffect(() => {
    fetch(getNameUrl, {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      if (res.status == 200) {
        const userName = await res.text();
        setUserName(userName);
      }
    });
  }, []);

  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="w-full h-[8vh] bg-zinc-900 flex flex-row">
        <div className="h-full w-full p-1 flex items-center gap-4">
          <div
            className="h-10 w-10 bg-black rounded-full ml-4 cursor-pointer flex items-center justify-center"
            onMouseUp={openLeftMenu}
          >
            <AlignJustify className={leftMenu ? "rotate-0" : "rotate-90"} />
          </div>
          <div className="w-24 h-4/5 bg-black rounded-md flex justify-center items-center cursor-pointer ml-4">
            Dashboard
          </div>
          <div className="w-24 h-4/5 bg-black rounded-md flex justify-center items-center cursor-pointer">
            Settings
          </div>
        </div>
        <div className="h-full w-1/6 p-1 flex items-center justify-end mr-4">
          {userName}
        </div>
      </div>
      <div className="w-full h-full flex flex-row overflow-auto">
        {leftMenu && <LeftMenu />}
        <MainCanvas />
      </div>
    </main>
  );
}
