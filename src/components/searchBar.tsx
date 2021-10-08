import React, { useState } from 'react';
import { IonHeader, IonIcon, IonSearchbar} from '@ionic/react';
import { RouteComponentProps, withRouter, useHistory } from "react-router-dom";
import { chevronBack } from 'ionicons/icons';
interface componentProperties {
  showBack: boolean
}

const SearchBar: React.FC<componentProperties & RouteComponentProps<any>> = props => {
  const history = useHistory();
  const [searchText, setSearchText] = useState('');
  const [showBack] = useState(props.showBack);

  return (
    <IonHeader className="h-14 md:h-20 flex justify-center items-center">
      {
        showBack ?
        <IonIcon onClick={() => history.goBack()} className="ml-2 text-4xl" icon={chevronBack} />
        :
        <img id="logo" className="ml-2 h-12 md:h-16" src="./assets/images/slinqer_logo.svg" alt="Logo Slinqer" />
      }
      <IonSearchbar className="mx-auto" mode="ios"
        placeholder="Shampoo en barra" animated={true}
        value={searchText} onIonChange={e => setSearchText(e.detail.value!)}
      >
      </IonSearchbar>

    </IonHeader>
  );
};

export default withRouter(SearchBar);
