import TransactionsTable from "../features/transactions/components/TransactionsTable";
import DataView from "../components/DataView";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import FormContainer from "../components/FormContainer";
import { useState, type ReactNode } from "react";
import { useUserQuery } from "../features/users/hooks/useUserQuery";
import { useTransactionCreateMutation } from "../features/transactions/hooks/useTransactionCreateMutation";

function Transactions() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const { data: users } = useUserQuery();

  const { mutate } = useTransactionCreateMutation();

  const handleSave = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userId = formData.get("userId");
    // const userName = formData.get("userName");
    const description = formData.get("description");
    const amount = formData.get("amount");
    const normalizedAmount = String(amount).replace(",", ".");
    const type = formData.get("type");

    mutate(
      {
        userId: String(userId),
        // userName: String(userName),
        description: String(description),
        amount: Number(normalizedAmount),
        type: String(type),
      },
      {
        onSuccess: () => {
          handleToggleDialog();
        },
      },
    );
  };

  return (
    <>
      <DataView>
        <PageTitle>TRANSAÇÕES</PageTitle>
        <div className="ml-auto">
          <Button onClick={handleToggleDialog}>Adicionar</Button>
        </div>
        <TransactionsTable />
        <Dialog isOpen={isOpen}>
          <form onSubmit={handleSave}>
            <div className="flex flex-col gap-4">
              <FormContainer>
                <Label>Usuários:</Label>
                <select name="userId">
                  <option value="">Selecione</option>
                  {users?.data.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </FormContainer>
              <FormContainer>
                <Label>Descrição:</Label>
                <TextBox name="description" />
              </FormContainer>
              <FormContainer>
                <Label>Valor:</Label>
                <TextBox name="amount" />
              </FormContainer>
              <FormContainer>
                <Label>Tipo:</Label>
                <select name="type" id="type">
                  <option>Selecione</option>
                  <option value="revenue">Receita</option>
                  <option value="expense">Despesa</option>
                </select>
              </FormContainer>
            </div>
            <div className="flex gap-4 justify-end mt-4">
              <Button onClick={handleToggleDialog} variant="cancel">
                Cancelar
              </Button>
              <Button type="submit" variant="save">
                Confirmar
              </Button>
            </div>
          </form>
          <div className="flex gap-4 justify-around"></div>
        </Dialog>
      </DataView>
    </>
  );
}

export default Transactions;

type TextBoxProps = {
  name: string;
};

function TextBox({ name }: TextBoxProps) {
  return (
    <input
      type="text"
      className="border px-1 flex-2 w-64 rounded"
      name={name}
    />
  );
}

type LabelProps = {
  children: ReactNode;
};

function Label({ children }: LabelProps) {
  return <label className="flex-1">{children}</label>;
}
