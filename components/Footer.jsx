export default function Footer() {
    return (
        <footer>
            <div style={{ marginBottom: "1rem" }}>
                <h3>Contact Me</h3>
                <div>
                    Email: <a href="mailto:theodore.rett@gmail.com">theodore.rett@gmail.com</a>
                </div>
                <div>
                    LinkedIn: <a href="https://linkedin.com/in/theodore-rett" target="_blank" rel="noreferrer">linkedin.com/in/theodore-rett</a>
                </div>
                <div>
                    GitHub: <a href="https://github.com/theodore-rett" target="_blank" rel="noreferrer">github.com/theodore-rett</a>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <div>Built with React and Vite.</div>
                <div>© 2026 Theodore Rett. All rights reserved.</div>
            </div>
        </footer>
    );
}
