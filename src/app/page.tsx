import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Stages from "@/components/Stages";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import WhyUs from "@/components/WhyUs";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Approach />
        <Stages />
        <HowItWorks />
        <Partners />
        <WhyUs />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
