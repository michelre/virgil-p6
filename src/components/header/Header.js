import { NavLink } from 'react-router-dom'
import './header.css'
import Logo from '../../assets/logo.jpg'

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="Logo kasa" />
			</h1>
            <nav>
        <NavLink
          className="innactif"
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className="innactif"
          to="/about"
        >
          À propos
        </NavLink>
      </nav>
		</header>
	)
}

// Comment gérer l'actif ?