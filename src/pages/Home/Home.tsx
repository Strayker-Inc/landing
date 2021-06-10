import React, { useEffect }  from "react";
import { RouteComponentProps, withRouter  } from "react-router-dom";
// Interfaces
import IPage from "../../interfaces/page";
import './Home.css'

const HomePage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
  const navBarStyles = () => {
    const header = document.getElementById("header");
    const navcontent = document.getElementById("nav-content");
    const navButton = document.getElementById("navButton");
    // const brandname = document.getElementById("brandname");
    const toToggle = document.querySelectorAll(".toggleColour");
    const slinqerLogo = document.getElementById("logo") as HTMLImageElement;
    const scrollpos = window.scrollY;
    /*Apply classes for slide in bar*/

    if (header && navButton && slinqerLogo && navcontent) {
      if (scrollpos > 10 ) {
        header.classList.add("bg-white");
        // header.classList.remove("gradient");
        // Nav Button
        navButton.classList.remove("bg-white");
        navButton.classList.add("gradient");
        navButton.classList.remove("text-gray-800");
        navButton.classList.add("text-white");
        slinqerLogo.src = './assets/images/logo.svg'
        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add("text-black");
          toToggle[i].classList.remove("font-bold");
          toToggle[i].classList.remove("text-white");
        }
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
      } else {
        slinqerLogo.src = './assets/images/logo_symbolic.svg'
        header.classList.remove("bg-white");
        // header.classList.add("gradient");
        // BUtton
        navButton.classList.remove("gradient");
        navButton.classList.add("bg-white");
        navButton.classList.remove("text-white");
        navButton.classList.add("text-gray-800");
        //Use to switch toggleColour colours
        for (let i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add("text-white");
          toToggle[i].classList.add("font-bold");
          toToggle[i].classList.remove("font-semi-bold");
          toToggle[i].classList.remove("text-white-800");
        }


        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
      }

    }
  }

  useEffect(() => {
    document.addEventListener('scroll', navBarStyles)
  }, [])
  return (
    <div id="home" className="tracking-normal ">
      {/* <!--Nav--> */}
      <nav id="header" className="fixed w-full z-30 top-0 text-white gradient">

        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2" >

          <div className="pl-4 flex items-center">
            <a className=" text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="!">
              <img id="logo" className="h-16 fill-current inline" src="./assets/images/logo_symbolic.svg" alt="logo slinqer" />
            </a>
          </div>

          {/* <!-- Drop menu (responsive design) --> */}
          <div className="block lg:hidden pr-4">
            <button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900">
              <svg className="fill-current h-6 w-6" style={{color: "black"}} viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div id="nav-content"
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a className="toggleColour text-white font-bold inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="!">
                  Blog (Proximamente)
                </a>
              </li>
            </ul>
            <button id="navButton" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
              Contacto
            </button>
          </div>
        </div>

        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>

      {/* <!-- HERO --> */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Make your IT problems,</span>
                  <span className="block text-indigo-600 xl:inline">Our problems.</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  With our IT outsourcing model by TOP teams from Latam. Focus on your business while we focus on your technology.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="!"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Contact
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="!"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      About us
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="" />
        </div>
      </div>

      {/* <!-- OUR PARTNERS --> */}
      <section className="bg-white border-b py-12 ">
        <h2 className="bg-indigo-600 text-center text-white text-3xl pt-8 pb-8">
          Our developers and consultants are making software htmlFor<br /><b>TOP companies in USA and Latam</b>
        </h2>
        <div className="container mx-auto flex flex-wrap items-center justify-between pb-12 pt-8">
          <div className="flex flex-1 flex-wrap max-w-4xl mx-auto items-center justify-between text-xl text-gray-500 font-bold">

            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <img src="./assets/images/logos/paypal.png"
                className="h-20 w-40 mr-4 object-scale-down fill-current"
                alt=""
              />
            </span>
            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <img src="./assets/images/logos/launch-mobility.png"
                className="h-20 w-40 mr-4 object-scale-down fill-current text-gray-500"
                alt=""
              />
            </span>
            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <img src="./assets/images/logos/genius.png"
                className="h-20 w-40 mr-4 object-scale-down fill-current text-gray-500"
                alt=""
              />
            </span>
            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <img src="./assets/images/logos/mercado-libre.png"
                className="h-20 w-40 mr-4 object-scale-down fill-current text-gray-500"
                alt=""
              />
            </span>
            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <img src="./assets/images/logos/avianca.png"
                className="h-20 w-40 mr-4 object-scale-down fill-current text-gray-500"
                alt=""
              />
            </span>
            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <img src="./assets/images/logos/skylab.png"
                className="h-20 w-40 mr-4 object-scale-down fill-current text-gray-500"
                alt=""
              />
            </span>
            <span className="w-1/3 p-4 md:w-auto flex items-center">
              <img src="./assets/images/logos/agrosty.png"
                className="h-20 w-40 mr-4 object-contain fill-current text-gray-500"
                alt=""
              />
            </span>
            <span className="w-1/2 p-4 md:w-auto flex items-center">
              <img src="./assets/images/logos/menuty.png"
                className="h-20 w-40 mr-4 object-scale-down fill-current text-gray-500"
                alt=""
              />
            </span>
          </div>
        </div>
      </section>

      {/* <!-- ABOUT US--> */}
      <section className=" pt-20 py-20  bg-white">
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

      {/* <!-- OUR SERVICES --> */}
      <section className="bg-gray-100 border-b py-8">
        <div className="container mx-auto flex flex-wrap pb-12">
          <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
            Outsourcing services
          </h2>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="!" className="flex flex-wrap no-underline hover:no-underline">
                <img className="pt-4 pb-2 px-auto lg:px-20 xl:px-40 2xl:px-40 sm:px-10 md:px-10 align-center"
                  src="./assets/images/staff-augmentation.png"
                  alt=""
                />
                <div className="w-full font-bold text-xl text-center text-gray-800 px-6 pb-6">
                  Staff Augmentation
                </div>
                <p className="text-black-600 text-center px-6 mb-5">
                  Expert software engineers work together with your internal team on your projects. These engineers join your existing
                  staff, often working remote until project completion.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">
                <button
                  className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg">
                  Get info
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="!" className="flex flex-wrap no-underline hover:no-underline">
                <img className="pt-4 pb-2 px-auto lg:px-20 xl:px-40 2xl:px-40 sm:px-10 md:px-10 align-center"
                  src="./assets/images/dedicated-team.png"
                  alt=""
                />
                <div className="w-full font-bold text-xl text-center text-gray-800 px-6 pb-6">
                  Dedicated Teams
                </div>
                <p className="text-black-600 text-center px-6 mb-5">
                  Presents talent which directly oversees the whole development project. This option provides a management structure with
                  hands-on supervision of the workflow and tasks.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
                <button
                  className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg">
                  Get info
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="!" className="flex flex-wrap no-underline hover:no-underline">
                <img className="pt-4 px-auto lg:px-20 xl:px-40 2xl:px-40 sm:px-10 md:px-10 align-center"
                  src="./assets/images/project-based.png"
                  alt=""
                />
                <div className="w-full font-bold text-xl text-center text-gray-800 px-6 pb-6">
                  Project-Based Model
                </div>
                <p className=" text-black-600 text-center px-6 mb-5">
                  Your partner company oversees the entire development process: from establishing the specs, to allocating workflow,
                  setting timescales and quality testing.
                </p>
              </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-end">
                <button
                  className="mx-auto lg:mx-0 hover:underline gradient2 text-gray-800 font-extrabold rounded my-6 py-4 px-8 shadow-lg">
                  Get info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="bg-white border-b py-8">

        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Invertimos hasta $20.000 USD en infraestructura tecnológica y asesorías especializadas
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6">
              <img className="w-full md:w-4/5 z-50 floating-transition" src="assets/images/mentors.svg" alt="" />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Asesorías en Innovación</h3>
                <p className="text-gray-600 mb-8">
                  ¿Necesitas ayuda en markenting, innovación o cadenas de suministros? <br />
                  Como parte de nuestro plan DLS, realizamos sesiones regularmente con tu equipo,
                  para dar de mentorias especializadas y establecer planes de acción.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Desarrollo Tecnológico</h3>
              <p className="text-gray-600 mb-8">
                ¿ Necesitas inversión en infraestructura de Software ?
                <br/>
                Con nuestro equipo de tecnología <b>construimos o apoyamos el desarrollo de software especializado</b> en tu sector de mercado.
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img className="w-full md:w-4/5 z-50 floating-transition" src="assets/images/technology.svg" alt="" />
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- CONTACT US --> */}
      <section className="relative flex items-top justify-center min-h-screen bg-indigo-600 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="pt-2 max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-0 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mt-10 mb-24 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-normal text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Let's talk!
                </h1>
                <br />
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Jump-start your business with <b>expert software engineering teams.</b>
                </p>
                <br />
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Latam
                </p>
                <div className="w-full mb-4">
                  <div className="h-1 gradient w-64 opacity-25 my-2 py-0 rounded-t"></div>
                </div>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Colombia
                  </div>
                </div>


                <div className="flex items-center mt-2 mb-6 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    latam@slinqer.com
                  </div>
                </div>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Europe
                </p>
                <div className="w-full mb-4">
                  <div className="h-1 gradient w-64 opacity-25 my-2 py-0 rounded-t"></div>
                </div>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Lithuania
                  </div>
                </div>

                <div className="flex items-center mt-2 mb-6 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    europe@slinqer.com
                  </div>
                </div>

              </div>

              <form className="p-6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">Name</label>
                  <input type="name" name="name" id="name" placeholder="Your name*"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">Email</label>
                  <input type="email" name="email" id="email" placeholder="Work email*"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">Company</label>
                  <input type="text" name="company" id="company" placeholder="Company Name*"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="message" className="hidden">Message</label>
                  <input type="text" name="message" id="message" placeholder="Who can help you?*"
                    className="w-100 mt-2 py-8 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <button type="submit"
                  className="md:w-32 bg-white hover:bg-blue-dark text-gray-800 font-bold mt-2 py-4 px-6 rounded-lg mt-3 hover:bg-indigo-300 transition ease-in-out duration-300">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Begin Footer Section--> */}
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          // style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-gray-800">Sigamos en Contacto!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Encuentranos en nuestras Redes Sociales
              </h5>
              <div className="mt-6">
                <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">
                  <i className="flex fab fa-twitter"></i>
                </button>
                <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"type="button">
                  <i className="flex fab fa-facebook-square"></i>
                </button>
                <button className="bg-white text-blue-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">
                  <i className="flex fab fa-linkedin"></i>
                </button>
                {/* <button onclick="location.href='https://github.com/slinqer'" className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">
                  <i className="flex fab fa-github"></i>
                </button> */}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span
                    className="block uppercase text-gray-600 text-sm font-semibold mb-2"
                    >Links Utiles</span
                  >
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="!"
                        >Acerca de Nosotros</a
                      >
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="!"
                        >Blog</a
                      >
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="!"
                        >Casos de Exito</a
                      >
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span
                    className="block uppercase text-gray-600 text-sm font-semibold mb-2"
                    >Otros Recursos</span
                  >
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="!" >
                        Terminos &amp; Condiciones
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="!">
                        Politica de Privacidad
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="!">
                        Contactanos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © 2021 - Slinqer
                <br/>
                <a href="https://www.creative-tim.com" className="text-gray-600 hover:text-gray-900">
                  Hecho con <i className="fas text-red-700 fa-heart"></i>
                  en Colombia
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default withRouter(HomePage);
