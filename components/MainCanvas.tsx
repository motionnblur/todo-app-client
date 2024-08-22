import React from "react";
import MyTodoList from "./MyTodoList";
import { useAtomValue } from "jotai";
import { createTodoAtom, myTodoListAtom } from "@/state/manager";
import TodoTemp from "./TodoTemp";

export default function MainCanvas() {
  const use_setTodoAtom = useAtomValue(createTodoAtom);
  const use_myTodoListAtom = useAtomValue(myTodoListAtom);

  return (
    <div className="w-full h-full flex justify-center flex-wrap gap-3 p-2">
      {use_setTodoAtom && <TodoTemp />}
      {use_myTodoListAtom && <MyTodoList />}
    </div>
  );
}
