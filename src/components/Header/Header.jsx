import logo from "../../assets/Images/LOGO.svg";
import Nav from "../Navigation/Navigation";
import "./Header.css";
// import styled from 'styled-components'

function Header() {
    return (
      <header class="header_group">
        <figure className="header_group_figure">
          <img className="logo" src={logo} alt="Logo de l'agence Kasa"></img>
        </figure>
        <Nav/>
      </header>
    )
  }

export default Header