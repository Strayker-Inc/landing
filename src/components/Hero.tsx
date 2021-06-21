const Hero = (props: any) =>
  <section className="flex justify-center  font-inter">
    <div className="mt-60 mb-28 text-center ">
      <h1 className="text-5xl font-extrabold text-gray-800  md:text-6xl">
        <span>{props.t('hero.title')}</span>
        <br />
        <span className="text-green">{props.t('hero.titleColored')}</span>
      </h1>
      <p className="mt-8 text-gray-500  sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
        {props.t('hero.text')}
      </p>
      <div className="mt-5 sm:mt-8 flex justify-center">
        <div className="rounded-md ">
          <a href="#contactForm"
            className="w-full flex items-center justify-center mx-auto  hover:underline gradient text-white font-inter font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
            {props.t('hero.buttons.contact')}
          </a>
        </div>
      </div>
    </div>
  </section>

export default Hero;
