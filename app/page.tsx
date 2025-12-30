import {
  Navigation,
  Hero,
  Problem,
  ValueStack,
  Proof,
  HowItWorks,
  Pricing,
  Guarantee,
  ObjectionHandler,
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
        <ValueStack />
        <Proof />
        <HowItWorks />
        <Pricing />
        <Guarantee />
        <ObjectionHandler />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
