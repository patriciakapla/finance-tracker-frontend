import type { ReactNode } from "react";

type FormContainerProps = {
  children: ReactNode;
};

function FormContainer({ children }: FormContainerProps) {
  return <div className="flex gap-3">{children}</div>;
}

export default FormContainer;
