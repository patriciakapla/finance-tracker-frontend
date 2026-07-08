import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";
import { userQueryKeys } from "../constants/queryKeys";

export const useUserQuery = () => {
  return useQuery({
    queryKey: userQueryKeys.all(),
    queryFn: getUsers,
  });
};
