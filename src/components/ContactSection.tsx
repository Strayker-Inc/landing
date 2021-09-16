import React, { useState }  from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// Interfaces
import IContact from "../interfaces/contact";
// Services
import LandingService from '../services/landing.service';

const sectionStyle: React.CSSProperties = {
  // backgroundImage: `url('./assets/images/background.png')`,
  scrollSnapAlign: 'start',
  height: '60vh',
};

const ContactSection = (props: any) => {
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
    <section id="contactForm" className="flex gradient items-center" style={sectionStyle}>
      <div className=" mx-auto px-6">

          <div className="flex justify-center flex-wrap items-center">
            <div className="w-full md:w-2/6 p-6 mb-10 rounded-lg md:mr-10">
              <h1 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight">
                {props.t('contact.title')}
              </h1>
              <br />
              <p className="text-lg md:text-2xl font-medium text-white">
                {props.t('contact.text')}
              </p>
            </div>

            <div className="">
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
                          className="py-4 text-xl rounded-lg md:rounded-none md:rounded-l-lg mb-2 bg-gray-100 text-gray-800 focus:border-green-500 focus:outline-none"
                        />
                        <button type="submit"
                          className="p-4 text-xl bg-green hover:underline text-white font-bold rounded-lg md:rounded-none md:rounded-r-lg"
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
            </div>

          </div>
      </div>
    </section>
  );
}

export default ContactSection;
