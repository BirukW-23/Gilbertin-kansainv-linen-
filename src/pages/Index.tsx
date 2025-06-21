
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Countries from '@/components/Countries';
import SuccessStories from '@/components/SuccessStories';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import TrustedCountries from '@/components/TrustedCountries';
const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <TrustedCountries/>
      <Services />
      <Countries />
      <SuccessStories />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
