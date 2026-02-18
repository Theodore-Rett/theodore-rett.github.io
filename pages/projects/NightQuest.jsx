import { projects } from "../../data/projects";
import FeatureCarousel from "../../components/FeatureCarousel";

export default function NightQuest() {
	var project = projects.find((project) => project.slug === "night-quest");

	const features = [
		{
			image: "/profile-photo.jpg",
			title: "ToDo",
			description: "ToDo"
		}
	];

	return (
		<>
			<div className="text-holder">
				<div style={{ width: "33.33%" }}>
					<h1>{project.title}</h1>
					<p>ToDo</p>
					<p>ToDo</p>
				</div>
				<img src="/profile-photo.jpg" alt="Screenshot of Night Quest Game" style={{ width: "33.33%" }}></img>
			</div>

		<h2>Key Features</h2>
		<FeatureCarousel features={features} />
		
		<div className="text-holder" style={{ position: 'relative', minHeight: '200px' }}>
			<div>
				<h3>Technology Stack</h3>
				<ul className="project-stack">
					{project.stack.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
			{project.repo ? (
				<div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
					<a
						className="project-card__repo"
						href={project.repo}
						target="_blank"
						rel="noreferrer"
					>
						View Project Repository
					</a>
				</div>
			) : null}
		</div>
		</>
		
	);
}