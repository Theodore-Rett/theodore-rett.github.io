import { useState } from "react";
import FeatureCard from "./FeatureCard";

export default function FeatureCarousel({ features }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? features.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === features.length - 1 ? 0 : prevIndex + 1
		);
	};

	if (!features || features.length === 0) {
		return null;
	}

	const currentFeature = features[currentIndex];

	return (
		<div className="feature-carousel">
			<FeatureCard
				image={currentFeature.image}
				title={currentFeature.title}
				description={currentFeature.description}
			/>
			<div className="feature-carousel__controls">
				<button
					type="button"
					className="feature-carousel__button"
					onClick={handlePrevious}
					aria-label="Previous feature"
				>
					← Previous
				</button>
				<span className="feature-carousel__indicator">
					{currentIndex + 1} / {features.length}
				</span>
				<button
					type="button"
					className="feature-carousel__button"
					onClick={handleNext}
					aria-label="Next feature"
				>
					Next →
				</button>
			</div>
		</div>
	);
}
