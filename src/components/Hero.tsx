import React from "react";
/* Page scroll effect https://www.youtube.com/watch?v=htw4iKMYzEc */
const sectionStyle: React.CSSProperties = {
  scrollSnapAlign: 'start',
  height: '95vh',
};

const Hero = (props: any) => {
  return (
    <section className="flex justify-center items-center bg-gray-100" style={sectionStyle} id="top">
      <video className="absolute h-screen w-full object-cover" autoPlay loop muted>
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
