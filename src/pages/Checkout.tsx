import { IonContent, IonFooter, IonIcon, IonLoading, IonPage, IonSpinner } from '@ionic/react';
import { leaf } from 'ionicons/icons';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from "../components/BackButtonHeader";
import { ICartProduct, IOrder } from '../interfaces/Order.interface';
import OrdersService from "../services/order.service";
import './Checkout.css';

interface IPageProps {
  cart: ICartProduct[],
  total: number
}
const CheckoutPage: React.FC<IPageProps> = props => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm<IOrder>();
  const [sendingRequest, setSendingRequest] = useState(false);

  const onSubmit: SubmitHandler<IOrder> = async formData => {
    try {
      setSendingRequest(true);
      const orderData: IOrder = {
        ...formData,
        phone: parseInt(formData.phone.toString()),
        total: props.total,
        products: props.cart,
      }
      await OrdersService.create(orderData);
      history.push('/confirmacion');
    } catch (e) {
      console.error (e)
    } finally {
      setSendingRequest(false);
    }
  };

  return (
    <IonPage className="font-inter bg-gray">
      <Header />
      <IonContent className="font-inter" style={{'--ion-background-color':'#f5f7ff'}}>
        <div className="text-center mt-10">
          <span className="text-4xl font-bold text-gray-800">Resumen</span>
        </div>
        <div className="w-11/12 md:w-5/12 mx-auto space-y-2 mt-4">
          <div className="flex items-center">
            <p className="text-2xl text-gray-700 font-bold mr-2">Valor productos:</p>
            <p className="text-2xl text-gray-500">
              <NumberFormat value={props.total} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-2xl text-gray-700 font-bold mr-2">Envio en Cali:</p>
            <p className="text-2xl text-gray-500">
              <NumberFormat value={8000} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
            </p>
          </div>
          <div className="flex items-center flex-wrap">
            <p className="text-2xl text-gray-700 font-bold mr-2">Otras ciudades:</p>
            <p className="text-xl text-gray-500">
              *El valor de envío depende del peso y tamaño de los productos
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <span className="text-4xl font-bold text-gray-800">Datos de Envio</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} id="myform" className="mt-10 w-11/12 md:w-5/12 mx-auto">
          <div className="flex flex-wrap md:flex-nowrap md:space-x-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="font-medium text-lg text-gray-700">Nombre</label>
              {errors.name && <p className="text-green">Campo necesario</p>}
              <div className="mt-1">
                <input
                  id="name"
                  {...register("name", { required: true })}
                  type="text"
                  className="w-full py-2 rounded-lg shadow-sm focus:outline-none focus:border-green border border-gray-300 focus:ring-2 focus:ring-green"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="font-medium text-lg text-gray-700">Telefono</label>
              {errors.phone && <p className="text-green">Campo necesario</p>}
              <div className="mt-1">
                <input
                  {...register("phone", { required: true})}
                  type="tel"
                  className="w-full py-2 rounded-lg shadow-sm focus:outline-none focus:border-green border border-gray-300 focus:ring-2 focus:ring-green"
                />
              </div>

            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap md:space-x-4">
            <div className="w-full md:w-1/3">
              <label htmlFor="name" className="font-medium text-lg text-gray-700">Ciudad</label>
              {errors.address?.city && <p className="text-green">Campo necesario</p>}
              <div className="mt-1">
                <input
                  id="name"
                  {...register("address.city", { required: true })}
                  type="text"
                  className="w-full py-2 rounded-lg shadow-sm focus:outline-none focus:border-green border border-gray-300 focus:ring-2 focus:ring-green"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <label htmlFor="name" className="font-medium text-lg text-gray-700">Direccion</label>
              {errors.address?.address && <p className="text-green">Campo necesario</p>}
              <div className="mt-1">
                <input
                  {...register("address.address", { required: true })}
                  type="text"
                  className="w-full py-2 rounded-lg shadow-sm focus:outline-none focus:border-green border border-gray-300 focus:ring-2 focus:ring-green"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="font-medium text-lg text-gray-700">Comentarios Adicionales</label>
            <input
              {...register("address.comments", { required: false })}
              type="text"
              placeholder="*Torre, apartamento, piso"
              className="w-full py-2 rounded-lg shadow-sm focus:outline-none focus:border-green border border-gray-300 focus:ring-2 focus:ring-green"
            />
          </div>

          <div className="text-center my-10">
            <span className="text-4xl font-bold text-gray-800">Tipo de envio</span>
          </div>

          <div className="flex w-full md:w-2/3 space-x-4 mx-auto ">
            <div className="w-1/2 p-4 flex items-center justify-center bg-white rounded-xl shadow-lg relative">
              <input className="absolute top-3 right-3" {...register("shipment", { required: true })} id="normal_input" name="shipment" type="radio" value="normal" checked/>
              <label htmlFor="normal_input" >
                <div>
                  <span className="text-2xl font-semibold text-gray-700">Normal</span>
                </div>
                <p className="text-xl text-gray-500">Entrega en 1 o 2 dias habiles</p>
              </label>
            </div>
            <div className="w-1/2 p-4 flex items-center justify-center bg-gray-100 rounded-xl shadow-lg relative ring ring-green ring-opacity-50">
              <input className="absolute top-3 right-3" {...register("shipment", { required: true })} id="eco_input" name="shipment" type="radio" value="eco " disabled/>
              <label htmlFor="eco_input">
                <div className="flex items-center">
                  <span className="text-2xl font-semibold text-green">Ecológico</span>
                  <IonIcon className="ml-2 text-green text-2xl" icon={leaf} />
                </div>
                <p className="text-lg text-gray-400">Entrega con bajo impacto medioambiental</p>
                <p className="text-xl text-gray-400 text-center mt-2">Disponible pronto*</p>
              </label>
            </div>
          </div>

          <div className="text-center my-8">
            <span className="text-4xl font-bold text-gray-800">Metodo de Pago</span>
            {errors.payment && <p className="text-green">Elige un metodo de pago</p>}
          </div>
          <div className="flex space-x-4 mb-10">
            <div className="w-1/3 p-4 flex items-center justify-center bg-white rounded-xl shadow-lg relative">
              <input className="absolute top-3 right-3" {...register("payment", { required: true })} id="nequi_input" name="payment" type="radio" value="nequi" />
              <label htmlFor="nequi_input" >
                <img className="h-12 md:h-16 " src="./assets/icons/nequi.webp" alt="Logo Nequi" />
              </label>
            </div>
            <div className="w-1/3 p-4  flex items-center justify-center bg-white rounded-xl shadow-lg relative">
              <input className="absolute top-3 right-3" {...register("payment", { required: true })} id="bancolombia_input" name="payment" type="radio" value="bancolombia" />
              <label htmlFor="bancolombia_input">
                <img className="h-auto mt-4" src="./assets/icons/bancolombia.webp" alt="Logo Bancolombia" />
              </label>
            </div>
            <div className="w-1/3 p-4  flex items-center justify-center bg-white rounded-xl shadow-lg relative">
              <input className="absolute top-3 right-3" {...register("payment", { required: true })} id="daviplata_input" name="payment" type="radio" value="daviplata"/>
              <label htmlFor="daviplata_input">
                <img className="h-12 md:h-20 " src="./assets/icons/daviplata.webp" alt="Logo Daviplata" />
              </label>
            </div>

          </div>
        </form>
        <IonLoading
          isOpen={sendingRequest}
          message={'Creando orden...'}
        />
      </IonContent>
      <IonFooter>
        <div className="flex justify-center">
          <button type="submit" form="myform"
            className="w-full m-1 lg:w-5/12 p-4 bg-green rounded-xl text-white text-2xl font-semibold"
          >
            {sendingRequest
              ?  <IonSpinner name="dots" />
              : `Pagar ahora`
            }
          </button>
        </div>
      </IonFooter>
    </IonPage>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.shop.cart,
    total: state.shop.total,
  }
}
export default connect(mapStateToProps)(CheckoutPage);
