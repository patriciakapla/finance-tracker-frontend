import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: (props?: unknown) => void;
};

export default function Button({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className="p-2 bg-blue-100 border rounded max-w-min flex justify-around "
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
