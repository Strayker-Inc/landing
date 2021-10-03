import React, {  useState } from 'react';
import { IonChip, IonLabel } from '@ionic/react';
import { RouteComponentProps, useHistory, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/searchBar";
import ProductRow, { Params } from "../components/ProductRow";
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

interface IProps {
  products: IProduct[],
}
const CategoriesPage: React.FC<IProps & RouteComponentProps<any>> = props => {
  const { category } = useParams<Params>();
  const history = useHistory();

  // const [products, setProducts] = useState<IProduct[]>(products_list)
  const [cart, setCart] = useState<IProduct[]>([]);

  // const addToCart = (product: IProduct) => {
  //   addToCart()
  //   setCart(cart => [...cart, product]);
  // }

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
        {props.products.map(product => <ProductRow key={product.id} product={product}/>)}
      </main>

      {/* <Footer cart={cart} addToCart={addToCart}/> */}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    products: state.shop.products,
    // addToCart: (productId: string) => dispatch(addToCart(productId))
  }
}



export default connect(mapStateToProps)(CategoriesPage);
// export default CategoriesPage;
