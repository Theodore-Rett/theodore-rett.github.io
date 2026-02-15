import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
	const recentProjectSlugs = ["project-diana", "night-quest", "bartender"];
	const recentProjects = recentProjectSlugs
		.map((slug) => projects.find((project) => project.slug === slug))
		.filter(Boolean);

	return (
		<>
			<div className="text-holder">
				<div>
					<h1>Theodore Rett</h1>
					<p>Theodore Rett is currently a senior Software Engineering Major at the Milwaukee School of Engineering, with a minor in User Experience. He enjoys experimenting with web development and game design in his free time. As well as designing and building sets for MSOE's Theatre Troupe, where he is currently on the executive board as the Production President.</p>
				</div>
				<div>
					<img src="images/Proffesional Photo.jpg" alt="Theodore Rett Professional Photo" />
				</div>
			</div>
		<h1>Recent Projects</h1>
		<div className="project-grid" style={{ marginBottom: "20px" }}>
			{recentProjects.map((project) => (
				<ProjectCard key={project.slug} project={project} />
			))}
		</div>
		</>
	);
}
