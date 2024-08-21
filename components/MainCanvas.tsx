import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";

const url: string = "http://localhost:8080/todo/getAllTodo";
let todos: Array<ITodoForm> = [];

export default function MainCanvas() {
  /*   const [todo, setTodo] = useState<ITodoForm[]>();

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
    <div className="w-full h-full flex justify-center flex-wrap gap-3 p-2">
      {todo?.map((t) => (
        <TodoForm name={t.name} items={t.items} />
      ))}
    </div>
  ); */

  return <main></main>;
}
