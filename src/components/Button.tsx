import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="p-2 bg-blue-100 border rounded max-w-min flex justify-around "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
