import { useState } from "react";

const sectionStyle: React.CSSProperties = {
  scrollSnapAlign: "start",
  height: '100vh',
}

const test = [
  {
    name: "Anderson",
    rol: "CEO Slinqer SAS.",
    text: "-- Esto es un ejemplo de testimonio pero hay que cambiarlo por uno valido"
  },
  {
    name: "Andres Navia",
    rol: "Biologo Javeriana Cali",
    text: "-- Lorem impsum del segundo ejemplo de testimonio pero hay que cambiarlo tambien"
  },
  {
    name: "David RB",
    rol: "CTO Slinqer SAS.",
    text: "-- Tercer ejemplo que hay que cambiar por uno valido."
  }
]

const Testimonials = (props: any) => {
  const [testimonialActive, setTestimonialActive] = useState(1);

  const changeTestimonial = (direction: "previuos" | "next") => {
    if (direction === "next") {
      if (testimonialActive === 2) {
        setTestimonialActive(0);
      } else {
        setTestimonialActive (testimonialActive + 1);
      }
    } else {
      if (testimonialActive === 0) {
        setTestimonialActive(2);
      } else {
        setTestimonialActive (testimonialActive - 1);
      }
    }
  };

  return (
    <section className="flex justify-center items-center" style={sectionStyle}>
			<div className="container flex flex-wrap md:flex-nowrap">

        <div className="relative py-10 md:py-24 w-5/6 md:w-1/2 mx-auto text-center bg-green rounded-t-3xl md:rounded-t-none md:rounded-l-3xl shadow-lg">
          <div className="text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-white font-semibold leading-tight tracking-tight mb-0 z-20">
            <span className="md:block">Que dicen</span>
            <span className="md-block">Nuestros</span>
            <span className="block">Usuarios!</span>
          </div>

          <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
            <button onClick={() => changeTestimonial("previuos")}
              className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-green font-bold w-12 h-10">
              ⬅
            </button>
            <button onClick={() => changeTestimonial("next")}
              className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-green font-bold w-12 h-10">
              ➡
            </button>
          </div>
        </div>

        <div className="mx-auto bg-gray-100 w-5/6 md:w-1/2 rounded-b-3xl md:rounded-b-none md:rounded-r-3xl shadow-lg ">
          <div className="flex flex-col h-full relative">

            <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
              <img src="./assets/images/quote.svg" alt="" />
            </div>

            <div className="h-full relative z-10">
              <div >
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-lg md:text-xl">
                  {test[testimonialActive].text}
                </p>
              </div>

              {/* <div >
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl" >
                  Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                </p>
              </div>

              <div >
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl" >
                  Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                </p>
              </div>
            </div> */}

            <div className="flex my-4 justify-center items-center">
              <button onClick={() => setTestimonialActive(0)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block rounded-full mx-2
                  ${testimonialActive !== 0 ? "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600" : "h-16 w-16 opacity-100 bg-green text-white"}`}>
                JD
              </button>
              <button onClick={() => setTestimonialActive(1)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block rounded-full mx-2
                  ${testimonialActive !== 1 ? "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600" : "h-16 w-16 opacity-100 bg-green text-white"}`}>
                WD
              </button>
              <button onClick={() => setTestimonialActive(2)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block rounded-full mx-2
                  ${testimonialActive !== 2 ? "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600" : "h-16 w-16 opacity-100 bg-green text-white"}`}>
                JW
              </button>
            </div>

            <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">

              <div className={`text-center ${testimonialActive !== 0 && "hidden"}`}>
                <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">{test[testimonialActive].name}</h2>
                <small className="text-gray-500 text-xs md:text-sm truncate">{test[testimonialActive].rol}</small>
              </div>

              <div className={`text-center ${testimonialActive !== 1 && "hidden"}`} >
                <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">{test[testimonialActive].name}</h2>
                <small className="text-gray-500 text-xs md:text-sm truncate">{test[testimonialActive].rol}</small>
              </div>

              <div className={`text-center ${testimonialActive !== 2 && "hidden"}`}>
                <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">{test[testimonialActive].name}</h2>
                <small className="text-gray-500 text-xs md:text-sm truncate">{test[testimonialActive].rol}</small>
              </div>

            </div>
          </div>

        </div>
      </div>

      </div>


		</section>
  );
};

export default Testimonials;
