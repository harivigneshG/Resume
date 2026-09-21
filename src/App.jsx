import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import GravityDots from './components/ui/GravityDots';

function App() {
    return (
        <ThemeProvider>
            <GravityDots />
            <div className="min-h-screen bg-transparent transition-colors duration-300 relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <Experience />
                    <Projects />
                    <Skills />
                </main>
                <Contact />
            </div>
        </ThemeProvider>
    );
}

export default App;