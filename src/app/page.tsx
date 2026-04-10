import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { Coach } from '@/components/Coach';
import { Gallery } from '@/components/Gallery';
import { Pricing } from '@/components/Pricing';
import { Events } from '@/components/Events';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      <Hero />
      <Benefits />
      <Coach />
      <Gallery />
      <Pricing />
      <Events />
      
      <Footer />
      
      <StickyCTA />
      <WhatsAppButton />
    </main>
  );
}
