import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	return (
		<header className="header">
			<button
				type="button"
				className="header-logo"
				onClick={() => navigate("/")}
				aria-label="Go to home"
			>
				TR
			</button>
			<nav className="header-nav">
				<button className="nav-button" onClick={() => navigate("/")}>Home</button>
				<button className="nav-button" onClick={() => navigate("/about")}>About Me</button>
				<button className="nav-button" onClick={() => navigate("/projects")}>Projects</button>
			</nav>
		</header>
	);
}
