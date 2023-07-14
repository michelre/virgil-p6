import { Link } from 'react-router-dom'
import './404.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function Error() {
  return (
    <>
    <Header />
    <div className="errorComponent">
      <p> 404 </p>
      <p> Oups! La page que vous demandez n'existe pas. </p>
      <Link to="/"> Retourner sur la page d'accueil </Link>
    </div>
    <Footer />
    </>
  )
}

export default Error