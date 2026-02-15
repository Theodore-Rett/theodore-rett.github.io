import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
	const navigate = useNavigate();
	const { title, environment, year, description, stack, repo } = project;

	return (
		<article className="project-card">
			<header className="project-card__header">
				<h2>{title}</h2>
				<p className="project-card__meta">
					<span>{environment}</span>
					<span className="project-card__divider">|</span>
					<span>{year}</span>
				</p>
			</header>
			<ul className="project-stack">
				{stack.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<p className="project-card__description">{description}</p>
			<div className="project-card__actions">
				{repo ? (
					<a
						className="project-card__repo"
						href={repo}
						target="_blank"
						rel="noreferrer"
					>
						Project Repo
					</a>
				) : null}
				<button
					type="button"
					className="project-card__details"
					onClick={() => navigate(`/projects/${project.slug}`)}
				>
					Project Details
				</button>
			</div>
		</article>
	);
}
