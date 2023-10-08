import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Project';
import Cv from './components/Cv';
import Footer from './components/Footer';

import './styles/styles.css';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Header />
      <About />
      <Project />
      <Education />
      <Cv />
      <Footer />
    </Router>
  </React.StrictMode>
);