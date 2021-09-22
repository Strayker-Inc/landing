import React from "react";
/* Page scroll effect https://www.youtube.com/watch?v=htw4iKMYzEc */
const sectionStyle: React.CSSProperties = {
  // scrollSnapAlign: 'start',

};

const Hero = (props: any) => {
  return (
    <section className="flex h-screen justify-center items-center bg-gray-100" style={sectionStyle} id="top">
      <video className="absolute w-full h-screen object-cover" autoPlay loop muted>
        <source src="https://res.cloudinary.com/slinqer/video/upload/v1631900417/video_background_eshz8b.mp4" type="video/mp4" />
      </video>
      <div className="text-center z-10">
        <h1 className="text-4xl text-white mb-4 font-extrabold leading-none tracking-tight lg:text-6xl ">
          <span>{props.t('hero.title')}</span>
          &nbsp;
          <span className="text-green">{props.t('hero.titleColored')}</span>
        </h1>
        <p className="text-2xl mb-8 text-white sm:max-w-lg sm:mx-auto ">
          {props.t('hero.text')}
        </p>
        <a href="#contactForm">
          <button className="w-5/6  md:w-1/2 p-4 text-xl bg-green text-white font-bold rounded-lg transform transition duration-500 hover:scale-150">
            {props.t('hero.buttons.join')}
          </button>
        </a>
      </div>
      <img src="./assets/images/waves-inverted-gray.svg" className="absolute inset-x-0 bottom-0 w-full" alt="" />
    </section>
  );
};

export default Hero;
