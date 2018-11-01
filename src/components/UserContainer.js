import React from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { handleLogin, createUser } from '../actions/UserActions';

class UserContainer extends React.Component {
  render() {
      const { user, handleLogin, createUser } = this.props;
    return (
            <User
            name={user.name}
            error={user.error}
            isFetching={user.isFetching}
            handleLogin={handleLogin}
            createUser={createUser}
        />
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      handleLogin: userName => dispatch(handleLogin(userName)),
      createUser: userName => dispatch(createUser(userName)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)
