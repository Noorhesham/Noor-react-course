import React from "react";
import Select, { TaskProps } from "./Select";
import { MdDelete } from "react-icons/md";
import { FaPenClip } from "react-icons/fa6";
import { BiSave } from "react-icons/bi";

const Item = ({
  task: { task, duration, completed },
  setTasks,
  setIsOpen,
  setEditInput,
  isOpen,
  i,
  handleEditTask,
  editInput,
}: {
  task: TaskProps;
  setIsOpen: React.Dispatch<React.SetStateAction<number>>;
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  setEditInput: React.Dispatch<React.SetStateAction<TaskProps>>;
  isOpen: number;
  i: number;
  handleEditTask: (i: number) => void;
  editInput: TaskProps;
}) => {
  const handleCheckboxChange = () => {
    setTasks((oldTasks) =>
      oldTasks.map((oldTask, index) => (index === i ? { ...oldTask, completed: !oldTask.completed } : oldTask))
    );
    console.log(i, task);
  };

  return (
    <div className=" flex flex-col group gap-4 items-start w-full">
      <div className="flex justify-between items-center group w-full border border-indigo-700 hover:bg-indigo-600 hover:text-white duration-200 cursor-pointer py-5 px-10 bg-gray-100 rounded-xl text-black font-semibold">
        <div className="flex items-center gap-2">
          <input
            id={`${i}-${task}`}
            type="checkbox"
            className="mt-1"
            checked={completed}
            onChange={handleCheckboxChange}
          />
          <label className={`${completed ? "line-through" : ""}`} htmlFor={`${i}-${task}`}>
            {task}
          </label>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold group-hover:text-white text-indigo-500">Duration: {duration} Hours</span>
          <MdDelete
            className="text-2xl text-red-500 group-hover:text-red-400 duration-200"
            onClick={() => setTasks((oldTasks) => oldTasks.filter((_, index) => index !== i))}
          />
          <FaPenClip
            onClick={() => {
              i === isOpen ? setIsOpen(-1) : setIsOpen(i);
              setEditInput({ task: task, duration: duration, completed: completed });
            }}
            className="text-xl text-green-500 group-hover:text-green-400 duration-200"
          />
        </div>
      </div>
      {isOpen === i && (
        <div className="flex items-center gap-4 relative w-full">
          <input
            onKeyDown={(e) => e.key === "Enter" && handleEditTask(i)}
            value={editInput.task}
            onChange={(e) =>
              setEditInput({
                task: e.target.value,
                duration: editInput.duration,
                completed: editInput.completed,
              })
            }
            type="text"
            className="py-3 px-6 flex justify-between items-center rounded-full border border-indigo-600 focus:outline-none bg-transparent text-black font-semibold outline-none w-full"
          />
          <Select
            defaultValue={editInput}
            handleChange={setEditInput}
            input={editInput}
            options={[
              { value: 1, label: "1 hour" },
              { value: 2, label: "2 hours" },
              { value: 3, label: "3 hours" },
              { value: 4, label: "4 hours" },
              { value: 5, label: "5 hours" },
              { value: 6, label: "6 hours" },
              { value: 7, label: "7 hours" },
              { value: 8, label: "8 hours" },
            ]}
          />
          <BiSave
            onClick={() => handleEditTask(i)}
            className="text-xl w-6 cursor-pointer h-6 text-blue-500 group-hover:text-blue-400 duration-200"
          />
        </div>
      )}
    </div>
  );
};

export default Item;
