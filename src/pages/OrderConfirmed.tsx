import { IonContent, IonPage } from "@ionic/react";

interface IPageProps {

}

const OrderConfirmedPage: React.FC<IPageProps> = props => {
  return (
    <IonPage>
      <IonContent>
        <div className="w-11/12 md:w-5/12 mx-auto">
          Hola
        </div>
      </IonContent>
    </IonPage>
  );
}

export default OrderConfirmedPage;
