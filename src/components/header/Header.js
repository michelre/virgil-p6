import './header.css'
import Logo from '../../assets/logo.jpg'

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="Logo kasa" />
			</h1>
            <ul className='lienNavbar'>
                <li>
                    <a href="">Accueil</a>
                </li>
                <li>
                    <a href="">à propos</a>
                </li>
            </ul>
		</header>
	)
}