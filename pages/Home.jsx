import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<section id="home" className="section hero">
				<div className="section-inner">
					<h1>Theo Rett</h1>
					<div className="hero-meta">
						<span>Based in Milwaukee</span>
					</div>
					<p>
						ToDo
					</p>

					<div className="hero-actions">
						<Link className="button" to="/projects">
							View projects
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
