import { useHistory, useParams } from "react-router-dom";
import { IProduct } from "../pages/Categories";
import { addToCart } from "../redux/shopping/shoppingActions";
import { connect } from "react-redux";
import { useEffect } from "react";

interface IProps {
  product: IProduct,
  addToCart: any
}

export type Params = {
  category: string
}

const ProductRow: React.FC<IProps> = props => {
  const history = useHistory();
  const { category } = useParams<Params>();

  const goToProduct = (productId: string) => {
    history.push(`producto/${productId.toString()}`)
  };

  return (
    <div className="m-4 flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/3 bg-cover bg-center"
        style={{backgroundImage: `url(${props.product.images[0]})`}}
        onClick={() => goToProduct(props.product.id.toString())}
      ></div>
      <div className="w-2/3 p-4">
        <span className="text-gray-800 font-bold text-2xl"
          onClick={() => goToProduct(props.product.id.toString())}
        >{props.product.name}</span>
        <p className="mt-2 text-gray-600 text-sm"  onClick={() => goToProduct(props.product.id.toString())}>
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
          <p className="text-gray-700 font-bold text-xl"
            onClick={() => goToProduct(props.product.id.toString())}
          >{`$${props.product.cost}`}</p>
          <button onClick={() => props.addToCart(props.product.id.toString())}
            className="px-3 py-2 bg-green text-white text-xs font-bold uppercase rounded"
          >Agregar al carro
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (productId: string) => dispatch(addToCart(productId))
  }
}

export default connect(null, mapDispatchToProps)(ProductRow);
