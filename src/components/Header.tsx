import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

function Header() {
  return (
    <nav className="flex justify-between items-center mx-10 my-3">
      <p className="text-xl font-semibold">CONTROLE DE GASTOS</p>
      <div className="flex space-x-5 text-sm justify-center">
        <LinkComponent route="/">Transações</LinkComponent>

        <LinkComponent route="/users">Usuários</LinkComponent>

        <LinkComponent route="/report">Relatório</LinkComponent>
      </div>
    </nav>
  );
}

export default Header;

type LinkComponentProps = {
  route: string;
  children: ReactNode;
};

function LinkComponent({ children, route }: LinkComponentProps) {
  const linkClassName = "";

  return (
    <Link
      to={route}
      className={linkClassName}
      activeProps={{ className: "underline" }}
    >
      {children}
    </Link>
  );
}
