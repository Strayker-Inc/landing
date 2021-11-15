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

const payOrderByNequi = async (phone: string, orderId: string, order: IOrder) => {
  const data = {
    orderId,
    order,
    phone
  };

  try {
    await api.post(`/orders/payment`, data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return error;
  }
};

const paymentStatus = async (paymentId: string) => {
  try {
    await api.get(`/orders/payment/status?paymentId=${paymentId}`);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return error;
  }
};

const exportedObject = {
  create,
  payOrderByNequi,
  paymentStatus,
};

export default exportedObject;
