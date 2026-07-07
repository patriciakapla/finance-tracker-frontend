import type { ReactNode } from "react";

function TotalView() {
  return (
    <div className="flex flex-col gap-1 border rounded w-fit px-2 py-2">
      <p className="font-bold">TOTAL</p>
      <TotalLine title="Total receitas:" result="$119238" />
      <TotalLine title="Total despesas:" result="$34323" />
      <TotalLine title="Saldo total:" result="$234234" />
    </div>
  );
}

export default TotalView;

type TotalLineProps = {
  title: ReactNode;
  result: ReactNode;
};

function TotalLine({ title, result }: TotalLineProps) {
  return (
    <div className="flex gap-8 justify-between ">
      <span>{title}</span>
      <p className="text-right font-bold">{result}</p>
    </div>
  );
}
