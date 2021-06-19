const AboutUsSection = (props: any) =>
  <section className=" pt-20 py-20  bg-gray-100 ">
    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img alt="people" className="max-w-full rounded-lg shadow-lg" src="./assets/images/people.jpg"/>
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div className="text-teal-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-300">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">¿Por qué Slinqer?</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Apostamos al crecimiento de Startups en Colombia, y es así
              como creamos una <b>Startup Builder</b> en la que <b>potenciamos</b>
              los negocios basados en tecnología.
              <br/><br/>
              Con Strayker tienes todo lo necesario para llevar tu negocio al siguiente nivel :
            </p>
            <ul className="list-none mt-3">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-gray-400 mr-3">
                      <i className="far fa-chart-bar"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      Métricas de negocio que <b>crecen</b> semana tras semana
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-gray-400 mr-3">
                      <i className="fas fa-lightbulb"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Tu equipo de <b>innovación</b> dedicado</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-gray-400 mr-3">
                      <i className="far fa-handshake"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Alianzas estratégicas para hacer <b>escalar</b> tu startup</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-gray-400 mr-3">
                      <i className="fas fa-laptop-code"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Un equipo de Tecnología para hacer realidad tus <b>sueños</b></h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
export default AboutUsSection;
