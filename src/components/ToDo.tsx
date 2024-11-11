import React, { useState } from "react";

import Select from "./Select";
import Item from "./Item";

const ToDo = () => {
  const [tasks, setTasks] = useState<{ task: string; completed: boolean; duration: number }[]>([]);
  const [input, setInput] = useState({ task: "", duration: 1, completed: false }); //temporary state
  const [orderBy, setOrderBy] = useState<"task" | "duration" | "completed">("task");
  const [editInput, setEditInput] = useState({ task: "", duration: 1, completed: false }); //temporary state for editing
  const [isOpen, setIsOpen] = useState(-1);
    
  const handleAddTask = () => {
    setTasks((oldTasks) => [...oldTasks, { task: input.task, completed: false, duration: input.duration }]);
    if (input.task === "" || !input) return;
    setInput({ task: "", duration: 1, completed: false });
  };
  const handleEditTask = (i: number) => {
    setTasks((oldTasks) =>
      oldTasks.map((oldTask, index) =>
        index === i ? { ...oldTask, task: editInput.task, duration: editInput.duration } : oldTask
  )
);
console.log(tasks);
    setIsOpen(-1);
  };
  const sortedTasks = [...tasks].sort((a, b) => {
    if (orderBy === "duration") return a.duration - b.duration;
    return a.task.localeCompare(b.task);
  });
  
  console.log(sortedTasks);
  return (
    <div className="bg-white py-3   h-screen">
      {" "}
      <h1 className=" text-4xl text-gray-900 font-bold">Welcome to my TODOS App</h1>
      <div className=" flex justify-center items-center flex-col  ">
        <div className=" px-8 py-4 flex justify-between w-[80%] mt-5 items-center">
          <p className=" text-xl text-black font-semibold">Add Items to your tasks so that you can manage your time</p>
          <div className="  flex items-center gap-4">
            <Select
              handleChange={setInput}
              input={input}
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
            <input
              onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
              value={input.task}
              onChange={(e) => setInput({ task: e.target.value, duration: input.duration, completed: false })}
              type="text"
              className=" py-3 px-6 rounded-full border border-indigo-600 focus:outline-none bg-transparent text-black font-semibold"
            />
            <button
              onClick={handleAddTask}
              className=" py-2 px-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full duration-150 "
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className=" max-w-2xl mx-auto mt-5 flex flex-col items-center gap-4 justify-center">
        {tasks.length > 0 ? (
          sortedTasks.map((task, i) => (
            <Item
              editInput={editInput}
              handleEditTask={handleEditTask}
              setIsOpen={setIsOpen}
              setTasks={setTasks}
              setEditInput={setEditInput}
              isOpen={isOpen}
              i={i}
              key={i}
              task={task}
            />
          ))
        ) : (
          <p className=" text-center capitalize text-indigo-700 font-semibold text-2xl ">
            You have not added any tasks until now 😢 add one ! ...
          </p>
        )}
      </div>{" "}
      <div className=" mt-5 flex items-center justify-center gap-4 ">
        <h4 className=" text-black font-semibold">Sort By</h4>
        <Select
          customChange={setOrderBy}
          input={orderBy}
          options={[
            { value: "task", label: "task" },
            { value: "duration", label: "duration" },
            { value: "completed", label: "completed" },
          ]}
        />
      </div>
    </div>
  );
};

export default ToDo;
