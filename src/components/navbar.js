import Link from "next/link"

function Navbar() {
  return (
    <div className="w-[70%] mx-auto h-16 mt-5">
      <nav className="flex">
        <div className="w-[80%]">
          <h1 className="text-xl">
            <Link href="/">TaskApp</Link>
          </h1>
        </div>
        <div className="w-[20%]">
            <ul className="mt-[3px]">
                <li><Link href="/tasks">Tasks</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar