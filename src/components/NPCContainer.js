import React from "react";
import { connect } from "react-redux";
import NPC from "./NPC";
//import { getTemperature, getTimeOfday } from "../actions/NPCActions";

class NPCContainer extends React.PureComponent {
    render() {
        return (
            <NPC {...this.props}/>
        );
    }
}

const mapStateToProps = store => ({
    npc: store.npc,
});

const mapDispatchToProps = dispatch => ({
    // getTemperature: () => dispatch(getTemperature()),
    // getTimeOfday: () => dispatch(getTimeOfday()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NPCContainer);
