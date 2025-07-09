
import About from "./about/page";
import ContactSection from "./contact/page";
import Home from "./home/page";
import Works from "./works/page";



export default function page() {
  return (
   <>
  <Home />
  {/* <ServicesDetails /> */}
  <Works />
  <About />
  {/* <Review /> */}
  {/* <Blog /> */}
  <ContactSection />
   </>
  );
}
