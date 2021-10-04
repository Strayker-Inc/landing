import React, { useEffect, useState } from 'react';
import { IonBadge, IonFooter, IonIcon, IonItem, IonToast, useIonPopover} from '@ionic/react';
import { useHistory } from "react-router-dom";
import { logoWhatsapp, cartOutline, cartSharp, paperPlane } from 'ionicons/icons';
import { connect } from "react-redux";
import { ICart } from '../redux/shopping/shoppingReducer';

const footerStyles: React.CSSProperties = {
  backgroundColor: "#00bb2d",
}

type Props = {
  cart: ICart[]
};

const PopoverList: React.FC<{onHide: () => void}> = ({ onHide }) => (
  <div>
    <IonItem lines="none" detail={true} href="https://wa.me/573162452663">
      Ayuda por WhatsApp
      <IonIcon className="ml-2 text-3xl" style={{color: '#00bb2d' }} icon={logoWhatsapp} />
    </IonItem>
    <IonItem lines="none" detail={true} href="https://wa.me/573162452663">
      Ayuda por Telegram
      <IonIcon className="ml-2 text-3xl" style={{color: '#0088cc' }} icon={paperPlane} />
    </IonItem>
    <IonItem lines="none" detail={false} button onClick={onHide}>
      Cerrar
    </IonItem>
  </div>
);

const FooterApp: React.FC<Props> = (props) => {
  const history = useHistory();
  const [showToastEmpty, setShowToastEmpty] = useState(false)
  const [cartCount, setCartCount] = useState(0);
  const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss() });

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
    <IonFooter style={{}}>
      <button onClick={(e) => present({event: e.nativeEvent})} style={footerStyles}
        className="p-3 w-16 h-16 mb-2 md:mb-6 justify-center text-center shadow-lg rounded-full absolute bottom-24 right-6">
          <IonIcon className="block text-4xl mx-auto text-white"icon={logoWhatsapp} />
      </button>

      <button onClick={() => goToCart()}
        className="p-3 w-20 h-20 mb-2 md:mb-6 flex items-center inline-flex justify-center text-center shadow-lg rounded-full bg-white absolute bottom-0 right-6">
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
