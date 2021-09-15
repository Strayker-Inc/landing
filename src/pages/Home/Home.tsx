import React from "react";
import { RouteComponentProps, withRouter  } from "react-router-dom";
import IPage from "../../interfaces/page";
import './Home.css'
import AboutUs from '../../components/AboutUsSection';
import ServicesCards from '../../components/ServicesCards'
// import Footer from '../../components/Footer';
// import ContactSection from '../../components/ContactSection';
// import Partners from "../../components/Partners";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import {useTranslation} from "react-i18next";

/* Page scroll effect https://www.youtube.com/watch?v=htw4iKMYzEc */
const containerStyle: React.CSSProperties = {
  scrollSnapType: "y mandatory",
  overflowY: "scroll",
  height: '100vh',
};

const HomePage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
  const {t} = useTranslation('common');

  return (
    <>
    <div className="font-inter" style={containerStyle}>
      <Navbar t={t} />

      <Hero t={t} />

      <AboutUs t={t} />

      {/*
      <Partners t={t} />


      <ContactSection t={t}/>

       */}
      <ServicesCards t={t}/>
    </div>
    {/* <Footer t={t}/> */}
    </>
  );
};

export default withRouter(HomePage);
