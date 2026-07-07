import type { ReactNode } from "react";

type TableDataProps = {
  children: ReactNode;
};

function TableData({ children }: TableDataProps) {
  return (
    <td className=" pr-2 py-1 border border-gray-300 px-1 text-left">
      <div className="flex justify-between">{children}</div>
    </td>
  );
}

export default TableData;
