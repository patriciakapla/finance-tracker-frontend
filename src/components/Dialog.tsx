import { type ReactNode } from "react";

type DialogProps = {
  children: ReactNode;
  isOpen: boolean;
};

export default function Dialog({ children, isOpen }: DialogProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex inset-0 justify-center items-center fixed bg-black/50 z-0">
      <div className="fixed flex flex-col gap-4 bg-white p-10 z-1">
        {children}
      </div>
    </div>
  );
}
