import { IonContent, IonFooter, IonPage, IonSlides, IonSlide } from "@ionic/react";
import { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IProduct } from "./Categories";

const ProductPage: React.FC<RouteComponentProps<any>> = props => {
  // const history = useHistory();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    setProduct(
      {
        name: "Caja Ela Germinable",
        cost: 21450,
        id: 1,
        image: "",
        images: ['https://i.ibb.co/pj13mzh/ejemplo.jpg','https://i.ibb.co/zF2DkY2/Lifepack-Caja-Ela-Germinable-2.jpg', 'https://i.ibb.co/cYdtXXT/Lifepack-Caja-Ela-Germinable-1.jpg' ],
        size: '15cm x 11,5cm x 5,5 cm',
        description: 'Es armable y de facil almacenamiento. Elaborada de residuos agricolas y semillas, despues de usarla se puede sembrar, el producto se biodegrada y te puede germinar una linda planta de Chia.'
      },
    )
  },[]);

  return (
    <IonPage className="font-inter bg-gray-100">
      <IonContent>
        {product &&
          <div className="relaive h-screen">
            <IonSlides pager={true} className="h-3/6 w-full">
              {product.images?.map((img)=>
                <IonSlide>
                  <div className="w-full h-full bg-cover bg-center"
                    style={{backgroundImage: `url(${img})`}}
                  ></div>
                </IonSlide>
              )}
            </IonSlides>
            <div className="z-10 absolute h-3/6 w-full inset-x-0 bottom-0 mb-10">
              <div className="flex justify-evenly ">
                <div className="p-3 text-center justify-center w-26 h-26 shadow-lg rounded-3xl bg-white">
                  <img className="block w-10 mx-auto" src="./assets/images/vegan.svg" alt="Producto Vegano"/>
                  <span className="block text-lg font-semibold text-gray-700">Vegano</span>
                </div>
                <div className="p-3 text-center justify-center w-26 h-26 shadow-lg rounded-3xl bg-white">
                  <img className="block w-10 mx-auto" src="./assets/images/co2.svg" alt="Producto carbono neutro"/>
                  <span className="block text-lg font-semibold text-gray-700 mx-auto">Neutro</span>

                </div>
                <div className="p-3 text-center justify-center w-26 h-26 shadow-lg rounded-3xl bg-white">
                  <img className="block w-10 mx-auto" src="./assets/images/nature.svg" alt="Producto natural"/>
                  <span className="block text-lg font-semibold text-gray-700">Natural</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-100 h-2/6">
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
      <IonFooter>
        <div className="flex justify-around items-center mb-4">
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
