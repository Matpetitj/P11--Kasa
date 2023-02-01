export default function profile(props) {
	return (
		<aside className="profil_container">
			<div className="profil_name">{props.hostName}</div>
			<div className="profil_picture">
				<img src={props.hostPic} alt={props.id} />
			</div>
		</aside>
	);
}