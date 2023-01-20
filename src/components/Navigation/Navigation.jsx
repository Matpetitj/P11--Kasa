import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Nav() {
	return (
		<nav className="nav-header">
			<Link to="/" className="nav-header_to-home">
				Accueil
			</Link>
			<Link to="/about" className="nav-header_to-about">
				A Propos
			</Link>
		</nav>
	);
}