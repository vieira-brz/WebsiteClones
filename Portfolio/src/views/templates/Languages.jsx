import React from 'react'

import './Languages.scss'

function Languages() {

    // Mapeia os níveis para gerar os spans
    const rangePortuguese = 4;
    const rangeEnglish = 2;
    const rangeSpanish = 1;

    const levels = ['Beginner', 'Intermediate', 'Advanced', 'Fluent'];

    return (
        <div className="languages">
            <div className='range'>
                <h3>🇧🇷 Portuguese</h3>
                <input type='range' min='1' max='4' step='.1' value={rangePortuguese} />
                <div className="levels">
                    {levels.map((level, index) => (
                        <span key={index} className={rangePortuguese === index + 1 ? 'active' : ''}>
                            {level}
                        </span>
                    ))}
                </div>
            </div>
            <div className='range'>
                <h3>🇺🇸 English</h3>
                <input type='range' min='1' max='4' step='.01' value={rangeEnglish + 0.25} />
                <div className="levels">
                    {levels.map((level, index) => (
                        <span key={index} className={rangeEnglish === index + 1 ? 'active' : ''}>
                            {level}
                        </span>
                    ))}
                </div>
            </div>
            <div className='range'>
                <h3>🇪🇸 Spanish</h3>
                <input type='range' min='1' max='4' step='.1' value={rangeSpanish + 0.2} />
                <div className="levels">
                    {levels.map((level, index) => (
                        <span key={index} className={rangeSpanish === index + 1 ? 'active' : ''}>
                            {level}
                        </span>
                    ))}
                </div>
            </div>
            <br />
        </div>
    )
}

export default Languages
