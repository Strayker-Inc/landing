import React, { useEffect, useState } from 'react';
import { IonBadge, IonFooter, IonIcon, IonItem, IonPopover, IonToast} from '@ionic/react';
import { useHistory } from "react-router-dom";
import { logoWhatsapp, cartOutline, cartSharp, paperPlane } from 'ionicons/icons';
import { connect } from "react-redux";
import { ICartProduct } from '../interfaces/Order.interface';

const footerStyles: React.CSSProperties = {
  backgroundColor: "#00bb2d",
}

type Props = {
  cart: ICartProduct[]
};

const FooterApp: React.FC<Props> = (props) => {
  const history = useHistory();
  const [showToastEmpty, setShowToastEmpty] = useState(false)
  const [cartCount, setCartCount] = useState(0);
  const [popoverState, setShowPopover] = useState(false);

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
    <IonFooter style={{}}>
      <button onClick={(e) => setShowPopover(true)} style={footerStyles}
        className="p-3 w-16 h-16 md:w-20 md:h-20 md:mb-6 justify-center text-center shadow-lg rounded-full absolute bottom-20 md:bottom-24 right-2 md:right-6">
          <IonIcon className="block text-4xl mx-auto text-white"icon={logoWhatsapp} />
      </button>

      <button onClick={() => goToCart()}
        className="p-3 w-16 h-16 md:w-20 md:h-20 mb-2 md:mb-6 flex items-center inline-flex justify-center text-center shadow-lg rounded-full bg-white absolute bottom-0  right-2 md:right-6 ">
          {cartCount === 0
            ? <IonIcon className="text-4xl" icon={cartOutline} />
            : <>
                <IonIcon className="text-4xl relative" icon={cartSharp} />
                <IonBadge color="danger" className="absolute mb-6 ml-6">{props.cart.length}</IonBadge>
              </>
          }
      </button>

      <IonToast
        isOpen={showToastEmpty}
        onDidDismiss={() => setShowToastEmpty(false)}
        message="Aún no tienes productos en el carrito"
        duration={800}
      />
      <IonPopover
        isOpen={popoverState}
        onDidDismiss={() => setShowPopover(false)}
      >
        <div>
          <IonItem lines="none" detail={true} href="https://wa.me/573162452663">
            Asesor por WhatsApp
            <IonIcon className="ml-2 text-3xl" style={{color: '#00bb2d' }} icon={logoWhatsapp} />
          </IonItem>
          <IonItem lines="none" detail={true} href="https://t.me/slinqer">
            Asesor por Telegram
            <IonIcon className="ml-2 text-3xl" style={{color: '#0088cc' }} icon={paperPlane} />
          </IonItem>
        </div>
      </IonPopover>
    </IonFooter>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(FooterApp);
