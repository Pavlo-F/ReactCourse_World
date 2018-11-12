import React from "react";
import PropTypes from "prop-types";
import Grass from "./LocationTypes/Grass";
import Rock from "./LocationTypes/Rock";
import Lake from "./LocationTypes/Lake";

export default class Location extends React.PureComponent {
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
        

        if (color && resource) {
            console.log("render Location");
            return (
                <div style={{ position: "absolute", top: `${cell.y * 50}px`, left: `${cell.x * 80}px` }}>
                    <div classID="LocationId">{this.renderTemplate(resource)}</div>
                </div>
            );
        } else {
            return null;
        }
    }
}

Location.propTypes = {
    color: PropTypes.string,
    cell: PropTypes.object,
};
