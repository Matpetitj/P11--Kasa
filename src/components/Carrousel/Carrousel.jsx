import { useState } from "react";
import arrowLeft from "../../assets/Images/vector-left.svg";
import arrowRight from "../../assets/Images/vector-right.svg";

export default function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<section id="carrousel-container">
			{length > 1 && (<img src={arrowLeft} alt="Flèche gauche" onClick={prevSlide} className="left_arrow"/>)}
			{length > 1 && (<img src={arrowRight} alt="Flèche droite" onClick={nextSlide} className="right_arrow"/>)}
			{slides.map((slide, index) => (
				<div key={index} className={current === index? "slider bl-msk wh-msk active-anim": "slider bl-msk wh-msk"}>
					{index === current && <img src={slide} alt="Appartement à louer" />}
					{index === current && (<span className="slider_number">{current + 1}/{length}</span>
					)}
				</div>
			))}
		</section>
	);
}