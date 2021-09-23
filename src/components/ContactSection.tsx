import React, { useState }  from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import LandingService from '../services/landing.service';
import IContact from "../interfaces/contact";
const Fade = require('react-reveal/Fade');

const sectionStyle: React.CSSProperties = {
  height: '60vh',
};

const ContactSection = (props: any) => {
  const [callToAction, setCallToAction] = useState(false);
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
    <section id="contactForm" className="relative flex justify-center gradient" style={sectionStyle}>
      <Fade bottom cascade>
        <div className="container flex flex-wrap">

          <div className="w-5/6 sm:w-5/12 mx-auto flex items-center">
            <div>
              <h1 className="w-full text-4xl md:text-5xl text-white font-extrabold tracking-tight">
                {props.t('contact.title')}
              </h1>
              <p className="text-lg md:text-2xl font-medium text-white">
                {props.t('contact.text')}
              </p>
            </div>
          </div>

          <div className="w-11/12 sm:w-5/12 mx-auto px-4 flex items-center">
            {
              callToAction ?
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
                            className="w-full py-4 text-xl rounded-lg mb-2 bg-gray-100 text-gray-800 focus:border-green-500 focus:outline-none"
                          />
                          <button type="submit"
                            className="w-full mx-auto p-4 text-xl bg-green hover:underline text-white font-bold rounded-lg"
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
              :
                <button onClick={() => setCallToAction(true)}
                  className="w-full mx-auto md:w-8/12 p-4 text-xl bg-green text-white font-bold rounded-lg transform transition duration-500 hover:scale-125"
                >
                  {props.t('hero.buttons.join')}
                </button>
            }
          </div>
        </div>
      </Fade>
      <img src="./assets/images/waves-inverted-gray.svg" className="absolute inset-x-0 bottom-0 w-full" alt="" />
    </section>
  );
}

export default ContactSection;
