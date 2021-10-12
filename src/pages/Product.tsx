import { IonChip, IonContent, IonFooter, IonLabel, IonPage, IonRadio, IonRadioGroup } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import  Header from "../components/BackButtonHeader";
import './Product.css'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import Footer from "../components/footer";
import { addToCart } from "../redux/shopping/shoppingActions";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,Navigation,Mousewheel,Autoplay
} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct, IProductPresentation } from "../interfaces/Product.interface";

SwiperCore.use([
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay
]);


interface IParams {
  productId: string,
}

interface IProps {
  addToCart: any
}

interface IForm {
  presentationId: string
}
const ProductPage: React.FC<IProps> = props => {
  const { productId } = useParams<IParams>();
  // const history = useHistory();
  const [product, setProduct] = useState<IProduct>();
  const [selected, setSelected] = useState<string>('biff');
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async data => {


  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const q = query(collection(db, 'products'), where('id', '==', productId))
        const productsSnapshot = await getDocs(q);
        const data = productsSnapshot.docs.map(doc => doc.data());
        setProduct(data[0] as IProduct);
      } catch (error) {
        console.log (error)
      }
    }
    getProduct();
  }, [productId])

  const presentationItem = (presentation: IProductPresentation) =>
    <div className="p-2 flex items-center justify-center bg-white rounded-xl shadow-lg relative" key={presentation.id}>
      <input className="absolute top-3 right-3" {...register("presentationId", { required: true })}  id={presentation.id} name="product" type="radio" value={presentation.id} />
      <label htmlFor={presentation.id} >
        <p>{presentation.presentation}</p>
        <span>{presentation.units} unidades x {`$${presentation.cost}`}</span>
      </label>
    </div>


  return (
    <IonPage className="font-inter">
      <Header />
      <IonContent style={{'--ion-background-color':'#f3f4f6'}}>
        {product &&
          <div className="relaive h-screen md:mt-4">
            <Swiper id="product_swipper" autoplay={{delay: 2500, disableOnInteraction: true}} navigation={true}
              pagination={true} mousewheel={true} className="h-3/6 w-full md:w-2/5 cursor-move"
            >
              {product.images.map((img)=>
                <SwiperSlide key={img}>
                  <div className="w-full h-full bg-cover bg-center md:rounded-3xl"
                    style={{backgroundImage: `url(${img})`}}
                  ></div>
                </SwiperSlide>
              )}
            </Swiper>

            <div className="z-10 absolute h-3/6 w-full inset-x-0 bottom-0 mb-10 md:mb-20">
              <div className="flex justify-evenly md:w-2/5 mx-auto ">
                <div className="p-3 text-center justify-center w-26 h-26 shadow-lg rounded-3xl bg-white cursor-pointer">
                  <img className="block w-10 mx-auto" src="./assets/images/vegan.svg" alt="Producto Vegano"/>
                  <span className="block text-lg font-semibold text-gray-800">Vegano</span>
                </div>
                <div className="p-3 text-center justify-center w-26 h-26 shadow-lg rounded-3xl bg-white cursor-pointer">
                  <img className="block w-10 mx-auto" src="./assets/images/co2.svg" alt="Producto carbono neutro"/>
                  <span className="block text-lg font-semibold text-gray-800 mx-auto">Neutro</span>
                </div>
                <div className="p-3 text-center justify-center w-26 h-26 shadow-lg rounded-3xl bg-white cursor-pointer">
                  <img className="block w-10 mx-auto" src="./assets/images/nature.svg" alt="Producto natural"/>
                  <span className="block text-lg font-semibold text-gray-800">Natural</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:w-2/5 mx-auto">
              <span className="block text-3xl text-gray-800 font-semibold">{product.name}</span>
              <span className="block text-sm text-gray-700 mb-2">Arreglar con las presentaciones</span>
              <p className="block text-lg text-gray-600">{product.description}</p>
            </div>

            <div className="px-8 md:w-2/5 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)} id="presentationForm">
                <span className="block text-xl text-gray-800 font-semibold">Presentaciones</span>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {/* {product.presentations?.map(presentation => (presentationItem(presentation)))} */}

                </div>

                <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                  <div>
                    <label ></label>
                    <IonRadio value="biff" />
                  </div>
                  <div>
                    <label ></label>
                    <IonRadio value="Hola" />
                  </div>
                </IonRadioGroup>


              </form>
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
            {/* <p className="self-end text-xl text-gray-600"> x25</p> */}
          </span>
          <div>
            <button onClick={() => props.addToCart(product)}
              className="p-4 bg-green rounded-xl text-white text-lg font-semibold"
            >Agregar al carro
            </button>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};


const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (product: IProduct) => dispatch(addToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(ProductPage);
