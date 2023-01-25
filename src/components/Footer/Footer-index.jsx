import logo from "../../assets/Images/logo-footer.svg";

export default function Footer() {
	return (
		<footer className="footer_container">
			<img src={logo} alt="Logo de l'agence Kasa" />
			<p className="footer_container_text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}