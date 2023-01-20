import accomodations from "../../assets/Datas/logements.json";
import bannerImg from "../../assets/Images/background-banner.png";
import './Home.css';
import Banner from "../../components/Banner/Home-Banner/Banner";
import Card from "../../components/Cards/Card";
import {Link} from "react-router-dom";

export default function Home() {
	return (
		<>
			<Banner img={bannerImg} />
			<div className="cards-container">
				{accomodations.map((appart, id) => (
					<div className="card_accomodation" key={id}>
						<Link className="link_card_accomodation" to={`/accomodation/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} alt={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}

//importer le json
//remplacer data par la variable
//{title}
//rajouter le alt directement dans l16