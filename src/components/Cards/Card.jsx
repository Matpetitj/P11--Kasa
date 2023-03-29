import './Cards.css'

export default function Card({ cover, title, alt }) {
  return (
    <article className="card_accommodation">
      <img src={cover} alt={alt} id="accommodation_img" />
      <div className="card_accommodation_style"></div>
      <p className="card_accommodation_title">{title}</p>
    </article>
  )
}
