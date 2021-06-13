import React from "react";
import { RouteComponentProps, withRouter  } from "react-router-dom";
// Interfaces
import IPage from "../../interfaces/page";
import './Home.css'
// Components
import ServicesCards from '../../components/ServicesCards'
import AboutUs from '../../components/AboutUsSection';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import Partners from "../../components/Partners";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

const HomePage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {

  return (
    <div className="tracking-normal">
      {/* <!--Nav--> */}
      <Navbar />

      {/* <!-- HERO --> */}
      <Hero />

      {/* <!-- OUR PARTNERS --> */}
      <Partners />

      {/* <!-- ABOUT US--> */}
      <AboutUs />

      {/* <!-- OUR SERVICES --> */}
      <ServicesCards />

      {/* <!-- CONTACT US --> */}
      <ContactSection />

      {/* <!-- Begin Footer Section--> */}
      <Footer />

    </div>
  );
};

export default withRouter(HomePage);
