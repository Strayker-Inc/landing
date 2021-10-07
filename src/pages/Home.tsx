import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, withRouter  } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/searchBar";
import { collection, getDocs } from "firebase/firestore";
import IPage from "../interfaces/page";
import { db } from '../config/firebase';
import { IonPage } from '@ionic/react';

interface ICategory {
  id: string,
  name: string,
  code: string,
  description: string,
  color: string,
  emoji: string
}

const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const history = useHistory();
  const [categoriess, setCategories] = useState<ICategory[]>();

  useEffect(() => {
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
    getCategories();
  }, [])


  return (
    <IonPage className="font-inter bg-gray-100">
      <Header showBack={false}/>

      <main className="overflow-y-auto flex justify-center flex-wrap ">
        {
          categoriess && categoriess.map(item => (
            <div key={item.id} onClick={() => history.push(`/tienda/${item.code}`)}
              className="mx-4 my-2 flex justify-between md:justify-around items-center relative w-full  md:w-4/12 h-38 md:h-48 text-white shadow-lg rounded-xl"
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
