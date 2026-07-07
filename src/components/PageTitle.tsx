import type { ReactNode } from "react";

type PageTitleProps = {
  children: ReactNode;
};

function PageTitle({ children }: PageTitleProps) {
  return <h2 className="text-xl mb-2">{children}</h2>;
}

export default PageTitle;
