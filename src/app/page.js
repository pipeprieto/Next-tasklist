import { Inter } from "next/font/google";
import Link from "next/link";
import {BsArrowRight} from "react-icons/bs"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mx-auto flex flex-col justify-center h-56 w-1/2 mt-24">
      <h1 className="text-3xl">Bienvenido a tu administrador de tareas</h1>
      <Link href="/tasks" className="flex hover:underline">
        <div className="w-[40%]">
          <p className="text-lg">Empieza a administrar tus tareas</p>
        </div>

        <div className="pt-[6px]">
            <BsArrowRight size="1.25rem" />
        </div>
      </Link>
    </div>
  );
}
