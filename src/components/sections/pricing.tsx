import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "$999",
    period: "/month",
    description: "For startups and small businesses testing the digital waters.",
    features: [
      "Social Media Management (2 Platforms)",
      "Basic SEO Audit & Setup",
      "Content Creation (4 Articles/mo)",
      "Monthly Performance Report",
    ],
    isPopular: false,
  },
  {
    name: "Growth",
    price: "$2,499",
    period: "/month",
    description: "For growing businesses ready to scale their online presence.",
    features: [
      "All features in Starter, plus:",
      "Advanced SEO & Link Building",
      "PPC Campaign Management (up to $5k ad spend)",
      "Email Marketing Campaigns",
      "Bi-weekly Strategy Calls",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For established brands requiring a comprehensive, A-Z solution.",
    features: [
      "All features in Growth, plus:",
      "Full-service Marketing Automation & CRM",
      "Custom Web/App Development",
      "Advanced Analytics & CRO",
      "Dedicated Account Manager",
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Flexible Pricing for Every Need</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Choose the plan that's right for your business. All plans can be customized.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col h-full ${tier.isPopular ? 'border-primary border-2 shadow-2xl transform scale-105' : ''}`}>
              <CardHeader className="text-center">
                {tier.isPopular && <div className="text-sm font-bold text-primary">MOST POPULAR</div>}
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.isPopular ? "default" : "outline"}>
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
