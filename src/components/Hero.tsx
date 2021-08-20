import React, { useState }  from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// Interfaces
import IContact from "../interfaces/contact";
// Services
import LandingService from '../services/landing.service';

const heroStyles: React.CSSProperties = {
  backgroundImage: `url('./assets/images/background.png')`,
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
      console.error (e.message)
    } finally {
      setSendingRequest(false);
    }
  }

  return (
    <section className="flex h-screen bg-fixed font-inter" style={heroStyles}>
      <div className="mx-5 my-auto p-5 sm:p-6 sm:m-auto text-center backdrop-filter backdrop-blur-lg bg-white shadow-lg rounded-3xl bg-opacity-5">

        <div className="visible flex justify-center lg:hidden">
          <img id="logo" className="h-12" src="./assets/images/logo_symbolic.svg" alt="logo slinqer" />
        </div>
        <h1 className="text-3xl mt-3 font-extrabold text-white leading-none tracking-tight lg:text-5xl ">
          <span>{props.t('hero.title')}</span>
          <br />
          <span className="text-green">{props.t('hero.titleColored')}</span>
        </h1>
        <p className="text-xl my-4 text-white font-semibold leading-tight tracking-tight sm:max-w-lg sm:mx-auto ">
          {props.t('hero.text')}
        </p>
        <div className="my-3 sm:mt-8 flex justify-center">
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
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {
            !messageSended && !sendingRequest &&
              <>
                <div className="p-2 flex justify-center">
                  <label htmlFor="name" className="hidden">Name</label>
                  <input
                    {...register("phone_mail", { required: true })}
                    type="text"
                    placeholder={props.t('contact.form.phone_email')}
                    className="mt-2 py-3 px-3 rounded-full border border-gray-400 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
                  />
                </div>
                {errors.phone_mail && errors.phone_mail.type === "required" && <span className="text-white">{props.t('contact.form.missing_input')}</span>}
                <button type="submit"
                  className="flex justify-center w-auto my-4 py-4 mx-auto sm:p-4 gradient hover:underline text-white font-inter font-bold text-xl leading-none rounded-full"
                >
                  {props.t('contact.form.button')}
                </button>
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

        <span className="text-white font-normal text-2xl sm:text-lg sm:font-semibold">{props.t('hero.support')}</span>
        <div className="my-2 sm:my-10 flex justify-center">
          <a href="https://www.instagram.com/ecopoop.cali/" target="_blank" rel="noreferrer">
            <img className="w-20 transform transition duration-500 hover:scale-150" src="./assets/images/ecopoop2.png" alt="" />
          </a>
          <a href="https://www2.javerianacali.edu.co/vicerrectoria-academica/oficina-de-emprendimiento#gsc.tab=0" target="_blank" rel="noreferrer">
            <img className="w-28 mx-5 sm:mx-20 transform transition duration-500 hover:scale-150" src="./assets/images/javeriana.png" alt=""/>
          </a>
          <a href="https://www2.javerianacali.edu.co/vicerrectoria-academica/oficina-de-emprendimiento/campus-novar-incubator#gsc.tab=0" target="_blank" rel="noreferrer">
            <img className="w-28 transform transition duration-500 hover:scale-150" src="./assets/images/campus.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
