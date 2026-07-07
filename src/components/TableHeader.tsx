import type { ReactNode } from "react";

type TableHeaderProps = {
  children: ReactNode;
  className?: string;
};

function TableHeader({ children, className = "" }: TableHeaderProps) {
  return (
    <th
      className={`uppercase border border-gray-300 p-1 text-left text-sm ${className}`}
    >
      {children}
    </th>
  );
}

export default TableHeader;
