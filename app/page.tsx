import Blog from "./blog/page";
import ContactSection from "./contact/page";
import Home from "./home/page";
import Review from "./review/page";
import ServicesDetails from "./services/page";
import Skills from "./skills/page";
import Works from "./works/page";



export default function page() {
  return (
   <>
  <Home />
  <ServicesDetails />
  <Works />
  <Skills />
  {/* <Review /> */}
  {/* <Blog /> */}
  <ContactSection />
   </>
  );
}
