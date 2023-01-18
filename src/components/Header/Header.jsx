import { Link } from 'react-router-dom';
import logo from "../../assets/Images/LOGO.svg";
// import styled from 'styled-components'

function Header() {
    return (
      <header class="header_group">
        <figure className="header_group_figure">
          <img className="logo" src={logo} alt="Logo de l'agence Kasa"></img>
        </figure>
        <nav className="nav-header">
          <Link to="/" className="nav-header_link-home">
            Accueil
          </Link>
          <Link to="/about" className="nav-header_link-about">
            A Propos
          </Link>
        </nav>
      </header>
    )
  }

export default Header