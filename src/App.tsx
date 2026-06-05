import { useState } from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import EmailCaptureModal from './components/EmailCaptureModal';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans antialiased text-slate-800">
      <Hero onCtaClick={() => setIsModalOpen(true)} />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <PricingSection onReserve={() => setIsModalOpen(true)} />
      <FaqSection />
      <Footer />
      <EmailCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
