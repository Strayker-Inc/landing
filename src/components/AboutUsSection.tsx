const Fade = require('react-reveal/Fade');

const sectionStyle: React.CSSProperties = {
  // scrollSnapAlign: "start",
  height: '100vh',
}

const AboutUsSection = (props: any) =>
  <section className="flex justify-center bg-gray-100 " style={sectionStyle}>
    <Fade bottom cascade>
      <div className="container items-center flex flex-wrap">
        <div className="w-6/12 md:w-3/12 mx-auto">
          <img alt="cepillos de bambu" className="rounded-lg shadow-lg" src="./assets/images/brushes.webp"/>
        </div>

        <div className="w-full md:w-5/12 mx-auto px-4">
          <div className="lg:pr-10">
            <div className="hidden md:visible p-3 text-center inline-flex justify-center w-12 h-12 mb-2 md:w-16 md:h-16 md:mb-6 shadow-lg rounded-full bg-white">
              <p className="text-2xl md:text-3xl">🌎</p>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 font-black text-gray-800">{props.t('aboutUs.title')}</h2>
            <p className="text-2xl text-gray-600 mb-8 md:text-3xl ">
              {props.t('aboutUs.text')}
            </p>
            <div className="flex justify-center">
              <img src="./assets/images/ecopoop.webp" alt="Logo aliado Ecopoop" className="h-16 mr-4 md:h-20 md:mr-8" />
              <img src="./assets/images/lifepack.webp" alt="Logo aliado Lifepack" className="h-16 mr-4 md:h-24 md:mr-8" />
              <img src="./assets/images/kaoba.webp" alt="Logo aliado Kaoba" className="h-16 mr-4 md:h-24 md:mr-8" />
            </div>
          </div>
        </div>

      </div>
    </Fade>
  </section>

export default AboutUsSection;
