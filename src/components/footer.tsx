import React, { useEffect, useState } from 'react';
import { IonBadge, IonFooter, IonIcon, IonToast} from '@ionic/react';
import { useHistory } from "react-router-dom";
import { logoWhatsapp, cartOutline, cartSharp } from 'ionicons/icons';
import { connect } from "react-redux";
import { ICart } from '../redux/shopping/shoppingReducer';

const footerStyles: React.CSSProperties = {
  backgroundColor: "#00bb2d",
}

type Props = {
  cart: ICart[]
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
      return history.push('/home/cart')
    }
    setShowToastEmpty(true);
  }

  return (
    <IonFooter>
      <button onClick={() => goToCart()}
        className="p-3 w-20 h-20 mb-2 md:w-16 md:h-16 md:mb-6 flex items-center inline-flex justify-center text-center shadow-lg rounded-full bg-white absolute bottom-10 right-6">
          {cartCount === 0
            ? <IonIcon className="text-4xl" icon={cartOutline} />
            : <>
                <IonIcon className="text-4xl relative" icon={cartSharp} />
                <IonBadge color="danger" className="absolute mb-6 ml-6">{props.cart.length}</IonBadge>
              </>
          }
      </button>

      <div className="h-10 flex items-center justify-center absolute inset-x-0 bottom-0 text-white" style={footerStyles}>
        <a href="https://wa.me/573162452663" className="flex justify-center items-center">
          <p className="text-center font-semibold mr-4 text-2xl">
            ¿Necesitas ayuda?
          </p>
          <IonIcon className="text-4xl" icon={logoWhatsapp} />
        </a>
      </div>

      <IonToast
        isOpen={showToastEmpty}
        onDidDismiss={() => setShowToastEmpty(false)}
        message="Aun no tienes productos en el carrito"
        duration={800}
      />
    </IonFooter>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(FooterApp);
