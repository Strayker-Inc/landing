import React, { useEffect, useState } from 'react';
import { IonBadge, IonIcon, IonToast} from '@ionic/react';
import { Link, useHistory } from "react-router-dom";
import { logoWhatsapp, cartOutline, cartSharp, homeSharp } from 'ionicons/icons';
import { connect } from "react-redux";
import { ICartProduct } from '../interfaces/Order.interface';



type Props = {
  cart: ICartProduct[]
};

const FooterApp: React.FC<Props> = (props) => {
  const history = useHistory();
  const [showToastEmpty, setShowToastEmpty] = useState(false)
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(props.cart.length);
  }, [props.cart,  cartCount])

  const goToCart = () => {
    if (cartCount > 0) {
      return history.push('/tienda/carrito')
    }
    setShowToastEmpty(true);
  }

  return (
    <div className="w-full rounded-xl absolute bottom-2">
      <div className="w-11/12 p-1 md:w-3/12 shadow-lg rounded-xl flex justify-around bg-white mx-auto">
        <Link to={'/home'} className={`${history.location.pathname === "/home" ? 'text-green font-bold' : 'text-gray-700'} text-center`}>
          <IonIcon className={` text-2xl`} icon={homeSharp} />
          <p>Inicio</p>
        </Link>
        <a href="https://wa.me/573162452663" className="text-center text-gray-700">
          <IonIcon className="text-2xl"icon={logoWhatsapp} />
          <p>Soporte</p>
        </a>
        <button onClick={() => goToCart()}>
          {cartCount === 0
            ? <div className="text-gray-700">
                <IonIcon className="text-2xl" icon={cartOutline} />
                <p>Carrito</p>
              </div>
            : <div className="text-gray-900">
                <IonIcon className="text-2xl relative" icon={cartSharp} />
                <IonBadge color="danger" className="absolute mb-6">{props.cart.length}</IonBadge>
                <p>Carrito</p>
              </div>
          }
        </button>
      </div>
      <IonToast
        isOpen={showToastEmpty}
        onDidDismiss={() => setShowToastEmpty(false)}
        message="Aún no tienes productos en el carrito"
        duration={800}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(FooterApp);
