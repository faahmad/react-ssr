import * as React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { User, ApplicationState } from "../types";

type ReduxStoreProps = {
  users: ApplicationState["users"];
};

type DispatchProps = {
  fetchUsers: () => void;
};

type Props = ReduxStoreProps & DispatchProps;

class _UsersList extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user: User) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state: ApplicationState) {
  return { users: state.users };
}

export const UsersList = connect(
  mapStateToProps,
  { fetchUsers }
)(_UsersList);
