import TransactionsTable from "../features/transactions/components/TransactionsTable";
import DataView from "../components/DataView";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import FormContainer from "../components/FormContainer";
import { useState, type ReactNode } from "react";

function Transactions() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDialog = () => {
    setIsOpen(!isOpen);
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
          <form className="flex flex-col gap-4">
            <FormContainer>
              <Label>Usuários:</Label>
              <select name="users" id="users">
                <option>Selecione</option>
              </select>
            </FormContainer>
            <FormContainer>
              <Label>Descrição:</Label>
              <TextBox />
            </FormContainer>
            <FormContainer>
              <Label>Valor:</Label>
              <TextBox />
            </FormContainer>
            <FormContainer>
              <Label>Tipo:</Label>
              <select name="type" id="type">
                <option>Selecione</option>
                <option>Receita</option>
                <option>Despesa</option>
              </select>
            </FormContainer>
          </form>
          <div className="flex gap-4 justify-around">
            <Button onClick={handleToggleDialog}>Confirmar</Button>
            <Button onClick={handleToggleDialog}>Cancelar</Button>
          </div>
        </Dialog>
      </DataView>
    </>
  );
}

export default Transactions;

function TextBox() {
  return <input type="text" className="border flex-2 w-64 rounded" />;
}

type LabelProps = {
  children: ReactNode;
};

function Label({ children }: LabelProps) {
  return <label className="flex-1">{children}</label>;
}
