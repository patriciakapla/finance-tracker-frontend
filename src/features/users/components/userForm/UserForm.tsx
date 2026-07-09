import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../../components/Button";
import FormContainer from "../../../../components/FormContainer";
import { useUserCreateMutation } from "../../hooks/useUserCreateMutation";
import { userFormSchema, type UserFormData } from "./UserForm.schema";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../../../components/ErrorMessage";

type UserFormProps = {
  onClose: () => void;
};

export const UserForm = ({ onClose }: UserFormProps) => {
  const { mutate } = useUserCreateMutation();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(userFormSchema),
    mode: "onChange",
  });

  const handleSave = (data: UserFormData) => {
    mutate(
      {
        name: data.name,
        birthDate: data.birthDate,
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
          <label>Nome:</label>
          <div className="flex flex-col">
            <input
              {...register("name")}
              type="text"
              className="border rounded p1"
            />
            <ErrorMessage>{errors["name"]?.message}</ErrorMessage>
          </div>
        </div>
        <FormContainer>
          <div className="flex gap-3 text-sm items-start justify-between">
            <label>Data de nascimento:</label>
            <div className="flex flex-col">
              <input
                type="date"
                {...register("birthDate")}
                className="border rounded p1 self-end"
              />
              <ErrorMessage>{errors["birthDate"]?.message}</ErrorMessage>
            </div>
          </div>
        </FormContainer>
      </div>
      <div className="flex gap-4 justify-end items-center mt-4">
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
