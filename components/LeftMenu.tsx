import React from "react";
import { useAtom, useSetAtom } from "jotai";
import { createTodoAtom, myTodoListAtom } from "@/state/manager";

export default function LeftMenu() {
  const [todoAtom, setTodoAtom] = useAtom(createTodoAtom);
  const [todoListAtom, setTodoListAtom] = useAtom(myTodoListAtom);

  return (
    <div className="h-full w-[28vh] bg-zinc-950 flex flex-col z-10 fixed">
      <div className="w-full h-full p-2 flex flex-col">
        <div
          className="w-full h-8 bg-slate-800 rounded-md mt-2 cursor-pointer flex justify-center items-center"
          onMouseUp={() => {
            if (todoListAtom) {
              setTodoListAtom(false);
              setTodoAtom(true);
            } else {
              setTodoAtom(!todoAtom);
            }
          }}
        >
          Create todo
        </div>
        <div
          className="w-full h-8 bg-slate-800 rounded-md mt-2 cursor-pointer flex justify-center items-center"
          onMouseUp={() => {
            if (todoAtom) {
              setTodoAtom(false);
              setTodoListAtom(true);
            } else {
              setTodoListAtom(!todoListAtom);
            }
          }}
        >
          My todo list
        </div>
      </div>
    </div>
  );
}
