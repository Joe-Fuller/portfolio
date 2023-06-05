export default function ProjectCard({ title, url, description }) {
  return (
    <div>
      <a href={url}> {title}</a>
      <p>{description}</p>
    </div>
  );
}
