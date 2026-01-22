import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Packages } from '../components/Packages';
import { Process } from '../components/Process';
import { GalleryPreview } from '../components/GalleryPreview';
import { Testimonials } from '../components/Testimonials';
import { Team } from '../components/Team';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { MobileBookingCTA } from '../components/MobileBookingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Packages />
      <Process />
      <GalleryPreview />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <MobileBookingCTA />
    </div>
  );
};

export default Index;
