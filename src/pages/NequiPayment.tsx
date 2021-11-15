import { IonFooter, IonPage, IonSpinner } from "@ionic/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../components/BackButtonHeader";


interface IPayment {
  phone: string,
}
const NequiPaymentPage: React.FC<{}> = props => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<IPayment>();
  const [ paymentSuccess, setPaymentSuccess] = useState(false);
  const [ checkingPayment, setCheckingPayment] = useState(false);
  const onSubmit: SubmitHandler<IPayment> = async data => {
    setCheckingPayment(true);
    setInterval(async () => {
      try {
        // const paymentStatus = await OrderService.checkPaymentStatus();

      } catch (error) {

      }
    }, 10000);
  }
  return (
    <IonPage className="bg-gray font-inter">
      <Header />
      <form  onSubmit={handleSubmit(onSubmit)} id="paymentForm" className="mt-6 w-11/12 md:w-5/12 mx-auto">
        <div className="bg-gray-300 rounded-lg p-4">
          <p className="text-2xl font-bold text-gray-800">¿Como funciona?</p>
          <p className="text-gray-600">Te llegara una alerta del pago a tu app de Nequi y solo debes aprobarla.</p>
        </div>
        <div className="mt-2 space-x-4 flex justify-center">
          <p className="">Verificando pago</p>
          <div className="">
            <IonSpinner/>
          </div>
        </div>
        <div className={`${checkingPayment && 'hidden'} mt-4`}>
          <label htmlFor="name" className="font-medium text-lg text-gray-700">Celular Nequi</label>
          {errors.phone && <p className="text-red-400">Necesitamos tu celular para enviarte la notificacion</p>}
          <div className="mt-1">
            <input
              id="name"
              {...register("phone", { required: true })}
              type="tel"
              className="w-full py-2 rounded-lg shadow-sm focus:outline-none focus:border-green border border-gray-300 focus:ring-2 focus:ring-green"
            />
          </div>
        </div>
      </form>
      <IonFooter className={`${checkingPayment && 'hidden'}`}>
        <div className="flex justify-center">
          <button type="submit" form="paymentForm"
            className="w-full m-1 lg:w-5/12 p-4 bg-green rounded-xl text-white text-2xl font-semibold"
          >
            <p>Enviar notificacion</p>
          </button>
        </div>
      </IonFooter>
    </IonPage>

  );
}

export default NequiPaymentPage;
