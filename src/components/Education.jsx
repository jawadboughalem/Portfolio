import React, { useState } from 'react';
import '../styles/Education.css';
import { Chrono } from 'react-chrono';
import { educationsList } from '../data/educationsList';
import { skillsList } from '../data/skillsList';

function Education() {
    // Définir "Frontend" comme type de compétence sélectionné par défaut
    const [selectedSkillType, setSelectedSkillType] = useState("Frontend");

    const handleFilterChange = (event) => {
        setSelectedSkillType(event.target.value);
    };

    const filteredSkills = skillsList.filter(skill => 
        selectedSkillType === "all" || skill.type === selectedSkillType
    );

    return (
        <section id="education" className="portfolio-education">
            <h2 className='portfolio-education-h2'>Mes formations</h2>
            <div className="portfolio-timeline">
                <Chrono items={educationsList} 
                        mode="VERTICAL_ALTERNATING"  
                        theme={{primary: '#672112', 
                                secondary:"#c9e1ff", 
                                titleColor: '#672112', 
                                titleColorActive: '#672112', 
                                cardTitleColor: '#672112', 
                                cardDetailedColor: '#672112'}} 
                        hideControls='false'
                        fontSizes={{
                            cardSubtitle: '0.85rem',
                            cardText: '0.8rem',
                            cardTitle: '1rem',
                            title: '0.8rem',
                          }}/>
            </div>
            <h2>Langages</h2>
            
            {/* Le filtre ici */}
            <div className="portfolio-filter">
                <select value={selectedSkillType} onChange={handleFilterChange}>
                    <option value="Frontend">Frontend</option>  {/* "Frontend" en première option */}
                    <option value="Backend">Backend</option>
                    <option value="Logiciels">Logiciels</option>
                    <option value="all">Tous</option>
                </select>
            </div>
            
            <div className='portfolio-langage'>
                {filteredSkills.map(skill => (
                    <div key={skill.title} className='portfolio-education-skills'>
                        <img src={skill.icon} alt={skill.title} className='portfolio-education-skills-img'/>
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education;
