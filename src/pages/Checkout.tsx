import { IonContent, IonFooter, IonInput, IonItem, IonLabel, IonPage } from '@ionic/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from "../components/BackButtonHeader";

interface IOrder {
  name: string,
  phone: number,
  address: {
    city: string,
    barrio: string,
    address: string,
    comments: string,
  }
}
const CheckoutPage: React.FC<{}> = props => {
  const { register, handleSubmit, formState: { errors } } = useForm<IOrder>();

  const onSubmit: SubmitHandler<IOrder> = async data => {
    console.log (data )
    // try {
    //   setSendingRequest(true);
    //   await LandingService.send(data);
    //   setMessageSended(true);
    // } catch (e) {
    //   console.error (e)
    // } finally {
    //   setSendingRequest(false);
    // }
    // history.push('/final')

  }
  // const [total, setTotal] = useState(49800);
  const history = useHistory();
  return (
    <IonPage className="font-inter">
      <Header />
      <IonContent style={{'--ion-background-color':'#f3f4f6'}}>
        <div className="text-center mt-10">
          <span className="text-4xl font-bold text-gray-800">Datos de Envio</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} id="myform" className="mt-10 w-11/12 md:w-5/12 mx-auto">
          <div className="">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Nombre"
              className="block w-full md:6/12 py-4 text-xl rounded-lg mb-2 bg-gray-100 text-gray-800 focus:border-green-500 focus:outline-none"
            />
            <input
              {...register("phone", { required: true })}
              type="number"
              placeholder="Telefono"
              className="block w-full  md:6/12 py-4 text-xl rounded-lg mb-2 bg-gray-100 text-gray-800 focus:border-green-500 focus:outline-none"
            />
            <input
              {...register("address.city", { required: true })}
              type="text"
              placeholder="Ciudad"
              className="block w-full  md:6/12 py-4 text-xl rounded-lg mb-2 bg-gray-100 text-gray-800 focus:border-green-500 focus:outline-none"
            />
            <input
              {...register("address.address", { required: true })}
              type="text"
              placeholder="Direccion"
              className="block w-full  md:6/12 py-4 text-xl rounded-lg mb-2 bg-gray-100 text-gray-800 focus:border-green-500 focus:outline-none"
            />
            <input
              {...register("address.comments", { required: false })}
              type="text"
              placeholder="Indicaciones adicionales*"
              className="block w-full md:6/12 py-4 text-xl rounded-lg mb-2 bg-gray-100 text-gray-800 focus:border-green-500 focus:outline-none"
            />
          </div>
        </form>
        <div className="text-center mt-10">
          <span className="text-4xl font-bold text-gray-800">Metodo de Pago</span>
        </div>
      </IonContent>
      <IonFooter>
        <div className="flex justify-center">
          <button type="submit" form="myform"
            className="w-9/12 my-2 lg:w-4/12 p-4 bg-green rounded-xl text-white text-2xl font-semibold"
          >Pagar Ahora
          </button>

        </div>
      </IonFooter>
    </IonPage>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.shop.cart,
  }
}
export default connect(mapStateToProps)(CheckoutPage);
