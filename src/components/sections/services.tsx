import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  Megaphone, 
  Code, 
  Users, 
  FileText, 
  Mail, 
  Search, 
  DollarSign, 
  Target, 
  Palette, 
  Bot 
} from "lucide-react";

const services = [
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: "Digital Campaign Management",
    description: "From concept to execution and evaluation, we run your entire A-Z digital campaign for success."
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web & App Development",
    description: "Creating high-performance websites, apps, and digital assets to engage your audience."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Social Media Management",
    description: "Building a strong social presence through marketing, ads, community building, and customer service."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Content Marketing",
    description: "Developing content strategies and producing rich content (articles, graphics, videos) to attract attention."
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Email Marketing",
    description: "Engaging your audience through email blasts, newsletters, and strategic list building."
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Search Engine Optimization (SEO)",
    description: "Improving your search ranking with proven strategies that follow Google's best practices."
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Search Engine Marketing (SEM)",
    description: "Driving targeted traffic with search ads, keyword analysis, and conversion optimization."
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Digital Advertising & PPC",
    description: "Managing PPC campaigns across various ad networks, including Google Ads and local media buying."
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Graphic Design & Branding",
    description: "Creating compelling visuals and creative assets that strengthen your brand identity."
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Marketing Automation",
    description: "Generating, nurturing, and scoring leads using powerful CRM platforms and automation tools."
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
            We provide a comprehensive suite of digital marketing services designed to elevate your brand and drive growth.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {services.map((service, index) => (
            <Card key={index} className="text-center transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
