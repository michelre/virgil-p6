import {Link} from 'react-router-dom'
import './404.scss'

function Error() {
    return (
        <div className="errorComponent">
            <p> 404 </p>
            <p> Oups! La page que vous demandez n'existe pas. </p>
            <Link to="/"> Retourner sur la page d'accueil </Link>
        </div>
    )
}

export default Error