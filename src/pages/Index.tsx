import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UseCasesSection from "@/components/UseCasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import SurveyForm from "@/components/SurveyForm";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section id="hero">
          <HeroSection />
        </section>
        <BenefitsSection />
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <UseCasesSection />
        <TestimonialsSection />
        <section id="pricing">
          <PricingSection />
        </section>
        <SurveyForm />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;