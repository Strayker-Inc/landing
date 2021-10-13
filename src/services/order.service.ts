import { addDoc, collection } from 'firebase/firestore';
import api from '../config/api';
import { db } from '../config/firebase';
import { IOrder } from '../interfaces/Order.interface';

const create = async (data: IOrder) => {
  try {
    // Create info firestore DB
    await addDoc(collection(db, "orders"), {...data});
    // Notify order by email
    // const response = await api.post(`slinqer/order/notify`, data);
    // return response.data;
  } catch (error) {
    return error;
  }
};

const exportedObject = {
  create,
};

export default exportedObject;
