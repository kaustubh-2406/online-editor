import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between bg-cyan-700 p-4 text-white">
      <Link href="/" passHref>
        <a className="text-2xl font-semibold">Online Editor</a>
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link href="/">
            <a className="border-b-0 border-white border-opacity-0 transition-all duration-300 hover:border-b-2 hover:border-opacity-100">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="border-b-0 border-white border-opacity-0 transition-all duration-300 hover:border-b-2 hover:border-opacity-100">
              Projects
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
