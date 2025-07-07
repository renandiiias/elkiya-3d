import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import InteractiveObject from "@/components/interactive-object";

const projects = [
  {
    title: "E-commerce Giant SEO Overhaul",
    object: { type: 'torusKnot', color: '#8A42F4' },
    tags: ["SEO", "E-commerce", "Content Strategy"],
    description: "Achieved a 250% increase in organic traffic and a 120% rise in conversions within 6 months through a comprehensive SEO and content strategy.",
  },
  {
    title: "Tech Startup Viral Campaign",
    object: { type: 'icosahedron', color: '#FF4DA6' },
    tags: ["Social Media", "Video", "PPC"],
    description: "Generated over 10 million impressions and 50,000 new leads with a viral video campaign across multiple social platforms.",
  },
  {
    title: "Lifestyle Brand App Launch",
    object: { type: 'dodecahedron', color: '#1CDEFF' },
    tags: ["App Development", "Branding", "Email Marketing"],
    description: "Successfully launched a mobile app, acquiring 100,000 users in the first month through targeted advertising and community building.",
  },
    {
    title: "Finance Service Web Revamp",
    object: { type: 'sphereCluster', color: '#3399FF' },
    tags: ["Web Development", "UI/UX", "Automation"],
    description: "Redesigned a corporate website focusing on user experience and lead generation, increasing qualified leads by 300%.",
  },
];

export default function CollectionsSection() {
  return (
    <section id="collections" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Success Stories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            We've helped businesses of all sizes achieve remarkable results. Explore our collection of case studies.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto mt-12"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col overflow-hidden transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-0 bg-background/50">
                      <div className="aspect-[3/2] w-full">
                        <InteractiveObject objectType={project.object.type as any} objectColor={project.object.color} />
                      </div>
                    </CardContent>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 my-4">
                            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                        <p className="text-sm text-muted-foreground flex-grow">{project.description}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
