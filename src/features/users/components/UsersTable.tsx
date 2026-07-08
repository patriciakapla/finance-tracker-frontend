import TableHeader from "../../../components/TableHeader";
import TableData from "../../../components/TableData";
import Table from "../../../components/Table";

import { useUserQuery } from "../hooks/useUserQuery";
import formatData from "../constants/formatUserData";

function UsersTable() {
  const { data, isLoading } = useUserQuery();

  const users = data ? formatData(data) : [];

  users?.sort((a, b) => a.name.localeCompare(b.name));

  if (isLoading) {
    return <span>Carregando...</span>;
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <TableHeader>Usuário</TableHeader>
            <TableHeader className="w-1/3">Nascimento</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <TableData>
                {user.name}
                <DeleteButton />
              </TableData>
              <TableData>{user.birthDate}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersTable;

function DeleteButton() {
  return (
    <div className="flex align-items mx-3">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </button>
    </div>
  );
}
