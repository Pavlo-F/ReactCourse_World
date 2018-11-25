import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grass from "./LocationTypes/Grass";
import Rock from "./LocationTypes/Rock";
import Lake from "./LocationTypes/Lake";

class Location extends React.PureComponent {
    state = {
        resource: 100,
    }

    renderTemplate = (resource) => {
        const time = Date.now();

        switch (resource) {
        case "grass": {
            return (
                <Grass {...this.props} key={`grass_${time}`}/>
            );
        }
        case "water": {
            return (
                <Lake {...this.props} key={`water_${time}`}/>
            );
        }
        case "rock": {
            return (
                <Rock {...this.props} key={`rock_${time}`}/>
            );
        }
        default: return "unknown type";
        }
    }

    render() {
        const { color, cell, resource } = this.props;
        console.log("render Location");

        if (color && resource) {
            return (
                <div style={{ position: "absolute", top: `${cell.y * 50}px`, left: `${cell.x * 50}px` }}>
                    <div classID="LocationId">{this.renderTemplate(resource)}</div>
                </div>
            );
        }

        return null;
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
)(Location);

Location.propTypes = {
    color: PropTypes.string,
    cell: PropTypes.object,
};
