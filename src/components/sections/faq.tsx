import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer: "We work with a diverse range of clients, from startups and entrepreneurs to established brands and large corporations across various industries. Our strategies are customized to fit the unique needs and goals of each business."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "The timeline for results varies depending on the services used. SEO can take 3-6 months to show significant impact, while PPC campaigns can generate traffic almost immediately. We focus on both short-term wins and long-term sustainable growth."
  },
  {
    question: "Do you offer custom packages?",
    answer: "Absolutely! While we have standard pricing tiers, we understand that every business is unique. We are happy to create a custom service package tailored specifically to your needs and budget."
  },
  {
    question: "How do you measure the success of a campaign?",
    answer: "We use a variety of key performance indicators (KPIs) to measure success, including website traffic, conversion rates, lead generation, cost per acquisition (CPA), return on ad spend (ROAS), and overall ROI. We provide regular, detailed reports to keep you informed of your campaign's performance."
  },
  {
    question: "What makes Elkiya different from other digital agencies?",
    answer: "Our key differentiators are our deep expertise in the Asian market, our commitment to data-driven strategies, and our focus on building long-term partnerships with our clients. We combine creative innovation with analytical precision to deliver outstanding results."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Have questions? We have answers. Here are some of the most common inquiries we receive.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
