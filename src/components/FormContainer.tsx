import type { ReactNode } from "react";

type FormContainerProps = {
  children: ReactNode;
};

function FormContainer({ children }: FormContainerProps) {
  return (
    <div className="flex gap-3 text-sm items-start justify-between">
      {children}
    </div>
  );
}

export default FormContainer;
