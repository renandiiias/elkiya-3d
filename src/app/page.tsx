import Header from '@/components/header';
import Footer from '@/components/footer';
import HomeSection from '@/components/sections/home';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import CollectionsSection from '@/components/sections/collections';
import PricingSection from '@/components/sections/pricing';
import TestimonialsSection from '@/components/sections/testimonials';
import PartnersSection from '@/components/sections/partners';
import EventsSection from '@/components/sections/events';
import FaqSection from '@/components/sections/faq';
import CareersSection from '@/components/sections/careers';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <CollectionsSection />
        <PricingSection />
        <TestimonialsSection />
        <PartnersSection />
        <EventsSection />
        <FaqSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
