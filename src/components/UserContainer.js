import React from "react";
import { connect } from "react-redux";
import User from "./User";
import { handleLogin, createUser } from "../actions/UserActions";

class UserContainer extends React.PureComponent {
    render() {
        return (
            <User {...this.props}/>
        );
    }
}

const mapStateToProps = store => ({
    user: store.user,
});

const mapDispatchToProps = dispatch => ({
    handleLogin: userName => dispatch(handleLogin(userName)),
    createUser: userName => dispatch(createUser(userName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserContainer);
