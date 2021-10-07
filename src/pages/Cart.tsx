import { IonContent, IonFooter, IonIcon, IonPage } from "@ionic/react";
import { chevronForwardOutline, trashOutline, addCircleOutline, removeCircleOutline, logoWhatsapp  } from "ionicons/icons";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import Header from "../components/BackButtonHeader";
import { ICart } from "../redux/shopping/shoppingReducer";
interface IProps {
  cart: ICart[]
}

const CartPage: React.FC<IProps> = props => {
  const [total, setTotal] = useState(49800);
  const history = useHistory();
  return (
    <IonPage className="font-inter">
      <Header />
      <IonContent style={{'--ion-background-color':'#f3f4f6'}}>
        <div className="text-center mt-10">
          <span className="text-4xl font-bold text-gray-800">Eco-Carrito</span>
        </div>
        <div className="w-full lg:w-5/12 mx-auto">
          {props.cart.map(item =>
            <div className="block mt-4 mx-4 flex h-40 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="m-3 rounded-lg w-1/3 bg-cover bg-center"
                onClick={() => history.push(`/home/${item.id}`)}
                style={{backgroundImage: `url(${item.images[0]})`}}
              ></div>
              <div className="w-2/3 p-4 relative">
                <span className="text-gray-700 font-bold text-xl md:text-2xl">{item.name}</span>
                <div className="absolute inset-y-4 right-0 mr-4 ">
                  <IonIcon className="text-3xl text-gray-600" icon={trashOutline} />
                </div>
                <div className="flex flex-wrap absolute inset-x-0 bottom-0 item-center justify-between mb-6 mx-4">
                  <p className="text-gray-900 font-bold text-2xl">{`$${item.cost}`}</p>
                  <div className="flex items-center">
                    <button className="text-gray-700">
                      <IonIcon className="text-3xl" icon={removeCircleOutline} />
                    </button>
                    <span className="mx-4 text-2xl font-bold">{item.qty}</span>
                    <button className="text-gray-700">
                      <IonIcon className="text-3xl" icon={addCircleOutline} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
            <p className="block text-3xl text-gray-700 font-bold">{`$ ${total}`}</p>
          </div>
          <div>
            <button onClick={() => history.push('/home/checkout')}
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
  }
}
export default connect(mapStateToProps)(CartPage);
