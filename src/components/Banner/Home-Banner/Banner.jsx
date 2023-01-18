export default function Banner({img}) {
	return (
		<div className="banner-container">
            <img src={img} alt="Bannière page de la d'accueil" id="img-home-banner"></img>
			<div className="banner-text-container">
				<div className="banner-text">Chez vous, partout et ailleurs</div>
			</div>
		</div>
	);
}

//rajouter props le texte
//if pour l'afficher ou non