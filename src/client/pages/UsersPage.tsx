import * as React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { User, ApplicationState } from "../types";
import { Store } from "redux";

type ReduxStoreProps = {
  users: ApplicationState["users"];
};

type DispatchProps = {
  fetchUsers: () => void;
};

type Props = ReduxStoreProps & DispatchProps;

class _UsersPage extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        Here's a big list of users:
        <ul>
          {this.props.users.map((user: User) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state: ApplicationState) {
  return { users: state.users };
}

function loadData(store: Store<ApplicationState>) {
  return store.dispatch(fetchUsers());
}

const UsersPage = connect(
  mapStateToProps,
  { fetchUsers }
)(_UsersPage);

export default {
  loadData,
  component: UsersPage
};
