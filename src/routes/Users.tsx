import Button from "../components/Button";
import UsersTable from "../features/users/components/UsersTable";
import DataView from "../components/DataView";
import PageTitle from "../components/PageTitle";
import Dialog from "../components/Dialog";
import FormContainer from "../components/FormContainer";
import { useState } from "react";
import { useUserCreateMutation } from "../features/users/hooks/useUserCreateMutation";

function Users() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const { mutate } = useUserCreateMutation();

  const handleSave = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const birthDate = formData.get("birthDate");

    mutate(
      {
        name: String(name),
        birthDate: String(birthDate),
      },
      {
        onSuccess: () => {
          handleToggleDialog();
        },
      },
    );
  };

  return (
    <DataView>
      <PageTitle>USUÁRIOS</PageTitle>
      <div className="ml-auto">
        <Button onClick={handleToggleDialog}>Adicionar</Button>
      </div>
      <UsersTable />
      <Dialog isOpen={isOpen}>
        <form onSubmit={handleSave}>
          <div className="flex flex-col gap-4">
            <FormContainer>
              <label>Nome:</label>
              <input type="text" className="border rounded" name="name" />
            </FormContainer>
            <FormContainer>
              <label>Data de nascimento:</label>
              <input type="date" name="birthDate" />
            </FormContainer>
          </div>
          <div className="flex gap-4 justify-end items-center mt-4">
            <Button onClick={handleToggleDialog} variant="cancel">
              Cancelar
            </Button>
            <Button type="submit" variant="save">
              Confirmar
            </Button>
          </div>
        </form>
      </Dialog>
    </DataView>
  );
}

export default Users;
