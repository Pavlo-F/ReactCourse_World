import React from "react";
import { connect } from "react-redux";
import User from "./User";
import { handleLogin, createWorld, worldTick } from "../actions/UserActions";

class UserContainer extends React.PureComponent {
    render() {
        return (
            <User {...this.props}/>
        );
    }
}

const mapStateToProps = store => ({
    user: store.user,
    world: store.world,
});

const mapDispatchToProps = dispatch => ({
    handleLogin: userName => dispatch(handleLogin(userName)),
    createWorld: (userName, map, events) => dispatch(createWorld(userName, map, events)),
    worldTick: props => dispatch(worldTick(props)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserContainer);
