import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";

export const routes = [
  {
    ...HomePage,
    path: "/",
    exact: true
  },
  {
    ...UsersPage,
    path: "/users"
  }
];
