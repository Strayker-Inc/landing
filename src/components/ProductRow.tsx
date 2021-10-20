import { useHistory } from "react-router-dom";
import { addToCart } from "../redux/shopping/shoppingActions";
import { connect } from "react-redux";
import { IProduct } from "../interfaces/Product.interface";
import NumberFormat from 'react-number-format';
import { ICartProduct } from "../interfaces/Order.interface";
import { IonIcon } from "@ionic/react";
import { cartSharp } from "ionicons/icons";


interface IProps {
  product: IProduct,
  addToCart: any
}

export type Params = {
  category: string
}

const ProductRow: React.FC<IProps> = props => {
  const history = useHistory();

  const goToProduct = (productId: string) => {
    history.push(`producto/${productId}`)
  };

  const addProduct = () => {
    const productToAdd:ICartProduct = {
      ...props.product,
      qty: 1,
      presentationSelected: props.product.presentations[0]
    };
    props.addToCart(productToAdd)
  }

  return (
    <div className="flex bg-white shadow-lg rounded-xl font-inter">
      <div className="w-2/5 bg-cover bg-center rounded-xl cursor-pointer"
        style={{backgroundImage: `url(${props.product.images[0]})`}}
        onClick={() => goToProduct(props.product.id)}
      ></div>
      <div className="w-3/5 p-4">
        <p className="text-gray-800 font-bold leading-none text-xl md:text-2xl cursor-pointer"
          onClick={() => goToProduct(props.product.id)}
        >{props.product.name}</p>
        <p className="mt-2 text-gray-600 text-sm leading-tight cursor-pointer"  onClick={() => goToProduct(props.product.id)}>
          { props.product.description.length > 100
            ? `${props.product.description.slice(0, 100)}...`
            : props.product.description
          }
        </p>
        {/* <div className="flex item-center mt-2">
          <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
          </svg>
        </div> */}
        <div className="flex flex-wrap item-center justify-between mt-3">
          <span className="flex items-center">
            <p className="text-gray-700 font-bold text-xl cursor-pointer"
              onClick={() => goToProduct(props.product.id)}
            >
              <NumberFormat value={props.product.presentations[0].cost} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
            </p>
            <p className="text-gray-500">{`x${props.product.presentations[0].units}`}</p>
          </span>
          <button onClick={() => addProduct()}
            className="flex items-center px-3 py-2 bg-green text-white text-xs font-bold uppercase rounded"
          >
            Agregar <IonIcon className="text-xl" icon={cartSharp} />
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (product: ICartProduct) => dispatch(addToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(ProductRow);
