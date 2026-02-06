import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
	return (
		<section id="projects" className="section projects">
			<div className="section-inner">
				<h2>Projects</h2>
				<p className="lead">
					ToDo
				</p>
				<div className="project-grid">
					{projects.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
