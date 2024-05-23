import '../../Utils/style-page/index.css'

export default function profile(props) {
  return (
    <aside className="profil_container">
      <div className="profil_name">{props.profilName}</div>
      <div className="profil_picture">
        <img src={props.profilPic} alt={props.id} />
      </div>
    </aside>
  )
}
