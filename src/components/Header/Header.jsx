import logo from '../../assets/Images/LOGO.svg'
import Nav from '../Navigation/Navigation'
import '../../Utils/style-page/index.css'
// import styled from 'styled-components'

function Header() {
  return (
    <header className="header_group">
      <figure className="header_group_figure">
        <img className="logo" src={logo} alt="Logo de l'agence Kasa"></img>
      </figure>
      <Nav />
    </header>
  )
}

export default Header
