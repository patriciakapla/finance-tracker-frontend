import TransactionsTable from "../features/transactions/components/TransactionsTable";
import DataView from "../components/DataView";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import { useState } from "react";
import { TransactionForm } from "../features/transactions/components/transactionForm/TransactionForm";

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
          <TransactionForm onClose={handleToggleDialog} />
          <div className="flex gap-4 justify-around"></div>
        </Dialog>
      </DataView>
    </>
  );
}

export default Transactions;
