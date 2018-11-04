import React from "react";
import { connect } from "react-redux";
import Location from "./Location";
//import { getTemperature, getTimeOfday } from "../actions/NPCActions";

class LocationContainer extends React.PureComponent {
    render() {
        return (
            <Location {...this.props}/>
        );
    }
}

const mapStateToProps = store => ({
    // npc: store.npc,
});

const mapDispatchToProps = dispatch => ({
    // getTemperature: () => dispatch(getTemperature()),
    // getTimeOfday: () => dispatch(getTimeOfday()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LocationContainer);
