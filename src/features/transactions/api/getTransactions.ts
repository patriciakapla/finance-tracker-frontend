import axios from "axios";
import type { PaginatedResponse } from "../../../types/types";
import { API_URL } from "../../../config/environment";
import type { Transaction } from "../types/transactions.types";

export async function getTransactions() {
  const { data: paginatedResponse } = await axios.get<
    PaginatedResponse<Transaction>
  >(`${API_URL}/transactions`);

  return paginatedResponse;
}
