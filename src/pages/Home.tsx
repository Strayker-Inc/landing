import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, withRouter  } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/searchBar";
import { addDoc, collection, getDocs } from "firebase/firestore";
import IPage from "../interfaces/page";
import { db, messaging } from '../config/firebase';
import { IonPage } from '@ionic/react';
import { ICategory } from '../interfaces/Category.interface';
import { isSupported, getToken } from "firebase/messaging";

const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const history = useHistory();
  const [categoriess, setCategories] = useState<ICategory[]>();

  useEffect(() => {
    const subscribeFirebase = async() => {

      try {
        const supported = await isSupported();
        console.log(supported);
        if (supported) {
          const token = await getToken(messaging);
          alert(token);
        }
      } catch (error) {
        console.log (error)
      }
    }
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
        id: "prod_20",
        store_id: "store_4",
        category_code: "hogar",
        name: "Caja tipo domicilio",
        description: 'Caja tipo domicilio blanca elaborada en material con revestido antigraso y antihumedad.',
        benefit: 'Son 100% libres de plástico, gracias al revestido antigraso y antihumedad se logra evitar el plastificado.',
        vegan: true,
        presentations: [
          {
            id: 'pr_1',
            presentation: '22x14x7 cm',
            cost: 714,
            units: 1
          }
        ],
        images: [
          'https://res.cloudinary.com/slinqer/image/upload/v1634146193/shops/grafincol/35A22CF6-716B-42A8-99E1-049993FDB1BC_u9wpbd.jpg',
          'https://res.cloudinary.com/slinqer/image/upload/v1634146192/shops/grafincol/681CB56D-DE20-41B9-8070-4D91536CFDBF_hlooqt.jpg',
          'https://res.cloudinary.com/slinqer/image/upload/v1634146190/shops/grafincol/7190F5C3-EE35-4E46-861E-B4C8903AE41B_pr3tz3.jpg',
          'https://res.cloudinary.com/slinqer/image/upload/v1634146189/shops/grafincol/612643BF-BDA1-407C-B02F-7C5201525AAD_awufqa.jpg',
          'https://res.cloudinary.com/slinqer/image/upload/v1634146188/shops/grafincol/E9B98F27-F49C-4672-A926-94A57A430A92_livmt9.jpg',
        ],
      });
    }
    getCategories();
    subscribeFirebase();
    // nose();
  }, [])


  return (
    <IonPage className="font-inter bg-gray-100">
      <Header showBack={false}/>

      <main className="overflow-y-auto flex justify-center flex-wrap ">
        {
          categoriess && categoriess.map(item => (
            <div key={item.id} onClick={() => history.push(`/tienda/${item.code}`)}
              className="mx-4 my-2 cursor-pointer flex justify-between md:justify-around items-center relative w-full  md:w-4/12 h-38 md:h-48 text-white shadow-lg rounded-xl"
              style={{backgroundColor: item.color}}
            >
              <div className="py-8 pl-8 md:py-8 md:pl-8">
                <p className="text-md md:text-lg font-semibold">{item.description}</p>
                <span className="text-4xl md:text-5xl font-bold">{item.name}</span>
              </div>
              <div className="text-6xl pr-8 md:pr-4">
                <span>{item.emoji}</span>
              </div>
            </div>
          ))
        }
      </main>
      <Footer />
    </IonPage>
  );
};

export default withRouter(HomePage);
