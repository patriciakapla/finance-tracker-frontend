import { useQuery } from "@tanstack/react-query";
import { transactionsQueryKeys } from "../constants/queryKeys";
import { getTransactionsReport } from "../api/report/getTransactionsReport";

export const useTransactionReportQuery = () => {
  return useQuery({
    queryKey: transactionsQueryKeys.report(),
    queryFn: getTransactionsReport,
  });
};
