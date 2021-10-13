import { useHistory } from "react-router-dom";
import { adjustQty, removeFromCart } from "../redux/shopping/shoppingActions";
import { connect } from "react-redux";
import { IonChip, IonIcon } from "@ionic/react";
import { addCircleOutline, removeCircleOutline, trashOutline } from "ionicons/icons";
import NumberFormat from 'react-number-format';
import { ICartProduct } from "../interfaces/Order.interface";


interface IProps {
  item: ICartProduct
  adjustQty: (product: ICartProduct, qty:number, action: "remove" | "add") => any,
  removeFromCart: (productId: string, presentationId: string) => any
}

const CartProductRow: React.FC<IProps> = props => {
  const history = useHistory();

  return (
    <div className="block mt-4 mx-4 flex h-40 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="m-3 rounded-lg w-1/3 bg-cover bg-center cursor-pointer"
        onClick={() => history.push(`/tienda/producto/${props.item.id}`)}
        style={{backgroundImage: `url(${props.item.images[0]})`}}
      ></div>
      <div className="w-2/3 p-4 relative">
        <div className="flex justify-between">
          <span className="text-gray-700 w-4/6 font-bold text-xl md:text-2xl">{props.item.name}</span>
          <div className="cursor-pointer"
            onClick={() => props.removeFromCart(props.item.id, props.item.presentationSelected.id)}
          >
            <IonIcon className="text-3xl text-gray-600" icon={trashOutline} />
          </div>
        </div>

        <div>
          <IonChip>
            <label>{props.item.presentationSelected.presentation}</label>
          </IonChip>
        </div>

        <div className="flex item-center justify-between">
          <div className="flex">
            <p className="text-2xl text-gray-700 font-bold">
              <NumberFormat value={props.item.presentationSelected.cost} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
            </p>
            <p className="self-end text-xl text-gray-600">{`x${props.item.presentationSelected.units}`}</p>
          </div>
          <div className="flex items-center">
            <button className="text-gray-700"
              onClick={() => props.adjustQty(props.item, props.item.qty - 1, 'remove')}
              disabled={props.item.qty === 1 ? true : false}
            >
              <IonIcon className="text-3xl" icon={removeCircleOutline} />
            </button>
            <span className="mx-1 text-2xl font-bold">{props.item.qty}</span>
            <button className="text-gray-700 disabled:opacity-50" onClick={() => props.adjustQty(props.item, props.item.qty + 1 , 'add')}>
              <IonIcon className="text-3xl" icon={addCircleOutline} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    adjustQty: (product: ICartProduct, qty: number, action: "remove"|"add") => dispatch(adjustQty(product, qty, action)),
    removeFromCart: (productId: string, presentationId: string) => dispatch(removeFromCart(productId, presentationId))
  }
}

export default connect(null, mapDispatchToProps)(CartProductRow);
