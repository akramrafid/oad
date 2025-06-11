
import { Layout } from "@/components/layout/Layout";
import { CROHero } from "@/components/home/CROHero";
import { FeaturedIn } from "@/components/home/FeaturedIn";
import { Testimonials } from "@/components/home/Testimonials";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { Mission } from "@/components/home/Mission";
import { Roadmap } from "@/components/home/Roadmap";
import { FAQ } from "@/components/home/FAQ";
import { Contact } from "@/components/home/Contact";

const Index = () => {
  return (
    <Layout>
      <CROHero />
      <FeaturedIn />
      <Features />
      <HowItWorks />
      <Mission />
      <Roadmap />
      <Testimonials />
      <FAQ />
      <Contact />
    </Layout>
  );
};

export default Index;
