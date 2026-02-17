export default function FeatureCard({ image, title, description }) {
	return (
		<div className="feature-card">
			<div className="feature-card__image-container">
				<img
					src={image}
					alt={title}
					className="feature-card__image"
				/>
			</div>
			<div className="feature-card__content">
				<h3 className="feature-card__title">{title}</h3>
				<p className="feature-card__description">{description}</p>
			</div>
		</div>
	);
}
