import "./Banner.css";

export default function Banner({img, text}) {
	let textElement = "";
	if(typeof text == "string"){
		textElement = (<div className="banner_text_container">
		<div className="banner_text">{text}</div>
		</div>);
	}
	return (
		<div className="banner_container">
            <img src={img} alt="Bannière de la page d'accueil" id="img_home_banner"></img>
			{textElement}
		</div>
	);
}

//rajouter props le texte
//if pour l'afficher ou non
//faire un seul fichier bannière pour les deux bannières
//décider l'affichage dans le html
// est-ce possible de mettre un if dans le code html jsx