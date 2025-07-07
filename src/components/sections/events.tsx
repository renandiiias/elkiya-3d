import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";

const events = [
  {
    title: "Digital Growth Summit 2024",
    date: "October 26, 2024",
    time: "09:00 AM - 05:00 PM",
    location: "Virtual Event",
    description: "Join industry leaders to discuss the latest trends in digital marketing, AI, and e-commerce.",
    status: "upcoming",
  },
  {
    title: "SEO Masterclass Workshop",
    date: "September 15, 2024",
    time: "10:00 AM - 01:00 PM",
    location: "Jakarta Office & Online",
    description: "A hands-on workshop covering advanced SEO techniques and Google's latest algorithm updates.",
    status: "upcoming",
  },
  {
    title: "The Art of Content Marketing",
    date: "July 20, 2024",
    time: "02:00 PM - 03:00 PM",
    location: "Webinar",
    description: "We explored how to create compelling content that attracts, engages, and converts your target audience.",
    status: "past",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Events & Webinars</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Stay updated with our latest events, workshops, and webinars. Connect with us and learn from the experts.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card key={index} className={`flex flex-col ${event.status === 'past' ? 'opacity-70' : ''}`}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                </div>
              </CardContent>
              <CardFooter>
                {event.status === 'upcoming' ? (
                  <Button className="w-full">
                    Register Now <Ticket className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full">
                    Event Ended
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
