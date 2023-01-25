import "./Banner.css";

export default function Banner({img}) {
	return (
		<div className="banner_container">
            <img src={img} alt="Bannière de la page d'accueil" id="img_home_banner"></img>
			<div className="banner_text_container">
				<div className="banner_text">Chez vous, partout et ailleurs</div>
			</div>
		</div>
	);
}

//rajouter props le texte
//if pour l'afficher ou non
//faire un seul fichier bannière pour les deux bannières*
//décider l'affichage dans le html
// est-ce possible de mettre un if dans le code html jsx