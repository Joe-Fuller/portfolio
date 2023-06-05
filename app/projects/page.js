import NavBar from "@/components/navBar";

export default function Projects() {
  return (
    <div className="grid justify-center text-darkGrey">
      <NavBar></NavBar>
      <h1 className="text-2xl">Projects</h1>
      <ul className="grid grid-cols-2 place-self-center">
        <li>Wikipedia Game</li>
        <li>All Aboard</li>
      </ul>
    </div>
  );
}
