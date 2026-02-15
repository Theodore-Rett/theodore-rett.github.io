export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-contact">
				<h3>Contact Me</h3>
				<div className="contact-list">
					<div className="contact-item">
						<span className="contact-icon">✉️</span>
						<a href="mailto:theodore.rett@gmail.com">theodore.rett@gmail.com</a>
					</div>
					<div className="contact-item">
						<span className="contact-icon">💼</span>
						<a href="https://www.linkedin.com/in/theodore-rett/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/theodore-rett/</a>
					</div>
					<div className="contact-item">
						<span className="contact-icon">🔗</span>
						<a href="https://github.com/Theodore-Rett" target="_blank" rel="noreferrer">https://github.com/Theodore-Rett</a>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<p>© 2026 Theodore Rett</p>
			</div>
		</footer>
	);
}

