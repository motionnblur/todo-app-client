"use client";

import TodoForm from "@/components/TodoForm";
import React, { useEffect, useState } from "react";

const url: string = "http://localhost:8080/todo/getAllTodo";
let todos: Array<ITodoForm> = [];

export default function page() {
  const [todo, setTodo] = useState<ITodoForm[]>();

  useEffect(() => {
    fetch(url, {
      method: "GET",
    }).then(async (res) => {
      if (res.status == 200) {
        const json = await res.json();

        for (let i = 0; i < json.length; i++) {
          const name: string = json[i].todoName;
          json[i].todoItemEntities.forEach((e: any) => {
            delete e.id;
          });
          const items: ITodoItem[] = json[i].todoItemEntities;

          const todo: ITodoForm = {
            name: name,
            items: items,
          };
          todos.push(todo);
        }
        setTodo(todos);
      }
    });
  }, []);
  return (
    <main className="h-screen w-screen p-6 flex gap-4 flex-wrap">
      {todo?.map((t) => (
        <TodoForm name={t.name} items={t.items} />
      ))}
    </main>
  );
}
