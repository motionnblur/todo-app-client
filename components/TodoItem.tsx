import React, { useState } from "react";
import { Trash2 } from "react-feather";

export default function TodoItem({
  index,
  itemBody,
  completed,
  onDelete,
  onCheck,
}: {
  index: number;
  itemBody: string;
  completed: boolean | null;
  onDelete: () => void;
  onCheck: (index: number, data: boolean) => void;
}) {
  const [display, setDisplay] = useState("hidden");
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
    onCheck(index, !checked);
  };

  return (
    <>
      <div className="bg-blue-400 w-full h-11 rounded-lg flex flex-row relative">
        <div className="w-12 h-full flex justify-center items-center p-1">
          <input
            type="checkbox"
            className="w-full h-full rounded-md cursor-pointer"
            defaultChecked={completed!}
            onPointerUp={handleChange}
          />
        </div>
        <div className="w-full h-full flex items-center p-1 ml-1">
          {itemBody}
        </div>
        <div
          className="w-8 h-full absolute top-0 right-0 flex justify-center items-center cursor-pointer mr-1"
          onPointerEnter={() => {
            setDisplay("block");
          }}
          onPointerLeave={() => {
            setDisplay("hidden");
          }}
          onPointerUp={() => {
            onDelete();
          }}
        >
          <Trash2 className={`w-full h-full ${display}`}></Trash2>
        </div>
      </div>
    </>
  );
}
