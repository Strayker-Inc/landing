import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import { IonContent, IonFooter, IonPage, IonSlide, IonSlides } from "@ionic/react";
import './Onboarding.css';

const OnboardingPage: React.FC<RouteComponentProps<any>> = props => {
  const history = useHistory();

  return (
    <IonPage className="font-inter">
      <IonContent className="">

        <IonSlides  pager={true} className="flex h-full cursor-move">
          <IonSlide>
            <div className="space-y-6">
              <div className="block w-3/6 md:w-2/6 mx-auto md:mb-28">
                <img src="./assets/images/logo_full.svg" alt="Logo slinqer" />
              </div>
              <span className="block mx-auto w-5/6 text-4xl font-bold text-gray-800">
                Bienvenida a Slinqer
              </span>
              <p className="block mx-auto w-4/6 md:w-2/6 text-2xl text-gray-600">
                Somos la primera app que conecta marcas ecologicas con una comunidad sotenible
              </p>
            </div>
          </IonSlide>

          <IonSlide>
            <div className="space-y-6">
              <div className="block w-3/6 md:w-2/6 mx-auto md:mb-28">
                <img src="./assets/images/slide2.svg" alt="Manos sosteniendo una planta" />
              </div>
              <span className="block mx-auto w-5/6 text-4xl font-bold text-gray-800">
                Productos 100% ecólogicos
              </span>
              <p className="block mx-auto w-4/6 md:w-2/6 text-2xl text-gray-600">
                Una tienda pensada en el planeta. Encuentra los mejores productos y servicios de nuestras marcas eco-aliadas
              </p>
            </div>
          </IonSlide>

          <IonSlide>
            <div className="space-y-6">
              <div className="block w-3/6 md:w-2/6 mx-auto md:mb-28">
                <img src="./assets/images/slide3.svg" alt="Mujer comprando online" />
              </div>
              <span className="block mx-auto w-5/6 md:w-2/6 text-4xl font-bold text-gray-800">
                Ecologico no es igual a una sola opcion
              </span>
              <p className="block mx-auto w-4/6 md:w-2/6 text-2xl text-gray-600">
                Para cada necesidad tenemos muchas alternativas ecológicas. Solo entra, elige y listo!.
              </p>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>

      <IonFooter >
        <div className="flex mb-4">
          <button className="w-5/6 md:w-5/12 p-3 text-xl mx-auto text-center bg-green text-white font-bold rounded-xl"
            onClick={() => history.push('/home')}
          >
            Siguiente
          </button>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default withRouter(OnboardingPage);
