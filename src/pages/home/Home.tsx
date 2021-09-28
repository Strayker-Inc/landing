import React, { useState } from 'react';
import { IonSearchbar, IonIcon} from '@ionic/react';
import { RouteComponentProps, withRouter  } from "react-router-dom";
import { logoWhatsapp, cartOutline } from 'ionicons/icons';

import IPage from "../../interfaces/page";

const footerStyles: React.CSSProperties = {
  backgroundColor: "#00bb2d",
}

const categories = [
  {
    name: "Belleza",
    description: "El mejor balance con la naturaleza",
    cardColor: "#DC9E82",
    emoji: "💅"
  },
  {
    name: "Cuidado personal",
    description: "El mejor balance con la naturaleza",
    cardColor: "#049C97",
    emoji: "🚿"
  },
  {
    name: "Hogar",
    description: "Alternativas 100% ecologicas",
    cardColor: "#2B2F34",
    emoji: "🏡"
  },
  {
    name: "Hogar",
    description: "Alternativas 100% ecologicas",
    cardColor: "#2B2F34",
    emoji: "🏡"
  },
  {
    name: "Hogar",
    description: "Alternativas 100% ecologicas",
    cardColor: "#2B2F34",
    emoji: "🏡"
  }
]
const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="flex flex-col h-screen font-inter bg-gray-100">
      <header className="ml-2 h-14 md:h-20 flex justify-center items-center">
        <img id="logo" className="h-12 md:h-16" src="./assets/images/slinqer_logo.svg" alt="logo slinqer" />
        <IonSearchbar className="mx-auto" mode="ios"
          placeholder="Champu en barra" animated={true}
          value={searchText} onIonChange={e => setSearchText(e.detail.value!)}
        >
        </IonSearchbar>

      </header>

      <main className="flex-1 overflow-y-auto flex justify-center flex-wrap pt-4">
        {
          categories.map(item => (
            <div className="flex items-center relative mx-4 w-full mb-4 md:w-4/12 h-38 md:h-48 text-white shadow-lg rounded-xl"
              style={{backgroundColor: item.cardColor}}
            >
              <div className="py-8 pl-4 md:py-8 md:pl-8">
                <p className="text-md md:text-lg font-semibold">{item.description}</p>
                <span className="text-4xl md:text-5xl font-bold">{item.name}</span>
              </div>
              <div className="text-6xl mx-auto md:pr-4">
                <span>{item.emoji}</span>
              </div>
            </div>
          ))
        }
      </main>



      <footer>
        <button className="p-3 text-center flex items-center inline-flex justify-center w-20 h-20 mb-2 md:w-16 md:h-16 md:mb-6 shadow-lg rounded-full bg-white absolute bottom-10 right-6">
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
    </div>
  );
};

export default withRouter(HomePage);
