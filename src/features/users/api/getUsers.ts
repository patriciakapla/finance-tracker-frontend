import axios from "axios";
import type { PaginatedResponse } from "../../../types/types";
import type { User } from "../types/users.types";
import { API_URL } from "../../../config/environment";

export async function getUsers() {
  const { data: paginatedResponse } = await axios.get<PaginatedResponse<User>>(
    `${API_URL}/users`,
  );

  return paginatedResponse;
}
