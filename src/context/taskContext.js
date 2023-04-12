"use client";
import { createContext, useContext,useState } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be inside a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks,setTasks] = useState([
    {
      id: "1",
      title: "My first Task",
      description: "My first task description",
    },
    {
      id: "2",
      title: "My second Task",
      description: "My second task description",
    },
    {
      id: "3",
      title: "My third Task",
      description: "My third task description",
    },
  ]);

  const createTask = (title,description)=> setTasks([...tasks,{title,description,id:uuid()}])
  const updateTask = (newField,id)=>{
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...newField } : task
      ),
    ]);
  }
  const deleteTask = (id)=>{
    setTasks( [...tasks.filter(task => task.id !==id)])
  }
  return <TaskContext.Provider value={{tasks,createTask,deleteTask,updateTask}}>{children}</TaskContext.Provider>;
};
