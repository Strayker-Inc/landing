import React from 'react';
import { RouteComponentProps, useHistory, withRouter  } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/searchBar";
import IPage from "../../interfaces/page";
import { IProduct } from '../categories/Categories';



export const categories = [
  {
    name: "Belleza",
    code: "belleza",
    description: "El mejor balance con la naturaleza",
    cardColor: "#DC9E82",
    emoji: "💅"
  },
  {
    name: "Cuidado personal",
    code: "cuidado_personal",
    description: "El mejor balance con la naturaleza",
    cardColor: "#049C97",
    emoji: "🚿"
  },
  {
    name: "Hogar",
    code: "hogar",
    description: "Tu casa 100% ecológica",
    cardColor: "#2B2F34",
    emoji: "🏡"
  }
]

const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const history = useHistory();
  return (
    <div className="flex flex-col font-inter bg-gray-100">
      <Header showBack={false}/>

      <main className="flex-1 overflow-y-auto flex justify-center flex-wrap pt-4">
        {
          categories.map(item => (
            <div onClick={() => history.push(`/home/${item.code}`)}
              className="flex items-center relative mx-4 w-full mb-4 md:w-4/12 h-38 md:h-48 text-white shadow-lg rounded-xl"
              style={{backgroundColor: item.cardColor}}
            >
              <div className="py-8 pl-4 md:py-8 md:pl-8">
                <p className="text-md md:text-lg font-semibold">{item.description}</p>
                <span className="text-4xl md:text-5xl font-bold">{item.name}</span>
              </div>
              <div className="text-6xl mx-auto md:pr-4">
                <span>{item.emoji}</span>
              </div>
            </div>
          ))
        }
      </main>

      {/* <Footer cart={props.cart} addToCart={props.addToCart}/> */}
    </div>
  );
};

export default withRouter(HomePage);
