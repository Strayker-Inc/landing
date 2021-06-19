import { useEffect }  from "react";
import '../pages/Home/Home.css';

const Navbar = () => {
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
        header.classList.remove("gradient");
        header.classList.add("bg-white");
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
        header.classList.add("gradient");
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
              <a className="toggleColour text-white font-bold inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">
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
  );
};

export default Navbar;
