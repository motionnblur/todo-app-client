import React from "react";
import MyTodoList from "./MyTodoList";
import { useAtomValue } from "jotai";
import { createTodoAtom } from "@/state/manager";

export default function MainCanvas() {
  const use_setTodoAtom = useAtomValue(createTodoAtom);
  console.log("a");

  return (
    <div className="w-full h-full flex justify-center flex-wrap gap-3 p-2">
      <MyTodoList />
    </div>
  );
}
