import React from "react";
import MyTodoList from "./MyTodoList";

export default function MainCanvas() {
  return (
    <div className="w-full h-full flex justify-center flex-wrap gap-3 p-2">
      <MyTodoList />
    </div>
  );
}
