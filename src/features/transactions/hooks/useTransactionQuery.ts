import { useQuery } from "@tanstack/react-query";
import { transactionsQueryKeys } from "../constants/queryKeys";
import { getTransactions } from "../api/getTransactions";

export const useTransactionQuery = () => {
  return useQuery({
    queryKey: transactionsQueryKeys.all(),
    queryFn: getTransactions,
  });
};
