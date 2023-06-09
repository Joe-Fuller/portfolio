import NavBar from "@/components/navBar";
import ProjectCard from "@/components/projectCard";
import Socials from "@/components/socials";

export default function Projects() {
  return (
    <div className="grid justify-center text-darkGrey space-y-2">
      <NavBar></NavBar>
      <Socials></Socials>
      <h1 className="text-2xl">Projects</h1>
      <ProjectCard
        title="Wikipedia Game"
        url="https://the-wikipedia-game.netlify.app"
        description="A browser game built using React. Try to get from one Wikipedia article to another using only links!"
      ></ProjectCard>
      <ProjectCard
        title="All Aboard"
        url="https://nc-all-aboard.netlify.app"
        description="A website for board game enthusiasts to chat, organise, and meet up."
      ></ProjectCard>
      <ProjectCard
        title="Yahtzee"
        url="https://babys-first-yahtzee.netlify.app"
        description="It's Yahtzee, if you don't know how to play it's explained on the page."
      ></ProjectCard>
    </div>
  );
}
