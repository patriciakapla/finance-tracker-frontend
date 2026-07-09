import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { ReactNode } from "react";
import Button from "../../../../components/Button";
import { useUserQuery } from "../../../users/hooks/useUserQuery";
import { useTransactionCreateMutation } from "../../hooks/useTransactionCreateMutation";
import {
  createTransactionFormSchema,
  type TransactionFormData,
} from "./TransactionForm.schema";
import { ErrorMessage } from "../../../../components/ErrorMessage";

type TransactionFormProps = {
  onClose: () => void;
};

export const TransactionForm = ({ onClose }: TransactionFormProps) => {
  const { mutate } = useTransactionCreateMutation();

  const { data: users } = useUserQuery();

  const schema = createTransactionFormSchema(users?.data ?? []);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const handleSave = (data: TransactionFormData) => {
    mutate(
      {
        userId: data.userId,
        description: data.description,
        amount: data.amount,
        type: data.type,
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 text-sm items-start justify-between">
          <Label>Usuários:</Label>
          <div className="flex gap-1">
            <select {...register("userId")} className="border p-1 w-64">
              <option value="">Selecione</option>
              {users?.data.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <span className="text-right text-xs text-red-500">*</span>
          </div>
        </div>
        <div className="flex gap-3 text-sm items-start justify-between">
          <Label>Descrição:</Label>
          <div className="flex gap-1">
            <input
              {...register("description")}
              type="text"
              className="border p-1 w-64 rounded"
            />
            <span className="text-right text-xs text-red-500">*</span>
          </div>
        </div>
        <div className="flex gap-3 text-sm items-start justify-between">
          <Label>Valor:</Label>
          <div className="flex flex-col">
            <div className="flex gap-1">
              <input
                {...register("amount")}
                type="text"
                className="border p-1 w-64 flex-2 rounded"
              />
              <span className="text-right text-xs text-red-500">*</span>
            </div>
            <span>
              <ErrorMessage>{errors["amount"]?.message}</ErrorMessage>
            </span>
          </div>
        </div>
        <div className="flex gap-3 text-sm items-start justify-between">
          <Label>Tipo:</Label>
          <div className="flex flex-col">
            <div className="flex gap-1">
              <select {...register("type")} className="border p-1 w-64 rounded">
                <option value="">Selecione</option>
                <option value="revenue">Receita</option>
                <option value="expense">Despesa</option>
              </select>
              <span className="text-right text-xs text-red-500">*</span>
            </div>
            <ErrorMessage>{errors["type"]?.message}</ErrorMessage>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-end mt-4">
        <Button onClick={onClose} variant="cancel">
          Cancelar
        </Button>
        <Button type="submit" variant="save" isDisabled={!isValid}>
          Confirmar
        </Button>
      </div>
    </form>
  );
};

type LabelProps = {
  children: ReactNode;
};

function Label({ children }: LabelProps) {
  return <label className="flex-1">{children}</label>;
}
