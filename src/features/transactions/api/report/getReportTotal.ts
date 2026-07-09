import axios from "axios";
import type { SingleResponse } from "../../../../types/types";
import { API_URL } from "../../../../config/environment";
import type { ReportTotal } from "../../types/transactions.types";

export async function getReportTotal() {
  const { data: singleResponse } = await axios.get<SingleResponse<ReportTotal>>(
    `${API_URL}/transactions/report/total`,
  );

  return singleResponse;
}
