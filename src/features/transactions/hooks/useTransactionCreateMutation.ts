import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../config/queryClient";
import { createTransaction } from "../api/createTransacion";
import { transactionsQueryKeys } from "../constants/queryKeys";

export const useTransactionCreateMutation = () => {
  return useMutation({
    mutationFn: createTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: transactionsQueryKeys.all(),
      });
    },
  });
};
