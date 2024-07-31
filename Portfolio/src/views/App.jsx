/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react'

// Css
import './App.scss'

// Route webpack
import { BrowserRouter as Router } from 'react-router-dom'

// Components
import Section from './templates/Section'
import Header from './templates/Header';
// import Apresentation from './templates/Apresentation';
import Timeline from './templates/Timeline';
import Skills from './templates/Skills';
import Languages from './templates/Languages';
import Social from './templates/Social';

function App() {

    return (
        <div className='App'>
            <Router>
                <Section className='profile'>
                    <Header/>
                </Section>

                <Section auxClass='timeline-skills'>
                    <Timeline/>
                    <Skills/>
                </Section>

                <Section auxClass='languages-media'>
                    <Languages/>
                    <img src='./images/social-media/devs.png' className='devs'/>
                    <Social/>
                </Section>
            </Router>
        </div>
    )
}

export default App
