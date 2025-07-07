import InteractiveObject from "@/components/interactive-object";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">About Elkiya Digital</h2>
            <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Based in Asia, we are a passionate team of digital marketing experts dedicated to helping brands, companies, and entrepreneurs promote their products or services and achieve explosive online growth.
            </p>
            <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of digital marketing services to help businesses achieve their goals. Whether you need a comprehensive A to Z campaign or targeted support in specific areas, we've got you covered.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Full-Service Campaigns</h3>
                  <p className="text-muted-foreground">From concept to execution and evaluation, we manage your entire digital marketing journey.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Digital Asset Development</h3>
                  <p className="text-muted-foreground">We build stunning websites, apps, and digital resources that captivate and convert.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Data-Driven Strategies</h3>
                  <p className="text-muted-foreground">Our approach is rooted in analytics to ensure maximum ROI for your marketing spend.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
             <InteractiveObject objectType="sphereCluster" objectColor="#8A42F4" />
          </div>
        </div>
      </div>
    </section>
  );
}
