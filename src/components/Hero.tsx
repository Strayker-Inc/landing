const heroStyles: React.CSSProperties = {
  backgroundImage: `url('./assets/images/background.png')`,
};

const logosStyles: React.CSSProperties = {
  width: '40px',
}

const partnersLogosStyles: React.CSSProperties = {
  width: '130px',
}
const Hero = (props: any) =>
  <section className="flex h-screen bg-fixed font-inter" style={heroStyles}>
    <div className="sm:m-auto text-center bg-white shadow-lg rounded-3xl p-5 sm:p-6 bg-opacity-5" style={{backdropFilter: "blur(20px)"}}>

      <div className="visible flex justify-center lg:hidden">
        <img id="logo" className="h-24" src="./assets/images/logo_symbolic.svg" alt="logo slinqer" />
      </div>
      <h1 className="text-3xl mt-3 font-extrabold text-white lg:text-5xl ">
        <span>{props.t('hero.title')}</span>
        <br />
        <span className="text-green">{props.t('hero.titleColored')}</span>
      </h1>
      <p className="text-xl mt-8 text-white font-semibold  sm:max-w-xl sm:mx-auto ">
        {props.t('hero.text')}
      </p>
      <div className="my-5 sm:mt-8 flex justify-center">
        <a href="https://twitter.com/slinqer" target="_blank" rel="noreferrer">
          <img className="mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-twitter.svg" alt="" style={logosStyles}/>
        </a>
        <a href="https://instagram.com/slinqerglobal" target="_blank" rel="noreferrer">
          <img className="mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-instagram.svg" alt="" style={logosStyles}/>
        </a>
        <a href="https://slinqer.medium.com" target="_blank" rel="noreferrer">
          <img className="mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-medium.svg" alt="" style={logosStyles}/>
        </a>
        <a href="https://github.com/slinqer" target="_blank" rel="noreferrer">
          <img className="mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-github.svg" alt="" style={logosStyles}/>
        </a>
        {/* <div className="rounded-md ">
          <a href="#contactForm"
            className="w-full gradient flex items-center justify-center mx-auto  hover:underline text-white font-inter font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow ">
            {props.t('hero.buttons.contact')}
          </a>
        </div> */}
      </div>
      <span className="text-white font-semibold  sm:text-lg sm:max-w-xl sm:mx-auto md:text-2xl">{props.t('hero.support')}</span>
      <div className="my-3 sm:mt-8 flex justify-center">
        <a href="https://www2.javerianacali.edu.co/vicerrectoria-academica/oficina-de-emprendimiento#gsc.tab=0" target="_blank" rel="noreferrer">
          <img className="mx-8 transform transition duration-500 hover:scale-150" src="./assets/images/javeriana.png" alt="" style={partnersLogosStyles}/>
        </a>
        <a href="https://www.instagram.com/ecopoop.cali/" target="_blank" rel="noreferrer">
          <img className="mx-8 transform transition duration-500 hover:scale-150" src="./assets/images/ecopoop2.png" alt="" />
        </a>
        <a href="https://www2.javerianacali.edu.co/vicerrectoria-academica/oficina-de-emprendimiento/campus-novar-incubator#gsc.tab=0" target="_blank" rel="noreferrer">
          <img className="mx-8 transform transition duration-500 hover:scale-150" src="./assets/images/campus.png" alt="" width="160"/>
        </a>
      </div>
    </div>
  </section>

export default Hero;
