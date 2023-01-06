import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavContainer = styled.nav`

`

function Header() {
    return (
      <NavContainer>
        <Link to="/">
          {/* <HomeLogo /> */}
        </Link>
        <div>
          <Link to="/">Accueil</Link>
          <Link to="../pages/About/About-index">A propos</Link>
        </div>
      </NavContainer>
    )
  }

export default Header