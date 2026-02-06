import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
	return (
		<article className="project-card">
			<div className="project-meta">
				<span>{project.environment}</span>
				<span>{project.year}</span>
			</div>
			<h3>{project.title}</h3>
			<p>{project.description}</p>
			<div className="pill-grid">
				{project.stack.map((item) => (
					<span key={item} className="pill">
						{item}
					</span>
				))}
			</div>
			<Link className="card-link" to={`/projects/${project.slug}`}>
				Read More
			</Link>
		</article>
	);
}
