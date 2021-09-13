const sectionStyle: React.CSSProperties = {
  scrollSnapAlign: "start",
  height: '100vh',
}

const AboutUsSection = (props: any) =>
  <section className="flex justify-center items-center bg-gray-100" style={sectionStyle}>
    <div className="container px-4">
      <div className="items-center flex flex-wrap">
        <div className="w-3/5 md:w-4/12 mx-auto">
          <img alt="people" className="max-w-full rounded-lg shadow-lg" src="./assets/images/plastic.jpg"/>
        </div>
        <div className="w-full md:w-5/12 mx-auto px-4">
          <div className="lg:pr-10">
            <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 md:w-16 md:h-16 md:mb-6 shadow-lg rounded-full bg-white">
              <p className="text-2xl md:text-3xl">🌎</p>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gray-800">{props.t('aboutUs.title')}</h3>
            <p className="text-2xl text-gray-600 mt-4 mb-8 md:text-3xl ">
              {props.t('aboutUs.text')}
            </p>
            <div className="flex items-center">
              <img src="./assets/images/image.png" alt="aliado emprendimiento ecopoop" className="h-16 mr-4 md:h-20 md:mr-8" />
              <img src="./assets/images/javeriana_black.png" alt="aliado javeriana" className="h-16 mr-4 md:h-20 md:mr-8" />
              <img src="./assets/images/campus_symbolic.png" alt="aliado Campus nova" className="h-16 mr-4 md:h-20 md:mr-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
export default AboutUsSection;
