import accomodations from "../../assets/Datas/logements.json";
import bannerImg from "../../assets/Images/background-banner.png";
import './Home.css';
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import {Link} from "react-router-dom";

export default function Home() {
	return (
		<>	
			<div className = "home_container">
				<Banner img={bannerImg} text="Chez vous, partout et ailleurs"/>
				<div className="cards_accomodation_container">
					{accomodations.map((accomodation, id) => (
						<div className="card_accomodation" key={id}>
							<Link className="card_accomodation_link" to={`/accomodation/${accomodation.id}`}>
								<Card cover={accomodation.cover} title={accomodation.title} alt={accomodation.title} />
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}