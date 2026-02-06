import { NavLink } from "react-router-dom";

const navItems = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/projects", label: "Projects" },
	{to: "/knight-guard-games", label: "Knight Guard Games" }
];

export default function Header() {
	return (
		<header className="site-header">
			<div className="brand">
				<span className="brand-mark">TR</span>
				<div className="brand-text">
					<div className="brand-name">Theodore Rett</div>
					<div className="brand-role">Software Engineer</div>
				</div>
			</div>
			<nav className="site-nav" aria-label="Primary">
				{navItems.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						className={({ isActive }) =>
							`nav-link${isActive ? " active" : ""}`
						}
					>
						{item.label}
					</NavLink>
				))}
			</nav>
		</header>
	);
}
