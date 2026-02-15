import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Wordle from "./pages/projects/Wordle";
import Bartender from "./pages/projects/Bartender";
import ProjectDiana from "./pages/projects/ProjectDiana";
import NightQuest from "./pages/projects/NightQuest";

export default function App() {
	return (
		<div className="page">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/wordle" element={<Wordle />} />
					<Route path="/projects/bartender" element={<Bartender />} />
					<Route path="/projects/project-diana" element={<ProjectDiana />} />
					<Route path="/projects/night-quest" element={<NightQuest />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}