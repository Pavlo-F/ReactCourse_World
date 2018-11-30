import React from "react";
import PropTypes from "prop-types";
import Grass from "../LocationTypes/Grass";
import Rock from "../LocationTypes/Rock";
import Lake from "../LocationTypes/Lake";

export default class Location extends React.PureComponent {
    renderTemplate = (resource) => {
        const time = Date.now();

        switch (resource) {
        case "grass": {
            return (
                <Grass {...this.props} key={`grass_${time}`} />
            );
        }
        case "water": {
            return (
                <Lake {...this.props} key={`water_${time}`} />
            );
        }
        case "rock": {
            return (
                <Rock {...this.props} key={`rock_${time}`} />
            );
        }
        default: return "unknown type";
        }
    }

    render() {
        const {
            color,
            x,
            y,
            resource,
        } = this.props;

        console.log("render Location");

        if (color && resource) {
            return (
                <div style={{ position: "absolute", top: `${y * 50}px`, left: `${x * 50}px` }}>
                    <div classID="LocationId">{this.renderTemplate(resource)}</div>
                </div>
            );
        }

        return null;
    }
}

Location.propTypes = {
    color: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    resource: PropTypes.string,
};

Location.defaultProps = {
    color: "red",
    x: 0,
    y: 0,
    resource: "",
};
