export default function ProjectCard({ title, url, description }) {
  return (
    <a href={url} className="bg-lighterGrey rounded p-4">
      <h3 className="text-xl">{title}</h3>
      <p>{description}</p>
    </a>
  );
}
