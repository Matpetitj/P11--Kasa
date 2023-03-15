import './Banner.css'

export default function Banner({ img, text }) {
  let textElement = ''
  if (typeof text == 'string') {
    textElement = (
      <div className="banner_text_container">
        <div className="banner_text">{text}</div>
      </div>
    )
  }
  return (
    <div className="banner_container">
      <img src={img} id="img_banner" alt="Bannière de la page d'accueil"></img>
      {textElement}
    </div>
  )
}
