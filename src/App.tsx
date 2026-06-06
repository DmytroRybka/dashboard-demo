import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import ReviewsSection from './components/ReviewsSection';
import PricingSection from './components/PricingSection';
import EmailCaptureModal from './components/EmailCaptureModal';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen font-sans antialiased text-slate-800">
      <Navbar onBuyClick={openModal} />
      <Hero onCtaClick={openModal} />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <ReviewsSection />
      <PricingSection onReserve={openModal} />
      <FaqSection />
      <Footer />
      <EmailCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
