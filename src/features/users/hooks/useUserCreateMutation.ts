import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/createUser";
import { queryClient } from "../../../config/queryCliente";
import { userQueryKeys } from "../constants/queryKeys";

export const useUserCreateMutation = () => {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.all(),
      });
    },
  });
};
