import NavBar from "@/components/navBar";
import Socials from "@/components/socials";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <NavBar></NavBar>
      <Socials></Socials>
      <div className="grid h-screen place-content-center text-darkGrey text-center">
        <Image
          className="place-self-center"
          src="/JoesFace.jpg"
          width="350"
          height="350"
          alt="Joe Fuller's face"
        />
        <p>A picture of me in Japan, April 2023</p>
        <p className="w-7/12 place-self-center text-xl">
          I am a 26 year old full-stack developer looking for my first tech
          role. I have experience in JavaScript, SQL, C#, and Python as well as
          React, NextJS, Tailwind, Unity, Godot, and more!
        </p>
        <p className="w-7/12 place-self-center text-xl">
          I'm a vegan and I love cooking, baking, houseplants, reading, and my
          cat Eddie
        </p>
      </div>
    </div>
  );
}
