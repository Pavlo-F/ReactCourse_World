import React from "react";
import { connect } from "react-redux";
import WorldEvent from "./WorldEvent";
import { getTemperature, getTimeOfday } from "../actions/WorldActions";

class WorldEventContainer extends React.PureComponent {
    render() {
        return (
            <WorldEvent {...this.props}/>
        );
    }
}

const mapStateToProps = store => ({
    event: store.event,
});

const mapDispatchToProps = dispatch => ({
    getTemperature: () => dispatch(getTemperature()),
    getTimeOfday: () => dispatch(getTimeOfday()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorldEventContainer);
