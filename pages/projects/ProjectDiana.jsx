import { projects } from "../../data/projects";
import FeatureCarousel from "../../components/FeatureCarousel";

export default function ProjectDiana() {
	var project = projects.find((project) => project.slug === "project-diana");

	const features = [
		{
			image: "/project-diana-one.png",
			title: "Sorting Materials",
			description: "Players need to sort materials into one of the correct bins. This is a two player game, the first person's job is to identify the type of gem and communicate that to the second player. The second player then takes the details of the gem (shape, color, and symbol) to determine if the gem is kept or thrown away."
		},
		{
			image: "/project-diana-two.png",
			title: "Join Game Lobby",
			description: "This is the menu that players are able to use to join a game lobby. A teacher or instructor will set up a game lobby, and display the code for their class, students then join through this page. Similar to other party games like Kahoot and Jackbox."
		},
		{
			image: "/project-diana-three.png",
			title: "Project UI Design",
			description: "This is a view of the Figma project used to help define and enforce our design language and overall UI design. We used Figma to create a style guide for our project, and then designed the various screens and UI elements within the project. This helped us to maintain a consistent design throughout the project, and also made it easier to implement the UI in Godot."
		}
	];

	return (
		<>
			<div className="text-holder">
				<div style={{ width: "33.33%" }}>
					<h1>{project.title}</h1>
					<p>This is an educational based web game designed to help students, ages 8-12, to build team building and communication skills. Classes will split off into small groups of 3-5 students to complete mini-games and challenges, that help the class overall get to their shared goal.</p>
					<p>The game was developed by a team of four students, as part of their senior design capstone project. We primarily developed the game using Godot, and GDScript. The overall play loop of the design, relies on those mini games, where players continue to progress to the ships final destination, by completing a variety of different games.</p>
				</div>
				<img src="/project-diana-logo.png" alt="Project Diana Logo" style={{ width: "33.33%" }}></img>
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