import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import MidSection from "@/components/MidSection";
import WhoSection from "@/components/WhoSection";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import NonEmergancy from "@/components/NonEmergency";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="London's trusted locksmith service, providing reliable and efficient solutions for all your security needs. From emergency lockouts to advanced security system installations, we're here to safeguard your home or business. Contact us for expert locksmith services tailored to your needs"
        />
        <title>London Locksmiths | Faw 4 Locks</title>
      </Head>
      <main>
        <NavBar />
        <Hero />
        <MidSection />
        <WhoSection />
        <Services />
        <FAQ />
        <NonEmergancy />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
}
