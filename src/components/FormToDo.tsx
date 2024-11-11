import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
const options = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
];
const FormToDo = () => {
  const [tasks, setTasks] = useState<{ task: string; completed: boolean; duration: number }[]>([]);
  const form = useForm({});
  const { handleSubmit, register, formState } = form;
  const { errors } = formState;
  console.log(errors);
  return (
    <form onSubmit={form.handleSubmit((data) => setTasks((oldTasks) => [...oldTasks, data]))}>
      <input
        {...register("task", { required: true, minLength: { value: 5, message: "too short" } })}
        type="text"
        className=" py-3 px-6 rounded-full border border-indigo-600 focus:outline-none bg-transparent text-black font-semibold"
      />
      {errors.task?.message && <p className=" text-red-500 font-semibold">{errors.task.message}</p>}
      <select
        {...register("duration")}
        className=" bg-white text-black border-indigo-600 border 
   rounded-full py-3 px-6"
        name="duration"
        id=""
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <button>Submit</button>

      {tasks.map((task, i) => (
        <>
          {" "}
          <p>{task.task}</p>{" "}
          <MdDelete
            className="text-2xl text-red-500 group-hover:text-red-400 duration-200"
            onClick={() => setTasks((oldTasks) => oldTasks.filter((_, index) => index !== i))}
          />
        </>
      ))}
    </form>
  );
};

export default FormToDo;
