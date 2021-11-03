import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, withRouter  } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/searchBar";
import { addDoc, collection, getDocs } from "firebase/firestore";
import IPage from "../interfaces/page";
import { categoriesRef, db } from '../config/firebase';
import { IonContent, IonPage } from '@ionic/react';
import { ICategory } from '../interfaces/Category.interface';
// import { isSupported, getToken } from "firebase/messaging";

const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const history = useHistory();
  const [categories, setCategories] = useState<ICategory[]>();

  useEffect(() => {
    // const subscribeFirebase = async() => {
    //   try {
    //     const supported = await isSupported();
    //     if (supported) {
    //       const token = await getToken(messaging);
    //       localStorage.setItem('token', token)
    //       // TODO: check if token is already on database, if not save as new user
    //       console.log(token);
    //     }
    //   } catch (error) {
    //     console.log (error)
    //   }
    // }
    const getCategories = async () => {
      // TODO: migrate this to backend
      try {
        const categoriesSnapshot = await getDocs(categoriesRef);
        const categoriesDb = categoriesSnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        });
        setCategories(categoriesDb as ICategory[]);
      } catch (error) {
        console.log (error)
      }
    }
    const nose = async () => {
      await addDoc(collection(db, "products"), {
        store_id: "store_1",
        views: 0,
        active: true,
        category_code: "hogar",
        name: "Vasos Eco-carton",
        description: 'Elaborados con Eco-carton 100% biodegradable y compostable.',
        benefit: 'Biodegradable y compostable 100%.',
        vegan: true,
        presentations: [
          {
            id: 'pr_1',
            presentation: '4oz',
            cost: 7400,
            units: 50
          }
        ],
        images: [
          'https://res.cloudinary.com/slinqer/image/upload/v1634747552/shops/lifepack/Lifepack_Vasos_4_a_9_onzas_uvw3jz.jpg',
          'https://res.cloudinary.com/slinqer/image/upload/v1634747553/shops/lifepack/Lifepack_Vaso_7_onzas_r27ftd.jpg',
          'https://res.cloudinary.com/slinqer/image/upload/v1634747551/shops/lifepack/Lifepack_Vasos_12_y_16_onzas_ebfzme.jpg',
        ],
      });
    }
    getCategories();
    // subscribeFirebase();
    // nose();
  }, [])


  return (
    <IonPage className="font-inter">
      <Header showBack={false}/>

      <IonContent style={{'--ion-background-color':'#f5f7ff'}} className="font-inter">
        <div className="w-11/12 lg:w-9/12 mt-6 mx-auto">
          <span className="text-xl font-bold text-gray-500">Categorías</span>
        </div>
        <div className="w-11/12 lg:w-9/12 mt-4 mx-auto grid grid-cols-3 gap-3">
          {categories && categories.map(item => !item.active && (
            <div key={item.id} onClick={() => history.push(`/tienda/${item.code}`)}
              className="w-full p-2 cursor-pointer bg-white items-center shadow-xl rounded-xl"
            >
              <div className="h-16 md:h-36 mb-3">
                <img src={item.img} className="h-full mx-auto" alt="" />
              </div>
              <div className="text-center self-center">
                <p className="text-gray-700 leading-none">{item.name}</p>
              </div>
            </div>
          ))}

        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default withRouter(HomePage);
