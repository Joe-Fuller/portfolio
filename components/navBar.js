import Link from "next/link";

export default function NavBar() {
  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-y-0 text-2xl text-darkGrey">
      <li className="p-4 hover:bg-indigo-300">
        <Link href="/">Home</Link>
      </li>
      <li className="p-4 hover:bg-indigo-300">
        <Link href="/about">About</Link>
      </li>
      <li className="p-4 hover:bg-indigo-300">
        <Link href="/projects">Projects</Link>
      </li>
    </ul>
  );
}
