// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Chatbot from "./components/Chatbot";
// import SocialSidebar from "./components/SocialSidebar";
// import AnimatedSection from "./components/AnimatedSection";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <section id="home">
//         <AnimatedSection>
//           <Home />
//         </AnimatedSection>
//       </section>

//       <section id="about">
//         <AnimatedSection>
//           <About />
//         </AnimatedSection>
//       </section>

//       <section id="services">
//         <AnimatedSection>
//           <Services />
//         </AnimatedSection>
//       </section>

//       <section id="contact">
//         <AnimatedSection>
//           <Contact />
//         </AnimatedSection>
//       </section>

//       <Chatbot />
//       <SocialSidebar />
//       <Footer />
//     </>
//   );
// }

// export default App;
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import SecurityUpgradeSection from "./components/SecurityUpgradeSection";
import SecurityBanner from "./components/SecurityBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import WhySecuritySection from "./components/WhySecuritySection";
import FAQSection from "./components/FAQSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import SocialSidebar from "./components/SocialSidebar";
import AnimatedSection from "./components/AnimatedSection";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HOME SECTION */}
      <section id="home">
        <AnimatedSection>
          <Home />
        </AnimatedSection>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <AnimatedSection>
          <About />
        </AnimatedSection>
      </section>

      {/* SERVICES SECTION */}
      <section id="services">
        {/* <AnimatedSection> */}
        <Services />
        {/* </AnimatedSection> */}
      </section>

      {/* SECURITY UPGRADE SECTION */}
      <section id="security-upgrade">
        <AnimatedSection>
          <SecurityUpgradeSection />
        </AnimatedSection>
      </section>

      {/* PREMIUM SECURITY BANNER */}
      <section id="security-banner">
        <AnimatedSection>
          <SecurityBanner />
        </AnimatedSection>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose-us">
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>
      </section>

      {/* WHY SECURITY SECTION */}
      <section id="why-security">
        <AnimatedSection>
          <WhySecuritySection />
        </AnimatedSection>
      </section>

      {/* FAQ SECTION */}
      <section id="faq">
        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </section>

      {/* FLOATING COMPONENTS */}
      <SocialSidebar />
      <Chatbot />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
