import IContact from "../../../interfaces/contact";
import { Enviroment } from "../../../config/enviroments";
import axios from "axios";

export class HomeService {
  
  static async requestNewContact (data: IContact) {
    /* Initlize the Envoriment Class to get url */
    let enviroment = new Enviroment ();
    /* get url from envoriment service */
    const BASE_URL = await enviroment.getUrl ();
    /* Request config*/
    let config = { 
      headers: {
        'Content-Type': 'application/json',
      },
    }
    //bUild the api
    const url= `${BASE_URL}/landing/contact`;
    //fetch the api
    return await axios.post<any> (url, data, config);
  }
}