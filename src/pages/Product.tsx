import { IonContent, IonFooter, IonPage, IonSlides, IonSlide } from "@ionic/react";
import { useEffect, useState } from "react";
import { RouteComponentProps, useParams, withRouter } from "react-router-dom";
import { IProduct } from "./Categories";
import  Header from "../components/BackButtonHeader";
import './Product.css'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import Footer from "../components/footer";

interface IParams {
  productId: string
}

const ProductPage: React.FC<RouteComponentProps<any>> = props => {
  const { productId } = useParams<IParams>();
  // const history = useHistory();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const q = query(collection(db, 'products'), where('id', '==', productId))
        const productsSnapshot = await getDocs(q);
        const data = productsSnapshot.docs.map(doc => doc.data());
        setProduct(data[0] as IProduct);
      } catch (error) {
        console.log (error)
      }
    }
    getProducts();
  }, [productId])


  return (
    <IonPage className="font-inter">
      <Header />
      <IonContent style={{'--ion-background-color':'#f3f4f6'}}>
        {product &&
          <div className="relaive h-screen md:mt-4">
            <IonSlides pager={true} className="h-3/6 w-full md:w-2/5">
              {product.images.map((img)=>
                <IonSlide key={img}>
                  <div className="w-full h-full bg-cover bg-center md:rounded-3xl"
                    style={{backgroundImage: `url(${img})`}}
                  ></div>
                </IonSlide>
              )}
            </IonSlides>

            <div className="z-10 absolute h-3/6 w-full inset-x-0 bottom-0 mb-10 md:mb-20">
              <div className="flex justify-evenly md:w-2/5 mx-auto ">
                <div className="p-3 text-center justify-center w-26 h-26 shadow-lg rounded-3xl bg-white">
                  <img className="block w-10 mx-auto" src="./assets/images/vegan.svg" alt="Producto Vegano"/>
                  <span className="block text-lg font-semibold text-gray-800">Vegano</span>
                </div>
                <div className="p-3 text-center justify-center w-26 h-26 shadow-lg rounded-3xl bg-white">
                  <img className="block w-10 mx-auto" src="./assets/images/co2.svg" alt="Producto carbono neutro"/>
                  <span className="block text-lg font-semibold text-gray-800 mx-auto">Neutro</span>
                </div>
                <div className="p-3 text-center justify-center w-26 h-26 shadow-lg rounded-3xl bg-white">
                  <img className="block w-10 mx-auto" src="./assets/images/nature.svg" alt="Producto natural"/>
                  <span className="block text-lg font-semibold text-gray-800">Natural</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-100 md:w-2/5 mx-auto">
              <span className="block text-3xl text-gray-800 font-semibold">{product.name}</span>
              <span className="block text-sm text-gray-700 mb-2">{product.size}</span>
              <p className="block text-lg text-gray-600">{product.description}</p>
            </div>
            {/*
            <div className="p-10 absolute h-3/6 w-full inset-x-0 bottom-0 bg-black rounded-t-3xl">
              <span className="text-3xl font-bold text-gray-800">{product.name}</span>
            </div> */}
          </div>
        }

      </IonContent>
      <Footer />
      <IonFooter>
        <div className="md:w-2/5 md:mx-auto flex justify-around items-center mb-4">
          <span className="flex">
            <p className="text-3xl text-gray-700 font-bold">{`$ ${product?.cost}`}</p>
            <p className="self-end text-xl text-gray-600"> x25</p>
          </span>
          <div>
            <button
              className="p-4 bg-green rounded-xl text-white text-lg font-semibold"
            >Agregar al carro
            </button>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default withRouter(ProductPage);
