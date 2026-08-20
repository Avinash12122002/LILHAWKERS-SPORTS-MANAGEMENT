import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ApproachAndSystem from "@/components/ApproachAndSystem";
import Stages from "@/components/Stages";
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
        <ApproachAndSystem />
        <Stages />
        <Partners />
        <WhyUs />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
