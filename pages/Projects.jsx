import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
	return (
		<section className="projects">
			<h1>Projects</h1>
			<p>Theo has worked on many projects in the past, both for software development, and user experience. Often working in teams to develop bigger and better projects. Familiarizing himself with agile development, and working in scrum environments. As well as getting experience using Git.</p>
			<p>They are well versed not only in the software engineering field, but user experience as well. Studying the psychology of the human brain, and how it processes information to be able to better cater to it. Providing not just a functional, but useable final product.</p>
			<div className="project-grid">
				{projects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</section>
	);
}