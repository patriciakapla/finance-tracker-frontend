import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import Header from "./components/Header";
import Transactions from "./routes/Transactions";
import Users from "./routes/Users";
import Report from "./routes/Report";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  ),
});

const transactionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Transactions,
});

const reportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "report",
  component: Report,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "users",
  component: Users,
});

const routeTree = rootRoute.addChildren([
  usersRoute,
  transactionsRoute,
  reportRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
