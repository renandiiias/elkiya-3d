import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anya Sharma",
    title: "CEO, TechNova",
    image: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    testimonial: "Elkiya's team transformed our digital presence. Their strategic approach to SEO and content marketing doubled our organic leads in just five months. Truly remarkable results!",
  },
  {
    name: "Budi Hartono",
    title: "Founder, GrowthX Foods",
    image: "https://placehold.co/100x100.png",
    hint: "man portrait",
    testimonial: "The social media campaign they executed was a game-changer for our brand. Engagement went through the roof, and we saw a direct impact on our sales. Highly recommended.",
  },
  {
    name: "Chen Wei",
    title: "Marketing Director, Asia Ventures",
    image: "https://placehold.co/100x100.png",
    hint: "person smiling",
    testimonial: "Working with Elkiya felt like having an in-house team of experts. Their dedication, creativity, and data-driven insights are second to none. They are true partners in our growth.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            We're proud to have earned the trust of our clients. Here's what they have to say about working with us.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-muted-foreground flex-grow">"{testimonial.testimonial}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
