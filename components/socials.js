import Image from "next/image";

export default function Socials() {
  return (
    <div>
      <a href="https://github.com/Joe-Fuller">
        <Image src="/github.png" width="40" height="40" alt="Link to GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/fuller-joe/">
        <Image
          src="/linkedin.png"
          width="40"
          height="40"
          alt="Link to LinkedIn"
        />
      </a>
    </div>
  );
}
