
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutIntro from '@/components/AboutIntro';
import CoreServicesOverview from '@/components/CoreServicesOverview';
import QualityCompliance from '@/components/QualityCompliance';
import PartnerCTA from '@/components/PartnerCTA';
import Services from '@/components/Services';
import TechnologySolutions from '@/components/TechnologySolutions';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutIntro />
      <CoreServicesOverview />
      <QualityCompliance />
      <PartnerCTA />
      <Services />
      <TechnologySolutions />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
