import Button from "../components/Button";
import UsersTable from "../features/users/components/UsersTable";
import DataView from "../components/DataView";
import PageTitle from "../components/PageTitle";
import Dialog from "../components/Dialog";
import FormContainer from "../components/FormContainer";
import { useState } from "react";

function Users() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DataView>
      <PageTitle>USUÁRIOS</PageTitle>
      <div className="ml-auto">
        <Button onClick={handleToggleDialog}>Adicionar</Button>
      </div>
      <UsersTable />
      <Dialog isOpen={isOpen}>
        <form className="flex flex-col gap-4">
          <FormContainer>
            <label>Nome:</label>
            <input type="text" className="border rounded" />
          </FormContainer>
          <FormContainer>
            <label>Data de nascimento:</label>
            <input type="date" />
          </FormContainer>
        </form>
        <div className="flex gap-4 justify-around">
          <Button onClick={handleToggleDialog}>Confirmar</Button>
          <Button onClick={handleToggleDialog}>Cancelar</Button>
        </div>
      </Dialog>
    </DataView>
  );
}

export default Users;
