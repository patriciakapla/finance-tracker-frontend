import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../config/queryClient";
import { userQueryKeys } from "../constants/queryKeys";
import { deleteUser } from "../api/deleteUser";

export const useUserDeleteMutation = () => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.all(),
      });
    },
  });
};
