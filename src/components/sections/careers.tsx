import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior 3D Artist",
    location: "Remote (Asia Timezone)",
    type: "Full-time",
    description: "We're looking for a talented 3D artist to create stunning visuals and animations for our clients' campaigns.",
  },
  {
    title: "Digital Marketing Strategist",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    description: "Develop and execute innovative digital marketing strategies to drive client success and growth.",
  },
  {
    title: "Full-Stack Web Developer",
    location: "Remote",
    type: "Contract",
    description: "Build and maintain high-performance web applications and digital assets for a variety of brands.",
  },
];

export default function CareersSection() {
  return (
    <section id="careers" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            We are always looking for passionate, creative, and driven individuals to join the Elkiya family. Help us shape the future of digital marketing.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="flex flex-col transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                    </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
