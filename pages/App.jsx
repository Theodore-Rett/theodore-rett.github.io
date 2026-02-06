import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import KnightGuard from "./KnightGuard";

export default function App() {
	return (
		<div className="page">
			<Header />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/knight-guard-games" element={<KnightGuard />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}