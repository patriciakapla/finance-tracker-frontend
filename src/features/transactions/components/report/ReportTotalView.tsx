import type { ReactNode } from "react";
import { useTransactionReportTotalQuery } from "../../hooks/useTransactionReportTotalQuery";
import { formatNumber } from "../../../../utils/formatNumber";

function ReportTotalView() {
  const { data: totals, isLoading } = useTransactionReportTotalQuery();
  if (isLoading) {
    return <span>Carregando...</span>;
  }

  return (
    <div className="flex flex-col gap-1 border rounded w-fit px-2 py-2">
      <p className="font-bold">TOTAL</p>
      <TotalLineDiv>
        <span>Total receitas:</span>
        <Total>{formatNumber(totals?.data.totalRevenue)}</Total>
      </TotalLineDiv>
      <TotalLineDiv>
        <span>Total despesas:</span>
        <Total>{formatNumber(totals?.data.totalExpenses)}</Total>
      </TotalLineDiv>
      <TotalLineDiv>
        <span>Saldo total:</span>
        <Total>{formatNumber(totals?.data.totalBalance)}</Total>
      </TotalLineDiv>
    </div>
  );
}

export default ReportTotalView;

type TotalLineDivProps = {
  children: ReactNode;
};

function TotalLineDiv({ children }: TotalLineDivProps) {
  return <div className="flex gap-8 justify-between "> {children} </div>;
}

type TotalProps = {
  children: ReactNode;
};

function Total({ children }: TotalProps) {
  return <p className="text-right font-bold">{children}</p>;
}
