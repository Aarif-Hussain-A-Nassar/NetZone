"use client";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
