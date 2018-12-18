import React from "react";
import PropTypes from "prop-types";
import LocationTemplate from "../LocationTypes/LocationTemplate";
import GrassSvg from "../LocationTypes/svg/grass.svg";
import LakeSvg from "../LocationTypes/svg/lake.svg";
import RockSvg from "../LocationTypes/svg/rock.svg";

export default class Location extends React.PureComponent {
    renderTemplate = (resource) => {
        const { id } = this.props;

        switch (resource) {
        case "grass": {
            return (
                <LocationTemplate path={GrassSvg} key={`grass_${id}`} />
            );
        }
        case "water": {
            return (
                <LocationTemplate path={LakeSvg} key={`water_${id}`} />
            );
        }
        case "rock": {
            return (
                <LocationTemplate path={RockSvg} key={`rock_${id}`} />
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
                <div style={{ position: "absolute", top: `${y * 50}px`, left: `${x * 10}px` }}>
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
