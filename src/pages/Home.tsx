import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, withRouter  } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/searchBar";
import { addDoc, collection, getDocs } from "firebase/firestore";
import IPage from "../interfaces/page";
import { db, messaging } from '../config/firebase';
import { IonContent, IonPage } from '@ionic/react';
import { ICategory } from '../interfaces/Category.interface';
import { isSupported, getToken } from "firebase/messaging";

const arr = [
  {
    name: 'Cuidado diario',
    img: './assets/icons/cuidado_personal.png',
    code: 123
  },
  {
    name: 'Belleza',
    code: 123
  },
  {
    name: 'Cocina',
    img: './assets/icons/kitchen.png',
    code: 123
  },
  {
    name: 'Jabones',
    img: './assets/icons/jabon.png',
    code: 123
  },
  {
    name: 'Recipientes ecologicos',
    img: './assets/icons/caja.png',
    code: 123
  },
  {
    name: 'Jardin',
    img: './assets/icons/plant.png',
    code: 123
  },
  {
    name: 'Alternativas a los desechables',
    img: './assets/icons/desechables.png',
    code: 123
  }
]
const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const history = useHistory();
  const [categoriess, setCategories] = useState<ICategory[]>();

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
      try {
        const categoriesCol = collection(db, 'categories');
        const categoriesSnapshot = await getDocs(categoriesCol);
        const categoriesDb = categoriesSnapshot.docs.map(doc => doc.data());
        setCategories(categoriesDb as ICategory[]);
      } catch (error) {
        console.log (error)
      }
    }
    const nose = async () => {
      await addDoc(collection(db, "products"), {
        id: "prod_28",
        store_id: "store_1",
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
          },
          {
            id: 'pr_2',
            presentation: '7oz',
            cost: 9200,
            units: 50
          },
          {
            id: 'pr_3',
            presentation: '9oz',
            cost: 11400,
            units: 50
          },
          {
            id: 'pr_4',
            presentation: '12oz',
            cost: 10150,
            units: 40
          },
          {
            id: 'pr_5',
            presentation: '16oz',
            cost: 9650,
            units: 28
          },

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
          <span className="text-xl font-bold text-gray-700">Categorías</span>
        </div>
        <div className="w-11/12 lg:w-9/12 mt-4 mx-auto grid grid-cols-3 gap-1">
          {categoriess && arr.map(item => (
            <div onClick={() => history.push(`/tienda/${item.code}`)}
              className="w-full cursor-pointer justify-center items-center relative   rounded-xl"
            >
              <img src={item.img} className="w-20 mx-auto" alt="" />
              <div className="text-center">
                <span className="text-gray-600">{item.name}</span>
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
