import React from 'react';
import { IonChip, IonIcon, IonLabel } from '@ionic/react';
import { RouteComponentProps, withRouter  } from "react-router-dom";
import { pin } from 'ionicons/icons';
import Footer from "../../components/footer";
import Header from "../../components/searchBar";
import IPage from "../../interfaces/page";
const products = [
  {
    name: "Belleza",
    cost: "El mejor balance con la naturaleza",
    id: 1
  },
  {
    name: "Belleza",
    cost: "El mejor balance con la naturaleza",
    id: 2
  },
  {
    name: "Belleza",
    cost: "El mejor balance con la naturaleza",
    id: 3
  },
  {
    name: "Belleza",
    cost: "El mejor balance con la naturaleza",
    id: 4
  },
]

const CategoriesPage: React.FC<IPage & RouteComponentProps<any>> = props => {

  return (
    <div className="font-inter">
      <Header showBack={true}/>
      <div className="my-2 ml-6 md:flex md:justify-center">
        <IonChip className="bg-green-400 text-white font-bold text-lg">
          <IonIcon icon={pin} color="primary" />
          <IonLabel>Belleza</IonLabel>
        </IonChip>
        <IonChip>
          <IonIcon icon={pin} color="primary" />
          <IonLabel>Cuidado Personal</IonLabel>
        </IonChip>
        <IonChip>
          <IonIcon icon={pin} color="primary" />
          <IonLabel>Hogar</IonLabel>
        </IonChip>
      </div>

      <main className="overflow-y-auto pt-4">

      </main>

      <Footer />
    </div>
  );
};

export default withRouter(CategoriesPage);
