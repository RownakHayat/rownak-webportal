'use client';

import Navbar from "@/components/Navbar/Navbar";
import HomePage from "./HomePage";
import WorksPage from "./WorksPage";
import Contact from "./contact/page";
import AboutMe from "./AboutPage";
import Footer from "@/components/footer/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-[100px]">
        <HomePage />
        <WorksPage />
        <AboutMe />
        <Contact />
      </main>
      <Footer/>
    </>
  );
}
