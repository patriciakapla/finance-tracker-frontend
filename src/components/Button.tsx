import type { ReactNode } from "react";

const ButtonColors = {
  Default: "default",
  Cancel: "cancel",
  Save: "save",
} as const;

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: (props?: unknown) => void;
  variant?: "default" | "cancel" | "save";
  isDisabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = ButtonColors.Default,
  isDisabled = false,
}: ButtonProps) {
  const variantClass =
    variant === ButtonColors.Default
      ? "bg-blue-100"
      : variant === ButtonColors.Cancel
        ? "bg-red-300"
        : "bg-green-300";

  return (
    <button
      className={`py-1 px-2 border rounded max-w-min flex justify-around text-xs ${variantClass}`}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
