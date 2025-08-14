import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Stylists from '@/components/Stylists';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stylists />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
