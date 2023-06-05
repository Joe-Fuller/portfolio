import NavBar from "@/components/navBar";
import ProjectCard from "@/components/projectCard";
import Socials from "@/components/socials";

export default function Projects() {
  return (
    <div className="grid justify-center text-darkGrey">
      <NavBar></NavBar>
      <Socials></Socials>
      <h1 className="text-2xl">Projects</h1>
      <ProjectCard
        title="Wikipedia Game"
        url="https://the-wikipedia-game.netlify.app/"
        description="A browser game built using React. Try to get from one Wikipedia article to another using only links!"
      ></ProjectCard>
    </div>
  );
}
