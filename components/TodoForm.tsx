"use client";

import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import { PlusSquare } from "react-feather";

const backendUrl: string = "http://localhost:8080/todo";

export default function TodoForm({
  name,
  items,
}: {
  name: string;
  items: ITodoItem[] | null;
}) {
  const [todos, setTodos] = useState<ITodoItem[]>(items || []);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  const handleOnCheckItem = (index: number, b: boolean) => {
    for (let i = 0; i < todos.length; i++) {
      if (i == index) {
        todos[i].completed = b;
      }
    }
  };

  const addItemToList = (itemName: string) => {
    const newItem: ITodoItem = {
      todoBody: itemName,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newItem]);
  };

  const addItemFunc = (itemName: string): void => {
    if (!itemName || itemName.trim().length === 0) return;
    if (todos?.length == 4) return;
    addItemToList(itemName);
  };

  return (
    <div className="w-56 h-80 bg-slate-300 flex flex-col p-1 rounded-md">
      <div className="w-full h-1/5">
        <div className="w-full h-full p-2 text-center text-cyan-950 font-bold">
          {name}
        </div>
      </div>
      <div className="w-full h-full p-2 flex flex-col gap-[7px]">
        {todos?.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            itemBody={item.todoBody}
            completed={items == null ? null : item.completed}
            onDelete={() => handleDeleteTodo(index)}
            onCheck={(itemIndex: number, b: boolean) =>
              handleOnCheckItem(itemIndex, b)
            }
          />
        ))}
      </div>
      <div className="w-full h-1/5 p-2 flex">
        <div className="w-full h-full flex flex-row gap-1">
          <input
            type="text"
            className="w-full h-full rounded-md text-stone-900"
            ref={inputRef}
          ></input>
          <div
            className="w-11 h-full bg-green-600 rounded-md cursor-pointer flex items-center justify-center"
            onPointerUp={() => {
              addItemFunc(inputRef!.current?.value!);
              inputRef!.current!.value! = "";
            }}
          >
            <PlusSquare />
          </div>
          <div
            className="w-5 h-full bg-black rounded-md cursor-pointer"
            onMouseUp={() => {
              const TodoFormObj: ITodoForm = {
                name: name,
                items: todos,
              };
              fetch(backendUrl, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(TodoFormObj),
              }).then((res) => {
                if (res.status == 201) {
                  alert("ok");
                }
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
