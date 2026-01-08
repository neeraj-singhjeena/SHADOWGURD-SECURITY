// import { HashRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <HashRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />
//     </HashRouter>
//   );
// }

// export default App;
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import SocialSidebar from "./components/SocialSidebar";
import AnimatedSection from "./components/AnimatedSection";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <AnimatedSection>
          <Home />
        </AnimatedSection>
      </section>

      <section id="about">
        <AnimatedSection>
          <About />
        </AnimatedSection>
      </section>

      <section id="services">
        <AnimatedSection>
          <Services />
        </AnimatedSection>
      </section>

      <section id="contact">
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </section>

      <Chatbot />
      <SocialSidebar />
      <Footer />
    </>
  );
}

export default App;
