export type User = {
  id: number;
  name: string;
};

export type Action = {
  type: string;
  payload: any; // TODO
};

export interface ApplicationState {
  readonly users: User[];
}
