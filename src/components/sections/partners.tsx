import { Sparkles } from "lucide-react";

const partners = [
    { name: "TechNova", icon: <Sparkles /> },
    { name: "GrowthX", icon: <Sparkles /> },
    { name: "Asia Ventures", icon: <Sparkles /> },
    { name: "Creative Guild", icon: <Sparkles /> },
    { name: "Innovate Hub", icon: <Sparkles /> },
    { name: "MarketBridge", icon: <Sparkles /> },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Trusted Partners</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            We collaborate with industry leaders to deliver the best possible solutions for our clients.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <div className="text-primary">{partner.icon}</div>
              <span className="font-semibold text-lg">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
