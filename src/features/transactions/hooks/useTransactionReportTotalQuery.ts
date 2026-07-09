import { useQuery } from "@tanstack/react-query";
import { transactionsQueryKeys } from "../constants/queryKeys";
import { getReportTotal } from "../api/report/getReportTotal";

export const useTransactionReportTotalQuery = () => {
  return useQuery({
    queryKey: transactionsQueryKeys.total(),
    queryFn: getReportTotal,
  });
};
