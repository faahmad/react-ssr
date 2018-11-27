import { Action, ApplicationState } from "./../types/index";
import { FETCH_USERS } from "../actions";

type UserState = ApplicationState["users"];

export function usersReducer(state: UserState = [], action: Action): UserState {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
}
