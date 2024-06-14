import { Link } from 'react-router-dom'
import './navigation.scss'

export default function Nav() {
  return (
    <nav className="nav_header">
      <Link to="/" className="nav_header_to-home">
        Accueil
      </Link>
      <Link to="/about" className="nav_header_to-about">
        A Propos
      </Link>
    </nav>
  )
}
