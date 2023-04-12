import { useTasks } from "@/context/taskContext";
import { useRouter } from "next/navigation";

export const TaskCard = ({tasks}) => {
  const { deleteTask } = useTasks();
  const router = useRouter();
  return (
    <div className="bg-[#063278] my-5 mx-auto w-4/5 flex">
      <div className="w-[30%]">
        <h2>{tasks.title}</h2>
      </div>
      <div className="w-[70%]">
        <div>{tasks.description}</div>
        <div className="flex">
          <div className="mx-4 my-3">
            <button
              className="bg-[#6B5EF7] w-32"
              onClick={() => router.push(`/edit/${tasks.id}`)}
            >
              Editar
            </button>
          </div>
          <div className="mx-4 my-3">
            <button
              className="bg-[#FF1200] w-32"
              onClick={() => deleteTask(tasks.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
