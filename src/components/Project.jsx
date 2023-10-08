import { useState } from 'react';
import { projectsList } from "../data/projectsList";
import '../styles/Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentProject = projectsList[currentIndex];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectsList.length - 1 : prevIndex - 1
        );
    };
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectsList.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section id="project" className="portfolio-project-slider">
            <h2>Mes projets</h2>
            <div className="portfolio-project-slider-images">
                <div>
                    <img
                        key={currentProject.id}
                        src={currentProject.cover}
                        alt={`Slider ${currentProject.id}`}
                    />
                    <div className="portfolio-project-slider-images-div">
                        <h3>{currentProject.title}</h3>
                        <p>{currentProject.description}</p>
                        <a href={currentProject.url}><strong>{currentProject.url}</strong></a>
                        <p>{currentProject.difficulties}</p>
                    </div>
                </div>
            </div>
            {projectsList.length > 1 && (
                <div className="portfolio-project-slider-btn-div">
                    <button className="portfolio-project-slider-btn previous" onClick={goToPrevious}>
                        <span>Précédent</span>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="portfolio-project-slider-btn next" onClick={goToNext}>
                        <span>Suivant</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            )}
            {projectsList.length > 1 && (
                <div className="portfolio-project-slider-counter">
                    <p>{currentIndex + 1}/{projectsList.length}</p>
                </div>
            )}
        </section>
    );
}

export default Project;