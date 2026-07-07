import type { ReactNode } from "react";

type TableProps = {
  children: ReactNode;
};

function Table({ children }: TableProps) {
  return <table className="w-full table-auto">{children}</table>;
}

export default Table;
