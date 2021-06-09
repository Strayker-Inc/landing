import React  from "react";
import { RouteComponentProps, withRouter  } from "react-router-dom";
// Interfaces
import IPage from "../../interfaces/page";
import './Home.css'


const HomePage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props =>
<div className="leading-normal tracking-normal text-white gradient">

	{/* <!--Nav--> */}
	<nav id="header" className="fixed w-full z-30 top-0 text-white">

		<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

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

			<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
				<ul className="list-reset lg:flex justify-end flex-1 items-center">
					<li className="mr-3">
						<a className="toggleColour text-white font-bold inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="!">
							Blog (Proximamente)
						</a>
					</li>
				</ul>
				<button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
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
              <span className="block text-green xl:inline">Our problems.</span>
            </h1>
            <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              With our IT outsourcing model by TOP teams from Latam. Focus on your business while we focus on your technology.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="!"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green hover:bg-green-hover md:py-4 md:text-lg md:px-10">
                  Contact
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="!"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-300 hover:bg-green-hover md:py-4 md:text-lg md:px-10">
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

  {/* <!-- OUR DEVS --> */}
  <section id="devs"className="bg-white border-b py-12 ">
    <h2 className="bg-green text-center text-gray-900 text-3xl pt-8 pb-8">
      Our developers and consultants are making software for<br /><b>TOP companies in USA and Latam</b>
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
	<section id="about-us" className=" pt-20 py-20  bg-white">
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
  <section id="services" className="bg-gray-100 border-b py-8">
    <div className="container mx-auto flex flex-wrap pb-12">
      <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-900">
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
  <section id="contact"className="relative flex items-top justify-center min-h-screen bg-green dark:bg-gray-900 sm:items-center sm:pt-0">
    <div className="pt-2 max-w-6xl mx-auto sm:px-6 lg:px-8">
      <div className="mt-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 mt-10 mb-24 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
            <h1 className="text-normal text-4xl sm:text-5xl text-gray-900 dark:text-white font-extrabold tracking-tight">
              Let's talk!
            </h1>
            <br />
            <p className="text-normal text-lg sm:text-2xl font-medium text-gray-700 dark:text-gray-400 mt-2">
              Jump-start your business with <b>expert software engineering teams.</b>
            </p>
            <br />
            <p className="text-normal text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-400 mt-2">
              Latam
            </p>
            <div className="w-full mb-4">
              <div className="h-1 gradient w-64 opacity-25 my-2 py-0 rounded-t"></div>
            </div>
            <div className="flex items-center mt-2 text-gray-700 dark:text-gray-400">
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


            <div className="flex items-center mt-2 mb-6 text-gray-700 dark:text-gray-400">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                latam@slinqer.com
              </div>
            </div>
            <p className="text-normal text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-400 mt-2">
              Europe
            </p>
            <div className="w-full mb-4">
              <div className="h-1 gradient w-64 opacity-25 my-2 py-0 rounded-t"></div>
            </div>
            <div className="flex items-center mt-2 text-gray-700 dark:text-gray-400">
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

            <div className="flex items-center mt-2 mb-6 text-gray-700 dark:text-gray-400">
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
    <div className="bg-gray-800 dark:bg-gray-800">
      <div className="container flex flex-col items-center px-4 py-6 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:justify-between">
        <div className="w-48 text-white dark:text-gray-200">
          <div className="flex items-center">
            <svg className="h-7 w-7 -mt-2 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27"><path d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z" fill="#0ED3CF" /></svg>
             <p className="text-xl ml-2">Slinqer<strong> Software</strong></p>
          </div>
        </div>
        <p className="text-sm text-center text-white dark:text-gray-300">
          Copyright &copy; 2021 Slinqer S.A.S
        </p>
        <div className="flex items-center space-x-6">
          <a href="#about-us" className="text-sm text-white dark:text-gray-300 hover:underline">About us</a>
          <a href="#services" className="text-sm text-white dark:text-gray-300 hover:underline">Services</a>
          <a href="#contact" className="text-sm text-white dark:text-gray-300 hover:underline">Contact</a>
          <a href="#devs" className="text-sm text-white dark:text-gray-300 hover:underline">Our Devs</a>

          <a href="https://twitter.com/TwComponents" target="_blink" className="text-white dark:text-gray-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z"></path>
              </svg>
          </a>
            
          <a href="https://github.com/tailwindcomponents" target="_blink" className="text-white dark:text-gray-300">
              <svg viewBox="0 0 30 30" className="w-6 h-6 fill-current">
                  <path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z"></path>
              </svg>
          </a>
        </div>

      </div>
    </div>
</div>

export default withRouter(HomePage);
