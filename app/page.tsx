import {
  Navigation,
  Hero,
  Problem,
  Features,
  ObjectionHandler,
  HowItWorks,
  BookingModes,
  Integrations,
  Safety,
  Proof,
  Pricing,
  FAQ,
  FinalCTA,
  Footer,
  ScrollToTop,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Features />
        <ObjectionHandler />
        <HowItWorks />
        <BookingModes />
        <Integrations />
        <Safety />
        <Proof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
