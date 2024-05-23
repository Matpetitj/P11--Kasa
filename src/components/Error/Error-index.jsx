import { Link } from 'react-router-dom'
import '../../Utils/style-page/index.css'

function ErrorComponent() {
  return (
    <div className="error_container">
      <p className="error_code">404</p>
      <p className="error_advertisement">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error_link_home">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default ErrorComponent
