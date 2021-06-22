const styleSection: any  = {
	'background-image': "url('./assets/images/background.png')",
};

const Hero = (props: any) =>
  <section className="flex h-screen bg-scroll font-inter opacity-95" style={styleSection}>
    <div className="m-auto text-center">
      <h1 className="text-5xl font-extrabold text-white  md:text-6xl shadow opacity-90">
        <span>{props.t('hero.title')}</span>
        <br />
        <span className="text-green shadow">{props.t('hero.titleColored')}</span>
      </h1>
      <p className="mt-8 text-white font-semibold  sm:text-lg sm:max-w-xl sm:mx-auto md:text-2xl">
        {props.t('hero.text')}
      </p>
      <div className="mt-5 sm:mt-8 flex justify-center">
        <div className="rounded-md ">
          <a href="#contactForm"
            className="w-full bg-white flex items-center justify-center mx-auto  hover:underline text-gray-800 font-inter font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
            {props.t('hero.buttons.contact')}
          </a>
        </div>
      </div>
    </div>
  </section>

export default Hero;
