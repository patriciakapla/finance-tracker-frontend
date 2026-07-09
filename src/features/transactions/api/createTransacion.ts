import axios from "axios";
import { API_URL } from "../../../config/environment";

type CreateTransactionProps = {
  userId: string;
  description: string;
  amount: string;
  type: string;
};

export const createTransaction = async (data: CreateTransactionProps) => {
  return await axios.post(`${API_URL}/transactions`, data);
};
