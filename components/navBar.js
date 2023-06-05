import Link from "next/link";

export default function NavBar() {
  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-y-0 text-2xl text-darkGrey">
      <li className="bg-lighterGrey p-4 hover:bg-lightGrey hover:text-offWhite">
        <Link href="/">Home</Link>
      </li>
      <li className="bg-lighterGrey p-4 hover:bg-lightGrey hover:text-offWhite">
        <Link href="/about">About</Link>
      </li>
      <li className="bg-lighterGrey p-4 hover:bg-lightGrey hover:text-offWhite">
        <Link href="/projects">Projects</Link>
      </li>
    </ul>
  );
}
