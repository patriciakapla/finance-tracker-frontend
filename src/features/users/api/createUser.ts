import axios from "axios";
import { API_URL } from "../../../config/environment";

type CreateUserProps = {
  name: string;
  birthDate: string;
};

export const createUser = async (data: CreateUserProps) => {
  return await axios.post(`${API_URL}/users`, data);
};
