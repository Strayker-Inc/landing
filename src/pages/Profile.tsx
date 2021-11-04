import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { IonIcon, IonPage } from "@ionic/react";
import { chevronForwardOutline, logoGoogle } from "ionicons/icons";
import BackButtonHeader from "../components/BackButtonHeader";
import FooterMenu from "../components/FooterMenu";
import { loginProvider } from "../config/firebase";

const auth = getAuth();

const ProfilePage: React.FC<{}> = props => {
  const loginWithGoogle = async () => {
    // await signInWithRedirect(auth, loginProvider);
    // const result = await getRedirectResult(auth);
    // if (result) {
    //   // This is the signed-in user
    //   const user = result.user;
    //   alert(user);
    // }
    signInWithPopup(auth, loginProvider)
      .then((result) => {
        alert('Alerta')
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          alert (user.email)
        }
      }).catch((error) => {
        alert(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <IonPage className="font-inter bg-gray">
      <BackButtonHeader/>
      <div className="h-screen">
        <div className="h-3/5 bg-red-200">
        </div>
        <div className="mt-3 space-y-3  mx-auto w-11/12 lg:w-5/12">
          <span className="text-2xl font-bold text-gray-700">Ingresa</span>
          <button onClick={() => loginWithGoogle()}
            className="w-4/5 cursor-pointer flex mx-auto space-x-2 justify-center items-center p-4 bg-white rounded-xl text-gray-600 text-2xl shadow-xl font-semibold"
          >
            <img className="h-10" src="./assets/icons/logo-google.svg" alt="logo-google" />
            <p>Ingresar con Google</p>
          </button>
        </div>
      </div>
      <FooterMenu />
    </IonPage>
  );
};
export default ProfilePage;
