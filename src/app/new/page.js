"use client";
import { useTasks } from "@/context/taskContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page({params}) {
  const [task, setTask] = useState({title:"",description:""});
  const { createTask,tasks,updateTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      updateTask(task,params.id);
    }else{
      createTask(task.title, task.description);
    }
    router.push("/tasks");
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) =>task.id === params.id)
      if (taskFound) {
        setTask({title:taskFound.title,description:taskFound.description})
      }
    }
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-3xl">
        {params.id ? "Edit your task" : "Add a new task"}
      </h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="bg-[#13193B] my-5 border-b-2"
          name="title"
          placeholder="write a title"
          onChange={handleChange}
          value={task.title}
        ></input>
        <textarea
          className="bg-[#13193B] my-5 border-2 h-52"
          onChange={handleChange}
          name="description"
          placeholder="write a description"
          value={task.description}
        ></textarea>
        <button className="bg-[#544AC2] w-32 mx-auto">Accept</button>
      </form>
    </div>
  );
}
