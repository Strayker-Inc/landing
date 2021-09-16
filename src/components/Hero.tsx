import React, { useState }  from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import IContact from "../interfaces/contact";
import LandingService from '../services/landing.service';

/* Page scroll effect https://www.youtube.com/watch?v=htw4iKMYzEc */
const sectionStyle: React.CSSProperties = {
  // backgroundImage: `url('./assets/images/background.png')`,
  scrollSnapAlign: 'start',
  height: '95vh',
};

const Hero = (props: any) => {


  return (
    <section className="flex justify-center items-center bg-gray-100" style={sectionStyle} id="top">
        <div className="text-center">

          <h1 className="text-4xl text-gray-800 mb-4 font-extrabold leading-none tracking-tight lg:text-6xl ">
            <span>{props.t('hero.title')}</span>
            &nbsp;
            <span className="text-green">{props.t('hero.titleColored')}</span>
          </h1>
          <p className="text-2xl mb-8 text-gray-600 sm:max-w-lg sm:mx-auto ">
            {props.t('hero.text')}
          </p>
          {/* <div className="my-3 sm:mt-8 flex justify-center">
            <a href="https://twitter.com/slinqer" target="_blank" rel="noreferrer">
              <img className="w-10 mx-2 sm:mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-twitter.svg" alt=""/>
            </a>
            <a href="https://instagram.com/slinqerglobal" target="_blank" rel="noreferrer">
              <img className="w-10 mx-2 sm:mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-instagram.svg" alt=""/>
            </a>
            <a href="https://slinqer.medium.com" target="_blank" rel="noreferrer">
              <img className="w-10 mx-2 sm:mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-medium.svg" alt=""/>
            </a>
            <a href="https://github.com/slinqer" target="_blank" rel="noreferrer">
              <img className="w-10 mx-2 sm:mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-github.svg" alt=""/>
            </a>
          </div> */}



        {/* <div className="">
          <img className="h-96 rounded-lg" src="./assets/images/nature.jpg" alt="" />
        </div> */}
        </div>

    </section>
  );
};

export default Hero;
