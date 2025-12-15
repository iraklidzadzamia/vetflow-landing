import {
  Navigation,
  Hero,
  Problem,
  Features,
  HowItWorks,
  BookingModes,
  Integrations,
  Safety,
  Proof,
  Pricing,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Features />
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
    </>
  );
}
