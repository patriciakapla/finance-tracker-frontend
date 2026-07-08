import type { PaginatedResponse } from "../../../types/types";
import type { User } from "../types/users.types";

const formatData = (data?: PaginatedResponse<User>) => {
  return data?.data.map((user) => {
    const birthDate = new Date(user.birthDate);

    return {
      id: user.id,
      name: user.name,
      birthDate: new Intl.DateTimeFormat("pt-BR").format(birthDate),
    };
  });
};

export default formatData;
