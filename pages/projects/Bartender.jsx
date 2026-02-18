import { projects } from "../../data/projects";
import FeatureCarousel from "../../components/FeatureCarousel";

export default function Bartender() {
	var project = projects.find((project) => project.slug === "bartender");

	const features = [
		{
			image: "/bartender_two.png",
			title: "Custom Tagging Color System",
			description: "Implemented a custom algorithm that assigns a unique hex code to each tag name. This is done by converting characters in the tag name to their corresponding ASCII values, and then using those values to generate a hex code. This allows for a visually distinct and consistent color scheme for tags across the application, enhancing user experience and making it easier to differentiate between various tags at a glance."
		},
		{
			image: "/bartender_three.png",
			title: "Updated Customization Features",
			description: "Added and designed new customization features to allow the user to tailor their search results to their specific needs. Giving them more agency over the app while operating it, and improving the overall user experience."
		},
		{
			image: "/bartender_four.png",
			title: "Filter by Easy Access Ingredients",
			description: "Implemented a filtering system that allowed the user to upload a list of \"easy access\" ingredients that they can easily get from a store. Then when searching for drinks they can make off their shelf, they can choose to ignore the marked \"easy access\" ingredients to get a better idea of what drinks the have available to them."
		},
		{
			image: "/bartender_five.png",
			title: "Recipe Details Page",
			description: "Designed and implemented a recipe details page, that allowed the user to view a larger display of the recipe. This gave all of the recipe details including; a description of the drink, necessary ingredients, and directions. This makes it much easier for a user to view, while actively mixing a drink."
		}
	];

	return (
		<>
			<div className="text-holder">
				<div style={{ width: "33.33%" }}>
					<h1>{project.title}</h1>
					<p>MSOE junior year project that was developed my myself and three other students. We were paired with product owners for the project, and held regular meetings with them to ensure that we were developing a product that they were happy with. The overarching goal of this project was to continue development on a React based web application that allowed users to upload recipes and ingredients through a csv. Once those csvs are uploaded to the applications database, they can then easily sort through recipes based on specific criteria.</p>
					<p>Over the course of the semester we worked on this project we made a handful of considerable improvements. To start we refined large portions of the filtering and sorting functionality to produce a more consistent and predictable result. Tackling edge cases and improving error handling to ensure that any results remained consistent with the user's search. Another improvement was a general UI overhaul. When we first inherited the project, the UI had just been cobbled together as features were added with little regard to the actual usability. While working on the project, we redesigned the entirety of the UI to improve the user's experience, and holding user testing and analysis to ensure functionalities were placed in the most intuitive locations.</p>
				</div>
				<img src="/bartender_one.png" alt="Screenshot of Bartender Application" style={{ width: "33.33%" }}></img>
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