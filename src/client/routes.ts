import { Home } from "./components/Home";
import { UsersList } from "./components/UsersList";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/users",
    component: UsersList
  }
];
