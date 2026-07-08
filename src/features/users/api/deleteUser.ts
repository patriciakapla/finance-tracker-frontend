import axios from "axios";
import { API_URL } from "../../../config/environment";

export const deleteUser = async (id: string) => {
  return await axios.delete(`${API_URL}/users/${id}`, { data: { id } });
};
