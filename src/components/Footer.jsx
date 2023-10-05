import '../styles/Footer.css';
import logo from '../assets/general/logo.png';

function Footer() {
    return (
        <section className="portfolio-bg-down">
            <div className='portfolio-logo-down'>
                <img src={logo} alt="Logo Boughalem Jawed - Portfolio" />
            </div>
            <div className='portfolio-droits'>
                <span>2023 © Tous droits réservés</span>
                <span>Jawâd Boughalem</span>
            </div>
        </section>
    )
}

export default Footer;