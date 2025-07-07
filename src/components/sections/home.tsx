import { Button } from "@/components/ui/button";
import ThreeScene from "@/components/three-scene";
import { ArrowRight } from "lucide-react";

export default function HomeSection() {
  return (
    <section id="home" className="w-full h-screen min-h-[700px] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/10 via-background/50 to-background"></div>
      <div className="container px-4 md:px-6 z-20 text-center relative">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-black font-headline tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-foreground drop-shadow-lg">
            Propel Your Brand Into The Digital Future.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We are Elkiya, a digital marketing agency engineering growth for visionary brands in Asia and beyond.
          </p>
          <div>
            <Button size="lg" asChild>
              <a href="#contact">
                Start Your Project <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="ml-4" asChild>
               <a href="#services">
                Our Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
