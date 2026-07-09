import Button from "../components/Button";
import UsersTable from "../features/users/components/UsersTable";
import DataView from "../components/DataView";
import PageTitle from "../components/PageTitle";
import Dialog from "../components/Dialog";
import { useState } from "react";
import { UserForm } from "../features/users/components/userForm/UserForm";

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
        <UserForm onClose={handleToggleDialog} />
      </Dialog>
    </DataView>
  );
}

export default Users;
