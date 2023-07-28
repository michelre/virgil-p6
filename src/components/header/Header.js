import { NavLink } from 'react-router-dom'
import './header.scss'
import Logo from '../../assets/logo.jpg'

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="Logo kasa" />
			</h1>
            <nav>
        <NavLink
          className=""
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className=""
          to="/about"
        >
          À propos
        </NavLink>
      </nav>
		</header>
	)
}

// Comment gérer l'actif ?