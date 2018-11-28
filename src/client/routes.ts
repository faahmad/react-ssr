import { Home } from "./components/Home";
import { UsersList, loadData } from "./components/UsersList";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    loadData,
    path: "/users",
    component: UsersList
  }
];
