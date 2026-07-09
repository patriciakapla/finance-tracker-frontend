import { z } from "zod";
import type { User } from "../../../users/types/users.types";

export const createTransactionFormSchema = (users: User[]) =>
  // schema dinâmico: função que recebe lista de usuários carregada pela API para poder
  // validar sua idade ao adicionar uma transação de tipo receita.
  z
    .object({
      userId: z.string().min(1),
      description: z.string().min(1),
      amount: z
        .string()
        .min(1, " ")
        .refine((value) => !!value && !isNaN(Number(value)), "Número inválido")
        .refine((value) => !!value && Number(value) >= 0, "Número inválido"),
      type: z.string().min(1, " "),
    })
    .refine(
      (data) => {
        if (data.type !== "revenue") {
          return true;
        }

        const user = users.find((user) => user.id === data.userId);

        if (!user) {
          return true;
        }

        const birthDate = new Date(user.birthDate);
        const today = new Date();

        const adultDate = new Date(
          today.getFullYear() - 18,
          today.getMonth(),
          today.getDate(),
        );

        return birthDate <= adultDate;
      },
      {
        path: ["type"],
        message: "Menor de idade não pode ter receita",
      },
    );

export type TransactionFormData = z.infer<
  ReturnType<typeof createTransactionFormSchema>
>;
