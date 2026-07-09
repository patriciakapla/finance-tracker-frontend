import axios from "axios";
import type { PaginatedResponse } from "../../../../types/types";
import { API_URL } from "../../../../config/environment";
import type { TransactionReport } from "../../types/transactions.types";

export async function getTransactionsReport() {
  const { data: paginatedResponse } = await axios.get<
    PaginatedResponse<TransactionReport>
  >(`${API_URL}/transactions/report`);

  return paginatedResponse;
}
