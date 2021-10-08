import { IonContent, IonFooter, IonIcon, IonPage } from "@ionic/react";
import { chevronForwardOutline,logoWhatsapp  } from "ionicons/icons";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import Header from "../components/BackButtonHeader";
import CartProductRow from "../components/CartProductRow";
import { ICart } from "../redux/shopping/shoppingReducer";
interface IProps {
  cart: ICart[],
  total: number,
}

const CartPage: React.FC<IProps> = props => {
  const history = useHistory();
  return (
    <IonPage className="font-inter">
      <Header />
      <IonContent style={{'--ion-background-color':'#f3f4f6'}}>
        <div className="text-center mt-10">
          <span className="text-4xl font-bold text-gray-800">Eco-Carrito</span>
        </div>
        <div className="w-full lg:w-5/12 mx-auto">
          {props.cart.map(item => <CartProductRow key={item.id} item={item}/>)}

          <a className="mt-4 mx-4 flex h-20 flex justify-around items-center bg-white shadow-lg rounded-lg overflow-hidden"
            style={{background: '#00bb2d' }} href="https://wa.me/573162452663"
          >
            <span className="w-2/3 ml-4 text-center flex items-center text-xl md:text-2xl font-bold text-white">
              ¿Necesitas ayuda con tu pedido? Escribenos
            </span>
            <IonIcon className="text-5xl text-white" icon={logoWhatsapp} />
          </a>

        </div>
      </IonContent>
      <IonFooter>
        <div className="lg:w-2/5 md:mx-auto flex justify-around items-center my-2">
          <div>
            <span className="block text-gray-400 font-bold text-xl">Total</span>
            <p className="block text-3xl text-gray-700 font-bold">{`$ ${props.total}`}</p>
          </div>
          <div>
            <button onClick={() => history.push('/tienda/carrito/checkout')}
              className="flex items-center p-4 bg-green rounded-xl text-white text-2xl font-semibold"
            >Siguiente
              <IonIcon className="text-4xl" icon={chevronForwardOutline} />
            </button>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.shop.cart,
    total: state.shop.total
  }
}
export default connect(mapStateToProps)(CartPage);
