import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import WhyVexa from '@/components/WhyVexa';
import Process from '@/components/Process';
import UseCases from '@/components/UseCases';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Solutions />
      <WhyVexa />
      <Process />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
