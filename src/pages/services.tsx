import NavBar from "@/components/NavBar";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesMid from "@/components/services/ServicesMid";
import ServicesGrid from "@/components/services/ServicesGrid";
import Head from "next/head";

export default function Services() {
  return (
    <>
      {" "}
      <Head>
        <meta
          name="description"
          content="London's trusted locksmith service, providing reliable and efficient solutions for all your security needs. From emergency lockouts to advanced security system installations, we're here to safeguard your home or business. Contact us for expert locksmith services tailored to your needs"
        />
        <title>Services | Faw 4 Locks</title>
      </Head>
      <main>
        <NavBar />
        <ServicesHero />
        <ServicesMid />
        <ServicesGrid />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
}
