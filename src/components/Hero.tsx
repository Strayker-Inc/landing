import React, { useState }  from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import IContact from "../interfaces/contact";
import LandingService from '../services/landing.service';

/* Page scroll effect https://www.youtube.com/watch?v=htw4iKMYzEc */
const sectionStyle: React.CSSProperties = {
  // backgroundImage: `url('./assets/images/background.png')`,
  scrollSnapAlign: 'start',
  height: '95vh',
};

const Hero = (props: any) => {
  const [messageSended, setMessageSended] = useState(false)
  const [sendingRequest, setSendingRequest] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<IContact>();

  const onSubmit: SubmitHandler<IContact> = async data => {
    try {
      setSendingRequest(true);
      await LandingService.send(data);
      setMessageSended(true);
    } catch (e) {
      console.error (e)
    } finally {
      setSendingRequest(false);
    }
  }

  return (
    <section className="bg-fixed flex justify-center items-center bg-gray-100" style={sectionStyle} id="top">
        <div className="text-center">

          <div className="visible flex justify-center lg:hidden">
            <img id="logo" className="h-12" src="./assets/images/logo_symbolic.svg" alt="logo slinqer" />
          </div>
          <h1 className="text-4xl text-gray-800 mb-4 font-extrabold leading-none tracking-tight lg:text-6xl ">
            <span>{props.t('hero.title')}</span>
            &nbsp;
            <span className="text-green">{props.t('hero.titleColored')}</span>
          </h1>
          <p className="text-2xl mb-8 text-gray-600 sm:max-w-lg sm:mx-auto ">
            {props.t('hero.text')}
          </p>
          {/* <div className="my-3 sm:mt-8 flex justify-center">
            <a href="https://twitter.com/slinqer" target="_blank" rel="noreferrer">
              <img className="w-10 mx-2 sm:mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-twitter.svg" alt=""/>
            </a>
            <a href="https://instagram.com/slinqerglobal" target="_blank" rel="noreferrer">
              <img className="w-10 mx-2 sm:mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-instagram.svg" alt=""/>
            </a>
            <a href="https://slinqer.medium.com" target="_blank" rel="noreferrer">
              <img className="w-10 mx-2 sm:mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-medium.svg" alt=""/>
            </a>
            <a href="https://github.com/slinqer" target="_blank" rel="noreferrer">
              <img className="w-10 mx-2 sm:mx-5 transform transition duration-500 hover:scale-150" src="./assets/icons/logo-github.svg" alt=""/>
            </a>
          </div> */}

          <form onSubmit={handleSubmit(onSubmit)}>
            {
              !messageSended && !sendingRequest &&
                <>
                  <div>
                    <label htmlFor="name" className="hidden">Name</label>
                    <input
                      {...register("phone_mail", { required: true })}
                      type="text"
                      placeholder={props.t('contact.form.phone_email')}
                      className="py-3 rounded-l-full mb-2 border border-gray-400 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
                    />
                    <button type="submit"
                      className="p-3 mx-1  gradient hover:underline text-white font-bold rounded-r-full"
                    >
                      {props.t('contact.form.button')}
                    </button>
                  </div>
                  {errors.phone_mail && errors.phone_mail.type === "required" && <span className="text-white">{props.t('contact.form.missing_input')}</span>}
                </>
            }
            {
              sendingRequest &&
                // Loader
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
                </div>
            }
            {
              messageSended &&
                <div className="text-center py-4 lg:px-4 ">
                  <div className="p-2 gradient items-center text-indigo-100 sm:max-w-lg leading-none rounded-full flex lg:inline-flex" role="alert">
                    <span className="p-1 text-2xl">👍</span>
                    <span className="font-semibold mr-2 text-left flex-auto">{props.t('contact.form.confirmation')}</span>
                  </div>
                </div>
            }
          </form>

          {/* <div className="my-2 sm:my-10 flex justify-center">
            <a href="https://www.instagram.com/ecopoop.cali/" target="_blank" rel="noreferrer">
              <img className="w-20 transform transition duration-500 hover:scale-150" src="./assets/images/ecopoop2.png" alt="" />
            </a>
            <a href="https://www2.javerianacali.edu.co/vicerrectoria-academica/oficina-de-emprendimiento#gsc.tab=0" target="_blank" rel="noreferrer">
              <img className="w-28 mx-5 sm:mx-20 transform transition duration-500 hover:scale-150" src="./assets/images/javeriana.png" alt=""/>
            </a>
            <a href="https://www2.javerianacali.edu.co/vicerrectoria-academica/oficina-de-emprendimiento/campus-novar-incubator#gsc.tab=0" target="_blank" rel="noreferrer">
              <img className="w-28 transform transition duration-500 hover:scale-150" src="./assets/images/campus.png" alt="" />
            </a>
          </div> */}
        </div>

    </section>
  );
};

export default Hero;
