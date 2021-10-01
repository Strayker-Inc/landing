import React, {  useState } from 'react';
import { IonChip, IonLabel } from '@ionic/react';
import { RouteComponentProps, useHistory, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/searchBar";
import IPage from "../interfaces/page";
import { categories } from './Home';
import { addToCart } from '../redux/shopping/shoppingActions';
import { connect } from 'react-redux';
export interface IProduct {
  name: string,
  cost: number,
  id: number,
  image: string,
  images?: string[],
  description: string,
  size?: string,
}
export const products_list = [
  {
    name: "Caja Ela Germinable",
        cost: 21450,
        id: 1,
        image: "https://i.ibb.co/pj13mzh/ejemplo.jpg",
        images: ['https://i.ibb.co/pj13mzh/ejemplo.jpg','https://i.ibb.co/zF2DkY2/Lifepack-Caja-Ela-Germinable-2.jpg', 'https://i.ibb.co/cYdtXXT/Lifepack-Caja-Ela-Germinable-1.jpg' ],
        size: '15cm x 11,5cm x 5,5 cm',
        description: 'Es armable y de facil almacenamiento. Elaborada de residuos agricolas y semillas, despues de usarla se puede sembrar, el producto se biodegrada y te puede germinar una linda planta de Chia.'
  },
  {
    name: "Lorem",
    cost: 9800,
    id: 2,
    image: 'https://images.unsplash.com/photo-1617658946735-2611514fedc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=716&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia'
  },
  {
    name: "Caja de Zapatos",
    cost: 4000,
    id: 3,
    image: 'https://calicreativa.com/wp-content/uploads/IMG_8234-min.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia'
  },
  {
    name: "Gel de Baño",
    cost: 22000,
    id: 4,
    image: 'https://images.unsplash.com/photo-1615290144628-8fa0f0d61658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia'
  },
]

type Params = {
  category: string
}

const CategoriesPage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const { category } = useParams<Params>();
  const history = useHistory();

  const [products, setProducts] = useState<IProduct[]>(products_list)
  const [cart, setCart] = useState<IProduct[]>([]);

  // const addToCart = (product: IProduct) => {
  //   addToCart()
  //   setCart(cart => [...cart, product]);
  // }

  const goToProduct = (productId: string) => {
    history.push(`${category}/${productId.toString()}`)
  };

  const productCard = (product:IProduct) =>
    <div key={product.id} className="m-4 flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/3 bg-cover bg-center"
        style={{backgroundImage: `url(${product.image})`}}
        onClick={() => goToProduct(product.id.toString())}
      >
      </div>
      <div className="w-2/3 p-4">
        <span className="text-gray-800 font-bold text-2xl"  onClick={() => goToProduct(product.id.toString())}>{product.name}</span>
        <p className="mt-2 text-gray-600 text-sm"  onClick={() => goToProduct(product.id.toString())}>{product.description}</p>
        {/* <div className="flex item-center mt-2">
          <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
          </svg>
        </div> */}
        <div className="flex flex-wrap item-center justify-between mt-3">
          <p className="text-gray-700 font-bold text-xl" onClick={() => goToProduct(product.id.toString())}
            >{`$${product.cost}`}
          </p>
          <button onClick={() => addToCart(product.id.toString())}
            className="px-3 py-2 bg-green text-white text-xs font-bold uppercase rounded"
          >Agregar al carro
          </button>
        </div>
      </div>
    </div>

  return (
    <div className="font-inter">
      <Header showBack={true}/>
      <div className="my-2 mx-4 md:flex md:justify-center">
        {categories.map(item => {
          const isTheSameCategory = (item.code === category.toLowerCase().replace(' ', '_'))
          return (
            <IonChip key={item.code}
              onClick={() => history.push(`${item.code}`)}
              className={`${isTheSameCategory && 'bg-green text-white font-bold' } text-lg`}>
              <span>{item.emoji}</span>
              <IonLabel>{item.name}</IonLabel>
            </IonChip>
          )

        })}
      </div>

      <main className="w-full md:w-9/12 mx-auto flex flex-wrap justify-center overflow-y-auto pt-4">
        {products.map(product => productCard(product))}
      </main>

      {/* <Footer cart={cart} addToCart={addToCart}/> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (productId: string) => dispatch(addToCart(productId))
  }
}

export default connect(null, mapDispatchToProps(CategoriesPage));
