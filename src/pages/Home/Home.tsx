import React, { useState } from "react";
import { RouteComponentProps, withRouter  } from "react-router-dom";
// Interfaces
import IPage from "../../interfaces/page";
import './Home.css'


const HomePage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
  return (
		<div className="leading-normal tracking-normal text-white gradient" >

			{/* <!--Nav--> */}
			<nav id="header" className="fixed w-full z-30 top-0 text-white">

				<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

					<div className="pl-4 flex items-center">
						<a className=" text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
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
								<a className="toggleColour text-white font-bold inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">
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

			{/* <!--Hero--> */}
			<div className="pt-24">

				<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
					{/* <!--Left Col--> */}
					<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
						<h1 className="my-4 text-5xl font-bold leading-tight">
							Llevamos tu STARTUP tecnológica al siguiente nivel
						</h1>
						<p className="leading-normal text-2xl mb-8">
							Asesorías Especializadas, Desarrollo tecnológico, Equipos de Innovación y más..
						</p>
						<button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
							Contactanos
						</button>
					</div>

					{/* <!--Right Col--> */}
					<div className="w-full md:w-3/5 py-6 text-center floating-transition">
						<img className="w-full md:w-4/5 z-50" src="assets/images/main.svg" />
					</div>

				</div>

			</div>

			{/* <!-- Begin Section Waves --> */}
			<div className="relative -mt-12 lg:-mt-24">
				<img src="assets/images/waves-inverted.svg" alt=""/>
			</div>
			{/* <!-- End Section waves --> */}

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


			<section className="pb-20 pt-20 bg-gray-200 ">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap">
						<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">En nuestro programa de 3 meses denominado DLS, <br /> potenciamos el crecimiento de tu negocio digital</h1>
						<div className="w-full mb-10">
							<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
						</div>
						<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
							<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
								<div className="px-4 py-5 flex-auto">
									<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
										<i className="fas fa-users"></i>
									</div>
									<h6 className="text-xl  font-semibold text-gray-800">Centrarse en el usuario</h6>
									<p className="mt-2 mb-4 text-gray-600">
										Sabemos que el éxito de todo producto digital está en entender al usuario, es por eso que <u><b>Design Thinking</b></u>
										es nuestra mejor aliada.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-4/12 px-4 text-center">
							<div
								className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
							>
								<div className="px-4 py-5 flex-auto">
									<div
										className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
									>
										<i className="fas fa-retweet"></i>
									</div>
									<h6 className="text-xl font-semibold text-gray-800">Refinar el Modelo de Negocio</h6>
									<p className="mt-2 mb-4 text-gray-600">
										El <b>60%</b> de las empresas fracasan antes de los 5 años de vida, esto se evita al aplicar <u><b>Lean Startup</b></u>
										para conocer, iterar y mejorar tu modelo de negocio.
									</p>
								</div>
							</div>
						</div>
						<div className="pt-6 w-full md:w-4/12 px-4 text-center">
							<div
								className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
							>
								<div className="px-4 py-5 flex-auto">
									<div
										className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
									>
										<i className="fas fa-fingerprint"></i>
									</div>
									<h6 className="text-xl font-semibold text-gray-800">Construir el Producto</h6>
									<p className="mt-2 mb-4 text-gray-600">
										Construimos un producto de Software ajustado unicamente a las necesidades del tus usuarios, <u><b>Scrum</b></u>
										es la clave para tener un negocio que crece <b>10X</b>.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- <div className="flex flex-wrap items-center mt-32">
						<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
							<div
								className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
							>
								<i className="fas fa-user-friends text-xl"></i>
							</div>
							<h3 className="text-3xl mb-2 font-semibold leading-normal">
								Working with us is a pleasure
							</h3>
							<p
								className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
							>
								Don't let your uses guess by attaching tooltips and popoves to
								any element. Just make sure you enable them first via
								JavaScript.
							</p>
							<p
								className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
							>
								The kit comes with three pre-built pages to help you get started
								faster. You can change the text and images and you're good to
								go. Just make sure you enable them first via JavaScript.
							</p>
							<a
								href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
								className="font-bold text-gray-800 mt-8"
								>Check Tailwind Starter Kit!</a
							>
						</div>
						<div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
							<div
								className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
							>
								<img
									alt="..."
									src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
									className="w-full align-middle rounded-t-lg"
								/>
								<blockquote className="relative p-8 mb-4">
									<svg
										preserveAspectRatio="none"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 583 95"
										className="absolute left-0 w-full block"
										// style="height: 95px; top: -94px;"
									>
										<polygon
											points="-30,95 583,95 583,65"
											className="text-pink-600 fill-current"
										></polygon>
									</svg>
									<h4 className="text-xl font-bold text-white">
										Top Notch Services
									</h4>
									<p className="text-md font-light mt-2 text-white">
										The Arctic Ocean freezes every winter and much of the
										sea-ice then thaws every summer, and that process will
										continue whatever happens.
									</p>
								</blockquote>
							</div>
						</div>
					</div> --> */}
				</div>
			</section>



			{/* <!-- Begin What we offer Section --> */}
			<section className="bg-white border-b py-8">

				<div className="container max-w-5xl mx-auto m-8">
					{/* <!-- Section Title --> */}
					<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
						Invertimos hasta $20.000 USD en infraestructura tecnológica y asesorías especializadas
					</h1>
					<div className="w-full mb-4">
						<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
					</div>

					<div className="flex flex-wrap flex-col-reverse sm:flex-row">
						<div className="w-full sm:w-1/2 p-6">
							<img className="w-full md:w-4/5 z-50 floating-transition" src="assets/images/mentors.svg" />
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
							<img className="w-full md:w-4/5 z-50 floating-transition" src="assets/images/technology.svg" />
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End What we offer Section --> */}

			<section className="bg-white pt-20 pb-48">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap justify-center text-center mb-24">
						<div className="w-full lg:w-6/12 px-4">
							<h2 className="text-4xl font-semibold text-gray-800">El equipo Slinqer</h2>
							<p className="text-lg leading-relaxed m-4 text-gray-600">
								Somos un grupo de emprendedores e innovadores apasionados por la tecnología y las Startups.
							</p>
						</div>
					</div>
					<div className="flex flex-wrap">
						<div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
							<div className="px-6">
								<img
									alt="..."
									src="./assets/images/anderson.jpg"
									className="shadow-lg rounded-full max-w-full mx-auto"
									// style="max-width: 120px;"
								/>
								<div className="pt-6 text-center">
									<h5 className="text-xl font-bold text-gray-800">Anderson Laverde</h5>
									<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
										CEO & Experto en Tecnología e innovación para Startups
									</p>
									<div className="mt-6">
										{/* <button onclick="location.href='https://twitter.com/andirsunn'"  className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
											<i className="fab fa-twitter"></i>
										</button>
										<button onclick=`${location.href='https://linkedin.com/in/andirsunn'}` className="bg-blue-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
											<i className="fab fa-linkedin"></i>
										</button> */}
									</div>
								</div>
							</div>
						</div>

						<div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
							<div className="px-6">
								<img
									alt="..."
									src="./assets/images/david.jpg"
									className="shadow-lg rounded-full max-w-full mx-auto"
									// style="max-width: 120px;"
								/>
								<div className="pt-6 text-center">
									<h5 className="text-xl font-bold text-gray-800">David Beltran</h5>
									<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
										CTO & Desarrollador especialista en Inteligencia de negocio
									</p>
									<div className="mt-6">
										{/* <button onclick="location.href='https://www.facebook.com/david.ospina.beltran/'" className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
											<i className="fab fa-facebook-f"></i>
										</button>
										<button onclick="location.href='https://www.linkedin.com/in/davidrb04/'" className="bg-blue-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
											<i className="fab fa-linkedin"></i>
										</button> */}
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* <!-- Change the colour #f8fafc to match the previous section colour --> */}
			{/* <!-- <img src="assets/images/waves-normal.svg" alt=""> --> */}
			<section className="pb-20 relative block bg-gray-900">
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
						y="0">
						<polygon className="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
					</svg>
				</div>
				<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
					<div className="flex flex-wrap text-center justify-center">
						<div className="w-full lg:w-6/12 px-4">
							<h2 className="text-4xl font-semibold text-white">
								Con Slinqer
							</h2>
							<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
								Tienes la mejor forma de escalar tu modelo de negocio digital
							</p>
						</div>
					</div>
					{/* <!-- <div className="flex flex-wrap mt-12 justify-center">
						<div className="w-full lg:w-3/12 px-4 text-center">
							<div
								className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
							>
								<i className="fas fa-medal text-xl"></i>
							</div>
							<h6 className="text-xl mt-5 font-semibold text-white">
								Excelent Services
							</h6>
							<p className="mt-2 mb-4 text-gray-500">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
						<div className="w-full lg:w-3/12 px-4 text-center">
							<div
								className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
							>
								<i className="fas fa-poll text-xl"></i>
							</div>
							<h5 className="text-xl mt-5 font-semibold text-white">
								Grow your market
							</h5>
							<p className="mt-2 mb-4 text-gray-500">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
						<div className="w-full lg:w-3/12 px-4 text-center">
							<div
								className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
							>
								<i className="fas fa-lightbulb text-xl"></i>
							</div>
							<h5 className="text-xl mt-5 font-semibold text-white">Launch time</h5>
							<p className="mt-2 mb-4 text-gray-500">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div> --> */}
				</div>
			</section>

			<section className="relative block py-24 lg:pt-0 bg-gray-900">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
						<div className="w-full lg:w-6/12 px-4">
							<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
								<div className="flex-auto p-5 lg:p-10">
									<h4 className="text-2xl font-semibold text-gray-800">¿Estas Interesad@?</h4>
									<p className="leading-relaxed mt-1 mb-4 text-gray-600">
										Completa el formulario y te contactaremos en menos de 24 horas.
									</p>
									<div className="relative w-full mb-3 mt-8">
										<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
											Nombre del Lider del equipo
										</label>
										<input
											type="text"
											className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
											placeholder="Tu Nombre"
											// style="transition: all 0.15s ease 0s;"
										/>
									</div>
									<div className="relative w-full mb-3">
										<label className="block uppercase text-gray-700 text-xs font-bold mb-2">
											Correo de Contacto
										</label>
										<input
											type="email"
											className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
											placeholder="hola@hola.com"
											// style="transition: all 0.15s ease 0s;"
										/>
									</div>
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-gray-700 text-xs font-bold mb-2"
											>Nombre del Emprendimiento</label
										><input
											type="text"
											className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
											placeholder="mi emprendimiento"
											// style="transition: all 0.15s ease 0s;"
										/>
									</div>
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-gray-700 text-xs font-bold mb-2"
											>Resume en que consiste tu negocio</label
										><textarea
											rows={4}
											cols={80}
											className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
											placeholder="Maximo 400 caracteres"
										></textarea>
									</div>
									<div className="text-center mt-6">
										<button
											className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
											type="button"
											// style="transition: all 0.15s ease 0s;"
										>
											Inscribirme
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Begin Contact Section --> */}

			{/* <!-- End Contact Section --> */}


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
												href="#"
												>Acerca de Nosotros</a
											>
										</li>
										<li>
											<a
												className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
												href="#"
												>Blog</a
											>
										</li>
										<li>
											<a
												className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
												href="#"
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
											<a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="#" >
												Terminos &amp; Condiciones
											</a>
										</li>
										<li>
											<a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="#">
												Politica de Privacidad
											</a>
										</li>
										<li>
											<a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="#">
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
