// src/App.jsx
import './index.css';
import HeroSection from './components/HeroSection';
import Stats from './components/Stats';
import Advantages from './components/Advantages';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import TechDiagram from './components/TechDiagram';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-950 text-white font-sans leading-relaxed">
      <HeroSection />
      <Stats />
      <Advantages />
      <CaseStudies />
      <Team />
      <TechDiagram />
      <Partners />
      <CTA />
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
