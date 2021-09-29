import { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IProduct } from "./Categories";

const ProductPage: React.FC<RouteComponentProps<any>> = props => {
  // const history = useHistory();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    setProduct(
      {
        name: "Producto 1",
        cost: 10000,
        id: 1,
        image: 'https://images.unsplash.com/photo-1617658946735-2611514fedc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=716&q=80',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia'
      },
    )
  },[]);

  return (
    <div className="font-inter bg-black">
      {product &&
        <div className="relaive md:flex h-screen">
           <div className="absolute h-4/6 w-full bg-cover"
              style={{backgroundImage: `url(${product.image})`}}
            ></div>
          {/* <div className="absolute h-4/6 w-full" src={product.image} alt={product.name}/> */}
          <div className="absolute h-3/6 w-full inset-x-0 bottom-10">
            {/* <div className="bg-black">
              Hola
            </div> */}
          </div>
          <div className="p-10 absolute h-3/6 w-full inset-x-0 bottom-0 bg-white rounded-t-3xl">
            <span className="text-3xl font-bold text-gray-800">{product.name}</span>
          </div>
        </div>
      }
    </div>
  );
};

export default withRouter(ProductPage);
