import type { ReactNode } from "react";

type DataViewProps = {
  children: ReactNode;
};

function DataView({ children }: DataViewProps) {
  return (
    <div className="flex flex-col justify-center p-10 gap-3">{children}</div>
  );
}

export default DataView;
