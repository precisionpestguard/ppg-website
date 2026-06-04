import { useState } from 'react';
import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import { ProblemStrip, HowItWorks, Comparison } from './components/Sections';
import { Validation, Roadmap, CTA, Footer } from './components/MoreSections';
import PilotModal from './components/PilotModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Nav onRequestPilot={() => setModalOpen(true)} />
      <Hero onRequestPilot={() => setModalOpen(true)} />
      <ProblemStrip />
      <HowItWorks />
      <Comparison />
      <Validation />
      {/* <Roadmap /> */}
      <CTA onRequestPilot={() => setModalOpen(true)} />
      <Footer />
      <PilotModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default App;
