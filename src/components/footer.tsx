import React, { SetStateAction, useState } from 'react';
import { IonBadge, IonIcon, IonToast} from '@ionic/react';
import { RouteComponentProps, useHistory, withRouter  } from "react-router-dom";
import { logoWhatsapp, cartOutline, cartSharp } from 'ionicons/icons';
import { IProduct } from '../pages/categories/Categories';

const footerStyles: React.CSSProperties = {
  backgroundColor: "#00bb2d",
}

type Props = {
  addToCart: (prod: IProduct) => void
  cart: IProduct[]
};

const FooterApp: React.FC<Props & RouteComponentProps<any>> = ({addToCart, cart}) => {
  const history = useHistory();
  const [showToastEmpty, setShowToastEmpty] = useState(false)

  const goToCart = () => {
    if (cart.length > 0) {
      return history.push('/home/cart')
    }
    setShowToastEmpty(true);
  }
  return (
      <footer>
        <IonToast
          isOpen={showToastEmpty}
          onDidDismiss={() => setShowToastEmpty(false)}
          message="Aun no tienes productos en el carrito"
          duration={800}
        />
        <button onClick={() => goToCart()}
          className="p-3 w-20 h-20 mb-2 md:w-16 md:h-16 md:mb-6 flex items-center inline-flex justify-center text-center shadow-lg rounded-full bg-white absolute bottom-10 right-6">
            {cart.length===0 ?
              <IonIcon className="text-4xl" icon={cartOutline} />
              :
              <>
                <IonIcon className="text-4xl relative" icon={cartSharp} />
                <IonBadge color="danger" className="absolute mb-6 ml-6">{cart.length}</IonBadge>
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
      </footer>
  );
};

export default withRouter(FooterApp);
