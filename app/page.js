import NavBar from "@/components/navBar";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <div className="grid h-screen place-content-center text-darkGrey">
        <h1 className="text-center text-3xl">Joe Fuller</h1>
        <div className="place-self-center w-7/12">
          <p className="text-center text-xl">
            I am a 26 year old full-stack developer looking for my first tech
            role. I have experience in JavaScript, SQL, C#, and Python as well
            as React, NextJS, Tailwind, Unity, Godot, MongoDB and more!
          </p>
        </div>
      </div>
      <Socials></Socials>
    </main>
  );
}
