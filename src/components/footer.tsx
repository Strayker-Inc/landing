import React from 'react';
import { IonIcon} from '@ionic/react';
import { RouteComponentProps, withRouter  } from "react-router-dom";
import { logoWhatsapp, cartOutline } from 'ionicons/icons';

const footerStyles: React.CSSProperties = {
  backgroundColor: "#00bb2d",
}

const FooterApp: React.FC<RouteComponentProps<any>> = props => {
  return (
      <footer>
        <button className="p-3 w-20 h-20 mb-2 md:w-16 md:h-16 md:mb-6 flex items-center inline-flex justify-center text-center shadow-lg rounded-full bg-white absolute bottom-10 right-6">
            <IonIcon className="text-4xl" icon={cartOutline} />
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
