const highlights = [
	"ToDo",
];

const toolbelt = [
	"ToDo",
];

export default function AboutMe() {
	return (
		<section id="about" className="section about">
			<div className="section-inner">
				<h2>About Me</h2>
				<div className="about-grid">
					<div>
						<p>
							ToDo
						</p>
					</div>
					<div>
						<h3>Highlights</h3>
						<ul className="list">
							{highlights.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
						<h3>Toolbelt</h3>
						<div className="pill-grid">
							{toolbelt.map((tool) => (
								<span key={tool} className="pill">
									{tool}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
