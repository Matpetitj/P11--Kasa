import './cards.scss'

export default function Card({ cover, title, alt }) {
  return (
    <article className="card_accomodation">
      <img src={cover} alt={alt} id="accomodation_img" />
      <div className="card_accomodation_style"></div>
      <p className="card_accomodation_title">{title}</p>
    </article>
  )
}

//passer le titre en alt de l'img
