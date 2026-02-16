export default function About() {
	return (
		<>
		    <div className="about-hero">
				<img
					className="about-hero__image"
					src="/headshot.jpg"
					alt="Theo headshot"
				/>
				<div className="about-hero__text">
					<h1 className="about-hero__title">Theodore Rett</h1>
					<h3 className="about-hero__subtitle">About Me</h3>
					<p className="about-hero__role">
						Software Engineer | MSOE Class of 26
					</p>
				</div>
			</div>

			<div>
				<h1>Professional Work</h1>
				<p>Theo is currently attending the Milwaukee School of Engineering as a Senior Software Engineer, with a minor in user experience, and is graduating in this May. During his time at MSOE he has had extensive work in team environments working in Agile based workflows for application development. Additionally he is currently working as an Application Development Intern at Brady Corporation, working primarily with React doing web based development.</p>
				<p>He has a passion for website and game development, with lots of full stack engineering experience. Combining both his software and UX experience to create applications that aren't just functional but intuitive and easy to navigate.</p>
			</div>
			<div className="text-holder">
				<div>
					<h1>Interests and Hobbies</h1>
					<p>In his free time Theo enjoys spending time with his friends. Playing games like Dungeons and Dragons and Magic the Gathering, going to conventions and the yearly renaissance festival, and climbing mountains together in the video game Peak.</p>
					<p>Theo has also had eight years of experience doing technical theater. He has served as the Production President of MSOE's Theater Troupe, for two years. As well as directed shows such as The 25th Annual Putnam County Spelling Bee, Clue, and The Lightning Thief.</p>
				</div>
				<div id="image-cluster">
					<img src="/first_day.jpg" alt="Theo's at MSOE's last first day event his senior year"></img>
					<img src="/hamilton_performance.jpg" alt="Theo performing in MSOE's caberate"></img>
					<img src="/magic_con.jpg" alt="Theo at Magic Con Chicago 2025"></img>
					<img src="/super_knight.jpg" alt="Theo dressed up for Renisance Fair 2025"></img>
				</div>
			</div>
		</>
	);
}