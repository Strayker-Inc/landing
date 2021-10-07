import React, { useEffect, useState } from 'react';
import { IonChip, IonContent, IonLabel, IonPage, IonSkeletonText } from '@ionic/react';
import { RouteComponentProps, useHistory, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/searchBar";
import ProductRow, { Params } from "../components/ProductRow";
import { connect } from 'react-redux';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../config/firebase';
export interface IProduct {
  id: string,
  store_id: string,
  category_code: string,
  name: string,
  cost: number,
  images: string[],
  description: string,
  size: string,
}

// export const products_list = [
//   {
//     id: "prod_1",
//     category_id: "cat_1",
//     store_id: "store_1",
//     name: "Caja Ela Germinable",
//     cost: 21450,
//     images: ['https://i.ibb.co/pj13mzh/ejemplo.jpg','https://i.ibb.co/zF2DkY2/Lifepack-Caja-Ela-Germinable-2.jpg', 'https://i.ibb.co/cYdtXXT/Lifepack-Caja-Ela-Germinable-1.jpg' ],
//     size: '15cm x 11,5cm x 5,5 cm',
//     description: 'Es armable y de facil almacenamiento. Elaborada de residuos agricolas y semillas, despues de usarla se puede sembrar, el producto se biodegrada y te puede germinar una linda planta de Chia.'
//   },
//   {
//     name: "Abono organico potenciado Ecopoop",
//     cost: 4500,
//     id: 2,
//     image: "https://i.ibb.co/JnnVnN7/DSC-0492-JPG.webp",
//     images: [
//       'https://i.ibb.co/JnnVnN7/DSC-0492-JPG.webp',
//       'https://i.ibb.co/9T025HT/DSC-0510-JPG.webp',
//       'https://i.ibb.co/Np1b5Yf/DSC-0541-JPG.webp',
//       'https://i.ibb.co/hWhcZ49/DSC-0513-JPG.webp',
//       'https://i.ibb.co/tYgLxK6/DSC-0536-JPG.webp'
//     ],
//     size: '15cm x 11,5cm x 5,5 cm',
//     description: 'El abono organico ecopoop es producto de compostaje de excremento de mascotas. No contiene quimicos'
//   },
//   {
//     name: "Caja de Zapatos",
//     cost: 4000,
//     id: 3,
//     image: 'https://calicreativa.com/wp-content/uploads/IMG_8234-min.jpg',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia'
//   },
//   {
//     name: "Gel de Baño",
//     cost: 22000,
//     id: 4,
//     image: 'https://images.unsplash.com/photo-1615290144628-8fa0f0d61658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia'
//   },
// ]

interface IProps {
  products: IProduct[],
}
const CategoriesPage: React.FC<IProps & RouteComponentProps<any>> = props => {
  const history = useHistory();
  const { category } = useParams<Params>();
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const q = query(collection(db, 'products'), where('category_code', '==', category ))
        const productsSnapshot = await getDocs(q);
        const data = productsSnapshot.docs.map(doc => doc.data());
        setProducts(data as IProduct[]);
      } catch (error) {
        console.log (error)
      }
    }
    getProducts();
  }, [category])

  const productSkeleton = (key: string) =>
    <div key={key} className="w-11/12 flex bg-white shadow-lg rounded-xl mb-4">
      <div className="w-1/3">
        <IonSkeletonText animated className="h-full rounded-l-xl" />
      </div>
      <div className="w-2/3 p-4">
        <IonSkeletonText animated className="h-6 mb-4" />
        <IonSkeletonText animated className="w-7/12" />
        <IonSkeletonText animated className="w-10/12" />
        <IonSkeletonText animated className="w-9/12" />
        <IonSkeletonText animated className="w-8/12" />
        <div className="flex flex-wrap item-center justify-between mt-3">
          <IonSkeletonText animated className="w-4/12 h-6" />
          <IonSkeletonText animated className="w-6/12 h-6"/>
        </div>
      </div>
    </div>

  return (
    <IonPage className="font-inter">
      <Header showBack={true}/>
      <IonContent>
        <div className="sticky w-full top-0 my-2 px-4  md:flex md:justify-center bg-white">
          {/* {categories.map(item => {
            const isTheSameCategory = (item.code === category.toLowerCase().replace(' ', '_'))
            return (
              <IonChip key={item.code}
                onClick={() => history.push(`${item.code}`)}
                className={`${isTheSameCategory && 'bg-green text-white font-bold' } text-lg`}>
                <span>{item.emoji}</span>
                <IonLabel>{item.name}</IonLabel>
              </IonChip>
            )
          })} */}
        </div>

        <div className="w-full md:w-9/12 mx-auto flex flex-wrap justify-center overflow-y-auto pt-4">
          {products
          ? products.map(product => <ProductRow key={product.id} product={product}/>)
          : [1,2,3,4].map(skeleton => (productSkeleton((skeleton * 2).toString()))) }
        </div>
      </IonContent>

      <Footer />
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(CategoriesPage);
