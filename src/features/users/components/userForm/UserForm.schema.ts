import { z } from "zod";

export type UserFormData = z.infer<typeof userFormSchema>;

export const userFormSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  birthDate: z
    .string()
    .min(1)
    .refine((value) => {
      const currentDate = new Date();
      const userDate = new Date(value);
      return userDate.getTime() < currentDate.getTime();
    }, "Data inválida"),
});
