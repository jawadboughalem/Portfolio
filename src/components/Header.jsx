import '../styles/Header.css';
import logo from '../assets/general/logo.png';

function Header() {
    return (
        <section className="portfolio-bg-up">
            <div className='portfolio-logo-up'>
                <img src={logo} alt="Logo Boughalem Jawed - Portfolio" />
                <div className='portfolio-logo-name'>
                    <h1>Jawâd BOUGHALEM</h1>
                    <span>Portfolio</span>
                </div>
                
            </div>

            <nav className='portfolio-nav'>
                <a href="#about">À propos</a>
                <a href="#education">Formations</a>
                <a href="#project">Projets</a>
                <a href="#cv"> Mon CV</a>
            </nav>
            
        </section>
    )
}

export default Header;