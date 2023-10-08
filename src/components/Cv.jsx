import React from 'react';
import cv from "../assets/general/BOJCV.pdf";
import '../styles/Cv.css';

function Cv() {
    return (
        <section id="cv" className="portfolio-cv">
            <h2>Mon CV</h2>

            <a href={cv} target="_blank" rel="noreferrer" download="Boughalem_CV">Télécharger mon CV</a>
        </section>
    );
}

export default Cv;

