import logo from '../../assets/Images/LOGO.svg'
import Nav from '../Navigation/Navigation'
import { Link } from 'react-router-dom'
import './header.scss'
// import styled from 'styled-components'

function Header() {
  return (
    <header className="header_group">
      <figure className="header_group_figure">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo de l'agence Kasa"></img>
        </Link>
      </figure>
      <Nav />
    </header>
  )
}

export default Header
