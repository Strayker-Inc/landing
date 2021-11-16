import axios, { AxiosError } from 'axios';
import api from '../config/api';
import { IOrder } from '../interfaces/Order.interface';

const create = async (data: IOrder) => {
  interface IResponse {
    orderId: string,
  }
  try {
    const response = await api.post<IResponse>(`/orders/new`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const payOrderByNequi = async (phone: string, orderId: string, order: IOrder) => {
  interface IResponse {
    transactionId: string,
    description: string,
  }
  const data = {
    orderId,
    // TODO: change amount to shipment amount property
    amount: order.total,
    phone
  };

  try {
    const response = await api.post<IResponse>(`/orders/payment`, data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    throw error;
  }
};

const paymentStatus = async (paymentId: string, orderId: string) => {
  interface IResponse {
    description: string;
  }
  try {
    const response = await api.get<IResponse>(`/orders/payment/status?paymentId=${paymentId}&orderId=${orderId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log (error.response)
      if (error.response?.status === 400) {
        return error.response.data
      }
    } else {
      throw new Error('Error in payment status');
    }
  }
};

const exportedObject = {
  create,
  payOrderByNequi,
  paymentStatus,
};

export default exportedObject;
