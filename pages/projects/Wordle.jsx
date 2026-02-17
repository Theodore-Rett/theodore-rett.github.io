import { projects } from "../../data/projects";
import FeatureCarousel from "../../components/FeatureCarousel";

export default function Wordle() {
	var project = projects.find((project) => project.slug === "wordle");

	const features = [
		{
			image: "/wordle_two.png",
			title: "Home Screen",
			description: "This is the home screen of the game, where players can choose to play normal mode, or \"Quardle\". Additionally on the bottom right there is a user id field, that allowed us as developers to enter an admin ID that gave us additional information for development and testing the application."
		},
		{
			image: "/wordle_three.png",
			title: "Quardle Mode",
			description: "This game mode takes the classic core mechanics of Wordle, and adds a fun new twist. Challenging the player to complete four games at once. Each guess is applied to all four games, and players must think critically to use their guesses wisely to solve all four puzzles."
		},
		{
			image: "/wordle_four.png",
			title: "Custom Word Lengths",
			description: "Implementation of a custom library of varied word lengths, allowing players to increase or decrease the challenge of the game by varying how many characters are in the word they are trying to guess. This was a custom feature we added onto the game that helped shake up and reinvent the game play."
		}
	];

	return (
		<>
			<div className="text-holder">
				<div style={{ width: "33.33%" }}>
					<h1>{project.title}</h1>
					<p>This was a semester project for a Sophmore level class, designed to teach students about agile development process, and how to work in a team enviroment. We were assigned to develop a re-creation of the popular word-guessing game Wordle. Defining the software architecure from the ground up, and developing core features one by one through out the semester.</p>
					<p>My main contributions to this project was developing the logic system of validating the correctness of words, and then returning the correct feedback (colored tiles) to the user. Additionally I implemented the ability to create custom word lengths, so you could play the game with words from three to 24 characters long.</p>
				</div>
				<img src="/wordle_one.png" alt="Screenshot of Worlde Game in Progress" style={{ width: "33.33%" }}></img>
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