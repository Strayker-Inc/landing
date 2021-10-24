import { useHistory } from "react-router-dom";
import { IProduct } from "../interfaces/Product.interface";
import NumberFormat from 'react-number-format';

interface IProps {
  product: IProduct,
}

export type Params = {
  category: string
}

const ProductRow: React.FC<IProps> = props => {
  const history = useHistory();

  const goToProduct = (productId: string) => {
    history.push(`producto/${productId}`)
  };

  return (
    <div className="flex h-48 bg-white shadow-lg rounded-xl font-inter cursor-pointer" onClick={() => goToProduct(props.product.id)}>
      <div className="w-2/5 m-2 bg-cover bg-center rounded-xl"
        style={{backgroundImage: `url(${props.product.images[0]})`}}
      ></div>
      <div className="w-3/5 p-4">
        <p className="text-gray-800 leading-none text-2xl"
        >{props.product.name}</p>
        {/* <div className="flex item-center mt-2">
          <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
          </svg>
        </div> */}
        <div className="flex flex-wrap item-center justify-between mt-3">
          <span className="flex items-center">
            <p className="text-gray-700 font-bold text-xl md:text-2xl">
              <NumberFormat value={props.product.presentations[0].cost} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
            </p>
            {
              props.product.presentations[0].units !== 1 &&
              <p className="text-gray-500">{`/${props.product.presentations[0].units} ud`}</p>
            }
          </span>
        </div>
      </div>
    </div>
  );
}


export default ProductRow;
