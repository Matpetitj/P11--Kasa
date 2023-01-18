export default function Card({ cover, title, alt }) {
	return (
		<article className="card-logement">
			<img src={cover} alt={alt} />
			<div className="card-logement__layer">
				<p className="card-logement__title">{title}</p>
			</div>
		</article>
	);
}

//passer le titre en alt de l'img