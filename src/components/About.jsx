import '../styles/About.css';
import Boughalem from "../assets/general/ppboj.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <section id="about" className="portfolio-about">
            <h2>À propos</h2>
            <div className="portfolio-about-display">
                <section className="portfolio-about-img">
                    <img src={Boughalem} alt="Laurine NOËL" />
                </section>
                <section className="portfolio-about-details">
                    <h3><strong>Bonjour ! <br/> Je suis Jawâd Boughalem, Développeur Web Junior</strong></h3>
                    <p>Après une reconversion dans le développement web, je me spécialise actuellement en frontend,
                    avec un focus sur JavaScript et React, tout en restant ouvert à d'autres technologies. Mon parcours inclut également une expérience en logistique, acquise en alternance.</p>
                    <p>Vous pouvez me contacter par mail : <a href="mailto:jawadboughalem91@gmail.com">jawadboughalem91@gmail.com</a></p>                  
                    <div className='portfolio-about-button'>
                        <a href="https://github.com/jawadboughalem" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faSquareGithub} /> <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/jaw%C3%A2d-boughalem-567192183/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
                        </a>
                    </div>
                </section>
            </div>
            
        </section>
    )
}

export default About;