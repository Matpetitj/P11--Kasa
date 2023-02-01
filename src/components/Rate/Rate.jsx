import emptyStar from "../../assets/Images/emptyStar.svg";
import fullStar from "../../assets/Images/fullStar.svg";

export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate_contaienr">
			{stars.map((level) =>
				score >= level ? (
					<img key={level.toString()} className="star" src={fullStar} alt="Etoile de notation"/>
				) : ( 
					<img key={level.toString()} className="star" src={emptyStar} alt="Etoile de notation"/>
				)
			)}
		</div>
	);
}