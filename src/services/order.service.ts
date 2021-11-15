import api from '../config/api';
import { IOrder } from '../interfaces/Order.interface';

const create = async (data: IOrder) => {
  try {
    await api.post(`/orders/new`, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return error;
  }
};

const exportedObject = {
  create,
};

export default exportedObject;
