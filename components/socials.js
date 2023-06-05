import Image from "next/image";

export default function Socials() {
  return (
    <div className="fixed inset-y-0 grid">
      <a className="place-self-end" href="https://github.com/Joe-Fuller">
        <Image src="/github.png" width="50" height="50" alt="Link to GitHub" />
      </a>
      <a
        className="place-self-start"
        href="https://www.linkedin.com/in/fuller-joe/"
      >
        <Image
          src="/linkedin.png"
          width="50"
          height="50"
          alt="Link to LinkedIn"
        />
      </a>
    </div>
  );
}
