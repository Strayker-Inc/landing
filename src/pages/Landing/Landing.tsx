import React from "react";
import { RouteComponentProps, withRouter  } from "react-router-dom";
import IPage from "../../interfaces/page";
import './Landing.css'
import AboutUs from '../../components/landing/AboutUsSection';
import ServicesCards from '../../components/landing/ServicesCards'
import Testimonials from "../../components/landing/Testimonials";
import Footer from '../../components/landing/Footer';
import ContactSection from '../../components/landing/ContactSection';
// import Partners from "../../components/Partners";
import Hero from "../../components/landing/Hero";
import Navbar from "../../components/landing/Navbar";
import {useTranslation} from "react-i18next";

/* Page scroll effect https://www.youtube.com/watch?v=htw4iKMYzEc */
// const containerStyle: React.CSSProperties = {
//   scrollSnapType: "y mandatory",
//   overflowY: "scroll",
//   height: '100vh',
// };

const LandingPage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const { t } = useTranslation('common');

  return (
    <div className="font-inter bg-gray-100" >
      <Navbar t={t} />

      <Hero t={t} />

      <AboutUs t={t} />

      {/*<Partners t={t} />*/}

      <ServicesCards t={t}/>

      <Testimonials t={t} />

      <ContactSection t={t}/>

      <Footer t={t}/>
    </div>
  );
};

export default withRouter(LandingPage);
