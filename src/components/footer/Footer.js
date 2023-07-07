import './footer.css'
import Logo from '../../assets/logo.jpg'

export default function Footer() {
	return (
		<footer className='footer'>
        	<img src={Logo} alt="Logo kasa" />
            <p>2020 Kasa. All rights reserved</p>
		</footer>
	)
}