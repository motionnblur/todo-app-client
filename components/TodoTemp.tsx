"use client";

import TodoForm from "@/components/TodoForm";
import { useState, useRef } from "react";
import { Plus } from "react-feather";

export default function TodoTemp() {
  const [todoName, setTodoName] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="w-full h-full flex-col p-6">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[8vh] flex justify-center items-center flex-row gap-3">
          <input
            type="text"
            className="w-56 h-6 rounded-md text-stone-900"
            ref={inputRef}
          />
          <div
            className="w-8 h-6 bg-sky-500 rounded-sm cursor-pointer flex justify-center items-center"
            onPointerUp={() => {
              setTodoName(inputRef.current?.value!);
            }}
          >
            <Plus />
          </div>
        </div>

        <div className="w-full h-full flex justify-center mt-12">
          {todoName && (
            <TodoForm name={inputRef.current?.value!} items={null} />
          )}
        </div>
      </div>
    </main>
  );
}
