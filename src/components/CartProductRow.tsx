import { useHistory } from "react-router-dom";
import { adjustQty } from "../redux/shopping/shoppingActions";
import { connect } from "react-redux";
import { IonIcon } from "@ionic/react";
import { addCircleOutline, removeCircleOutline, trashOutline } from "ionicons/icons";
import { ICart } from "../redux/shopping/shoppingReducer";

interface IProps {
  item: ICart
  adjustQty: (product: ICart, qty:number, action: "remove" | "add") => any,
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
        <span className="text-gray-700 font-bold text-xl md:text-2xl">{props.item.name}</span>
        <div className="absolute inset-y-4 right-0 mr-4 cursor-pointer">
          <IonIcon className="text-3xl text-gray-600" icon={trashOutline} />
        </div>
        <div className="flex flex-wrap absolute inset-x-0 bottom-0 item-center justify-between mb-6 mx-4">
          <p className="text-gray-900 font-bold text-2xl">{`$${props.item.cost}`}</p>
          <div className="flex items-center">
            <button className="text-gray-700"
              onClick={() => props.adjustQty(props.item, props.item.qty - 1, 'remove')}
              disabled={props.item.qty === 1 ? true : false}
            >
              <IonIcon className="text-3xl" icon={removeCircleOutline} />
            </button>
            <span className="mx-4 text-2xl font-bold">{props.item.qty}</span>
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
    adjustQty: (productId: ICart, qty: number, action: "remove"|"add") => dispatch(adjustQty(productId, qty, action))
  }
}

export default connect(null, mapDispatchToProps)(CartProductRow);
