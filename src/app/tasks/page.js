"use client"
import { TaskCard } from "@/components/taskCard";
import { useTasks } from "@/context/taskContext";
import {useRouter} from "next/navigation";

export default function page(){
    const {tasks} = useTasks();
    const router = useRouter();
    return (
      <div>
        <div className="mx-auto w-4/5 flex">
          <div className="w-4/5">
            <h1 className="text-3xl">Listado de Tareas</h1>
          </div>
          <div className="w-1/5">
            <button
              className="bg-[#4853D9] w-32 h-10"
              onClick={() => router.push("/new")}
            >
              Add
            </button>
          </div>
        </div>
        {tasks.map((item, index) => {
          return <TaskCard tasks={item} key={item.id}></TaskCard>;
        })}
      </div>
    );
}